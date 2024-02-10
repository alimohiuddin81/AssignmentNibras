import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {blogsDTO} from './blogs.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getBlogs(): Observable<blogsDTO[]> {
    return this.http.get<blogsDTO[]>(`${this.apiUrl}/posts`);
  }

}
