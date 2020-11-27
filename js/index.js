import {SearchModel} from '../js/model/searchModel.js';
import {dispalySearchView , getSearchInputValue} from '../js/view/searchView.js';
import {searchBtn} from './elements.js'
import {recipeDetailsModel} from '../js/model/recipeDetailsModel.js';
import {dispalyRecipeDetails} from '../js/view/recipeDetailsView.js';


let controlSearch = () =>
{  
    let query=getSearchInputValue();
    let search =new SearchModel(query);
    search.getSearchModelResult(dispalySearchView);
}
controlSearch();
searchBtn.addEventListener('click',controlSearch);

let controlRecipe = () =>
{  let recipeId = window.location.hash.replace('#' ,'');
    console.log(recipeId);
    let recipeDetails = new recipeDetailsModel(recipeId);
    recipeDetails.getRecipeDetails(dispalyRecipeDetails);
}

controlRecipe();
window.addEventListener('hashchange', controlRecipe)