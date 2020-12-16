import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private http: HttpClient) { }

  public getDefinition(word: string): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}${word}?key=${environment.apiKey}`);
  }
}
