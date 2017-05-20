import "./style";

import { h } from "preact";
import { Router } from "preact-router";
import io from 'socket.io-client';


import Header from "./components/header";
import Home from "./routes/home";

const socket = io.connect(`ws://localhost:31337`);


export default () => (
  <div id="app">
    <Header />
    <Router>
      <Home path="/" socket={socket} />
    </Router>
  </div>
);
