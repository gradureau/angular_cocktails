import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './recipe.component';
import { StrToArrayPipe } from './str-to-array.pipe';
import { RecipesComponent } from './recipes/recipes.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';

@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  declarations: [
    RecipeComponent,
    StrToArrayPipe,
    RecipesComponent
  ],
  exports: [
  ]
})
export class RecipeModule { }
