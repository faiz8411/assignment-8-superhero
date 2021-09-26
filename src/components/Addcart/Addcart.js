import React from 'react';
import './Addcart.css'

const Addcart = (props) => {
    const { cart } = props

    let total = 0;
    for (const rich of cart) {
        total = total + rich.salary
    }
    let salary = 0
    for (const rich of cart) {
        salary = rich.salary
    };


    // let name = ''
    // // for (const rich of cart) {
    // //     name = name + rich.name
    // // }

    return (
        <div className="addcart">

            <h4>Add people:{props.cart.length}</h4>
            <br />



            <br />
            <p >personal salary:{salary}</p>
            <br />
            <h5>total aded cost :{total}</h5>
            <ul>
                {
                    cart.map(rich => <li>{rich.name}</li>)
                }
            </ul>
            <button className="donate-btn">donate</button>
        </div>
    );
};

export default Addcart;