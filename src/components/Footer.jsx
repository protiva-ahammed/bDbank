import React from "react";
import bd from "../assets/bd.svg";
import styles from "../style";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col w-full`}>
    <div className={`${styles.flexStart} w-full flex-col md:flex-row  mb-8`}>
      <div>
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            src={bd}
            alt="bDbank"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} ${styles.flexCenter} w-full mt-4 max-w-[310px]`}>
            A new way to make the payments easy, reliable & secure
          </p>
        </div>
        <div className="flex justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLinks) => (
            <div
              key={footerLinks.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins flex-row font-medium text-[18px] leading-[27px] text-white">
                {footerLinks.title}
              </h4>
              <ul className={`list-none mt-4`}>
                {footerLinks.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer 
                    
                    ${
                      index !== footerLinks.links.length - 1 ? "mb-4" : "mb:0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3r45]">
        <p
          className="font-poppins font-normal text-center text-[18px]
           leading-[27px] mb-3 text-white"
        >
          2023 BDbank. All Right Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain carsor pointer ${
                index !== socialMedia.length - 1 ? "mr-7" : "mr-0"
              }`}
            ></img>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Footer;
