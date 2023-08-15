import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section
    id="clients"
    className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
  >
    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16
     mb-6 relative z-[1]">
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rouned-full blue__gradient" />
      <h1 className={styles.heading2}>
        What people <br className="sm:block hidden" />
        says about us..
      </h1>

      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>
          By accepting the card payments you can grow your business anywhere on
          the earth
        </p>
      </div>
    </div>
    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
)

export default Testimonials;
