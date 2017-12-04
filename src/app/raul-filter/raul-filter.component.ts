import { Component, OnInit } from '@angular/core';

import { raulArray } from "./raul-array";

@Component({
  selector: 'app-raul-filter',
  templateUrl: './raul-filter.component.html',
  styleUrls: ['./raul-filter.component.css']
})
export class RaulFilterComponent implements OnInit {

  listOfRauls: any[] = raulArray;
  
  raulSearch: string = "";

  constructor() { }

  ngOnInit() {
  }

}
