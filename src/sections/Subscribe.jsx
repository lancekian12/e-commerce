import Button from '../components/Button';

const Subscribe = () => {
    return (
        <section className='max-container flex justify-center items-center max-lg:flex-col gap-10' id="contact-us">
            <div className='w-full max-w-3xl px-4'>
                <h3 className='text-3xl md:text-4xl text-center leading-snug font-palanquin font-bold'>
                    Reach Us By <span className='text-coral-red'>Contacting Us</span>
                </h3>

                <form className='mt-8 flex flex-col gap-6 p-8 sm:border sm:border-slate-gray rounded-lg shadow-lg bg-white'>
                    {/* Name Input */}
                    <input
                        type="text"
                        placeholder='Your Name'
                        className='input px-4 rounded-lg border-2 border-slate-gray focus:border-coral-red transition-colors'
                        required
                    />
                    <hr />

                    {/* Email Input */}
                    <input
                        type="email"
                        placeholder='yourname@example.com'
                        className='input px-4 rounded-lg border-2 border-slate-gray focus:border-coral-red transition-colors'
                        required
                    />
                    <hr />

                    {/* Address Input */}
                    <input
                        type="text"
                        placeholder='Address'
                        className='input px-4 rounded-lg border-2 border-slate-gray focus:border-coral-red transition-colors'
                        required
                    />
                    <hr />

                    {/* Message Textarea */}
                    <textarea
                        placeholder='Your Message'
                        className='input py-3 px-4 rounded-lg border-2 border-slate-gray focus:border-coral-red transition-colors resize-none'
                        rows="6"
                        required
                    ></textarea>

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
