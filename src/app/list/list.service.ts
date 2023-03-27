import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { List } from './list';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  readonly url='https://jsonplaceholder.typicode.com/photos';

  constructor(private http:HttpClient) { }
  getList():Observable<List[]>{
    return this.http.get<List[]>(this.url);
  }
}
