import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Sex, ColorEyes, Species, ColorFur, Size, SizeFur } from 'src/app/core/model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  animal = this.fb.group({
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
  });

  colorList: ColorFur[] = [];
  eyesList: ColorEyes[] = [];
  sizeList: Size[] = [];
  furList: SizeFur[] = [];

  constructor(private fb: FormBuilder){
    this.initLists();
    this.animal.valueChanges.subscribe(val => console.log(val))
  }

  initLists() {
    this.colorList = Object.values(ColorFur).map(value => value);
    this.eyesList = Object.values(ColorEyes).map(value => value);
    this.sizeList = Object.values(Size).map(value => value);
    this.furList = Object.values(SizeFur).map(value => value);
  }
}
