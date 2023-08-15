import React from 'react'

const Button = ({ styles }) => {
  return (
    <button type="button" className={`py-5 px-6 bg-blue-gradient font-popins font-medium text-[18] text-primary outline-none ${styles} rounded-[10px]`}>Get Started</button>
  )
}

export default Button 