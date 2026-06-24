export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

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
          company_size: '1-50' | '51-200' | '201-1000' | '1000+' | null;
          lead_source: string | null;
          problem_summary: string | null;
          status: 'New' | 'Contacted' | 'Qualified' | 'Lost' | 'Converted';
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
          company_size?: '1-50' | '51-200' | '201-1000' | '1000+' | null;
          lead_source?: string | null;
          problem_summary?: string | null;
          status?: 'New' | 'Contacted' | 'Qualified' | 'Lost' | 'Converted';
          consent_given?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database['public']['Tables']['leads']['Insert']>;
      };
      
      inquiries: {
        Row: {
          id: string; // UUID
          lead_id: string; // Foreign Key to leads
          inquiry_type: 'Contact Form' | 'Callback Request' | 'Direct Email' | 'Other';
          message: string | null;
          preferred_time: string | null;
          utm_metadata: Json;
          created_at: string;
        };
        Insert: {
          id?: string;
          lead_id: string;
          inquiry_type: 'Contact Form' | 'Callback Request' | 'Direct Email' | 'Other';
          message?: string | null;
          preferred_time?: string | null;
          utm_metadata?: Json;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['inquiries']['Insert']>;
      };

      services: {
        Row: {
          id: string; // UUID
          name: string;
          description: string | null;
          base_price: number | null;
          is_active: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description?: string | null;
          base_price?: number | null;
          is_active?: boolean;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['services']['Insert']>;
      };

      customers: {
        Row: {
          id: string; // UUID
          lead_id: string; // Relies on conversion from leads
          account_manager_id: string | null;
          contract_signed_at: string | null;
          renewal_date: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          lead_id: string;
          account_manager_id?: string | null;
          contract_signed_at?: string | null;
          renewal_date?: string | null;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['customers']['Insert']>;
      };

      marketing_campaigns: {
        Row: {
          id: string; // UUID
          lead_id: string | null;
          utm_source: string | null;
          utm_medium: string | null;
          utm_campaign: string | null;
          referrer_url: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          lead_id?: string | null;
          utm_source?: string | null;
          utm_medium?: string | null;
          utm_campaign?: string | null;
          referrer_url?: string | null;
          created_at?: string;
        };
        Update: Partial<Database['public']['Tables']['marketing_campaigns']['Insert']>;
      };
    };
  };
}
