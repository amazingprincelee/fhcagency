import React from "react";
import { Switch, Route } from 'react-router-dom';
import "./App.css";
import NavBar from "./components/NavBar";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import CQC from "./pages/CQC";
import Register from "./pages/Register";
import SupportedLiviing from "./pages/SupportedLiviing";
import Services from "./pages/Services";
import MyCarousel from "./components/MyCarousel";
import CoreValue from "./components/CoreValue";
import Cards from "./components/Cards";
import Slogan from "./components/Slogan";
import Footer from "./components/Footer";
import CWSN from "./components/services/CWSN";
import CCBS from "./components/services/CCBS";
import CPDS from "./components/services/CPDS";
import DCS from "./components/services/DCS";
import STR from "./components/services/STR";
import PC from "./components/services/PC";
import MHS from "./components/services/MHS";
import ECS from "./components/services/ECS";
import EOLC from "./components/services/EOLC";
import SS from "./components/services/SS";
import HWW from "./components/supportedliving/HWW";
import IAOA from "./components/supportedliving/IAOA";
import OF from "./components/supportedliving/OF";
import OP from "./components/supportedliving/OP";
import OWP from "./components/supportedliving/OWP";
import WCU from "./components/supportedliving/WCU";
import HomeAbout from "./components/HomeAbout";
import CDUMHA from "./components/services/CDUMHA";






// import Dapp from "./pages/Dapp";

function App() {
 

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <div>
           <MyCarousel />
           <CoreValue />
           <Cards />
           <HomeAbout />
           <Slogan />
          </div>
        </Route>
        <Route path="/AboutUs">
          <AboutUs />
        </Route>
        <Route path="/Services">
          <Services />
        </Route>
        <Route path="/Supportedliving">
          <SupportedLiviing />
        </Route>
        <Route path="/CQC">
          <CQC />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>
        <Route path="/CWSN">
          <CWSN />
        </Route>
        <Route path="/CCBS">
          <CCBS />
        </Route>
        <Route path="/CPDS">
          <CPDS />
        </Route>
        <Route path="/DCS">
          <DCS />
        </Route>
        <Route path="/STR">
          <STR />
        </Route>
        <Route path="/PC">
          <PC />
        </Route>
        <Route path="/MHS">
          <MHS />
        </Route>
        <Route path="/ECS">
          <ECS />
        </Route>
        <Route path="/EOLC">
          <EOLC />
        </Route>
        <Route path="/SS">
          <SS />
        </Route>
        <Route path="/HWW">
         <HWW />
        </Route>
        <Route path="/IAOA">
         <IAOA />
        </Route>
        <Route path="/OF">
         <OF />
        </Route>
        <Route path="/OP">
         <OP />
        </Route>
        <Route path="/OWP">
         <OWP />
        </Route>
        <Route path="/WCU">
         <WCU />
        </Route>
        <Route path="/CDUMHA">
         <CDUMHA />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;