import React from 'react'
import '../../componenets/brand/brand.css'
import {google,slack,atlassian,dropbox,shopify} from '../../import'
const Brand = () => {
  return (
    <div className='gpt3__brand section padding'>
      <div>
        <img src={google} alt="sfsf" />

      </div>
      <div>
        <img src={slack} alt="sfsf" />
        
      </div>
      <div>
        <img src={atlassian} alt="sfsf" />
        
      </div>
      <div>
        <img src={dropbox} alt="sfsf" />
        
      </div>
      <div>
        <img src={shopify} alt="sfsf" />
        
      </div>
      
    </div>
  )
}

export default Brand
