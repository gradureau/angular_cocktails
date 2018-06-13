import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit {
  @Input() recipe: Recipe;

  @Output() deleteRecipeEvent = new EventEmitter<Recipe>();

  expanded: boolean;
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
  }

  delete() {
    this.recipeService.deleteRecipe(this.recipe.id).subscribe( () => {
      this.deleteRecipeEvent.emit(this.recipe);
    });
  }

}
