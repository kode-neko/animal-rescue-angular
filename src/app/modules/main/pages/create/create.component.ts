import { LoadingService } from './../../../../core/services/loading.service';
import { Router } from '@angular/router';
import { AnimalService } from './../../../../core/services/animal.service';
import { Animal, Sex, ColorFur, ColorEyes, Species, Size, SizeFur } from 'src/app/core/model';
import { Component } from '@angular/core';
import { pages } from 'src/app/core/pages';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  breadcrums = [pages['home'], pages['create']]

  animal: Animal = {
    name: '',
    bday: new Date(),
    sex: Sex.MALE,
    desc: '',
    breed: '',
    color: ColorFur.BLACK,
    eyes: ColorEyes.BLUE,
    species: Species.CAT,
    size: Size.LARGE,
    sizeFur: SizeFur.LARGE,
  } 

  constructor(private animalService: AnimalService, private snackBar: MatSnackBar, private router: Router, private loadingService: LoadingService) {
  }

  handleForm(animal: Animal) {
    this.loadingService.setLoading(true);
    this.animalService.createAnimal(animal).subscribe({
      next: () => {
        this.snackBar.open('creado', 'close', {duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'right'});
        this.router.navigate(['/']);
      },
      error: () => {
        this.snackBar.open('hubo problemas', 'close', {duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'right'})
      },
      complete: () => this.loadingService.setLoading(false)
    });
  }
}
