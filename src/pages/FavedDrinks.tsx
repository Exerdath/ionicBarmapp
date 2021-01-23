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
import FavedDrinksList from "../components/FavedDrinksList";

const Home: React.FC = () => {
  return (
    <IonPage>
      <BarHeader />
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <FavedDrinksList />
      </IonContent>
    </IonPage>
  );
};

export default Home;
