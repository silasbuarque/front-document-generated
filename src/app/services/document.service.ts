import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  generateCpf(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/document-generate/cpf`);
  }
}
