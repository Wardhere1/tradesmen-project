import React from 'react'
import { BrowserRouter, Routes, Route,Link} from "react-router-dom";

export const CustomerConfirmationPage = ({customerInfo}) => {
    return (
        <div className='confirmation-page-container'>
            <div className='confirmation-card'>
                <div className='confirmation-details'>
                    <p>{`Postcode: ${customerInfo.postcode}`}</p>
                    <p>{`You requested a tradesperson for a ${customerInfo.customer_service} job`}</p>
                </div>
                <h1 className='confirmation-heading'>{`hey ${customerInfo.firstname},we'll locate a tradesperson for you who will contact you shortly`}</h1>
                <p>{`Brief Description: ${customerInfo.brief_description}`}</p>
                <p>{`Additional_comments: ${customerInfo.additional_comments ? customerInfo.additional_comments : 'none'}`}</p>
                <div className='container-banner'>Our Guarantee</div>
                <Link className="links" to='#'>Cancel</Link>
            </div>
        </div>
    )
}
