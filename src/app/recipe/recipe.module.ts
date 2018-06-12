import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './recipe.component';
import { StrToArrayPipe } from './str-to-array.pipe';
import { RecipesComponent } from './recipes/recipes.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  declarations: [
    RecipeComponent,
    StrToArrayPipe,
    RecipesComponent,
    RecipeDetailComponent
  ],
  exports: [
  ]
})
export class RecipeModule { }
