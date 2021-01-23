import {
  IonContent,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonImg,
} from "@ionic/react";
import React, { useEffect } from "react";
import {
  useDrinksActions,
  useDrinksContext,
  loadDrinksByUserId,
  loadDrinkById,
} from "../context/wrappers/DrinksWrapper";

const FavedDrinksList: React.FC = () => {
  const { user, usersDrinks } = useDrinksContext();
  const dispatch = useDrinksActions();

  useEffect(() => {
    loadDrinksByUserId(dispatch, user.userId === undefined ? 6 : user.userId);
  }, [loadDrinksByUserId, usersDrinks]);

  const currentListing = usersDrinks.map((drinks: any) => (
    <IonItem
      key={drinks.idDrink}
      button
      routerLink={"/favedDrinkdetails" + drinks.path}
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
