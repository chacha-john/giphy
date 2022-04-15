import { Component, OnInit } from '@angular/core';
import { GiphyService } from 'src/app/services/giphy.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {

  artists:any[] = []

  constructor(public artistsService:GiphyService) { }

  ngOnInit(): void {
    this.artistsService.searchGifs().subscribe((res)=>{
      this.artists = res.data
      console.log(this.artists);
      
    })
  }

}
