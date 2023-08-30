import React, { useEffect, useState } from 'react';
import DisplayService from './DisplayService';

const Services = () => {
    const [services,setService] = useState([]);

   useEffect (()=> {
        fetch("service.json")
        .then(res=>res.json())
        .then(data=>setService(data))

   },[])

   const sliceService = services.slice(0,3);

    return (
        <div>
            <h1>This is service</h1>
            {
                sliceService.map(service=><DisplayService
                    service = {service}
                    key = {service._id} 

                    ></DisplayService>)
            }
        </div>
    );
};

export default Services;