import React from 'react';
import  CardItem  from './CardItem';
import './Cards.css'

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                <ul className='cards__items'>
                <CardItem 
                    src='images/img-1.jpg'
                    text='Explore Automatic Rifles'
                    label='AR GUNS'
                    path='/home'    
                />
                <CardItem 
                    src='images/img-2.jpg'
                    text='Explore Soft Machine Guns'
                    label='SMG-GUNS'
                    path='/squad'
                />
                </ul>
                <ul className='cards__items'>
                <CardItem 
                    src='images/img-3.jpg'
                    text='Explore Bolt-Action Rifles'
                    label='SNIPERS'
                    path='/clan'
                />
                <CardItem 
                    src='images/img-4.jpg'
                    text='Explore Pistols'
                    label='PISTOLS'
                    path='/subscribe'
                />
                 <CardItem 
                    src='images/img-6.jpg'
                    text='Throwables'
                    label='OTHERS'
                    path='/subscribe'
                />
                </ul>
                </div>
             </div>   
        </div>
    )
}

export default Cards;
