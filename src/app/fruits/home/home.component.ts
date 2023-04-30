import { Component, OnInit } from '@angular/core';
import {Fruits} from "../fruits";
import {FruitsService} from "../fruits.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  allFruits: Fruits[] = [];

  constructor(private fruitService: FruitsService) {}

  ngOnInit(): void {
    this.get();
  }

  get(): void {
    this.fruitService.get().subscribe((data: Fruits[]): void => {
      this.allFruits = data;
    })
  }
}
