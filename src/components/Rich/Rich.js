
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


import './Rich.css'



const Rich = (props) => {
    // console.log(props)s
    const { name, country, img, salary, age, job, id } = props.rich

    return (
        <div className="cart-container">
            <div class="card">

                <img className="img-shape" src={img} alt="" />
                <div class="card-body">
                    <h3 class="card-title">{name}</h3>
                    <h5 class="card-text">live there: {country}</h5>
                    <h5 class="card-text">salary:${salary}</h5>
                    <h5>age:{age}</h5>
                    <h5>occupation:{job}</h5>
                    <h5>Rank:{id}</h5>

                </div>
                <button
                    onClick={() => props.handleAddToCart(props.rich)}
                    className="btn-regular"
                >{<FontAwesomeIcon icon={faShoppingCart} />}Add To Cart:</button>
                <div className="facebook-icon">
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-instagram-square"></i>
                </div>

            </div>

        </div>
    );
};

export default Rich;