import React, { Component } from 'react';
import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css';
import image1 from '../../../assets/images/dpto2/20161026_112924.jpg';
import image2 from '../../../assets/images/dpto2/habitacion.jpg';
import image3 from '../../../assets/images/dpto2/estar360TV.jpg';
import image4 from '../../../assets/images/dpto2/PANO_20161026_170357.jpg';
import image5 from '../../../assets/images/dpto2/estar360aire.jpg';
import image6 from '../../../assets/images/dpto2/baño.jpg';

const images = [image1,image2,image3,image4,image5,image6];

 class Galeria2 extends Component {

   constructor(props){
     super(props)
     this.state = {
       photoIndex: 0,
       isOpen:false
     }
   }

   render(){
       const {photoIndex,isOpen} = this.state;
     return (
       <div>
            <div className="button-container-2">
            <span class="mas">Instalaciones Dpto 2</span>
              <button type="button" id='work' name="Hover" onClick={() => this.setState({ isOpen: true })}>
                  Instalaciones Dpto 2
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

export default Galeria2;
