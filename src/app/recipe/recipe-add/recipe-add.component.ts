import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from '../ingredient.model';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss']
})
export class RecipeAddComponent implements OnInit {

  recipe: Recipe;

  constructor(private recipeService: RecipeService) {
    this.recipe = new Recipe();
  }

  ngOnInit() {
  }

  submit() {
    const ingredient = new Ingredient();
    ingredient.ingredientId = 1;
    this.recipe.ingredients = [ ingredient ];
    this.recipeService.createRecipe(this.recipe).subscribe();
  }

}
