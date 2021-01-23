import {
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useState } from "react";
import BarHeader from "../components/common/BarHeader";
import "./Home.css";
import DrinksList from "../components/DrinksList";

const Home: React.FC = () => {
  const [filterDrink, setFilterDrink] = useState<string>("Gin");

  function handleOnIonChange(event: any) {
    event.preventDefault();
    setFilterDrink(event.detail.value);
  }

  return (
    <IonPage>
      <BarHeader />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonSelect
            value={filterDrink}
            placeholder="Select drink"
            onIonChange={(event) => handleOnIonChange(event)}
          >
            <IonSelectOption value="Gin">Gin</IonSelectOption>
            <IonSelectOption value="Vodka">Vodka</IonSelectOption>
            <IonSelectOption value="Rum">Rum</IonSelectOption>
          </IonSelect>
        </IonItem>
        <DrinksList drinkIngredient={filterDrink} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
