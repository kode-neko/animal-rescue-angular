import { LoadingService } from './../../../../core/services/loading.service';
import { AnimalService } from './../../../../core/services/animal.service';
import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/core/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html', 
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  animalList: Animal[] = [];
  searchField = "";
  seeMore = true;
  limit = 4;
  offset= 0;

  constructor(private animalService: AnimalService, private router: Router, private loadingService: LoadingService) {
  }

  ngOnInit(): void {
      this.getAnimalList(this.limit, this.offset, this.searchField);
  }

  getAnimalList(limit: number, offset: number, search: string): void {
    this.loadingService.setLoading(true);
    this.animalService.getAnimalList(limit, offset, search).subscribe(animalList => {
      this.seeMore = animalList.length !== 0;
      this.animalList = [...this.animalList, ...animalList];
      this.loadingService.setLoading(false);
    })
  }

  parseSearchTerm(): void {
    this.searchField = this.searchField.trim();
  }

  handleSeeMore(): void {
    this.offset += this.limit;
    this.getAnimalList(this.limit, this.offset, this.searchField);
  }

  handleSearch(): void {
    this.parseSearchTerm();
    this.seeMore = true;
    this.limit = 2;
    this.offset= 0;
    this.animalList = [];
    this.getAnimalList(this.limit, this.offset, this.searchField);
  }

  handleEdit(): void {

  }
}
