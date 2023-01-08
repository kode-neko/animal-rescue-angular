import { LoadingService } from './../../../../core/services/loading.service';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AnimalService } from './../../../../core/services/animal.service';
import { pages } from 'src/app/core/pages';
import { Animal, Sex, ColorFur, ColorEyes, Species, Size, SizeFur } from 'src/app/core/model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  breadcrums = [pages['home'], pages['edit']]
  id = '';
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

  constructor(private animalService: AnimalService, private snackBar: MatSnackBar, private route: ActivatedRoute, private router: Router, private loadingService: LoadingService) {
    this.getAnimalToEdit();
  }

  getAnimalToEdit() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if(idParam) {
      this.loadingService.setLoading(true);
      this.animalService.getAnimal(idParam).subscribe({
        next: (result) => {
          const {id, ...rest} = result;
          this.id = id as string;
          this.animal = rest;
        }, 
        error: () => {
          this.snackBar.open('error', 'close', {duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'right'})
          this.router.navigate(['/'])
        },
        complete: () => this.loadingService.setLoading(false)
      })
    } else {
      this.router.navigate(['/'])
    }
  }

  handleForm(animal: Animal) {
    this.loadingService.setLoading(true);
    this.animalService.updateAnimal({id: this.id, ...animal}).subscribe({
      next: (animal: Animal) => {
        this.snackBar.open('actualizado', 'close', {duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'right'});
        this.router.navigate(['/']);
        console.table(animal)
      },
      error: () => {
        this.snackBar.open('hubo problemas', 'close', {duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'right'})
      },
      complete: () => this.loadingService.setLoading(false)
    });
  }
}
