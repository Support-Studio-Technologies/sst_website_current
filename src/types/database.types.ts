export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type IndustryVertical =
  | 'Oil & Gas'
  | 'Manufacturing'
  | 'Finance'
  | 'Healthcare'
  | 'Retail'
  | 'Construction'
  | 'Public Sector';

export type InquiryOrigin =
  | 'Contact Form'
  | 'Service Detail'
  | 'Callback Request'
  | 'Newsletter';

export interface Database {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string;
          first_name: string;
          last_name: string;
          email: string;
          phone: string | null;
          company: string | null;
          company_size: string | null;
          industry: IndustryVertical | null;
          problem_summary: string | null;
          status: 'New' | 'Contacted' | 'Qualified' | 'Converted' | 'Lost' | 'Rejected';
          lead_source: string;
          marketing_campaign_id: string | null;
          consent_given: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          first_name: string;
          last_name: string;
          email: string;
          phone?: string | null;
          company?: string | null;
          company_size?: string | null;
          industry?: IndustryVertical | null;
          problem_summary?: string | null;
          status?: 'New' | 'Contacted' | 'Qualified' | 'Converted' | 'Lost' | 'Rejected';
          lead_source: string;
          marketing_campaign_id?: string | null;
          consent_given?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database['public']['Tables']['leads']['Insert']>;
        Relationships: [];
      };
      inquiries: {
        Row: {
          id: string;
          lead_id: string;
          service_id: string | null;
          message: string;
          inquiry_type: InquiryOrigin;
          preferred_callback_time: string | null;
          utm_metadata: Json;
          created_at: string;
        };
        Insert: {
          id?: string;
          lead_id: string;
          service_id?: string | null;
          message: string;
          inquiry_type: InquiryOrigin;
          preferred_callback_time?: string | null;
          utm_metadata?: Json;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['inquiries']['Insert']>;
        Relationships: [];
      };
      services: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string;
          category: string;
          base_price: number | null;
          is_active: boolean;
          metadata: Json;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description: string;
          category: string;
          base_price?: number | null;
          is_active?: boolean;
          metadata?: Json;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database['public']['Tables']['services']['Insert']>;
        Relationships: [];
      };
      customers: {
        Row: {
          id: string;
          lead_id: string;
          company_name: string;
          industry: IndustryVertical;
          contact_email: string;
          contact_phone: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          lead_id: string;
          company_name: string;
          industry: IndustryVertical;
          contact_email: string;
          contact_phone?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database['public']['Tables']['customers']['Insert']>;
        Relationships: [];
      };
      marketing_campaigns: {
        Row: {
          id: string;
          campaign_name: string;
          source: string;
          medium: string | null;
          utm_term: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          campaign_name: string;
          source: string;
          medium?: string | null;
          utm_term?: string | null;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['marketing_campaigns']['Insert']>;
        Relationships: [];
      };
      blogs: {
        Row: {
          id: string;
          title: string;
          slug: string;
          cover_image: string;
          author: string;
          publish_date: string;
          sections: Json;
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          slug: string;
          cover_image: string;
          author: string;
          publish_date?: string;
          sections?: Json;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['blogs']['Insert']>;
        Relationships: [];
      };
    };
    // Required by @supabase/supabase-js v2 GenericSchema constraint:
    // GenericSchema = { Tables: Record<string, GenericTable>; Views: Record<string, GenericView>; Functions: Record<string, GenericFunction> }
    Views: Record<string, never>;
    Functions: Record<string, never>;
  };
}
