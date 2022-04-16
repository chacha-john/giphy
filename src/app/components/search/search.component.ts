import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GiphyService } from 'src/app/services/giphy.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  gifs: any =[]
  constructor(private searchService:GiphyService) { }

  onSubmit(term:NgForm){
    let searched = term.value.search
    this.searchService.searchGifs(searched).subscribe((res)=>{
      this.gifs = res.data
    })
    
  }

  ngOnInit(): void {
  }

}
