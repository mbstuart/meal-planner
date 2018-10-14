import { Component, OnInit } from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap'
import { AddRecipeModalComponent } from 'src/app/add-recipe/add-recipe-modal/add-recipe-modal.component';

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
    const modal = this.ngbModal.open(AddRecipeModalComponent);

    modal.result.then(res => {
      // do something
    })
  }

}
