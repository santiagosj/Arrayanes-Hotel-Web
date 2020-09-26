import React, {useState, useEffect} from 'react';
import Header from '../Header/header'
import MainContent from '../mainContent/mainContent'
import Footer from '../footer/footer'
import './appHolder.scss'

const AppHolder = () => {

    const [one, setOne] = useState('menuOnTop')

    const handleAnimation = () => {
        if(document.documentElement.scrollTop > 100){
            setOne('scroll')
        }
        if(document.documentElement.scrollTop === 0){
            setOne('menuOnTop')
        }
     }
     
    useEffect(()=>{
        window.onscroll = () => handleAnimation()
    },[])
   
       return(
           <div>
                <Header classHeader={one}/>
                  <MainContent/>
                <Footer/>
           </div>
       )
   
}

export default AppHolder