import React from 'react';

const ServiceRow = ({service}) => {
  
    const {serviceName,price,customer,phone,message} = service; 

    return (
        <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold text-primary-content">{serviceName}</div>
              <div className="text-sm text-primary-content">Price:${price}</div>
            </div>
          </div>
        </td>
        <td className="font-bold text-primary-content">
          {customer}
          <br/>
        </td>
        <td className="font-bold text-primary-content">{phone}</td>
        <th>
          <button className="btn btn-ghost btn-xs text-primary-content">{message}</button>
        </th>
      </tr>
    );
};

export default ServiceRow;