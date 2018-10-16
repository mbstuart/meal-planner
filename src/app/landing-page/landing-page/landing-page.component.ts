import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddRecipeComponent } from 'src/app/add-recipe/add-recipe.component';


@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private ngbModal: NgbModal
  ) { }

  ngOnInit() {
  }

  openAddRecipeModal() {
    const modal = this.ngbModal.open(AddRecipeComponent);

    modal.result.then(res => {
      // do something
    })
  }

}
