import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';

const CheckoutForm = ({booking}) => {
    const { price, title } = booking;
    
    const stripe = useStripe()
    const elements = useElements();

    const { users } = useAuth();

    const [error, setError] = useState('')
   
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [clientSecret, setClientSecret] = useState('');


    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({price})
        })
            .then(res => res.json())
        .then(data => setClientSecret(data.clientSecret))
    },[price])



    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }

        setProcessing(true)

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if (error) {
          
            setError(error.message);
            setSuccess('')
        }
        else {
            setError('')
            console.log(paymentMethod);
        }

        //payment intent
        const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                    name: title,
                    email: users.email
                },
              },
            },
        );
        
        if (intentError) {
            setError(intentError.message)
            setSuccess('')
        }
        else {
            setError('')
            setSuccess('your payment successfully')
            console.log(paymentIntent);
            setProcessing(false) 
        }
    }

    return (
        <div>
            {error && 
            <p className="text-yellow-800"> {error} </p>
            }
            {success && 
            <p className="text-green-800"> {success} </p>
            }
                <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                    style: {
                        base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                        },
                        invalid: {
                        color: '#9e2146',
                        },
                    },
                    }}
                />
                {processing ? "should be spinner" : <button className="bg-red-800 text-yellow-50 p-3 rounded-md" type="submit" disabled={!stripe}>
                    Pay {booking.price}
                </button>

                }
                </form>
        </div>
    );
};

export default CheckoutForm;