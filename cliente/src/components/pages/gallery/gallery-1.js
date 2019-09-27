import React, { Component } from 'react';
import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css';
import '../../styles/button.scss'
import image1 from '../../../assets/images/instalaciones/depto-1/living.jpg'
import image2 from '../../../assets/images/instalaciones/depto-1/asador.jpg'
import image3 from '../../../assets/images/instalaciones/depto-1/cocina.jpg'
import image4 from '../../../assets/images/instalaciones/depto-1/patio.jpg'
import image5 from '../../../assets/images/instalaciones/depto-1/pieza.jpg'
import image6 from '../../../assets/images/instalaciones/depto-1/habitacion-m.jpg'
import image7 from '../../../assets/images/instalaciones/depto-1/baño.jpg'
import image8 from '../../../assets/images/instalaciones/depto-1/cochera.jpg'

const images = [ image1, image2, image3, image4, image5, image6,image7,image8 ];

class Galeria1 extends Component{

   constructor(props){
       super(props)
       this.state = {
           photoIndex:0,
           isOpen:false
       }
   }

   render(){
       const {photoIndex, isOpen} = this.state
     return(
        <div>
        <div>
        
          <button type="button" className="button" id='work' name="Hover" onClick={() => this.setState({ isOpen: true })}>
              Ver Depto 1
          </button>
        </div>  
               {isOpen && (
           <Lightbox
               mainSrc={images[photoIndex]}
               nextSrc={images[(photoIndex + 1) % images.length]}
               prevSrc={images[(photoIndex + images.length - 1) % images.length]}
               onCloseRequest={() => this.setState({ isOpen: false })}
               onMovePrevRequest={() =>
               this.setState({
               photoIndex: (photoIndex + images.length - 1) % images.length,
            })
          }
               onMoveNextRequest={() =>
                   this.setState({
                        photoIndex: (photoIndex + 1) % images.length,
                     })
              }
           />
        )}
    </div>
     )
   }

}

export default Galeria1;