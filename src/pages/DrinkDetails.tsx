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
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import React from "react";
import BarHeader from "../components/common/BarHeader";
import "./DrinkDetails.css";
import IngredientsList from "../components/IngredientsList";
import { useDrinksContext } from "../context/wrappers/DrinksWrapper";

const DrinkDetails: React.FC = () => {
  const { selectedDrink } = useDrinksContext();
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
        <IonGrid>
          <IonRow>
            <IonCol size="3" />
            <IonCol>
              <IonButton size="small" expand="block">
                Add To Favourites
              </IonButton>
            </IonCol>
            <IonCol size="3" />
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default DrinkDetails;
