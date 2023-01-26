import { I18knService } from './../../../../core/services/i18kn.service';
import { ModalComponent } from './../../../../shared/components/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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

  constructor(
    private animalService: AnimalService, 
    private router: Router, 
    private loadingService: LoadingService, 
    private snackBar: MatSnackBar, 
    public dialog: MatDialog,
    private i18kn: I18knService
    ) {
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
    this.limit = 4;
    this.offset= 0;
    this.animalList = [];
    this.getAnimalList(this.limit, this.offset, this.searchField);
  }

  handleModalDelete(id: string): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      data: {
        title: this.i18kn.t('modal.title.delete'), 
        msg: this.i18kn.t('modal.body.delete_male'), 
        btnList: [this.i18kn.t('labels.accept'), this.i18kn.t('labels.cancel')]
      },
    });

    dialogRef.afterClosed().subscribe(btn => {
      console.log(btn)
      if(btn === "accept")
        this.handleDelete(id);
    });
  }

  handleDelete(id: string): void {
    this.loadingService.setLoading(true)
    this.animalService.deleteAnimal(id).subscribe({
      next: (isDel) => {
        if(isDel) {
          this.snackBar.open(
            'deleted', 
            'close', 
            {duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'right'}
            )
          this.seeMore = true;
          this.limit = 4;
          this.offset= 0;
          this.animalList = [];
          this.getAnimalList(this.limit, this.offset, this.searchField);
        } else {
          this.snackBar.open(
            'error del', 
            'close', {duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'right'}
            )
          this.loadingService.setLoading(false)
        }
      },
      error: () => {
        this.snackBar.open('error del', 'close', {duration: 3000, verticalPosition: 'bottom', horizontalPosition: 'right'});
        this.loadingService.setLoading(false)
      }
    })
  }


  handleEdit(number: string): void {
    this.router.navigate(['/edit', number])
  }
}
