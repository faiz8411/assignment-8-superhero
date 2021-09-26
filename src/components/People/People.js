import React, { useEffect, useState } from 'react';
import Addcart from '../Addcart/Addcart';
import Rich from '../Rich/Rich';
import './People.css'

const People = () => {
    const [richest, setRich] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('./richman.json')
            .then(res => res.json())
            .then(data => setRich(data))
    }, [])

    const handleAddToCart = (rich) => {
        const newCart = [...cart, rich]
        setCart(newCart)
    }
    return (
        <div className="container">
            <div className="grid">



                {
                    richest.map(rich => <Rich
                        key={rich.id}
                        rich={rich}
                        handleAddToCart={handleAddToCart}
                    ></Rich>)
                }


            </div>
            <div className="cart">
                <Addcart cart={cart}></Addcart>

            </div>

        </div>
    );
};

export default People;