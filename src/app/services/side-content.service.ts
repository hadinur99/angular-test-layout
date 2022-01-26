import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideContentService {

  constructor(
    private http: HttpClient
  ) { 
    
   }

   getPostSideContentTop() {
     return this.http.get<any>('https://jsonplaceholder.typicode.com/users')
   }

   getPostSideContentBottom() {
     return this.http.get<any>('https://jsonplaceholder.typicode.com/photos')
   }
}
