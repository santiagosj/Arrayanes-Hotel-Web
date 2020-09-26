import React,{Component} from 'react';
import './map.scss'

class Mapa extends Component{

  render(){
    return(
      <div className="map-container">
      <h1>Donde Estamos</h1><br/>
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13585.246521093768!2d-64.4315067!3d-31.6526929!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3e86dde094267962!2sDepartamentos+Tur%C3%ADsticos+Arrayanes!5e0!3m2!1ses-419!2sar!4v1549629400892"
          frameBorder={0}
          title="mapa"
          scrolling="vertical"
          allowFullScreen
      />
      </div>
    )
  }
}

export default Mapa;