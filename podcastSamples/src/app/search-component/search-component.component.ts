import { SearchServiceService } from './search-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {

  shservice: SearchServiceService;
  ngOnInit() {
  }

  searchArtist( artistName ) {
  }

   constructor(aux: SearchServiceService) {
      this.shservice = aux;
    }

}
