import React from 'react'
import { Link } from 'react-router'
import { useCart } from '../context/CartContext'

import { BiCart, BiShoppingBag } from "react-icons/bi";

const Navbar = () => {
    const { itemCount } = useCart()

    return (
        <nav className="fixed top-0 z-34 bg-blue-500 w-screen h-20 flex shadow-md px-7">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <Link
                    to="/"
                    className="text-xl text-white hover:text-orange-400 hover:bg-white rounded-lg p-3 flex items-center gap-2 font-bold">
                    <BiShoppingBag size={30} />
                    ShopCart
                </Link>
                <Link to="/cart" className="relative flex bg-white items-center hover:bg-gray-200 rounded-lg p-3">
                    <p
                        className="absolute top-1 right-1 ml-1 bg-red-500 text-red-100 rounded-full size-5 flex items-center justify-center text-xs">
                        {itemCount}
                    </p>
                    <BiCart size={36} color={"orange"} />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar