import React, { useState, useEffect } from 'react';
import '../Styles/Email.css'
import Navbar from './Navbar'

function Email() {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
      const fetchUserData = async () => {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        setUserData(data.results[0]);
      };
  
      fetchUserData();
    }, []);
  
    if (!userData) {
      return <div>Cargando Contenido</div>;
    }

    return (
        <>
            <div className="email" id='Emails'>
                <h2>Emails</h2>
                <p>{`Email : ${userData.email}`}</p>
                <p>{`Email : ${userData.email}`}</p>
                <p>{`Email : ${userData.email}`}</p>
                <p>{`Email : ${userData.email}`}</p>
            </div>
        </>
    )
}

export default Email