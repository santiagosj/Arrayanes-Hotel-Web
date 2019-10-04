import React from 'react';
import Logo from '../../assets/svg/aHome.svg'
import '../styles/home.scss'



const Home = () => {
    return (
        <main className="container-home">
            <section className="box-1">
                     <p>A</p>
                     <p className="page">01</p>
            </section>
            <section className="box-2">
                <div className="content-2">
                    <div className="cuadro">
                        <img src={Logo} alt=""/>
                        <h3>rra</h3>
                        <h3>yanes</h3>
                    </div>
                    <div className="wellcome">
                         <h2>Bienvenidos</h2>
                    </div>
                </div>
            </section>
            <section className="box-3">
                  <div className="content-3">
                      <div className="title">
                         <h2>N</h2>
                         <p>osotros</p>
                      </div>
                     <div className = "nosotros-text-container">
                         <p>Somos una pequeña empresa familiar dedicada al alojamiento turístico en Alta Gracia, y este es el ambiente con el que será recibido, un ambiente familiar y tranquilo. Nuestra idea es que ustedes se sientan tan cómodos como en su casa, que nuestras instalaciones les sean cálidas y logren sentirse a gusto durante su estadía.</p>
                     </div>
                  </div>
            </section>
        </main>
    )
}

export default Home;