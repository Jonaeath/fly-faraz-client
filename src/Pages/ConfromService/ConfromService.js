import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Context/AuthProvider/AuthProvider';
import ServiceRow from './ServiceRow';

const ConfromService = () => {
    const {user} = useContext(authContext);
    const [conformService, seTconformServices] = useState({});

    useEffect(() => {
        fetch(`http://localhost:4000/bookingData?email=${user?.email}`)
            .then(res => res.json())
            .then(data => seTconformServices(data))
    }, [user?.email])

    // const handleDelete = id =>{
    //     const proceed = window.confirm('Are you sure?..You want to cancel this Order')
    //     if(proceed){
    //       fetch(`http://localhost:5000/orders/${id}`,{
    //         method:'DELETE'
    //       })
    //       .then(res =>res.json())
    //       .then(data=>{
    //         console.log(data);
    //         if(data.deletedCount > 0){
    //             alert('deleted successfully');
    //             const remaining = orders.filter(odr => odr._id !== id);
    //             setOrders(remaining);
    //         }
    //       })
    //     }
    //   }


    return (
        <div>
            <h1>{conformService?.length}</h1>
            <div className="overflow-x-auto">
  <table className="table">
   
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th className='font-bold text-xl text-primary-content'>Service Name & Price</th>
        <th className='font-bold text-xl text-primary-content'>Customer Name</th>
        <th className='font-bold text-xl text-primary-content'>Phone No</th>
        <th className='font-bold text-xl text-primary-content'>Message</th>
      </tr>
    </thead>
    <tbody>
        {  
            conformService?.length>0 &&
            conformService?.map(service=><ServiceRow
            key={service._id}
            service = {service}
            ></ServiceRow>)
        }
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default ConfromService;