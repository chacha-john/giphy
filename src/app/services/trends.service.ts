import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class TrendsService {

  

  constructor(private http:HttpClient) { }

  trendingGifs(){
    return this.http.get(`${environment.url}?api_key=%${environment.api_key}&limit=10`)
  }
}
