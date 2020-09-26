import React from 'react';
import '../styles/reglamento.scss'
import image from '../assets/images/succulentas.png'
import hojas from '../assets/images/hojas.png'

const Reglamento = () => {
    return (
        <main className="container-reglamento">

            <section className="box-1">
                     <p>A</p>
                     <p className="page">03</p>
            </section>

            <section className="box-2">

                <div className="container">
                      <img src={image} alt="" className="image"></img>
                      <div className="overlay">

                          <div className="overlay-text">
                              <p>
                                  Cualquier consulta que desee realizar, no dude en comunicarse con nosotros.
                              </p>              
                          </div>

                      </div>

                </div>
                <div className="foot-text">
                   <i>Vengan a conocernos!</i> 
                </div>

            </section>

            <section className="box-3">
       
                <div className="content-container">
                    <div className="title">
                        <h2>R</h2>
                        <p>eglamento</p>
                    </div>
                    <div className="reglamento">
                        <div className="intro">
                             <p >Estimado huésped, nos gustaría informarle sobre nuestras políticas de reservas, no solo para optimizar nuestro servicios, sino también para promover una estructura de convivencia que nos ayude a regular el tráfico de consultas y dichas reservas.</p>
                        </div>
                        <div className="reserva-efectiva">
                            <h2>Efectividad de Reserva</h2>
                            <p>A partir de que usted hace la consulta y confirma su deseo de hospedarse en Departamentos Arrayanes, la reserva solo se hace efectiva a través de un deposito bancario dentro de las próximas 48 horas después de su solicitud de reserva.</p>
                            <p>De no efectuarse el deposito dentro de las 48 horas mencionadas, la solicitud de reserva pierde vigencia, y la disponibilidad del departamento vuelve a su estado original.</p>
                            <p>Consideramos que se mantenga en contacto para avisar cualquier tipo de inconveniente que usted tenga que le dificulte efectuar la reserva como es debido.</p>
                        </div>
                        <div className="reserva-cancel">
                            <h2>Cancelación de Reserva</h2>
                            <p>En caso de cancelarse la reserva por cuestiones ajenas a nosotros, la seña no se devuelve, debido a que al efectuar una reserva, tanto usted como nosotros adquirimos un compromiso que repercute en la disponibilidad de nuestras instalaciones para con otros posibles huéspedes.</p>
                        </div>
                        <div className="reserva-mod">
                            <h2>Modificación de Reserva</h2>
                            <p>En caso de que usted decida quedarse mas días de los reservados, comuniquelo con la mayor anticipacion posible, por cuestiones de disponibilidad.</p>
                            <p>En caso contrario de que usted decida restar días de estadía, usted deberá abonar la cantidad de días reservados originalmente.</p>
                        </div>
                         
                    </div>
                </div>

            </section>
            <img src={hojas}  className="hojas" alt="" />
        </main>
    )
}

export default Reglamento;