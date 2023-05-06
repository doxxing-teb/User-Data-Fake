import React, { useEffect, useState } from 'react';
import '../Styles/Users.css'
import Navbar from './Navbar'

function Users() {

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
        <br />
        <br />
            <h2>Informacion General</h2>
            <div className='Users' id='Users'>
                <img src={userData.picture.large} alt="User Avatar" />
                <h2>{`${userData.name.first} ${userData.name.last}`}</h2>
                <p>{`Nacionalidad : ${userData.location.country}`}</p>
                <p>{`Edad : ${userData.dob.age}`}</p>
                <p>{`Registrado el : ${userData.registered.date}`}</p>
                <p>{`Numero telefonico : ${userData.phone}`}</p>
            </div>
            <div className='Users'>
                <img src={userData.picture.thumbnail} alt="User Avatar" />
                <h2>{`${userData.name.first} ${userData.name.last}`}</h2>
                <p>{`Nacionalidad : ${userData.location.country}`}</p>
                <p>{`Edad : ${userData.dob.age}`}</p>
                <p>{`Registrado el : ${userData.registered.date}`}</p>
                <p>{`Numero telefonico : ${userData.phone}`}</p>
            </div>
            <div className="Users">
                <img src={userData.picture.medium} alt="User Avatar" />
                <h2>{`${userData.name.first} ${userData.name.last}`}</h2>
                <p>{`Nacionalidad : ${userData.location.country}`}</p>
                <p>{`Edad : ${userData.dob.age}`}</p>
                <p>{`Registrado el : ${userData.registered.date}`}</p>
                <p>{`Numero telefonico : ${userData.phone}`}</p>
            </div>
        </>
    );
}

export default Users