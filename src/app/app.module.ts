import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddRecipeModalComponent } from './add-recipe/add-recipe-modal/add-recipe-modal.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AddRecipeComponent,
    AddRecipeModalComponent,
    NgbModule
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
