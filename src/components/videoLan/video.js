import React from 'react'
import sample1 from '../../assets/videos/River.mp4'


const VIDEO = [sample1]

const styles = {
    width:'100%'
}

class Video extends React.Component{
   constructor(props){
       super(props)
       this.state={
           src: VIDEO[0]
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