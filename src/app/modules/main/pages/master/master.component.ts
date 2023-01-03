import { AnimalService } from './../../../../core/services/animal.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/core/model';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html', 
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  animalList: Animal[] = [];
  seeMore = true;
  limit = 2;
  offset= 0;
  search = "";

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
      this.getAnimalList(this.limit, this.offset, this.search);
  }

  getAnimalList(limit: number, offset: number, search: string): void {
    this.animalService.getAnimalList(limit, offset, search).subscribe(animalList => {
      this.seeMore = animalList.length !== 0;
      this.animalList = [...this.animalList, ...animalList]
    })
  }

  handleSeeMore(): void {
    this.offset += this.limit;
    this.getAnimalList(this.limit, this.offset, this.search);
  }
}
