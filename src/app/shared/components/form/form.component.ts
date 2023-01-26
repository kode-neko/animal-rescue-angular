import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Sex, ColorEyes, Species, ColorFur, Size, SizeFur, Animal } from 'src/app/core/model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  @Input() set animalEnter(values: Animal)  {
    this.animalForm.setValue({
      ...values, bday: values.bday ? new Date(values.bday) : new Date()
    })
  }

  @Output() animalResult = new EventEmitter<Animal>();

  animalForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(30)]],
    bday: new Date(),
    sex: [Sex.MALE, Validators.pattern(`^${Object.values(Sex).join('|')}$`)],
    desc: ['', [Validators.minLength(30), Validators.maxLength(500)]],
    breed: ['', [Validators.maxLength(50)]],
    color: [ColorFur.BLACK, Validators.pattern(`^(${Object.values(ColorFur).join('|')})$`)],
    eyes: [ColorEyes.BLUE, Validators.pattern(`^(${Object.values(ColorEyes).join('|')})$`)],
    species: [Species.CAT, Validators.pattern(`^(${Object.values(Species).join('|')})$`)],
    size: [Size.LARGE, Validators.pattern(`^(${Object.values(Size).join('|')})$`)],
    sizeFur: [SizeFur.LARGE, Validators.pattern(`^(${Object.values(SizeFur).join('|')})$`)],
  });

  colorList: ColorFur[] = [];
  eyesList: ColorEyes[] = [];
  sizeList: Size[] = [];
  furList: SizeFur[] = [];

  constructor(private fb: FormBuilder){
    this.initLists();
  }

  initLists() {
    this.colorList = Object.values(ColorFur).map(value => value);
    this.eyesList = Object.values(ColorEyes).map(value => value);
    this.sizeList = Object.values(Size).map(value => value);
    this.furList = Object.values(SizeFur).map(value => value);
  }

  handleForm() {
    if(this.animalForm.valid)
      this.animalResult.emit(this.animalForm.value as Animal); 
  }
}
