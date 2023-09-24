import React, { useEffect, useState } from 'react';

const ServiceRow = ({bookingService,handleDelete,handelApproved}) => {
    const {_id,serviceName,price,customer,phone,service,status} = bookingService;
    const [orderBookins,setOrderbooking]=useState({});
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(()=>{
      if(service){
        setIsLoading(true)
        fetch(`http://localhost:4000/flyData/${service}`)
        .then(res=>res.json())
        .then(data=>setOrderbooking(data))
        .catch(error => console.log(error)).finally(()=> setIsLoading(false))
      }
    },[service])

if(isLoading){
  return <p>Loading...</p>
}

    return (
      <tr>
      <th>
        <label>
          <button onClick={()=> handleDelete(_id)} className='btn'>X</button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-12 h-12">
         
              {
                orderBookins?.img &&
              <img className='rounded-xl' src={orderBookins?.img} alt="" />
              }
      
                
            </div>
          </div>
          <div>
            <div className="font-bold">{serviceName}</div>
            <div className="text-sm">Price:${price}</div>
          </div>
        </div>
      </td>
      <td className="font-bold">
        {customer}
        <br/>
      </td>
      <td className="font-bold">{phone}</td>

      <th>
        <button onClick={()=>handelApproved(_id)} className="btn btn-ghost btn-xs">{status? status : 'pending'}</button>
      </th>
    </tr>
    );
};

export default ServiceRow;