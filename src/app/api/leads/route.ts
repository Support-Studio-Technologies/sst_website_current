import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabaseClient';

// POST /api/leads
// Accepts lead form data and optional UTM tracking parameters.
// Writes to `leads` table, then asynchronously logs to `marketing_campaigns`.
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      first_name,
      last_name,
      email,
      phone,
      company_size,
      problem_summary,
      lead_source,
      consent_given,
      // UTM campaign trackers — optional, sourced from client query string forwarding
      utm_source,
      utm_medium,
      utm_campaign,
      referrer_url,
    } = body;

    // --- Input Validation ---
    if (!first_name || typeof first_name !== 'string' || first_name.trim().length === 0) {
      return NextResponse.json({ error: 'first_name is required.' }, { status: 400 });
    }
    if (!last_name || typeof last_name !== 'string' || last_name.trim().length === 0) {
      return NextResponse.json({ error: 'last_name is required.' }, { status: 400 });
    }
    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'A valid email address is required.' }, { status: 400 });
    }
    if (consent_given !== true) {
      return NextResponse.json({ error: 'User consent must be explicitly granted to process data.' }, { status: 400 });
    }

    // Use the Admin (privileged) client to bypass RLS INSERT restrictions
    const supabase = createAdminClient();

    // --- Generate client-side UUID for relational binding before DB round-trip ---
    const leadId = crypto.randomUUID();

    // --- Insert Lead Record ---
    const { error: leadError } = await supabase
      .from('leads')
      .insert({
        id: leadId,
        first_name: first_name.trim(),
        last_name: last_name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || null,
        company_size: company_size || null,
        problem_summary: problem_summary?.trim() || null,
        lead_source: lead_source || 'API',
        consent_given: true,
        status: 'New',
      });

    if (leadError) {
      console.error('[POST /api/leads] Lead insert failed:', leadError);

      // Translate specific Postgres constraint codes to human-readable UI messages
      if (leadError.code === '23514') {
        return NextResponse.json(
          { error: 'The provided email address format is invalid.', code: leadError.code },
          { status: 422 }
        );
      }
      return NextResponse.json(
        { error: 'Failed to register your request. Please try again later.', code: leadError.code },
        { status: 500 }
      );
    }

    // --- Log UTM Campaign Attribution (non-blocking: do not fail request if this step fails) ---
    if (utm_source || utm_medium || utm_campaign || referrer_url) {
      const { error: campaignError } = await supabase
        .from('marketing_campaigns')
        .insert({
          lead_id: leadId,
          utm_source: utm_source || null,
          utm_medium: utm_medium || null,
          utm_campaign: utm_campaign || null,
          referrer_url: referrer_url || null,
        });

      if (campaignError) {
        // Log but don't block the response — lead is already captured
        console.warn('[POST /api/leads] Campaign attribution logging failed (non-fatal):', campaignError);
      }
    }

    console.log(`[POST /api/leads] Successfully captured lead. ID: ${leadId}`);

    return NextResponse.json(
      { success: true, message: 'Lead captured successfully.', lead_id: leadId },
      { status: 201 }
    );

  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unexpected server error.';
    console.error('[POST /api/leads] Unhandled exception:', message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
