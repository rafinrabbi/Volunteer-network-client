import React from 'react';
import {fakeData} from '../fakeData/fakeData';

const Dataload = () =>{
    const handleData = () => {
        fetch('https://secret-caverns-37131.herokuapp.com/-37131.herokuapp.com/addEvent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(fakeData)
    })
    
};
return(
    <div>
        {/* <button onClick= {handleData}>0</button> */}
    </div> 
);
}
export default Dataload;