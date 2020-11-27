export class recipeDetailsModel {
  constructor(id) {
    this.id = id;
  }
  getRecipeDetails(Callback) {
    let http = new XMLHttpRequest();
    if (this.id === "") {
    http.open(
      "get",`https://forkify-api.herokuapp.com/api/get?rId=47746`
    );
    }else{
        http.open(
            "get",`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`
          );
    }
    http.send();
    http.addEventListener("readystatechange", function () {
      if (http.readyState == 4 && http.status == 200) {
        let recipe= JSON.parse(http.response).recipe;
        Callback(recipe);
        console.log(recipe);
      }
    });
  }
}
