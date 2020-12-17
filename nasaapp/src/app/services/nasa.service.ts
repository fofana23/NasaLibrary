import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Nasa } from '../models/nasa';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private http: HttpClient) { }

  public getDefinition(word: string): Observable<Nasa> {
    return this.http.get<Nasa>(`${environment.baseUrl}${word}mars&page=1&media=image&yearStart=2010&yearEnd=2020`);
  }
}
