import React from 'react'
import { useCart } from 'react-use-cart'
import './Cart.css'


const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart()
    if (isEmpty) return <h1 className="text-center text-white heading-two">Your Cart is Empty</h1>
    return (
        <section className="py-4 container">

            <div className="row jusity-content-center">
                <div className="col-12">
                    <h5 className="text-white heading-four">You have {totalUniqueItems} Products. Total Items {totalItems} </h5>
                    <table className="table table-light table-hover m-0">
                        <tbody>
                            {items.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <img src={item.img} style={{ height: '3rem' }} />
                                        </td>
                                        <td>
                                            {item.title}
                                        </td>
                                        <td>
                                            {item.price}
                                        </td>
                                        <td>
                                            Quantity ({item.quantity})
                                        </td>
                                        <td >
                                            <div className="last-col">
                                                <button className="btn  btn-secondary ms-2" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                                <button className="btn  btn-secondary ms-2 " onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</button>
                                                <button className="btn  btn-danger ms-2 " onClick={() => removeItem(item.id, item.quantity - 1)}>Remove Item</button>
                                            </div>
                                        </td>
                                    </tr>)
                            })}
                        </tbody>
                    </table>
                </div>
                <div className="col-auto">
                    <button className="btn btn-light m-2" onClick={() => emptyCart()}>Clear Cart</button>
                    <button className="btn btn-warning m-2">Buy Now</button>
                </div>
                <div className="col-auto ms-auto">
                    <h2 className="text-center text-white m-2 heading-three">Total Price: $ {cartTotal}</h2>
                </div>
            </div>
        </section>
    )
}

export default Cart