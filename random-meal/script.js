document.querySelector('.button-primary').addEventListener('click', () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        let myMealData = data.meals[0];
  
        let myMeal = `
          <div class="row">
            <div class="columns five">
              <img
                src=${myMealData.strMealThumb}
                alt="Meal Image"
              />
              <p><strong>Category:</strong> ${myMealData.strCategory}</p>
              <p><strong>Area:</strong> ${myMealData.strArea}</p>
              <p><strong>Tags:</strong> ${myMealData.strTags}</p>
              <h5>Ingredients:</h5>
              <ul>
                ${getIngredientsList(myMealData)}
              </ul>
            </div>
            <div class="columns seven">
              <h4>${myMealData.strMeal}</h4>
              <p>${myMealData.strInstructions}</p>
            </div>
          </div>
  
          <div class="row">
            <h5>Video Recipe</h5>
            <div class="videoWrapper">
              <iframe
                width="420"
                height="315"
                src="https://www.youtube.com/embed/${myMealData.strYoutube.slice(-11)}"
              >
              </iframe>
            </div>
          </div>`;
  
        document.getElementById("meal").innerHTML = myMeal;
      })
      .catch((error) =>
        console.error("Error fetching json data, please check your URL", error)
      );
  });
  
  function getIngredientsList(mealData) {
    let ingredientsList = '';
    for (let i = 1; i <= 20; i++) {
      const ingredient = mealData[`strIngredient${i}`];
      if (ingredient) {
        const measure = mealData[`strMeasure${i}`];
        ingredientsList += `<li>${measure ? measure.trim() + ' ' : ''}${ingredient}</li>`;
      } else {
        break;
      }
    }
    return ingredientsList;
  }