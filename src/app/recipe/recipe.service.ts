import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private _baseUrl = 'http://10.0.1.55:8080/api/v1/recipes';

  constructor(private httpClient: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(this._baseUrl);
  }
}
