import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AddRecipeModalComponent } from './add-recipe/add-recipe-modal/add-recipe-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AddRecipeComponent,
    AddRecipeModalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
