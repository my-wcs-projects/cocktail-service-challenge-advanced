import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cocktail } from './cocktail-model';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor(public http: HttpClient) {}

  public getCocktails(): any {
    return this.http.get<Cocktail[]>('assets/cocktails.json');
  }
}
