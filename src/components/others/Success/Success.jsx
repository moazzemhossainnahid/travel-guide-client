
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Success = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/orders/${id}`)
            .then(res => console.log(res));
    }, [id]);

    console.log("item",item);

    const validatePayment = () => {
        const data = {
            tran_id: id,
            val_id: item?.val_id
        }

        axios.post(`http://localhost:5000/api/v1/ssl/validate`, data)
            .then(res => {
                if (res.data) {
                    // alert("Order placed successfully");
                    Swal.fire({
                        title: "Success!",
                        text: "Order placed successfully",
                        icon: "success",
                        confirmButtonText: "Ok",
                    });

                    navigate('/');
                }
            })




    }
     
    return (
        <main className='overflow-hidden bg-white w-full h-full'>
            <div className="py-10 h-full w-full flex flex-col justify-center items-center gap-2">
                <h1  style={{ fontFamily: "Rajdhani" }} className='text-xl font-bold'><span className="text-green-500 text-xl md:text-3xl">Payment Successful</span>.</h1>
                <div className="flex flex-col md:flex-row justify-center items-center gap-3 w-full h-fit mx-auto">

                    <div className="p-5 w-full md:w-3/5 space-y-2 mx-auto text-dark">
 
                        <h3 className='text-2xl'>Enjoy your Order</h3>
                        <h1 className='text-xl font-bold' style={{ color: '#ff4d30' }}>{item?.product_name}</h1>
                        <p className="text-info">{item?.product_profile}</p>
                        <p className='text-secondary pb-3'>Please Confirm Your Payment for Success to Book Your Services!</p>
                        {/* <p className='text-secondary'>Your payment journey with SSL Commerz has been successfully completed. We are delighted to confirm the secure and seamless processing of your payment. Whether it's for products, services, or subscriptions, our advanced SSL encryption technology ensures the confidentiality of your data throughout the transaction.</p> */}
                        {/* <button onClick={() => navigate('/')} className="btn btn-sm text-black btn-warning" >Back to Home</button> */}
                        <button className="btn btn-outline btn-info text-white px-7" onClick={validatePayment}>Click to Confirm</button>


                    </div>
                    <div className="flex justify-center w-full h-fit md:w-2/5 p-5 mx-auto">
                        <img src="https://i.ibb.co/3CV36ch/mobile-card-payment-successful-5796098-4841252.webp" alt="" className="img-fluid w-[80%] object-cover h-full" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Success;