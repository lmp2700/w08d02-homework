import React, {Component} from 'react'
import NasaPhotos from './NasaPhotos'

export default class CuriosityPhotos extends Component {
    render() {
        const curiosityPhotos = this.props.curiosity.map((curiosity, i) => {
            return (
            <li key = {i}>
                sol:{curiosity.sol} <br/>
                earth_date: {curiosity.earth_date} <br/>
                cameras used: {curiosity.cameras} <br/>
                <button id={i}></button>
            </li>
                )
        })
        return (
            <div>
            <h1>Welcome {this.props.username}</h1><br/>
            <h2>Everything Is Fine</h2><br/>
                {curiosityPhotos}
            </div>
        )
    }
}