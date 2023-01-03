import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Animal } from '../model';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(
    private http: HttpClient
  ) { }

  getAnimalList(limit = 10, offset = 0, search=""): Observable<Animal[]> {
    return this.http.post<Animal[]>('http://localhost:3001/animal/list', {limit, offset, search});
  }
}
