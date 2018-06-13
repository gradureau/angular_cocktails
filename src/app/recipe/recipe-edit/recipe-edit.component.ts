import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Ingredient } from '../ingredient.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.scss']
})
export class RecipeEditComponent implements OnInit {

  editForm: FormGroup;

  success = false;

  recipe: Recipe;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.recipeService.getRecipe(
      this.route.snapshot.paramMap.get('id')
    ).subscribe(recipe => {
      this.recipe = recipe;
      this.editForm = new FormGroup({
        name : new FormControl(
          recipe.name, Validators.required
        ),
        picture : new FormControl( recipe.picture ),
        description : new FormControl( recipe.description )
        });
    });
  }

  submit() {
    if (this.editForm.valid) {
      this.recipe = { ...this.recipe, ...this.editForm.value };
      console.log(this.recipe);
      this.recipeService.patchRecipe(this.recipe).subscribe();
      this.success = true;
    } else {
      this.success = false;
    }
  }

}
