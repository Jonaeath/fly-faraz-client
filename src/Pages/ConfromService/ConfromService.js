import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Context/AuthProvider/AuthProvider';
import ServiceRow from './ServiceRow';

const ConfromService = () => {
    const {user} = useContext(authContext);
    const [conformService, seTconformServices] = useState({});
    
    // Load booking data from Mongodb for make booking list
    useEffect(() => {
      if(user?.email){
        fetch(`http://localhost:4000/bookingData?email=${user?.email}`,{
          headers:{
            authorization: `Bearer ${localStorage.getItem('new-token')}`
          }
        })
        .then(res => res.json())
        .then(data => seTconformServices(data))
        .catch(error => console.log(error))
      }
        
    }, [user?.email])


    

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure?..You want to cancel this Order')
        if(proceed){
          fetch(`http://localhost:4000/bookingData/${id}`,{
            method:'DELETE'
          })
          .then(res =>res.json())
          .then(data=>{
            console.log(data);
            if(data.deletedCount > 0){
                alert('deleted successfully');
                const remaining = conformService.filter(odr => odr._id !== id);
                seTconformServices(remaining);
            }
          })
        }
      }

      const handelApproved = (id) =>{
        fetch(`http://localhost:4000/bookingData/${id}`,{
            method:'PATCH',
            headers:{
              'content-type':'application/json'
            },
            body: JSON.stringify({status:'Approving'})
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data);
          if(data.modifiedCount > 0){
            const remaining = conformService.filter(odr => odr._id !== id);
            const approving = conformService.filter(odr => odr._id === id);
            approving.status = "Approving"

            const newBooking = [approving,...remaining];
            seTconformServices(newBooking);

          }
        })

      }


    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
   
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th className='font-bold text-xl'>Service Name & Price</th>
        <th className='font-bold text-xl'>Customer Name</th>
        <th className='font-bold text-xl'>Phone No</th>
        <th className='font-bold text-xl'>Message</th>
      </tr>
    </thead>
    <tbody>
        {  
            conformService?.length>0 &&
            conformService?.map(bookingService=><ServiceRow
            key={bookingService._id}
            bookingService = {bookingService}
            handleDelete = {handleDelete}
            handelApproved = {handelApproved}
            ></ServiceRow>)
        }
    </tbody>
    
    
  </table>
</div>
        </div>
    );
};

export default ConfromService;