const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
    return (
        <button className={`hover:bg-black hover:border-black flex justify-center items-center gap-2 px-7
        py-4 border font-montserrat text-lg leading-none rounded-full
        ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor} hover:border-coral-red hover:bg-coral-red hover:text-white` : `bg-coral-red text-white border-coral-red`} rounded-full ${fullWidth && 'w-full'}`}>
            {label}
            {iconURL && <img src={iconURL} alt="arrow"
                className='ml-2 rounded-full w-5 h-5' />}
        </button >
    )
}

export default Button