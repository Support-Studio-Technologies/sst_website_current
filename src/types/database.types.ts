export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type IndustryVertical = 'Oil & Gas' | 'Manufacturing' | 'Finance' | 'Healthcare' | 'Retail' | 'Construction' | 'Public Sector';

export type InquiryOrigin = 'Contact Form' | 'Service Detail' | 'Callback Request' | 'Newsletter';

export interface Database {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string; // UUID
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
      };
    };
  };
}
