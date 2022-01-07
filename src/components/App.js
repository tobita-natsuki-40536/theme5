import React from 'react'
import HeaderComponent from './templates/HeaderComponent'
import MainComponent from './templates/MainComponent'
import FooterComponent from './templates/FooterComponent'


function App() {
  return (
    <div>
      <h1>タイトル</h1>
      <HeaderComponent></HeaderComponent>
      <MainComponent></MainComponent>
      <FooterComponent></FooterComponent>
    </div>
  );
}

export default App;
