import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../../Context/AuthProvider/AuthProvider';

const Booking = () => {
    const {_id,price,title} = useLoaderData();
    const {user} = useContext(authContext);
    const handelFormCheckout = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const city = form.city.value;
        const email = user?.email || 'Unregistered';
        const phone = form.phoneNumber.value;
        const message = form.message.value;

        const booking = {
            service: _id,
            serviceName: title,
            price,
            customer:name,
            customerCity:city,
            email,
            phone,
            message
        }

        if(phone.length > 10){
            alert('Your Phone number is valid')
        }
        else{
            alert('Phone number should ba 10 characters or longer');
        }

        fetch('http://localhost:4000/bookingData',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(booking)
        }) 
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert("Your Order is placed successfully")
                
            }

        })
        .catch(error =>console.error(error))
    }

    return (
        <form onSubmit={handelFormCheckout}>
            <h1 className='text-3xl text-center font-bold text-orange-600'>You want to Order: {title}</h1>
            <h2 className='text-2xl text-center font-bold text-blue-600'>Service Price: {price}</h2>
            <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-5 m-2'>
                <input type="text" name='name' placeholder="Name" className="input input-bordered input-primary w-full" required />
                <input type="text" name='city' placeholder="city" className="input input-bordered input-primary w-full" required />
                <input type="text" name='phoneNumber' placeholder="Phone Number" className="input input-bordered input-primary w-full" required />
                <input type="text" name='email' placeholder="Your Email" defaultValue={user?.email} className="input input-bordered input-primary w-full" readOnly />
            </div>
            <div className='flex justify-center items-center'>
            <textarea name='message' className="textarea textarea-success text-center w-4/5 h-40 mb-2" placeholder="message"></textarea>
            </div>
            <div className='flex justify-center items-center'>
            
             <input className='btn btn-warning mb-2' type="submit" value="Place Your Order"/>

            
            </div>

        </form>
    );
};

export default Booking;