import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  $recipes: Recipe[];
  isLoading: boolean;
  constructor(private recipeService: RecipeService) {
    this.isLoading = true;
   }

  ngOnInit() {
    this.loadRecipes();
  }

  private loadRecipes() {
    this.recipeService.getRecipes().subscribe(recipes => {
      this.$recipes = recipes;
    });
    this.isLoading = false;
  }

}
