import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Recipe;
  expanded: boolean;
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
  }

  delete() {
    this.recipeService.deleteRecipe(this.recipe.id);
  }

}
