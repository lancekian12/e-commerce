// import React from 'react'
import { footerLogo } from "../assets/images"
// import { copyrightSign } from "../assets/icons";
import { socialMedia, footerLinks } from "../constants"

const Footer = () => {
    return (
        <footer className='max-container'>
            <div className='flex justify-between items-start flex-wrap max-lg:flex-col'>
                <div className='flex flex-col items-start'>
                    <a href="/">
                        <img src={footerLogo} alt="footerLogo"
                            width={150} height={46} />
                    </a>
                    <p className='mt-6 text-[16px] leading-7 font-montserrat text-white-400 sm:max-w-sm'>Get shoes ready for the new
                        term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
                    <div className='flex items-center gap-5 mt-8'>
                        {socialMedia.map((icon) => (
                            // eslint-disable-next-line react/jsx-key
                            <div className='flex justify-center items-center w-12 h-12 bg-white rounded-full'>
                                <img src={icon.src} alt={icon.alt}
                                    width={24} height={24} />
                            </div>
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