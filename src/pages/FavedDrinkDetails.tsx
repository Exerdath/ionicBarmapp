import {
  IonPage,
  IonContent,
  IonImg,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonLabel,
  IonCardSubtitle,
  IonItem,
} from "@ionic/react";
import React from "react";
import BarHeader from "../components/common/BarHeader";
import "./DrinkDetails.css";
import IngredientsList from "../components/IngredientsList";
import {
  useDrinksContext,
  useDrinksActions,
  faveDrink,
} from "../context/wrappers/DrinksWrapper";

const FavedDrinkDetails: React.FC = () => {
  const { user, selectedDrink } = useDrinksContext();
  const dispatch = useDrinksActions();
  function handleFaveDrink(event: any) {
    event.preventDefault();
    faveDrink(
      dispatch,
      user.userId === undefined ? 6 : user.userId,
      selectedDrink.idDrink
    );
  }
  return (
    <IonPage>
      <BarHeader />
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonImg
              class="detailImage ion-float-right"
              src={selectedDrink.strDrinkThumb}
              item-right
            />
            <IonCardTitle>{selectedDrink.strDrink}</IonCardTitle>
            <IonCardSubtitle>{selectedDrink.strAlcoholic}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IngredientsList />
            </IonItem>
            <IonItem>
              <IonLabel>Instructions</IonLabel>
              {selectedDrink.strInstructions}
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default FavedDrinkDetails;
