let arr = [];

async function getMealsByLetter(letter) {
  $("#loading").fadeIn(100);
  const theKey = "";
  let getResponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
  );
  let responseData = await getResponse.json();
  arr = [...responseData.meals];
  $("#loading").fadeOut(500);
  console.log(responseData.meals);
  $(".mealsContainer").empty();
  $(".contact").css("display", "none");

  for (i = 0; i < arr.length; i++) {
    $(".mealsContainer ").append(`<div class="col-md-3 detail my-3">
    <div class="d-flex rel">
      <img src=${arr[i].strMealThumb}
      alt="" class="w-100 rounded-2">
      <div class="shadow w-100 text-center rounded-2 d-flex justify-content-center align-items-center">
      <h2 class=" fw-bold">${arr[i].strMeal}</h2>
      </div>
    </div>
  </div>`);
  }
  divList = $(".mealsContainer ").children().toArray();
  $(".mealsContainer ")
    .children(this)
    .click(function () {
      let divIndx = $(".mealsContainer ").children().toArray().indexOf(this);
      $(".search").css("display", "none");
      $(".mealsContainer").html(`
      <div class="container p-5">
        <div class="row">
          <div class="col-md-4">
            <img class="w-100" src=${arr[divIndx].strMealThumb} alt="">
            <h2 class="text-white text-center">${arr[divIndx].strMeal}</h2>
          </div>
          <div class="col-md-8 text-white">
            <h4>Instruction</h4>
            <p>${arr[divIndx].strInstructions}</p>
            <p><span class="fw-bold">Area :</span> ${arr[divIndx].strArea}</p>
            <p><span class="fw-bold">Category : </span>${arr[divIndx].strCategory}</p>
            <h4>Recipes : </h4>
            <ul class="list-unstyled d-flex flex-wrap  ">
            <li class="text-dark my-3 mx-1 p-1 alert-success rounded-pill bg-white"><span>${arr[divIndx].strMeasure1}</span>  ${arr[divIndx].strIngredient1}</li>
            <li class="text-dark my-3 mx-1 p-1 alert-success rounded-pill bg-white"><span>${arr[divIndx].strMeasure2}</span>  ${arr[divIndx].strIngredient2}</li>
            <li class="text-dark my-3 mx-1 p-1 alert-success rounded-pill bg-white"><span>${arr[divIndx].strMeasure3}</span>  ${arr[divIndx].strIngredient3}</li>
            <li class="text-dark my-3 mx-1 p-1 alert-success rounded-pill bg-white"><span>${arr[divIndx].strMeasure4}</span>  ${arr[divIndx].strIngredient4}</li>
            <li class="text-dark my-3 mx-1 p-1 alert-success rounded-pill bg-white"><span>${arr[divIndx].strMeasure5}</span>  ${arr[divIndx].strIngredient5}</li>
            <li class="text-dark my-3 mx-1 p-1 alert-success rounded-pill bg-white"><span>${arr[divIndx].strMeasure6}</span>  ${arr[divIndx].strIngredient6}</li>
            <li class="text-dark my-3 mx-1 p-1 alert-success rounded-pill bg-white"><span>${arr[divIndx].strMeasure7}</span>  ${arr[divIndx].strIngredient7}</li>
            <li class="text-dark my-3 mx-1 p-1 alert-success rounded-pill bg-white"><span>${arr[divIndx].strMeasure8}</span>  ${arr[divIndx].strIngredient8}</li>
            <li class="text-dark my-3 mx-1 p-1 alert-success rounded-pill bg-white"><span>${arr[divIndx].strMeasure9}</span>  ${arr[divIndx].strIngredient9}</li>

            </ul>
            <h4>Tags : </h4>
            <ul class="list-unstyled d-flex flex-wrap  ">
            <li class="text-dark my-3 mx-1 p-1 alert-success rounded-pill bg-white">${arr[divIndx].strTags}</li>
            </ul>
            <div class="d-flex"><a class="btn btn-success text-white m-2" target="_blank" href=${arr[divIndx].strSource}>Source</a>
            <a class="btn btn-danger text-white m-2" target="_blank" href=${arr[divIndx].strYoutube}>Youtube</a>
            </div>
          </div>
        </div>
      </div>`);
    });
}
$("#search").click(function () {
  $(".search").css("display", "flex");
  $(".mealsContainer").empty();
  $(".contact").css("display", "none");
  $(".sideBox").animate({ width: "0" }, 500);
  $(".open").animate({ left: "0" }, 500);
});
async function getMealsByName(mealName) {
  $("#loading").fadeIn(100);
  let getResponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
  );
  let responseData = await getResponse.json();
  arr = [...responseData.meals];
  $("#loading").fadeOut(500);
  console.log(responseData);
  $(".mealsContainer").empty();
  $(".contact").css("display", "none");
  for (i = 0; i < responseData.meals.length; i++) {
    $(".mealsContainer").append(`<div class="col-md-3 my-3">
    <div class="d-flex rel">
      <img src=${responseData.meals[i].strMealThumb}
      alt="" class="w-100 rounded-2">
      <div class="shadow w-100 rounded-2 d-flex justify-content-center align-items-center">
      <h2 class="fw-bold">${responseData.meals[i].strMeal}</h2>
      </div>
    </div>
  </div>`);
  }
  $(".mealsContainer")
    .children(this)
    .click(function () {
      let searchName = $("h2", this).html();
      getIngridient(searchName);
    });
}

async function getCategories() {
  $("#loading").fadeIn(100);
  let getResponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  let responseData = await getResponse.json();
  $("#loading").fadeOut(500);
  console.log(responseData.categories);
  $(".mealsContainer").empty();
  $(".contact").css("display", "none");
  $(".search").css("display", "none");
  for (i = 0; i < responseData.categories.length; i++) {
    $(".mealsContainer").append(`<div class="col-md-3 my-3">
    <div class="d-flex rel">
      <img src=${responseData.categories[i].strCategoryThumb}
      alt="" class="w-100 rounded-2">
      <div class="shadow w-100 rounded-2 text-center">
      <h2 class="fw-bold">${responseData.categories[i].strCategory}</h2>
      <p>${responseData.categories[i].strCategoryDescription
        .split(" ")
        .splice(0, 20)
        .join(" ")}</p>
      </div>
    </div>
  </div>`);
  }
  $(".mealsContainer")
    .children(this)
    .click(function () {
      let category = $("h2", this).html();
      getCategoryMeal(category);
    });
}
$("#categories").click(function () {
  getCategories();
  $(".sideBox").animate({ width: "0" }, 500);
  $(".open").animate({ left: "0" }, 500);
});

async function getCategoryMeal(category) {
  $("#loading").fadeIn(100);
  let getResponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );
  let responseData = await getResponse.json();
  arr = responseData.meals;
  $("#loading").fadeOut(500);
  $(".mealsContainer").empty();
  $(".contact").css("display", "none");
  $(".search").css("display", "none");
  for (i = 0; i < arr.length; i++) {
    $(".mealsContainer").append(`<div class="col-md-3 my-3">
    <div class="d-flex rel">
      <img src=${arr[i].strMealThumb}
      alt="" class="w-100 rounded-2">
      <div class="shadow w-100 rounded-2 text-center d-flex justify-content-center align-items-center">
      <h2 class="fw-bold">${arr[i].strMeal}</h2>
      </div>
    </div>
  </div>`);
  }
  $(".mealsContainer")
    .children(this)
    .click(function () {
      let categoryMeal = $("h2", this).html();
      getIngridient(categoryMeal);
    });
}

async function getArea() {
  $("#loading").fadeIn(100);
  let getResponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
  );
  let responseData = await getResponse.json();
  $("#loading").fadeOut(500);
  $(".mealsContainer").empty();
  $(".contact").css("display", "none");
  $(".search").css("display", "none");
  for (i = 0; i < 20; i++) {
    if (responseData.meals[i].strArea !== "Unknown") {
      $(".mealsContainer").append(`<div class="col-md-3 text-center my-3">

      <i class="fa-solid fa-city fa-3x"></i>
        <h2 class="text-white">${responseData.meals[i].strArea}</h2>
      
    </div>`);
    }
  }
  $(".mealsContainer")
    .children(this)
    .click(function () {
      let countryName = $("h2", this).html();
      getMealByCountry(countryName);
    });
}

$("#area").click(function () {
  getArea();
  $(".sideBox").animate({ width: "0" }, 500);
  $(".open").animate({ left: "0" }, 500);
});

async function getMealByCountry(country) {
  $("#loading").fadeIn(1000);
  let getResponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
  );
  let responseData = await getResponse.json();
  console.log(responseData.meals);
  arr = [...responseData.meals];
  $("#loading").fadeOut(1000);

  $(".mealsContainer").empty();
  $(".contact").css("display", "none");
  $(".search").css("display", "none");
  for (i = 0; i < arr.length; i++) {
    $(".mealsContainer").append(`<div class="col-md-3 my-3">
    <div class="d-flex rel">
      <img src=${arr[i].strMealThumb}
      alt="" class="w-100 rounded-2">
      <div class="shadow w-100 rounded-2 text-center d-flex align-items-center justify-content-center">
      <h2 class=fw-bold>${arr[i].strMeal}</h2>
      </div>
    </div>
  </div>`);
  }
  $(".mealsContainer")
    .children(this)
    .click(function () {
      let mealName = $("h2", this).html();
      getIngridient(mealName);
    });
}
async function getIngridient(mealName) {
  $("#loading").fadeIn(100);
  let getResponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
  );
  let responseData = await getResponse.json();
  arr = [...responseData.meals];
  $("#loading").fadeOut(400);
  $(".mealsContainer").empty();
  $(".contact").css("display", "none");
  $(".search").css("display", "none");
  $(".mealsContainer").html(`
  <div class="container p-5">
    <div class="row">
      <div class="col-md-4">
        <img class="w-100" src=${arr[0].strMealThumb} alt="">
        <h2 class="text-white text-center">${arr[0].strMeal}</h2>
      </div>
      <div class="col-md-8 text-white">
        <h4>Instruction</h4>
        <p>${arr[0].strInstructions}</p>
        <p><span class="fw-bold">Area :</span> ${arr[0].strArea}</p>
        <p><span class="fw-bold">Category : </span>${arr[0].strCategory}</p>
        <h4>Recipes : </h4>
        <ul class="list-unstyled d-flex flex-wrap  ">
        <li class="text-dark my-3 mx-1 p-1 alert-success rounded-pill bg-white"><span>${arr[0].strMeasure1}</span>  ${arr[0].strIngredient1}</li>
        <li class="text-dark my-3 mx-1 p-1 alert-success rounded-pill bg-white"><span>${arr[0].strMeasure2}</span>  ${arr[0].strIngredient2}</li>
        <li class="text-dark my-3 mx-1 p-1 alert-success rounded-pill bg-white"><span>${arr[0].strMeasure3}</span>  ${arr[0].strIngredient3}</li>
        <li class="text-dark my-3 mx-1 p-1 alert-success rounded-pill bg-white"><span>${arr[0].strMeasure4}</span>  ${arr[0].strIngredient4}</li>
        <li class="text-dark my-3 mx-1 p-1 alert-success rounded-pill bg-white"><span>${arr[0].strMeasure5}</span>  ${arr[0].strIngredient5}</li>
        <li class="text-dark my-3 mx-1 p-1 alert-success rounded-pill bg-white"><span>${arr[0].strMeasure6}</span>  ${arr[0].strIngredient6}</li>
        <li class="text-dark my-3 mx-1 p-1 alert-success rounded-pill bg-white"><span>${arr[0].strMeasure7}</span>  ${arr[0].strIngredient7}</li>
        <li class="text-dark my-3 mx-1 p-1 alert-success rounded-pill bg-white"><span>${arr[0].strMeasure8}</span>  ${arr[0].strIngredient8}</li>

        </ul>
        <h4>Tags : </h4>
        <ul class="list-unstyled d-flex flex-wrap  ">
        <li class="text-dark my-3 mx-1 p-1 alert-success rounded-pill bg-white">${arr[0].strTags}</li>
        </ul>
        <div class="d-flex"><a class="btn btn-success text-white m-2" target="_blank" href=${arr[0].strSource}>Source</a>
        <a class="btn btn-danger text-white m-2" target="_blank" href=${arr[0].strYoutube}>Youtube</a>
        </div>
      </div>
    </div>
  </div>`);
}
async function getIngridientList() {
  $("#loading").fadeIn(100);
  let getResponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
  );
  let responseData = await getResponse.json();
  arr = [...responseData.meals];
  $("#loading").fadeOut(500);
  $(".mealsContainer").empty();
  $(".contact").css("display", "none");
  $(".search").css("display", "none");
  for (i = 0; i < 24; i++) {
    $(".mealsContainer").append(`<div class="col-md-3 p-3">
    <div class="rel text-white text-center">
    <i class="fa-solid fa-bowl-food fa-3x"></i>
      <h2>${arr[i].strIngredient}</h2>
      <p>${arr[i].strDescription.split(" ").splice(0, 20).join(" ")}</p>
      </div>
  </div>`);
  }
  $(".mealsContainer")
    .children(this)
    .click(function () {
      let IngridientName = $("h2", this).html();
      getIngridientName(IngridientName);
    });
}
async function getIngridientName(IngridientName) {
  $("#loading").fadeIn(100);
  let getResponse = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${IngridientName}`
  );
  let responseData = await getResponse.json();
  arr = [...responseData.meals];
  $("#loading").fadeOut(500);
  $(".mealsContainer").empty();
  $(".contact").css("display", "none");
  $(".search").css("display", "none");
  for (i = 0; i < arr.length; i++) {
    $(".mealsContainer").append(`<div class="col-md-3 my-3">
    <div class="d-flex rel ">
      <img src=${arr[i].strMealThumb}
      alt="" class="w-100 rounded-2">
      <div class="shadow w-100 rounded-2 text-center d-flex align-items-center justify-content-center">
      <h2 class="fw-bold">${arr[i].strMeal}</h2>
      </div>
    </div>
  </div>`);
  }
  $(".mealsContainer")
    .children(this)
    .click(function () {
      let mealName = $("h2", this).html();
      getIngridient(mealName);
    });
}
$("#ing").click(function () {
  getIngridientList();
  $(".sideBox").animate({ width: "0" }, 500);
  $(".open").animate({ left: "0" }, 500);
});

$(".open").click(function () {
  if ($(".sideBox").outerWidth() == 0) {
    $(".sideBox").animate({ width: "240px" }, 500);
    $(".open").animate({ left: "240px" }, 500);
    $("#search").animate(
      {
        opacity: "1",
        paddingTop: "25px",
      },
      1100
    ),
      $("#categories").animate(
        {
          opacity: "1",
          paddingTop: "5px",
        },
        1200
      ),
      $("#area").animate(
        {
          opacity: "1",
          paddingTop: "5px",
        },
        1300
      ),
      $("#ing").animate(
        {
          opacity: "1",
          paddingTop: "5px",
        },
        1400
      ),
      $("#reg").animate(
        {
          opacity: "1",
          paddingTop: "5px",
        },
        1500
      );
    $(".toggler").empty();
    $(".toggler").append(`<i class="fa fa-align-justify p-3 fa-times"></i>`);
  } else {
    $(".sideBox").animate({ width: "0" }, 500);
    $(".open").animate({ left: "0" }, 500);
    $(".sideBox a").animate(
      {
        opacity: "0",
        paddingTop: "500px",
      },
      500
    );
    $(".toggler").empty();

    $(".toggler").append(`<i class="fa fa-align-justify"></i>`);
  }
});

$("#reg").click(function () {
  $(".search").css("display", "none");
  $(".mealsContainer").empty();
  $(".contact").css("display", "block");
  $(".sideBox").animate({ width: "0" }, 500);
  $(".open").animate({ left: "0" }, 500);
});

function validationUserName() {
  let regex = /^([A-Z]|[a-z]){1,}$/;
  if (regex.test($("#userName").val()) == true) {
    $("#warningName").html("");
    $("#warningName").css("background-color", "transparent");
  } else {
    $("#warningName").html("Enter a valid Username");
    $("#warningName").css("background-color", "white");
    $("#disBtn").addClass("disabled");
  }
}

$("#userName").blur(function () {
  validationUserName(this.value);
});

function validationEmail() {
  let regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regex.test($("#email").val()) == true) {
    $("#warningMail").html("");
    $("#warningMail").css("background-color", "transparent");
  } else {
    $("#warningMail").html("Enter a valid E-mail");
    $("#warningMail").css("background-color", "white");
    $("#disBtn").addClass("disabled");
  }
}
$("#email").blur(function () {
  validationEmail(this.value);
});

function validationPhone() {
  let regex = /^[0-9]{0,3}[0-9]{10}$/;
  if (regex.test($("#Phone").val()) == true) {
    $("#warningPhone").html("");
    $("#warningPhone").css("background-color", "transparent");
  } else {
    $("#warningPhone").html("Enter a valid Phone number");
    $("#warningPhone").css("background-color", "white");
    $("#disBtn").addClass("disabled");
  }
}
$("#Phone").blur(function () {
  validationPhone(this.value);
});
function validationUserAge() {
  let regex = /^[1-9][0-9]$/;
  if (regex.test($("#age").val()) == true) {
    $("#warningAge").html("");
    $("#warningAge").css("background-color", "transparent");
  } else {
    $("#warningAge").html("Age is not valid");
    $("#warningAge").css("background-color", "white");
    $("#disBtn").addClass("disabled");
  }
}

$("#age").on("input", function () {
  validationUserAge(this.value);
});

function validationUserPass() {
  let regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  if (regex.test($("#password").val()) == true) {
    $("#warningPassword").html("");
    $("#warningPassword").css("background-color", "transparent");
    return true;
  } else {
    $("#warningPassword").html(
      "Enter valid password Minimum eight characters, at least one letter and one number"
    );
    $("#warningPassword").css("background-color", "white");
    $("#disBtn").addClass("disabled");
  }
}

$("#password").on("input", function () {
  validationUserPass(this.value);
});
function validationPasswordMatch() {
  if ($("#password").val() == $("#rePass").val()) {
    $("#warningRepass").html("");
    $("#warningRepass").css("background-color", "transparent");
    enableBtn();
  } else {
    $("#warningRepass").html("Password Doesn't match");
    $("#warningRepass").css("background-color", "white");
    $("#disBtn").addClass("disabled");
  }
}
$("#rePass").on("input", function () {
  validationPasswordMatch(this.value);
});
function enableBtn() {
  if (
    validationUserName() == true &&
    validationEmail() == true &&
    validationPhone() == true &&
    validationUserAge() == true &&
    validationUserPass() == true
  ) {
    $("#disBtn").addClass("disabled");
  } else {
    $("#disBtn").removeClass("disabled");
  }
}

$(document).ready(function () {
  $("#loading").fadeOut(1000, function () {
    $("#loading").remove();
  });
});
