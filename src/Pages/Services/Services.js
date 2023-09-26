import React, { useEffect, useState } from 'react';
import DisplayService from './DisplayService';
import './Service.css'

const Services = () => {
    const [services,setService] = useState([]);
    const [count,setCount] = useState(0)
    const [page,setPages] = useState(0)
    const [size,setSize] = useState(3)
    

   useEffect (()=> {
    const url = `https://fly-faraz-server-1c0c1w9hj-jonaeath.vercel.app/flyData?page=${page}&size=${size}`
        fetch(url)
        .then(res=>res.json())
          .then(data=>{
            setCount(data.count);
            setService(data.flyData);
          })

   },[page,size])

   
const pages = Math.ceil(count/size);

//    const sliceService = services.slice(0,3);

    return (
        <div className='ml-9 pb-6 '>
            <h1 className='text-4xl font-bold text-center pb-1'>Services</h1>
            <h1 className='text-xl font-bold text-center pb-5'>Service Oriented Companies There are many organizations as well as companies who provide service widely in Bangladesh</h1>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
            {
                services?.map(service=><DisplayService
                    service = {service}
                    key = {service._id} 

                    ></DisplayService>)
            }

            </div>
            <div className='pagination'>
                {   
                    [...Array(pages).keys()].map(number =><button
                    key={number}
                    className={page === number && 'selected'}
                    onClick={()=>setPages(number)}
                    >
                     {number + 1}   
                    </button>)
                }
            </div>
        </div>
    );
};

export default Services;