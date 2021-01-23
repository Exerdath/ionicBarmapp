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
  IonMenuToggle,
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
import Login from "./pages/account/Login";
import DrinkDetails from "./pages/DrinkDetails";
import FavedDrinks from "./pages/FavedDrinks";
import FavedDrinksDetails from "./pages/FavedDrinkDetails";

//Context
import { useDrinksContext } from "./context/wrappers/DrinksWrapper";

const App: React.FC = () => {
  const { user } = useDrinksContext();
  return (
    <IonApp>
      {user.userId === 6 ? (
        <IonReactRouter>
          <IonMenu side="start" menuId="barMenu" contentId="main">
            <IonContent>
              <IonList>
                <IonItem button routerLink={"/home"}>
                  <IonLabel class="ion-text-center">
                    <strong>Barmapp</strong>
                  </IonLabel>
                </IonItem>
                <IonItem button routerLink={"/favedDrinks"}>
                  <IonLabel class="ion-text-center">Faved Drinks</IonLabel>
                </IonItem>
                <IonItem button routerLink={"/about"}>
                  <IonLabel class="ion-text-center">ABOUT</IonLabel>
                </IonItem>
              </IonList>
            </IonContent>
          </IonMenu>
          <IonRouterOutlet id="main">
            <Route path="/login" component={Login} exact={true} />
            <Route path="/home" render={() => <Redirect to="/login" />} />
            <Route path="/about" render={() => <Redirect to="/login" />} />
            <Route
              path="/favedDrinks"
              render={() => <Redirect to="/login" />}
            />
            <Route exact path="/" render={() => <Redirect to="/login" />} />
          </IonRouterOutlet>
        </IonReactRouter>
      ) : (
        <IonReactRouter>
          <IonMenu side="start" menuId="barMenu" contentId="main">
            <IonContent>
              <IonList>
                <IonItem button routerLink={"/home"}>
                  <IonMenuToggle>
                    <IonLabel class="ion-text-center">
                      <strong>Barmapp</strong>
                    </IonLabel>
                  </IonMenuToggle>
                </IonItem>
                <IonItem button routerLink={"/favedDrinks"}>
                  <IonMenuToggle>
                    <IonLabel class="ion-text-center">Faved Drinks</IonLabel>
                  </IonMenuToggle>
                </IonItem>
                <IonItem button routerLink={"/about"}>
                  <IonMenuToggle>
                    <IonLabel class="ion-text-center">ABOUT</IonLabel>
                  </IonMenuToggle>
                </IonItem>
                <IonItem button routerLink={"/login"}>
                  <IonMenuToggle>
                    <IonLabel class="ion-text-center">LOGOUT</IonLabel>
                  </IonMenuToggle>
                </IonItem>
              </IonList>
            </IonContent>
          </IonMenu>
          <IonRouterOutlet id="main">
            <Route path="/home" component={Home} exact={true} />
            <Route path="/about" component={About} exact={true} />
            <Route path="/login" component={Login} exact={true} />
            <Route path="/favedDrinks" component={FavedDrinks} exact={true} />
            <Route
              path="/drinkdetails/:id"
              component={DrinkDetails}
              exact={true}
            />
            <Route
              path="/favedDrinkdetails/:id"
              component={FavedDrinksDetails}
              exact={true}
            />
            <Route exact path="/" render={() => <Redirect to="/home" />} />
          </IonRouterOutlet>
        </IonReactRouter>
      )}
    </IonApp>
  );
};

export default App;
