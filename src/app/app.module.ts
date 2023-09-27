import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CocktailListComponent } from './cocktail-list/cocktail-list.component';
import { CocktailService } from './cocktail.service';

@NgModule({
  declarations: [AppComponent, CocktailListComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [CocktailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
