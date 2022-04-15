import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Trends } from 'src/app/classes/trends';
import { GiphyService } from 'src/app/services/giphy.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  gifs:any = []

  constructor(private trendsService:GiphyService) { }
    
  ngOnInit(): void { 
    this.trendsService.trendingGifs().subscribe((res)=>{
      this.gifs = res.data;
    });
    
    
       
    
  }

}
