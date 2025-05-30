import React from 'react'
import './MyOrders.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { hidePopup2 } from '../features/popupSlice';

function MyOrders() {
  const dispatch = useDispatch();
  

  return (
    <>
   <div className='myorder'>
    <div className='order-list'>
        <div className='order-top'>
            <h1>My Orders</h1>
            <FontAwesomeIcon icon={faXmark} onClick={()=>dispatch(hidePopup2())} />
        </div>
        <div className='list1'>
            <img src='https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-1.jpg' />
            <div className='list-des'>
                <p><strong> Service</strong> : Web Development</p>
                <p><strong> Package</strong> : Basic Package</p>
                <p><strong> Price</strong> :29,999</p>

            </div>


        </div>
        <div className='list1'>
            <img src='https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-1.jpg' />
            <div className='list-des'>
                <p><strong> Service</strong> : Web Development</p>
                <p><strong> Package</strong> : Basic Package</p>
                <p><strong> Price</strong> :29,999</p>

            </div>


        </div>
        <div className='list1'>
            <img src='https://demo.awaikenthemes.com/weebix/wp-content/uploads/2024/04/service-img-1.jpg' />
            <div className='list-des'>
                <p><strong> Service</strong> : Web Development</p>
                <p><strong> Package</strong> : Basic Package</p>
                <p><strong> Price</strong> :29,999</p>

            </div>


        </div>
    </div>


   </div>

    </>
  )
}

export default MyOrders