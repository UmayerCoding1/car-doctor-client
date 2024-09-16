import React from 'react';

const BookingRow = ({booking,handleDelete,handleBookingConfirm}) => {
  const {_id,customerName,email,date,img,service_id,service,price,status}= booking;


    return (
      <tr>
        <th>
        <button
         onClick={() => handleDelete(_id)}
        className="btn btn-circle btn-sm btn-outline">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask  h-24 w-24">
                <img
                  src={img}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{service}</div>
              <div className="text-sm opacity-50">{service_id}</div>
            </div>
          </div>
        </td>

        <td>
         {date}
        </td>

        <td>
        <div className="font-bold">{customerName}</div>
        </td>
        <td>{email}</td>

        <td className='font-bold'>
          {price}
        </td>
        <th>
          {
        status === 'confirm' ? <button className="btn bg-[#0cd849]  text-center text-white ">Confirmed</button> :
<button
onClick={ () => handleBookingConfirm(_id)}
className="btn bg-[#FF3811]  text-center text-white ">Pending</button>
          }
        </th>
      </tr>
    );
};

export default BookingRow;