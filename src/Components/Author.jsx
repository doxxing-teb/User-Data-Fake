import React from 'react'
import '../Styles/Author.css'
import Navbar from './Navbar'

function Author() {
    return (
        <>
        <br />
            <div className="master">
                <div className="author" id='Author'>
                    <h2>Autor:</h2>
                    <h4>Ibarra Agustin Gabriel</h4>
                </div>
                <div className="API">
                    <h2>API consumida:</h2>
                    <a href="https://randomuser.me/api/"><h4>https://randomuser.me/api/</h4></a>
                </div>
            </div>
        </>
    )
}

export default Author