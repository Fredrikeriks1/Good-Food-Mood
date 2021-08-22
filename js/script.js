function options(key) {
  return {
    method: "GET",
    url: "https://edamam-recipe-search.p.rapidapi.com/search",
    params: { q: key },
    headers: {
      "x-rapidapi-key": "ae05e9849cmsha1c956f414d96c3p1eed06jsn09bfa849d3a4",
      "x-rapidapi-host": "edamam-recipe-search.p.rapidapi.com",
    },
  };
}

async function show() {
  var responseData;
  var searchText = document.getElementById("search").value;
  await axios
    .request(options(searchText))
    .then(function (response) {
      console.log(response.data);
      responseData = response.data;
    })
    .catch(function (error) {
      console.error(error);
    });

  let tab = "";

  // Loop to access all rows
  for (let r of responseData?.hits) {
    console.log(r);
    tab += `<div class="container col-sm-4 panel panel-primary text-center"> 
    <h3 class="panel-heading">${r.recipe.label} </h3>

    <a href="${r.recipe.url}"><img src="${r.recipe.image}" class="img-responsive"  style="max width:100%;"/> </a>       
</div>`;
  }

  document.getElementById("recipe").innerHTML = tab;
}
