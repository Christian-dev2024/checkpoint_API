import './App.css';
import axios from "axios";
import React, { useState, useEffect } from 'react';

function UserList() {
    const [listUser, setListUser] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setListUser(res.data);
            })
            .catch(err => {
                console.error('Une erreur est survenue : ', err);
            });
    }, []);

    return (
        <div> 
            {listUser.map(user => (<div key={user.id} className='cardUser'>
                    <div className='content'>
                        <h3>{user.name}</h3>
                        <p>Nom d'Utilisateurs : {user.username}</p>
                        <p>address : {user.address.street}, {user.address.city}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default UserList;
