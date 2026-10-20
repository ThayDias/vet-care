import { Component, OnInit, inject } from '@angular/core';
import { SupabaseService } from './core/services/supabase';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Teste de conexão com Supabase</h1>

    <button (click)="testConnection()">
      Consultar tutores
    </button>

    <p>{{ message }}</p>

    <ul>
      @for (tutor of tutors; track tutor.id) {
        <li>{{ tutor.full_name }} - {{ tutor.email }}</li>
      }
    </ul>
  `,
})
export class App {
  private supabaseService = inject(SupabaseService);

  tutors: any[] = [];
  message = 'Clique no botão para testar a conexão.';

  async testConnection() {
    try {
      this.tutors = await this.supabaseService.getTutors();
      this.message = 'Conexão funcionando! Consulta realizada com sucesso.';
    } catch (error) {
      this.message = 'Erro na consulta. Verifique o console.';
      console.error(error);
    }
  }
}