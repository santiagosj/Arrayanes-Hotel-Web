import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../pages/home'
import Instalaciones from '../pages/instalaciones'
import Reglamento from '../pages/reglamento'
import Contacto from '../pages/contacto'

const style = {height:'100%'}

class MainContent extends Component{
   render(){
       return(
              <div className="mainContent" style={style}>
                  <Switch>
                      <Route exact path={'/'}component={Home}/>
                      <Route exact path={'/page2/Instalaciones'}component={Instalaciones}/>
                      <Route exact path={'/page3/Reglamento'}component={Reglamento}/>
                      <Route exact path={'/page5/Contacto'}component={Contacto}/>
                      <Redirect to="/"/>
                  </Switch>
              </div>
       )
   }
}

export default MainContent