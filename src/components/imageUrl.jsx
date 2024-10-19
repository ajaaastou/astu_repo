

import React from 'react'
import product from '../Products'

const ImageUrl = () => {
    return (

        <div>
            <img src={product.imageUrl} alt={product.name} style={{ width: '150px' }}/>
        </div>
    )
}   

export default ImageUrl