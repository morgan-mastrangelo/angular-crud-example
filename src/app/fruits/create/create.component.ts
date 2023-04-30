import { Component } from '@angular/core';
import {Fruits} from "../fruits";
import {FruitsService} from "../fruits.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent {
  fruitForm: Fruits = {
    id: 0,
    name: '',
    quantity: 0,
    price: 0
  }

  constructor(private fruitService: FruitsService, private router: Router) {}

  ngOnInit(): void {}

  create(): void {
    this.fruitService.create(this.fruitForm)
      .subscribe({
        next:(data:Fruits[]): void => {
          this.router.navigate(["/fruits/home"])
        },
        error:(err): void => {
          console.log(err);
        }
      })
  }
}
