import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Agendamento from "./pages/Agendamento";
import Agendar from "./pages/Agendar";
export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Agendamento} />
        <Route path="/agendar" component={Agendar} />
      </Switch>
    </BrowserRouter>
  );
}
