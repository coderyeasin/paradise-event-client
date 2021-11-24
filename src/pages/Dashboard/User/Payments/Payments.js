import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CheckoutForm from './CheckoutForm';

//stripe--------------must uses --component outside---stripe recommanded it
const stripePromise = loadStripe('pk_test_51JvyZMFYpe3ufKavN2WRucUYZlm9ofrBBWF4IvQxrDJtuj9PRkgebf7owAHbdSvCAbXVcqS6MsuDGsgQuA0hQlUn00G7p0ReHs');


const Payments = () => {
    const { id } = useParams();
    const [booking, setBooking] = useState({})
    


    useEffect(() => {
        fetch(`http://localhost:5000/payments/${id}`)
            .then(res => res.json())
        .then(data => setBooking(data))
    }, [id])
    
    return (
        <div>
            <h3>PLease pay for {booking.title} at {booking?.date} {booking?.location}</h3>
            <h3>{booking?.price} </h3>

            <Elements stripe={stripePromise}>
                <CheckoutForm
            booking={booking}
                />
            </Elements>

           {/* {booking?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
            booking={booking}
                />
            </Elements>} */}
            
        </div>
    );
};

export default Payments;

/*
1. install stripe and stripe-react
2. set publishable key
3. Elements
4. Checkout Form
-----
5. Create payment method
6. server: create payment Intent api
7. Load client secret
8. ConfirmCard payment
9. handle user error
*/