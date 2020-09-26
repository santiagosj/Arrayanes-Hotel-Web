import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '../../pages/home'
import Instalaciones from '../../pages/instalaciones'
import Reglamento from '../../pages/reglamento'
import Contacto from '../../pages/contacto'
import '../../styles/mainContent.scss'

class MainContent extends Component{
   render(){
       return(
              <div className="mainContent">
                  <Switch>
                      <Route exact path={'/Home'}component={Home}/>
                      <Route exact path={'/Instalaciones'}component={Instalaciones}/>
                      <Route exact path={'/Reglamento'}component={Reglamento}/>
                      <Route exact path={'/Contacto'}component={Contacto}/>
                      <Redirect to="/Home"/>
                  </Switch>
              </div>
       )
   }
}

export default MainContent