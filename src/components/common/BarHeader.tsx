import {
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import "./BarHeader.css";

const BarHeader: React.FC = () => {
  return (
    <IonHeader class="ion-no-boarder">
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton autoHide={false} menu="barMenu" />
        </IonButtons>
        <IonTitle class="ion-text-center"> Barmapp </IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default BarHeader;
