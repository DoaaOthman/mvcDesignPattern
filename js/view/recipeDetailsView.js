import { recipeDetailscontainer } from "../elements.js";

export function dispalyRecipeDetails(recipe) {
//    markUp = ``;
  let ingredients = recipe.ingredients;
  let markUp = `
    <h3 class="p-2"> ${recipe.title}</h3>
    <img src="${recipe.image_url}" class="w-100"/>
    <div class="recipe-ingredient">
    <ul class="fa-ul d-flex flex-wrap py-4">`;
    ingredients.map((ingredient) => {
    markUp += ` <li class="p-2 w-50"><span class="fa-li"><i class="fas fa-utensils"></i> </span>${ingredient}</li>
  `;
  });
  markUp += `</ul>
  </div>`;

recipeDetailscontainer.innerHTML = markUp;
}