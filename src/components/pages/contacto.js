import React , { Component } from 'react';
import Form from './formulario/formulario';

class Contacto extends Component {
  render(){
    return(
      <section className="mainContact">
       <div className="headImg cont">
       <div className="maskPages"></div> 
       </div>
        <div className="container">
          <h1>Formulario de Contacto</h1>
          <Form />
        </div>
      </section>
    )
  }
}

export default Contacto;
