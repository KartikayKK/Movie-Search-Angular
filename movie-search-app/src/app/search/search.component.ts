import { Component, OnInit } from '@angular/core';
import {data} from '../movie-data'
import{Movie} from '../Movie'

@Component({
  selector: 'search-movie',
  templateUrl: './search.component.html',
  styles: [
  ],
})
export class SearchComponent implements OnInit {
  searchResults:Movie[]=data
  constructor() { }

  ngOnInit(): void {
  }

}
