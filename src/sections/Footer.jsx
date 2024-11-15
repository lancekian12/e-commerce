// import React from 'react'
// import { copyrightSign } from "../assets/icons";
import { socialMedia, footerLinks } from "../constants"
import sensorLogoWhite from '../assets/images/motion_sensor_whitelogo.jpeg';


const Footer = () => {
    return (
        <footer className='max-container'>
            <div className='flex justify-between items-start flex-wrap max-lg:flex-col'>
                <div className='flex flex-col items-start'>
                    <a href="/">
                        <img src={sensorLogoWhite} alt="footerLogo"
                            width={150} height={46} />
                    </a>
                    <p className='mt-6 text-[16px] leading-7 font-montserrat text-white-400 sm:max-w-sm'>
                        Explore cutting-edge motion sensors for precision and innovation in every movement.
                    </p>

                    <div className='flex items-center gap-5 mt-8'>
                        {socialMedia.map((icon) => (
                            // eslint-disable-next-line react/jsx-key
                            <a
                                href={icon.link}  // Use the link from the socialMedia array
                                target="_blank"   // Open the link in a new tab
                                rel="noopener noreferrer" // Security best practice
                                className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
                            >
                                <img src={icon.src} alt={icon.alt} width={24} height={24} />
                            </a>
                        ))}
                    </div>
                </div>
                <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
                    {footerLinks.map((section) => (
                        <div key={section}>
                            <h4 className='text-white font-montserrat text-2xl leading-normal font-medium mb-6'>{section.title}</h4>
                            <ul>
                                {section.links.map((link) => (
                                    // eslint-disable-next-line react/jsx-key
                                    <li className='mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray'>
                                        <a href={link.name}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer