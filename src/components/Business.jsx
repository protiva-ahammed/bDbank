import {features} from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const FeatureCard = ({icon,title,content,index})=>(
  <div className={`flex flex-row p-5 rounded-[20px] ${index !== features.length-1}? "mb-6":"mb-0"} feature-card`}>
<div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
  <img src={icon} alt ="icon" className="w-[50%] h-[50%] object-contain" />
</div>

<div className="flex-1 flex flex-col ml-3">
  <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
    {title}
  </h4>
  <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[23px] mb-1">
    {content}
  </p>
</div>
  </div>
)
const Business = () =>  (
    <section id="features" className={layout.sectionInfo}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>You earn the money, <br className="sm:block hidden"></br> We will manage for you</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit,
         earning rewards and aving money. But with hundreds of 
         credit cards on the market we understand your demands 
         and what you need to improve more. So decision is your 
         would you like to join us ? Is it then let us help you to achieve more.</p>

         <Button styles="mt-10">

         </Button>
      </div>


      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature,index)=>(
          <FeatureCard key={feature.id} {...feature}/>
        ))}
      </div>
    </section>
    
  )


export default Business