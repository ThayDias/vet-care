import { Injectable } from '@angular/core';
import { createClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  private supabase = createClient(
    environment.supabaseUrl,
    environment.supabaseKey
  );

  async getTutors() {
    const { data, error } = await this.supabase
      .from('tutors')
      .select('*');

    if (error) {
      console.error('Erro ao consultar tutores:', error);
      throw error;
    }

    console.log('Tutores encontrados:', data);
    return data;
  }
}