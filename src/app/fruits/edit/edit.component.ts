import {Component, OnInit} from '@angular/core';
import {Fruits} from "../fruits";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FruitsService} from "../fruits.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {
  fruitForm: Fruits = {
    id: 0,
    name: '',
    quantity: 0,
    price: 0
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fruitService: FruitsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap): void => {
      let id: number = Number(param.get('id'));
      this.getById(id);
    });
  }

  getById(id: number): void {
    this.fruitService.getById(id).subscribe((data: Fruits): void => {
      this.fruitForm = data;
    });
  }

  update() {
    this.fruitService.update(this.fruitForm).subscribe({
      next:(data): void => {
        this.router.navigate(['/fruits/home']);
      },
      error:(err): void => {
        console.log(err);
      }
    })
  }
}
