import React, { useState } from 'react';
import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css';
import '../../styles/button.scss'

import image1 from '../../assets/images/instalaciones/depto-2/aire.jpg'
import image2 from '../../assets/images/instalaciones/depto-2/baño.jpg'
import image3 from '../../assets/images/instalaciones/depto-2/cochera.jpg'
import image4 from '../../assets/images/instalaciones/depto-2/cocina.jpg'
import image5 from '../../assets/images/instalaciones/depto-2/habitacion.jpg'


const images = [image1, image2, image3, image4, image5] 

const Galeria2 = () =>{
    const [photoIndex, setPhotoIndex] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

       return(
        <div>
            <div >
                <button className="button" type="button" id='work' name="Hover" onClick={() => setIsOpen(true)}>
                    Ver Depto 2
                </button>
            </div> 
            {isOpen && (
                 <Lightbox
                     mainSrc={images[photoIndex]}
                     nextSrc={images[(photoIndex + 1) % images.length]}
                     prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                     onCloseRequest={() => setIsOpen(false)}
                     onMovePrevRequest={() =>
                         setPhotoIndex((photoIndex + images.length - 1) % images.length)
                     }
                     onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                 />
             )}
        </div>
       )
}
export default Galeria2;