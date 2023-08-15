import React from 'react'
import styles,{layout} from '../style';
import Button from './Button';
import card from '../assets/card.png'

const CardDeal = () =>  (

  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2>Find a better card deal <br className="sm:block hidden"/> in a few easy steps.

      </h2>
      <p className={`${styles.paragraph} max-w[470px] mt-3`}>
      Earn 10% Cash Back on purchases made through Uber & Uber Eats, plus complimentary Uber One membership statement credits .
      Earn 5% cash back on everyday purchases at different places each quarter like Amazon.com, grocery stores, restaurants, and gas stations, up to the quarterly maximum when you activate.
      Earn 3% Cash Back on dining and at grocery stores (excluding superstores like Walmart® and Target®)
      </p>

      <Button styles="mt-10" />

      <img src={card} alt="card" className="w-[100%] h-[100%]"></img>
    </div>

  </section>

  )


export default CardDeal