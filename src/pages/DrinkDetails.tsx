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
  IonToast,
} from "@ionic/react";
import React, { useState } from "react";
import BarHeader from "../components/common/BarHeader";
import "./DrinkDetails.css";
import IngredientsList from "../components/IngredientsList";
import {
  useDrinksContext,
  useDrinksActions,
  faveDrink,
} from "../context/wrappers/DrinksWrapper";

const DrinkDetails: React.FC = () => {
  const [showToast1, setShowToast1] = useState(false);
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
        <IonGrid>
          <IonRow>
            <IonCol size="3" />
            <IonCol>
              <IonButton
                size="small"
                expand="block"
                onClick={(event) => {
                  handleFaveDrink(event);
                  setShowToast1(true);
                }}
              >
                Add To Favourites
              </IonButton>
            </IonCol>
            <IonCol size="3" />
          </IonRow>
        </IonGrid>
        <IonToast
          isOpen={showToast1}
          onDidDismiss={() => setShowToast1(false)}
          message="Drink Added"
          duration={700}
        />
      </IonContent>
    </IonPage>
  );
};

export default DrinkDetails;
