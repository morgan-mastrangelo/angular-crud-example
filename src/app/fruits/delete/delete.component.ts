import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FruitsService} from "../fruits.service";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.sass']
})
export class DeleteComponent {
  constructor(
    private routes: ActivatedRoute,
    private router: Router,
    private fruitService: FruitsService
  ) {}
}
