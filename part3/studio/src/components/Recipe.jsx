import { useState } from "react";

const RecipeAuthor = () => {
  let authorLink = "https://erickim.net/";
  let authorPhoto =
    "https://images.squarespace-cdn.com/content/v1/55601ed9e4b0ef2fa3b5042b/5c9ae243-a746-43f3-9c5f-6576c4628638/eric-kim-nyt-cooking.png?format=1000w";
  let authorName = "Eric Kim";

  return (
    <div>
      <img
        src={authorPhoto}
        alt=""
        style={{ objectFit: "contain", borderRadius: "50%" }}
      />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}></a>
      </div>
    </div>
  );
};

const RecipeIngredients = () => {
  const ingredients = [
    "strawberries",
    "chamomile tea",
    "sugar",
    "flour",
    "eggs",
  ];
  return (
    <div>
      <h3>Recipe Ingredients</h3>
      <ul>
        <li>{ingredients[0]}</li>
        <li>{ingredients[1]}</li>
        <li>{ingredients[2]}</li>
        <li>{ingredients[3]}</li>
        <li>{ingredients[4]}</li>
      </ul>
    </div>
  );
};

const RecipeDescription = () => {
  return (
    <div>
      <div>
        <h1>Chamomile Tea Cake with Strawberry Icing</h1>
        <p>
          The perfect cake recipe for afternoon tea. Make sure to host your
          gathering outside so everyone can get lots of springtime sunshine!
        </p>
      </div>
      <div className="recipePhotoBlock">
        <RecipeIngredients />
        <RecipeAuthor />
      </div>
    </div>
  );
};

const RecipePhoto = () => {
  return (
    <img
      src="https://static01.nyt.com/images/2022/04/17/dining/17Mag-Eat1/17Mag-Eat1-threeByTwoMediumAt2X.jpg?width=1280&quality=75&auto=webp"
      alt=""
      className="imageUpdates"
    />
  );
};

export default function RecipeDisplay() {
  return (
    <div className="recipePhotoBlock">
      <RecipePhoto />
      <div>
        <RecipeDescription />
      </div>
    </div>
  );
}
