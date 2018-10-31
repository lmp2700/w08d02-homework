import React, {Component} from 'react'
import CuriosityPhotos from '../NasaPhotos/Curiosity'

export default class NasaPhotos extends Component {
    constructor() {
        super();
        this.state = {
            curiosity: []
        }
    }
    getPhotos = async () => {
        try {
          const photos = await fetch('https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity/?api_key=0mSs2fdXEJMSAuLVHdcfLB0w9KGBddgBzNyFUEYl').then((res) => res.json())
          return photos
        } catch(err) {
          return(err)
        }
      }
      componentDidMount () {
        this.getPhotos().then((photos) => {
          console.log(photos, ' Curiosity Data')
          this.setState({photos: photos})
        }).catch((err) => { 
          console.log(err)
        })
    }
    render() {
        return (
          <div className="App">
            <CuriosityPhotos photos={this.state.curiosity}/>
          </div>
        );
      }
    }