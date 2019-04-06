import React,{ Component } from 'react';
import image1 from '../../assets/images/CAM00268.jpg'
import image2 from '../../assets/images/dpto1.jpg'

const styles = {
  margin:0,
  padding:0,
  height: '-webkit-fill-available'
}

class Home extends Component{
  render(){
    return(
      <section>
        <div className="mask"></div> 
        <div style={styles} className="headImg hero">
          <h1 className="marca">ARRAYANES</h1>
          <h2 className="eslogan">TU ALOJAMIENTO TURÍSTICO</h2>
        </div>

          <div className="about-1 container">
            <div className="box-1">
              <h1>Bienvenidos</h1>
              <h2>En Departamentos Arrayanes su confort y tranquilidad es nuestra nuestra prioridad</h2>
              <p>Ubicados en uno de los barrios mas tranquilos de Alta Gracia, Departamentos Arrayanes cuenta con las instalaciones perfectas para que sus merecidas vacaciones sean vividas con toda la tranquilidad que necesita.
La opción en alojamiento turístico ideal para la familia.A solo cinco cuadras del centro de la ciudad, encontrará en esta zona la comodidad y la fácil accesibilidad  si desea salir a comer o abastecerse de bienes y servicios durante su estadía. También así Alta Gracia cuenta con una posición privilegiada, ya que si usted desea visitar sus alrededores lograra hacerlo en tan solo unos pocos kilómetros. Vengan a conocernos!.</p>
            </div>
             <div className="box-2">
               <img src={image1} alt="" className="img-box-2"/>
             </div>
           </div>

          <br/><br/>

      <div className="about-2 container">
        <div className="box-3">
          <h2>Sobre Nosotros</h2>
           <p>Somos una pequeña empresa familiar dedicada al alojamiento turístico en Alta Gracia, y este es el ambiente con el que será recibido, un ambiente familiar y tranquilo.
Nuestra idea es que ustedes se sientan tan cómodos como en su casa, que nuestras instalaciones le sean cálidas y logren sentirse a gusto durante su estadía. La ciudad de Alta Gracia ofrece diversidad de museos y paseos, para disfrutar, como así también espacios verdes para distenderse y relajarse en familia y con quienes uno mas aprecia.
           </p>
           <p>Encontrará en Alta Gracia un lugar rico en belleza arquitectónica enraizado en su historia, que no es poca, y bellezas naturales con vista a las hermosas sierras cordobesas.
Esperamos que vengan a conocernos y se lleven una muy gratificante experiencia en Alta Gracia y sobre todo una confortante experiencia alojados en Departamentos Arrayanes, les deseamos la mejor de las estadías, un saludo.
Departamentos Arrayanes.</p>
          </div>
          <div className="box-4">
            <img src={image2} alt="" className="img-box-4"/>
          </div>
        </div>
      </section>
    )
  }
}

export default Home;
