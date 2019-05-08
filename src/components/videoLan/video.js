import React from 'react'
import sample1 from '../../assets/videos/River.mp4'
import sample2 from '../../assets/videos/Golondrina.mp4'
import sample3 from '../../assets/videos/Robin.mp4'

const VIDEO = [sample1,sample2,sample3]

const styles = {
    width:'100%'
}

class Video extends React.Component{
   constructor(props){
       super(props)
       this.state={
           src: VIDEO[2]
       }
   }

  render(){
      return(
          <video className="video" style={styles}autoPlay loop muted>
              <source src={this.state.src} type="video/mp4"></source>
          </video>
      )
  }
  
}

export default Video;