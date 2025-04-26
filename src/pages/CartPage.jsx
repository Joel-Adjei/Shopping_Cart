import { Link } from 'react-router'
import { AiOutlineDelete } from "react-icons/ai";
import CartItem from '../components/CartItem'
import { useCart } from '../context/CartContext'

const CartPage = () => {
    const {
        cart,
        updateQuantity,
        removeItem,
        total,
        itemCount,
        resetItemCount
    } = useCart()

    return (
        <>
            <h1 className="text-3xl text-orange-500 font-bold mb-8">Your Cart</h1>

            {cart.length === 0 ? (
                <div className="bg-white text-center w-full shadow-md rounded-lg py-15">
                    <p className="text-2xl mb-7">Your cart is empty</p>
                    <Link
                        to="/"
                        className="p-3 bg-orange-500 rounded-lg hover:bg-orange-700 text-white"
                    >
                        Continue Shopping
                    </Link>
                </div>
            ) : (
                <div className=" rounded-lg overflow-hidden">
                    {cart.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                            onUpdateQuantity={updateQuantity}
                            onRemove={removeItem}
                        />
                    ))}

                    <button
                        onClick={resetItemCount}
                        className={"flex items-center gap-2 bg-orange-400 hover:bg-orange-600 cursor-pointer text-gray-100 font-medium py-2 px-4 rounded-lg mt-6"}>
                        <span> <AiOutlineDelete size={20} /></span>Clear
                    </button>

                    <div className="w-full h-1 bg-gray-300 mt-8"> </div>

                    <div className="bg-white p-4 mt-5 border-2 border-gray-200 rounded-lg shadow-md">
                        <div className="flex sm:flex-row flex-col justify-between items-center">
                            <div>
                                <p className="font-semibold">Total Items: {itemCount}</p>
                                <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
                            </div>
                            <Link
                                to="/checkout"
                                className="bg-orange-500 mt-4 sm:mt-0 text-white px-6 py-2 rounded hover:bg-orange-600 transition"
                            >
                                Proceed to Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}

export default CartPage