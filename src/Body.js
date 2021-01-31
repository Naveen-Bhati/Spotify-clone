import React from 'react'
import './Body.css'
import Header from './Header'

function Body({spotify}) {
    return (
        <div className="body">
            <Header spotify={spotify} />
            <div className='body__info'>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg" alt=" "/>
                <div className="body__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>description</p>

                </div>
            </div>
        </div>
    )
}

export default Body
