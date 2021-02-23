import './App.css';
import Banks from "./components/Banks/Banks";
import Other from "./components/Other/Other"
import Header from "./components/Header/Header";
import {Translate} from "./components/Translate/Translate";
import {Weather} from "./components/Weather/Weather";
import {Route, Switch} from "react-router-dom";
import React from "react";
import {Home} from "./components/Home/Home";
import {Footer} from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">

        <ul>
            <Header/>

        </ul>
        <Switch>
            <Route path='/banks' exact component={Banks}/>
            <Route path='/translate' exact component={Translate}/>
            <Route path='/weather' exact component={Weather}/>
            <Route path='/' exact component={Home}/>
            <Route component={Other}/>
            <h1>This is APP</h1>

        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
