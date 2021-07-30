import React from 'react'
import Itemcard from './Itemcard';
import data from './data';
import './Cart.css'

const Hero = () => {

    return (
        <div>
            <h1 className="text-center heading">Shopping Cart <i class="fas fa-shopping-cart"></i></h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {data.productData.map((item, index) => {
                        return (

                            <Itemcard
                                img={item.img}
                                title={item.title}
                                desc={item.description}
                                price={item.price}
                                item={item}
                                key={index} />
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default Hero;