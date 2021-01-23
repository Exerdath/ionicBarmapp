import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonInput,
  IonTextarea,
  IonFooter,
  IonItem,
  IonList,
  IonItemDivider,
  IonAlert,
  IonLabel,
} from "@ionic/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login: React.FC = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();
  const [messageAlert, showMessageAlert] = useState<boolean>(false);
  let history = useHistory();

  const doLogin = () => {
    if (!name || !email || !message) {
      showMessageAlert(true);
    } else {
      console.log(name, email, message);
      history.push("/home");
    }
  };

  return (
    <IonPage>
      <IonHeader class="ion-no-border">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle class="ion-text-center"> Barmapp </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItemDivider></IonItemDivider>
        <IonAlert
          isOpen={messageAlert}
          onDidDismiss={() => showMessageAlert(false)}
          header={"Can not do that"}
          subHeader={"A little problem"}
          message={"Name, Email, or Message cannot be empty!"}
          buttons={["OK"]}
        />
        <IonList>
          <IonItem>
            <IonInput
              value={name}
              placeholder="Email"
              onIonChange={(e) => setName(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItemDivider></IonItemDivider>
          <IonItem>
            <IonInput
              value={email}
              placeholder="Password"
              onIonChange={(e) => setEmail(e.detail.value!)}
            ></IonInput>
          </IonItem>
          <IonItemDivider></IonItemDivider>
          <IonItem
            button
            onClick={(e) => {
              doLogin();
            }}
          >
            <IonLabel class="ion-text-center">Login to Barmapp</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle class="ion-text-center">Created by Dream-Makers</IonTitle>
          <IonTitle class="ion-text-center" size="small">
            Your Phone
          </IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Login;
