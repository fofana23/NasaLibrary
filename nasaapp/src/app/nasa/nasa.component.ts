import { Component, OnInit } from '@angular/core';
import { NasaService } from '../nasa.service';

@Component({
  selector: 'app-nasa',
  templateUrl: './nasa.component.html',
  styleUrls: ['./nasa.component.css']
})
export class NasaComponent implements OnInit {

  searchTerm: string;
  displayWord: string;
  results: Array<any>;
  constructor(private service: NasaService) { }


  ngOnInit(): void {
  }

  seachWord(){
    this.service.getDefinition(this.searchTerm).subscribe(data => {
      this.results = data[0].shortdef;
      this.displayWord = this.searchTerm;
    });
  }
}
