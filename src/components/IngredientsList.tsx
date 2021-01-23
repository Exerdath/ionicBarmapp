import { IonContent, IonList, IonItem, IonLabel } from "@ionic/react";
import React from "react";
import { useDrinksContext } from "../context/wrappers/DrinksWrapper";

const DrinksList: React.FC = () => {
  const { selectedDrink } = useDrinksContext();
  let i = 0;
  const currentListing = selectedDrink.ingredients.map((ingredient) => (
    <IonItem key={ingredient}>
      <IonLabel>
        <h2>{ingredient}</h2>
        <h3>{selectedDrink.measures[i++]}</h3>
      </IonLabel>
    </IonItem>
  ));

  return (
    <IonList>
      <IonList>{currentListing}</IonList>
    </IonList>
  );
};

export default DrinksList;
