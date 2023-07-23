import React, { useState } from 'react';
import Logo from '../../assets/svg/aHome.svg'
import MarginLeft from '../marginLeftNumber/marginLeft';
import '../styles/home.scss'

function Home() {

    const [toggleClass, setToggleClass] = useState('');

    const [isActive, setIsActive] = useState(false)

    const active = () => setIsActive(!isActive)

    const toggleClassFunction = () => {
        active();
        setToggleClass('toggled')
    }

    return (
        <main className="container-home">
            <div className={`covid-information ${toggleClass}`}>
                <p> Los esperamos cuando todo esto termine y puedan venir a disfutar de nuestras hermosas sierras </p>
                <button onClick={toggleClassFunction}>
                    aceptar
                </button>
            </div>
            <MarginLeft page={1} />
            <section className="box-2">
                <div className="content-2">
                    <div className="cuadro">
                        <h3 className="A">A</h3>
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
                    <div className="nosotros-text-container">

                        <p>
                            Somos una pequeña empresa familiar dedicada al alojamiento turístico en Alta Gracia, y este es el ambiente con el que será recibido, un ambiente familiar y tranquilo. Nuestra idea es que ustedes se sientan tan cómodos como en su casa, que nuestras instalaciones les sean cálidas y logren sentirse a gusto durante su estadía.
                        </p>

                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home;