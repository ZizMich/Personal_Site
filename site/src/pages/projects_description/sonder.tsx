import React from 'react';
import {Carouselka} from "../../components/carousel"
import photo1 from '../../assets/screenshot1.png'
import photo2 from '../../assets/screenshot2.png'
import photo3 from '../../assets/screenshot3.png'

export const Sonder = ()=>{
    const images = [{src:photo1,caption:''},{src:photo2,caption:''},{src:photo3,caption:''}]
    return (
        <div>
            <Carouselka images = {images} width = {300} className='carouselka'/>
            <h1 className='Title'>Sonder</h1>
       </div>
        
    )
}