import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is imply a test', 'https://jamdownfoodie.com/wp-content/uploads/2021/05/IMG_3041-585x585.jpg'),
    new Recipe('Another Test Recipe', 'This is imply a test', 'https://jamdownfoodie.com/wp-content/uploads/2021/05/IMG_3041-585x585.jpg')
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }
}
