import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonInput,
  IonFooter,
  IonItem,
  IonList,
  IonItemDivider,
  IonAlert,
  IonLabel,
} from "@ionic/react";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  useDrinksContext,
  useDrinksActions,
  loginUser,
} from "../../context/wrappers/DrinksWrapper";

const Login: React.FC = () => {
  const { user } = useDrinksContext();
  const dispatch = useDrinksActions();
  const [contextUser, setContextUser] = useState(user);
  const [messageAlert, showMessageAlert] = useState<boolean>(false);
  let history = useHistory();

  const handleLogin = (event: any) => {
    event.preventDefault();
    if (contextUser.email === "" || contextUser.password === "") {
      showMessageAlert(true);
    } else {
      console.log(user.email, user.password);
      loginUser(
        dispatch,
        contextUser.email === undefined ? "" : contextUser.email,
        contextUser.password === undefined ? "" : contextUser.password
      )
        .then(() => history.push("/home"))
        .catch(() => console.log("Nope, Login failed"));
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
          message={"Email,password cannot be empty!"}
          buttons={["OK"]}
        />
        <IonList>
          <IonItem>
            <IonInput
              value={contextUser.email}
              placeholder="Email"
              onIonChange={(e) => {
                setContextUser({
                  ...contextUser,
                  email: e.detail.value === null ? "" : e.detail.value,
                });
              }}
            ></IonInput>
          </IonItem>
          <IonItemDivider></IonItemDivider>
          <IonItem>
            <IonInput
              value={contextUser.password}
              placeholder="Password"
              type="password"
              onIonChange={(e) => {
                setContextUser({
                  ...contextUser,
                  password: e.detail.value === null ? "" : e.detail.value,
                });
              }}
            ></IonInput>
          </IonItem>
          <IonItemDivider></IonItemDivider>
          <IonItem
            button
            onClick={(e) => {
              handleLogin(e);
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
