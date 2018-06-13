import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from '../ingredient.model';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.scss']
})
export class RecipeAddComponent implements OnInit {

addForm = new FormGroup({
  name : new FormControl(
    '', Validators.required
  ),
  picture : new FormControl(),
  description : new FormControl()
});


  recipe: Recipe;

  constructor(private recipeService: RecipeService, private router: Router) {
    this.recipe = new Recipe();
  }

  ngOnInit() {
  }

  submit() {
    if (this.addForm.valid) {
      this.recipe = this.addForm.value;
      const ingredient = new Ingredient();
      ingredient.ingredientId = 1;
      this.recipe.ingredients = [ ingredient ];
      this.recipeService.createRecipe(this.recipe).subscribe();
      this.router.navigate(['/']);
    }
  }

}
