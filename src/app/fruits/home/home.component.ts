import { Component, OnInit } from '@angular/core';
import {Fruits} from "../fruits";
import {FruitsService} from "../fruits.service";

declare const bootstrap: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  allFruits: Fruits[] = [];
  deleteModal: any;
  idToDelete: number = 0;

  constructor(private fruitService: FruitsService) {}

  ngOnInit(): void {
    this.deleteModal = new bootstrap.Modal(
      document.getElementById('deleteModal')
    );

    this.get();
  }

  get(): void {
    this.fruitService.get().subscribe((data: Fruits[]): void => {
      this.allFruits = data;

      console.log(this.allFruits);
    })
  }

  openDeleteModal(id: number): void {
    this.idToDelete = id;
    this.deleteModal.show();
  }

  delete() {
    this.fruitService.delete(this.idToDelete).subscribe({
      next:(data) => {
        this.allFruits = this.allFruits.filter(_ => _.id !== this.idToDelete);
        this.deleteModal.hide;
      }
    })
  }
}
