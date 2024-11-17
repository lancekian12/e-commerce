import { useState } from 'react';
import Button from '../components/Button';

const Subscribe = () => {
    // State to hold form data
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        address: '',
        message: ''
    });

    // State to handle loading and success/error messages
    const [status, setStatus] = useState('');

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if all fields are filled
        if (!formData.fullName || !formData.email || !formData.address || !formData.message) {
            setStatus('Please fill in all fields.');
            return;
        }

        // Set status to loading
        setStatus('Sending message...');

        try {
            // Send form data to the backend
            const response = await fetch('https://sending-email-ten.vercel.app/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    type: 'contact',
                    fullName: formData.fullName,
                    email: formData.email,
                    address: formData.address,
                    message: formData.message
                })
            });

            // Check if the response was successful
            if (response.ok) {
                setStatus('Message sent successfully!');
                // Optionally reset the form
                setFormData({
                    fullName: '',
                    email: '',
                    address: '',
                    message: ''
                });
            } else {
                setStatus('Failed to send message.');
            }
        } catch (err) {
            setStatus('Error sending message. Please try again later.', err);
        }
    };

    return (
        <section className='max-container flex justify-center items-center max-lg:flex-col gap-10' id="contact-us">
            <div className='w-full max-w-3xl px-4'>
                <h3 className='text-3xl md:text-4xl text-center leading-snug font-palanquin font-bold'>
                    Reach Us By <span className='text-coral-red'>Contacting Us</span>
                </h3>
                <p className="text-center text-lg mt-4 text-accent">
                    Feel free to get in touch with us to acquire our services. Once you&apos;re ready, we&apos;ll guide you through the process and ensure you&apos;re set to return to your home with everything you need.
                </p>

                {/* Form with input fields */}
                <form onSubmit={handleSubmit} className='mt-8 flex flex-col gap-6 p-8 sm:border sm:border-slate-gray rounded-lg shadow-lg bg-white'>
                    {/* Name Input */}
                    <input
                        type="text"
                        placeholder='Your Name'
                        className='input px-4 rounded-lg border-2 border-slate-gray focus:border-coral-red transition-colors'
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                    <hr />

                    {/* Email Input */}
                    <input
                        type="email"
                        placeholder='yourname@example.com'
                        className='input px-4 rounded-lg border-2 border-slate-gray focus:border-coral-red transition-colors'
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <hr />

                    {/* Address Input */}
                    <input
                        type="text"
                        placeholder='Address'
                        className='input px-4 rounded-lg border-2 border-slate-gray focus:border-coral-red transition-colors'
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                    <hr />

                    {/* Message Textarea */}
                    <textarea
                        placeholder='Your Message'
                        className='input py-3 px-4 rounded-lg border-2 border-slate-gray focus:border-coral-red transition-colors resize-none'
                        rows="6"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    {/* Status Message */}
                    {status && <p className="text-center text-lg mt-4">{status}</p>}

                    {/* Submit Button */}
                    <div className='flex justify-center pt-5'>
                        <Button label="Send Message" className="w-full sm:w-auto bg-coral-red text-white py-3 px-6 rounded-lg transition hover:bg-coral-red-dark" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Subscribe;
