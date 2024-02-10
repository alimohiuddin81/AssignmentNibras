import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {albumsDTO, userPhotosDTO, usersDTO}from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<usersDTO[]> {
    return this.http.get<usersDTO[]>(`${this.apiUrl}/users`);
  }

  getAlbums(id: number): Observable<albumsDTO[]> {
    return this.http.get<albumsDTO[]>(`${this.apiUrl}/users/${id}`+'/albums');
  }

  getPhoto(id: number): Observable<userPhotosDTO[]> {
    return this.http.get<userPhotosDTO[]>(`${this.apiUrl}/albums/${id}`+'/photos');
  }

  getUser(id: number): Observable<usersDTO> {
    return this.http.get<usersDTO>(`${this.apiUrl}/users/${id}`);
  }
}
