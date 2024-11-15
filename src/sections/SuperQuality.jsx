import Button from '../components/Button'
import motionSensor from '../assets/images/motion_sensor.png';

const SuperQuality = () => {
  return (
    <section id="about-us" className='flex justify-between items-center 
    max-lg:flex-col gap-10 w-full max-container'>
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          We provide You <span className='text-coral-red'>High </span>
          <span className='text-coral-red'>Quality</span> Motion Sensors
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Our motion sensors offer the perfect blend of precision, reliability,
          and cutting-edge technology, designed to provide top-tier performance in every setting.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          With advanced features and a sleek design, we ensure the best experience for every application.
        </p>
        <div className='mt-11'>
          <Button label='View Details' />
        </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img src={motionSensor} alt="motion sensor" width={570} height={522}
          className='object-contain' />
      </div>
    </section>
  )
}

export default SuperQuality
