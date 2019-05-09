import React, { Component } from 'react';
import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css';
import "../../../assets/css/buttons.min.css"
import image1 from '../../../assets/images/dpto1/PANO_20161026_103215.jpg'
import image2 from '../../../assets/images/dpto1/PANO_20161026_103924.jpg'
import image3 from '../../../assets/images/dpto1/PANO_20161026_171238.jpg'
import image4 from '../../../assets/images/dpto1/PANO_20161026_104707.jpg'
import image5 from '../../../assets/images/dpto1/Baño-depto-1B.jpg'
import image6 from '../../../assets/images/dpto1/patiointerno.jpg'
import image7 from '../../../assets/images/dpto1/PANO_20161026_110707.jpg'
import image8 from '../../../assets/images/dpto1/PANO_20161026_170357.jpg'

const images = [ image1, image2, image3, image4, image5, image6,image7,image8];

class Galeria extends Component{
   constructor(props){
     super(props)
     this.state = {
       photoIndex: 0,
       isOpen:false
     }
   }

   render(){
     const {photoIndex, isOpen} = this.state;
     return (

        <div>
            <div className="button-container-2">
            <span class="mas">Instalaciones Dpto 1</span>
              <button type="button" id='work' name="Hover" onClick={() => this.setState({ isOpen: true })}>
                  Instalaciones Dpto 1
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
  export default Galeria;
