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
        <div className='ml-9 pb-6 '>
            <h1 className='text-4xl font-bold text-center pb-1'>Services</h1>
            <h1 className='text-xl font-bold text-center pb-5'>Service Oriented Companies There are many organizations as well as companies who provide service widely in Bangladesh</h1>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
            {
                sliceService.map(service=><DisplayService
                    service = {service}
                    key = {service._id} 

                    ></DisplayService>)
            }

            </div>
        </div>
    );
};

export default Services;