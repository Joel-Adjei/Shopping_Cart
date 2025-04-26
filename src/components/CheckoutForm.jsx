import React, { useState } from 'react'
import { useCart } from '../context/CartContext'
const CheckoutForm = ({ cart, total, onPlaceOrder }) => {
    const [paymentMethod, setPaymentMethod] = useState('credit')
    const [address, setAddress] = useState('')

    const { resetItemCount } = useCart();

    const handleSubmit = (e) => {
        e.preventDefault()
        onPlaceOrder({
            paymentMethod,
            address,
            total,
            items: cart
        })
        resetItemCount();
    }

    return (
        <div className="max-w-md mt-20 mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6">Checkout</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Shipping Address</label>
                    <textarea
                        className="w-full px-3 py-2 border rounded"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 mb-2">Payment Method</label>
                    <div className="space-y-2">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                className="form-radio"
                                name="payment"
                                value="credit"
                                checked={paymentMethod === 'credit'}
                                onChange={() => setPaymentMethod('credit')}
                            />
                            <span className="ml-2">Credit Card</span>
                        </label>
                        <div
                            className={`${paymentMethod === 'credit'? "flex" : "hidden"} 
                            border-1 border-gray-200 rounded-lg mb-4`}>
                            <input
                                placeholder={"card number"}
                                required={paymentMethod === 'credit' && true}
                                type={"number"}
                                className={"flex-1 p-2 outline-0"} />
                        </div>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                className="form-radio"
                                name="payment"
                                value="paypal"
                                checked={paymentMethod === 'paypal'}
                                onChange={() => setPaymentMethod('paypal')}
                            />
                            <span className="ml-2">PayPal</span>
                        </label>
                        <div
                            className={`${paymentMethod === 'paypal'? "flex" : "hidden"} 
                            border-1 border-gray-200 rounded-lg mb-4`}>
                            <input
                                placeholder={"Number"}
                                required={paymentMethod === 'paypal' && true}
                                type={"number"}
                                className={"flex-1 p-2 outline-0"} />
                        </div>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                className="form-radio"
                                name="payment"
                                value="cash"
                                checked={paymentMethod === 'cash'}
                                onChange={() => setPaymentMethod('cash')}
                            />
                            <span className="ml-2">Cash on Delivery</span>
                        </label>
                    </div>
                </div>

                <div className="border-t pt-4 mb-4">
                    <div className="flex justify-between font-semibold">
                        <span>Total:</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
                >
                    Place Order
                </button>
            </form>
        </div>
    )
}

export default CheckoutForm