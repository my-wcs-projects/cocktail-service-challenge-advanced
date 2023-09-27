import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail-model';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  public cocktails: Cocktail[] = [
    {
      name: 'Mojito',
      price: 8.99,
      image:
        'https://www.sidechef.com/recipe/c8738a39-6d2b-4905-a8b7-ad0f0c80311b.jpg?d=1408x1120',
    },
    {
      name: 'Piña Colada',
      price: 7.99,
      image:
        'https://media.istockphoto.com/id/1310583811/fr/photo/pina-colada-cocktail-drink.jpg?s=612x612&w=0&k=20&c=BEVgb09sup0S_0qoigynsRk3Y1hSvsw4if8uk-tKhZM=',
    },
    {
      name: 'Margarita',
      price: 9.49,
      image:
        'https://media.istockphoto.com/id/1031534852/fr/photo/tequila-et-margaritas-lime.jpg?s=612x612&w=0&k=20&c=iAyEtlev-j8GjBoCKSuGcEKW7XTU7AugJwKzKwHidKg=',
    },
  ];

  public getCocktails(): Cocktail[] {
    return this.cocktails;
  }
}
