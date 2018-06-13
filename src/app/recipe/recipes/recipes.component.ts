import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  recipes: Recipe[];
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.loadRecipes();
  }

  private loadRecipes() {
    this.recipeService.getRecipes().subscribe(recipes => this.recipes = recipes);
  }

  removeRecipe(recipe: Recipe) {
    const index = this.recipes.indexOf(recipe);
    this.recipes.splice(index, 1);
  }

}
