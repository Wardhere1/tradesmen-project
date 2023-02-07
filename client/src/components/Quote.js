import React from 'react'

export const Quote = () => {
    return (
        <div className='quotes-section'>
            <div className='quotes-info'>
                <h1>How Tradesmatch works</h1>
                <p>Tell us what needs doing and where, and we'll find a local tradesperson for you</p>
            </div>
            <div className='quote-container'>
                <div className='quotes'>
                    <img className= 'quote-image'src="https://assets.localheroes.com/lh-ui/how-it-works/local-heroes-icon-phone-message-blue.svg" alt="Icon of a phone with message" />
                    <h2>Tell us what you need</h2>
                    <p>Let us know what job needs doing, get an online estimate and then choose a date and time that works for you</p>
                </div>
                <div className='quotes'>
                    <img className= 'quote-image'src="https://assets.localheroes.com/lh-ui/how-it-works/local-heroes-icon-clipboard-blue.svg" alt="Icon of a phone with message" />
                    <h2>We'll connect you to a tradesman</h2>
                    <p>We'll circle our large pool of tradesman to find the best suited tradesperson for you!</p>
                </div>
                <div className='quotes'>
                    <img className= 'quote-image' src="https://assets.localheroes.com/lh-ui/how-it-works/local-heroes-icon-phone-payment-blue.svg" alt="Icon of a phone with message" />
                    <h2>Get a quote</h2>
                    <p>A hero in your local area will get in touch and give you a quote. If you're happy, you can accept the quote or cancel for free</p>
                </div>
            </div>
        </div>
    )
}

export default Quote
