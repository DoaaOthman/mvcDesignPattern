import {
  searchResultContainer,
  searchInput,
  // recipeImage,
} from "../elements.js";
export let getSearchInputValue = () => searchInput.value;
export function dispalySearchView(recipes) {
  let markUp = ``;
  let recipeMainImage = ``;
  recipes.map((recipe) => {
    markUp += `
            <a href="#${recipe.recipe_id}">
              <div class="media py-3">
                  <img src="${recipe.image_url}" class="align-self-center rounded-circle mr-3" width="50" height="50" alt="${recipe.publisher}"/>
                  <div class="media-body">
                      <h6 class=mt-0>${recipe.title}</h6>
                      <p>${recipe.publisher}</p>
                  </div>
              </div>
            </a>
            `;
    recipeMainImage = `<img src="${recipe.image_url}" class="mr-3 w-100" alt="${recipe.publisher}"/>`;
  });
  searchResultContainer.innerHTML = markUp;
  
  // recipeImage.innerHTML = recipeMainImage;
}
