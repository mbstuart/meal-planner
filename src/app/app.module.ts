import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AddRecipeComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  entryComponents:[
    AddRecipeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
