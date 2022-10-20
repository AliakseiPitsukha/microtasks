import React from 'react';
import {Header} from "./site/Header/Header";
import {Body} from "./site/Body/Body";
import {Footer} from "./site/Footer/Footer";

function App() {
  return (
    <>
      <Header titleForHeader={'Header'}/>
      <Body titleForBody={'Body'}/>
      <Footer titleForFooter={'Footer'}/>
    </>
  );
}

export default App;