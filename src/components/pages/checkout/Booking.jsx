import { useLoaderData } from "react-router-dom";
import Header from "./header/Header";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Booking = () => {
  const service = useLoaderData();
  const {user} = useContext(AuthContext);
  const { _id, service_id,img, title, price } = service;

  const handleCheckOut = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const order = {
        customerName: name,
        email,
        date,
        img,
        service_id: _id,
        service: title,
        price:price
    }

   fetch('http://localhost:5000/bookings',{
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(order)
   })
   .then(res => res.json())
   .then(data => {
    console.log(data);
    if(data.insertedId){
      alert('service book successfully')
      form.reset();
    }
   })

    console.log(order);
    
    
  };
  return (
    <div>
      <Header />
      <div>
        <h2 className="text-center text-3xl font-bold">
          CheckOut Service: {title}
        </h2>
      </div>
      <div className="bg-gray-200 p-4 lg:p-20 mt-32 w-full h-[80vh]">
        <form onSubmit={handleCheckOut}>
          <div className="mb-5 lg:flex">
            <input
              className=" border outline-none mb-4 w-full  h-16 pl-2  rounded-lg lg:w-1/2 lg:mr-2  lg:mb-2"
              type="text"
              name="name"
              placeholder=" Name"
              required
            />
            <input
              className="border outline-none w-full  h-16 pl-2 pr-3 rounded-lg lg:w-1/2"
              type="date"
              name="date"
              required
            />
          </div>
          <div className="lg:flex">
            <input
              className="border outline-none w-full  h-16 pl-2 mb-2 rounded-lg lg:w-1/2 lg:mr-2"
              type="email"
              name="email"
              defaultValue={user?.email}
              readOnly
              
            />

            <input
              className="border mb-3 outline-none w-full  h-16 pl-2 rounded-lg lg:w-1/2"
              type="text"
              name="price"
              defaultValue={`$ ${price}`}
              readOnly
            />
          </div>
          <div>
            <input
              className="w-full btn btn-primary text-white"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
