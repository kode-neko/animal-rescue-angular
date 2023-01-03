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

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
      this.getAnimalList();
  }

  getAnimalList(): void {
    this.animalService.getAnimalList().subscribe(animalList => {
      this.animalList = animalList;
      console.log(this.animalList)
    })
  }
}
