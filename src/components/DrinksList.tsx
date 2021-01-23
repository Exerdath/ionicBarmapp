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
  loadDrinksByIngredient,
  loadDrinkById,
} from "../context/wrappers/DrinksWrapper";

interface IDrinkList {
  drinkIngredient: string;
}

const DrinksList: React.FC<IDrinkList> = ({ drinkIngredient }: IDrinkList) => {
  const { drinks } = useDrinksContext();
  const dispatch = useDrinksActions();

  useEffect(() => {
    loadDrinksByIngredient(
      dispatch,
      drinkIngredient === "" ? "Gin" : drinkIngredient
    );
  }, [drinkIngredient, loadDrinksByIngredient]);

  const currentListing = drinks.map((drinks: any) => (
    <>
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
    </>
  ));

  return (
    <IonContent>
      <IonList>{currentListing}</IonList>
    </IonContent>
  );
};

export default DrinksList;
