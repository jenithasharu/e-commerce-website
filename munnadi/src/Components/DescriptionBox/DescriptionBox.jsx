import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Our product is built with precision and care, ensuring top-notch quality every time. It’s designed to simplify your daily routine while delivering lasting performance. With innovation at its core, it brings convenience and reliability together. Experience the difference that truly makes life easier.</p>
            <p>This product is thoughtfully designed to blend style with functionality. It enhances your everyday experience by offering both reliability and ease of use. Built with premium quality, it ensures durability you can count on. A perfect choice for those who value innovation and comfort.</p>
        </div>
    </div>
  )
}

export default DescriptionBox