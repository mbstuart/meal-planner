import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './model/recipe';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  public recipe: Recipe;

  constructor(
    private activeModal: NgbActiveModal
  ) { }

  ngOnInit() {
    this.recipe = new Recipe();
  }

  confirm() {
    this.activeModal.close(this.recipe)
  }

}
