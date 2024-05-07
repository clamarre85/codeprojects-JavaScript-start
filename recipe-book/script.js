const API_KEY = "80583a452b2e4ffa973b826f3726db15";
const noOfRecipes = 10;

async function getRecipes() {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/random?number=${noOfRecipes}&apiKey=${API_KEY}`
  );
  const data = await response.json();
  // console.log(data.recipes);
  return data.recipes;
}

async function init() {
  const myallRecipes = await getRecipes();
  displyHtml(myallRecipes);
}

function displyHtml(allRecipes) {
  console.log(allRecipes);
  let myHtml = "<li></li>";
  const myULHTML = `<ul id="recipe-list" class="recipe-list">`;

  for (i = 0; i < allRecipes.length; i++) {
    myHtml += `  
        <li class="recipe-item">
          <img
            src="${allRecipes[i].image}"
            alt="recipe image"
          />
          <h2>${allRecipes[i].title}</h2>
          <p>
            <strong>Ingredients:</strong> 
            ${allRecipes[i].extendedIngredients
              .map((item) => item.original)
              .join(", ")}
          </p>
          <a
            href="${allRecipes[i].sourceUrl}"
            >View Recipe</a
          >
        </li>
      `;
  }

  //console.log(myHtml);

  //console.log(myULHTML + myHtml + "</ul>");

  document.getElementById("main-container").innerHTML =
    myULHTML + myHtml + "</ul>";
}

init();