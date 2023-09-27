import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { Cocktail } from '../cocktail-model';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
})
export class CocktailListComponent implements OnInit {
  cocktails: Cocktail[] = [];

  constructor(public CcocktailService: CocktailService) {}

  ngOnInit() {
    this.cocktails = this.CcocktailService.getCocktails();
  }
}
