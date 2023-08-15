import React from 'react'
import styles from '../style';
import Button from './Button';
const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
<div className="flex-1 flex flex-col">
  <h2 className={`${styles.heading2} text-white'} `}>
    Let's try our services now!
  </h2>
  <p className={`${styles.paragraph} max-w-[500px] mt-5` }>Let's begin the journey. Suns in plenitude are present there.
And there all is brightness and the daylight of all days.Harvesting hope,
planting despair
ensures a community in need
in search of repair.By the lake of sorrow;
reside the newcomers awaiting tomorrow
amidst embers of sorrow. See the pasture of welcome
open arms forge social fulcrum.</p>
</div>

<div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
  <Button className />

</div>
  </section>
)



export default CTA