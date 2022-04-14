import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Trends } from 'src/app/classes/trends';
import { TrendsService } from 'src/app/services/trends.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  gifs:any = []

  constructor(public trendsService:TrendsService) {
    // trendsService.trendingGifs()
    console.log(trendsService.trendingGifs());
    
    
  }




  ngOnInit(): void {    
    // this.trendsService.trendingGifs().subscribe(
    //   (res)=>{this.gif = res},
    //   (err)=>{console.log(err);
    //   }
    // )
  }

}
