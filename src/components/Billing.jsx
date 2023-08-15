import React from 'react'
import { apple, bill, google} from '../assets';
import styles,{ layout } from '../style';



const Billing = () => (
  
  <section id="product" className={layout.sectionReverse}>
<div className={layout.sectionImgReverse}>
<img src ={bill} alt='billing' className="w-[100%] h-[100%] relative z-[5]" />

<div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />

<div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient"/>
</div>


<div className={layout.sectionInfo}>
<h2 className={styles.heading2}>Easily control your <br className="sm:block hidden" />
billing & invoicing.

</h2>

<p className={`${styles.paragraph} max-w-[4] mt-5`}>
Optimize receivables and accelerate cash 
flow by automating billing and invoicing processes with HB’s cloud
 accounting software. Transactions are posted to the GL automatically, 
 which saves time, helps avoid error-prone manual data entry and ensures 
 AR data is always up to date
</p>

<div className='flex flex-row flex-wrap sm;mt-10 mt-6'>
  <a href="https://apps.apple.com/my/app/citytouch/id645463050" target="_blank">
  <img src={apple}  alt="apple-store" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"></img>
  </a>
  <a href="https://play.google.com/store/apps/details?id=com.isdd.bb.org&pcampaignid=web_share" target="_blank">
  <img src={google} alt="google-play" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer"></img>
  </a>
  
</div>
</div>

</section>
  
  )
  

export default Billing