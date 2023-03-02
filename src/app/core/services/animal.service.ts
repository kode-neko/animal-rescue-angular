import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Animal } from '../model';
import { environment } from '../../../../environments/environment';

const {
  API_PROTOCOL,
  API_SERVER,
  API_PORT,
} = environment;
const url = `${API_PROTOCOL}${API_SERVER}:${API_PORT}/`;

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  constructor(
    private http: HttpClient,
  ) { }

  getAnimal(id:string): Observable<Animal> {
    return this.http.get<Animal>(`${url}animal` + id);
  }

  getAnimalList(limit = 10, offset = 0, search=""): Observable<Animal[]> {
    return this.http.post<Animal[]>(`${url}animal/list`, {limit, offset, search});
  }

  createAnimal(animal: Animal): Observable<Animal> {
    return this.http.post<Animal>(`${url}animal`, animal);
  }

  updateAnimal(animal: Animal): Observable<Animal> {
    return this.http.put<Animal>(`${url}animal`, animal);
  }

  deleteAnimal(id: string): Observable<boolean> {
    return this.http.delete<boolean>(`${url}animal` + id);
  }
}
