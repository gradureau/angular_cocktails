import { Component } from '@angular/core';
import {RECIPES} from './recipe/recipes.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'RG\'s app';
  recipes = RECIPES;
}
