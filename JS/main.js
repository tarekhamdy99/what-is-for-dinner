import { recipes } from "./data.js";
window.getRecipe = getRecipe;
window.recipes = recipes;

//^ Main Variables

var image = document.getElementById("recipe-image");
var rate = document.getElementById("review-rate");
var count = document.getElementById("review-count");
var prepTime = document.getElementById("prep-time");
var cookTime = document.getElementById("cook-time");
var servingCount = document.getElementById("serving");
var levelDifficulty = document.getElementById("recipe-level");
var category = document.getElementById("recipe-type");
var recipeName = document.getElementById("title");
var recipeCategory = document.getElementById("desc");
var ingredientList = document.getElementById("ingredients-list");
var instructionsList = document.getElementById("instructions-list");
var caloriesValue = document.getElementById("calories-value");
var proteinValue = document.getElementById("protein-value");
var carbohydratesValue = document.getElementById("carbohydrates-value");
var fatValue = document.getElementById("fat-value");
var fiberValue = document.getElementById("fiber-value");
var sodiumValue = document.getElementById("sodium-value");
var tips = document.getElementById("tips-list");
var btnChange = document.getElementById("change-btn");
var btnIcon = document.querySelector("#change-btn i");

//& End Main Variables

//^ Get Recipe Function

function getRecipe(recipe) {
  //^ Main data
  image.src = recipe.image;
  rate.innerHTML = recipe.reviewRate;
  count.innerHTML = `(${recipe.reviewCount} reviews)`;
  prepTime.innerHTML = `${recipe.prepTime} min`;
  cookTime.innerHTML = `${recipe.cookTime} min`;
  servingCount.innerHTML = `${recipe.servings} people`;
  recipeName.innerHTML = recipe.title;
  recipeCategory.innerHTML = recipe.description;
  levelDifficulty.innerHTML = recipe.level;
  category.innerHTML = recipe.type;

  //^ Ingredients

  ingredientList.innerHTML = "";
  for (let i = 0; i < recipe.ingredients.length; i++) {
    var num = i + 1;
    ingredientList.innerHTML += `
                        <li class="d-flex justify-content-start align-items-center gap-3">
                      <p id="ingredient-num"
                        class="ingredient-num small fw-bold d-flex justify-content-center align-items-center text-white">
                        ${num}
                        </p>
                      <p id="ingredient-details" class="ingredient-details text-dark text-opacity-75 fs-6"> ${recipe.ingredients[i]} </p>
                    </li>
    `;
  }

  //^ Instructions

  instructionsList.innerHTML = "";
  for (let i = 0; i < recipe.instructions.length; i++) {
    var num = i + 1;
    instructionsList.innerHTML += `
                                          <li class="d-flex justify-content-start align-items-center gap-3">
                      <p id="instructions-num"
                        class="instructions-num fs-4 fw-bolder d-flex justify-content-center align-items-center text-white">
                        ${num}</p>
                      <p id="instructions-details" class="text-dark text-opacity-75 fs-6">${recipe.instructions[i]}</p>
                    </li>
    `;
  }

  //^ Nutrition
  caloriesValue.innerHTML = `${recipe.nutrition.caloriesValue} Kcal`;
  proteinValue.innerHTML = `${recipe.nutrition.proteinValue}g`;
  carbohydratesValue.innerHTML = `${recipe.nutrition.carbohydratesValue}g`;
  fatValue.innerHTML = `${recipe.nutrition.fatValue}g`;
  fiberValue.innerHTML = `${recipe.nutrition.fiberValue}g`;
  sodiumValue.innerHTML = `${recipe.nutrition.sodium}mg`;

  //^ Chief Tips

  tips.innerHTML = "";
  for (let i = 0; i < recipe.chiefTips.length; i++) {
    tips.innerHTML += `
                  <div
                    class="tip-note mb-3 bg-opacity-25 p-3 rounded-3 border-start border-4 border-warning d-flex justify-content-start align-items-center">
                    <div class="tip-icon">
                      <i class="fas fa-circle-check fs-4 me-3"></i>
                    </div>
                    <div class="note-message">
                      <p id="note-message" class="text-dark text-opacity-75 m-0">
                      ${recipe.chiefTips[i]}
                      </p>
                    </div>
                  </div>
    `;
  }

  //^ Alert Message
  var cooktimeAlert = document.getElementById("prep-alert");
  if (recipe.cookTime > 45) {
    cooktimeAlert.classList.remove("opacity-0");
  } else {
    cooktimeAlert.classList.add("opacity-0");
  }

  //^ Back Ground color Of Meal Type Exchange

  var level = levelDifficulty.innerHTML.trim().toLowerCase();
  switch (level) {
    case "easy":
    case "intermediate":
      levelDifficulty.style.backgroundColor = "#dbfce7";
      levelDifficulty.style.color = "#008236";
      break;
    case "medium":
      levelDifficulty.style.backgroundColor = "#fffaec";
      levelDifficulty.style.color = "#ff6900";
      break;
    case "hard":
      levelDifficulty.style.backgroundColor = "#fef2f2";
      levelDifficulty.style.color = "#fb2c36";
      break;
    default:
      levelDifficulty.style.backgroundColor = "#f3f4f6";
      levelDifficulty.style.color = "#1f2937";
  }

  //^ Back Ground color Of Meal Type Exchange

  var type = category.innerHTML.trim().toLowerCase();
  switch (type) {
    case "vegetarian":
    case "salad":
      category.style.backgroundColor = "#dbfce7";
      category.style.color = "#008236";
      break;
    case "seafood":
    case "intermediate":
      category.style.backgroundColor = "#dbeafe";
      category.style.color = "#1447e6";
      break;
    case "meat":
    case "no":
    case "meat":
      category.style.backgroundColor = "#fffaec";
      category.style.color = "#ff6900";
      break;
    case "hard":
      category.style.backgroundColor = "#fef2f2";
      category.style.color = "#fb2c36";
      break;
    default:
      category.style.backgroundColor = "#f3f4f6";
      category.style.color = "#1f2937";
  }

  //^ Default Photo

  image.onerror = function () {
    image.src = "./Assets/Images/not_foundimage.png";
  };
}

//& End Get Recipe Function

//^ Button Functions

function onClickchange() {
  getRecipe(recipes[randomIndex]);
}

//& End Button Functions

//^ Animation Button Icon

btnChange.addEventListener("mouseenter", () => {
  btnIcon.classList.add("fa-spin");
});

btnChange.addEventListener("mouseleave", () => {
  btnIcon.classList.remove("fa-spin");
});

//& Animation Button Icon

//^ Loading First Recipe after Page Loadion
var randomIndex = Math.floor(Math.random() * recipes.length);
getRecipe(recipes[randomIndex]);

//& End Loading First Recipe after Page Loadion
