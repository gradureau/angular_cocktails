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

  $recipes: Observable<Recipe[]>;
  isLoading: boolean;
  constructor(private recipeService: RecipeService) {
    this.isLoading = true;
   }

  ngOnInit() {
    this.loadRecipes();
  }

  private loadRecipes() {
    this.$recipes = this.recipeService.getRecipes();
    this.isLoading = false;
  }

}
