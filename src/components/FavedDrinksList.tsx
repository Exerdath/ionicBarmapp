import {
  IonContent,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonImg,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import {
  useDrinksActions,
  useDrinksContext,
  loadDrinksByUserId,
  loadDrinkById,
} from "../context/wrappers/DrinksWrapper";

const FavedDrinksList: React.FC = () => {
  const { usersDrinks, selectedDrink } = useDrinksContext();
  const dispatch = useDrinksActions();

  useEffect(() => {
    if (usersDrinks.length === 0) {
      loadDrinksByUserId(dispatch, 6);
    }
  }, [usersDrinks]);

  const currentListing = usersDrinks.map((drinks: any) => (
    <IonItem
      key={drinks.idDrink}
      button
      routerLink={"/drinkdetails" + drinks.path}
      onClick={() => {
        loadDrinkById(dispatch, drinks.idDrink);
      }}
    >
      <IonAvatar slot="start">
        <IonImg src={drinks.strDrinkThumb} />
      </IonAvatar>
      <IonLabel>
        <h2>{drinks.strDrink}</h2>
      </IonLabel>
    </IonItem>
  ));

  return (
    <IonContent>
      <IonList>{currentListing}</IonList>
    </IonContent>
  );
};

export default FavedDrinksList;
