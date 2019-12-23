import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/Topmenu/TopMenu';
import Header from './Component/Header/Header'
import Content from './Component/Content/Content';
import Footer from './Component/Footer/Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
          <TopMenu/>
          <Header/>
          <div className="container">
            <div className="row pt-5">
              <Content tieude="Cai win 10" linkpicture="/img/win10.jpg" />
              <Content tieude="Cai win 10" linkpicture="/img/win10.jpg" />
              <Content tieude="Cai win 10" linkpicture="/img/win10.jpg" />
              <Content tieude="Cai win 10" linkpicture="/img/win10.jpg" />
              <Content tieude="Cai win 10" linkpicture="/img/win10.jpg" />
              <Content tieude="Cai win 10" linkpicture="/img/win10.jpg" />
              <Content tieude="Cai win 10" linkpicture="/img/win10.jpg" />
              <Content tieude="Cai win 10" linkpicture="/img/win10.jpg" />
            </div>
          </div>
          
          <Footer/>
      </div>
    );
  }
}

export default App;
