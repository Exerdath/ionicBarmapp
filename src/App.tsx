import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonContent,
  IonRouterOutlet,
  IonMenu,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

/* Pages*/
import About from "./pages/info/About";
import Contact from "./pages/info/Contact";
import Login from "./pages/account/Login";
import Register from "./pages/account/Register";
import DrinkDetails from "./pages/DrinkDetails";
import FavedDrinks from "./pages/FavedDrinks";

const App: React.FC = () => (
  <IonApp>
    <IonMenu side="start" menuId="barMenu" contentId="main">
      <IonContent>
        <IonList>
          <IonItem button routerLink="/home">
            <IonLabel class="ion-text-center">
              <strong>Barmapp</strong>
            </IonLabel>
          </IonItem>
          <IonItem button routerLink="/favedDrinks">
            <IonLabel class="ion-text-center">Faved Drinks</IonLabel>
          </IonItem>
          <IonItem button routerLink="/about">
            <IonLabel class="ion-text-center">ABOUT</IonLabel>
          </IonItem>
          <IonItem button routerLink="/contact">
            <IonLabel class="ion-text-center">CONTACT</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
    <IonReactRouter>
      <IonRouterOutlet id="main">
        <Route path="/home" component={Home} exact={true} />
        <Route path="/contact" component={Contact} exact={true} />
        <Route path="/about" component={About} exact={true} />
        <Route path="/login" component={Login} exact={true} />
        <Route path="/register" component={Register} exact={true} />
        <Route path="/favedDrinks" component={FavedDrinks} exact={true} />
        <Route path="/drinkdetails/:id" component={DrinkDetails} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
