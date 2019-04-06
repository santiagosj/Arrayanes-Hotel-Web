import React , { Component } from 'react';

class Reglamento extends Component {
  render(){
    return(
      <section className="mainReserve">
      <div className="headImg regl">
         <div className="maskPages"></div> 
      </div>
         <br/>
         <div className="container">
            <h1>Reglamento de Reserva</h1>
            <p>Estimado huésped, pasamos a informarle sobre nuestras políticas de reservas, con el fin no solo de optimizar nuestro servicios, sino que también para promover una estructura de convivencia que nos ayude a regular el trafico de consultas y dichas reservas.</p>
            <p>A partir de que usted hace la consulta y confirma su deseo de hospedarse en Departamentos Arrayanes, la reserva solo se hace efectiva a través de un deposito bancario dentro de las próximas 48 horas después de su solicitud de reserva.</p>
            <p>De no efectuarse el deposito dentro de las 48 horas mencionadas, la solicitud de reserva pierde vigencia, y la disponibilidad del departamento vuelve a su estado original.</p>
            <p>Consideramos que se mantenga en contacto para avisar cualquier tipo de inconveniente que usted tenga que le dificulte efectuar la reserva como es debido.</p>
            <p>En caso de cancelarse la reserva por cuestiones ajenas a nosotros, la seña no se devuelve, debido a que al efectuar una reserva tanto usted como nosotros adquirimos un compromiso de disponibilidad para con usted y otros clientes, a los efectos de mejorar nuestros servicios.</p>

         </div>
      </section>
    )
  }
}

export default Reglamento;
