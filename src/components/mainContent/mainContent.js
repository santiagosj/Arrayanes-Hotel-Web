import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home';
import Contacto from '../pages/contacto';
import Instalaciones from '../pages/instalaciones';
import Servicios from '../pages/servicios';

class MainContent extends Component{
  render(){
    return(
      <div className="mainContent">
          <Switch>
            <Route exact path={'/'} component={Home} />
            <Route exact path={'/arrayanes/instalaciones'} component={Instalaciones} />
            <Route exact path={'/arrayanes/servicios'} component={Servicios} />
            <Route exact path={'/arrayanes/contacto'} component={Contacto} />
          </Switch>
      </div>
    )
  }
}
export default MainContent;
