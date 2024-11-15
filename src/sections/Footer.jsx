// import React from 'react'
// import { copyrightSign } from "../assets/icons";
import { socialMedia, footerLinks } from "../constants"
import sensorLogoWhite from '../assets/images/motion_sensor_whitelogo.jpeg';


const Footer = () => {
    return (
        <footer className='max-container'>
            <div className='flex justify-between items-start flex-wrap lg:flex-row max-lg:flex-col max-lg:items-center'>
                <div className='flex flex-col items-start max-lg:items-center'>
                    <a href="/">
                        <img src={sensorLogoWhite} alt="footerLogo" width={150} height={46} />
                    </a>
                    <p className='mt-6 text-[16px] leading-7 font-montserrat text-white-400 sm:max-w-sm text-center lg:text-left'>
                        Explore cutting-edge motion sensors for precision and innovation in every movement.
                    </p>


                    <div className='flex items-center gap-5 mt-8 justify-center'>
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
                <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap max-lg:flex-col max-lg:items-center pt-10 lg:pt-0'>
                    {footerLinks.map((section) => (
                        <div key={section}>
                            <h4 className='text-center text-white font-montserrat text-2xl leading-normal font-medium mb-6 lg:text-left'>{section.title}</h4>
                            <ul className={`text-center ${section.title === 'Products' || section.title === 'Help' ? 'lg:text-left' : ''} lg:text-left lg:pt-0`}>
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

export default Footer;
