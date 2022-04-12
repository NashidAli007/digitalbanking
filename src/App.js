import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import OpenAccount from "./pages/OpenAccount";
import CashDeposit from "./pages/CashDeposit";
import CashWithdrawal from "./pages/CashWithdrawal";
import CheckBalance from "./pages/CheckBalance";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Switch>
            <Route path="/CashDeposit" component={CashDeposit}></Route>
            <Route path="/OpenAccount" component={OpenAccount}></Route>
            <Route path="/CashWithdrawal" component={CashWithdrawal}></Route>
            <Route path="/CheckBalance" component={CheckBalance}></Route>
            <Route path="" component={Home}></Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
