import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TrendsService {



  constructor(private http:HttpClient) { }

  trendingGifs(){
    this.http.get<any>(`${environment.url}?api_key=${environment.api_key}&limit=10`).subscribe(res=>{
      console.log(res.data);
      return(res.data)
      
      
    },(err)=>{return err;
    })
  }
}
