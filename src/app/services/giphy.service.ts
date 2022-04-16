import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GiphyService {



  constructor(private http:HttpClient) { }

  trendingGifs():Observable<any>{
    return this.http.get<any>(`${environment.trending}?api_key=${environment.api_key}&limit=10`)
      
  }

  searchGifs(term:string):Observable<any>{
    return this.http.get<any>(`${environment.search}?api_key=${environment.api_key}&q=${term}&limit=10&lang=en`)
  }

}
