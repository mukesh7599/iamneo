import React from "react";
import LeftNavBar from "./Components/leftnavbar";
import PanelHeader from "./Components/panelheader";
import PanelNav from "./Components/panelnav";
import DndContent from "./Components/dndcontent";
import Footer from "./Components/footer";
import './App.css';

function App() {
  return (
    <div className='main-container'>
      <div className='left-nav'>
        <LeftNavBar />
      </div>
      <div className='right-nav'>
        <div className='panel-header'>
          <PanelHeader />
        </div>
        <div className='panel-nav'>
          <PanelNav />
        </div>
        <div className='dnd-content'>
          <DndContent/>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

export default App;
