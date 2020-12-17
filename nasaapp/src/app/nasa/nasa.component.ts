import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item';
import { NasaService } from '../services/nasa.service';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {

  searchTerm: string;
  displayWord: string;
  items: Array<Item>;

  constructor(private service: NasaService) { }


  ngOnInit(): void {
  }

  searchWord(){
    this.service.getDefinition(this.searchTerm).subscribe(data => {
      this.items = data.collection.items;
      this.displayWord = this.searchTerm;
    },
    error => console.log(error));
  }
}
