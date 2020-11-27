export class SearchModel {
  constructor(searchTerm) {
    this.query = searchTerm;
  }
  getSearchModelResult(Callback) {
    let http = new XMLHttpRequest();
    if (this.query === "") {
      http.open("get", `https://forkify-api.herokuapp.com/api/search?q=pizza`);
    } else {
      http.open(
        "get",
        `https://forkify-api.herokuapp.com/api/search?q=${this.query}`
      );
    }
    http.send();
    http.addEventListener("readystatechange", function () {
      if (http.readyState == 4 && http.status == 200) {
        let recipes = JSON.parse(http.response).recipes;
        Callback(recipes);
      }
    });
  }
}
