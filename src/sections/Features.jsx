import { FaLightbulb, FaCog, FaTags, FaLifeRing, FaChartBar, FaUsers } from "react-icons/fa";

const Features = () => {
    return (
        <section id="service" className="skills py-10 bg-white">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="text-center mb-10">
                    {/* <h4 className="text-coral-red font-semibold uppercase">Service</h4> */}
                    <h1 className="text-3xl lg:text-4xl font-bold text-black">
                        Why Choose Us?
                    </h1>
                </div>

                {/* Content Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* High-Quality Technology */}
                    <div className="card flex flex-col items-center shadow-lg rounded-lg p-6 bg-white">
                        <FaLightbulb className="h-16 w-16 text-coral-red mb-4" />
                        <h2 className="text-xl font-bold text-black mb-2">
                            High-Quality Technology
                        </h2>
                        <p className="text-gray-700 text-center">
                            Our motion sensors use advanced infrared and microwave detection
                            technologies, offering higher reliability and sensitivity compared
                            to standard products on the market.
                        </p>
                    </div>

                    {/* Customizable Solutions */}
                    <div className="card flex flex-col items-center shadow-lg rounded-lg p-6 bg-white">
                        <FaCog className="h-16 w-16 text-coral-red mb-4" />
                        <h2 className="text-xl font-bold text-black mb-2">
                            Customizable Solutions
                        </h2>
                        <p className="text-gray-700 text-center">
                            We provide personalized solutions tailored to your specific needs,
                            whether for residential, business, or industrial use.
                        </p>
                    </div>

                    {/* Competitive Pricing */}
                    <div className="card flex flex-col items-center shadow-lg rounded-lg p-6 bg-white">
                        <FaTags className="h-16 w-16 text-coral-red mb-4" />
                        <h2 className="text-xl font-bold text-black mb-2">
                            Competitive Pricing
                        </h2>
                        <p className="text-gray-700 text-center">
                            Our products are high-quality yet affordable. We ensure that every
                            penny you spend is worth it.
                        </p>
                    </div>

                    {/* Comprehensive Support */}
                    <div className="card flex flex-col items-center shadow-lg rounded-lg p-6 bg-white">
                        <FaLifeRing className="h-16 w-16 text-coral-red mb-4" />
                        <h2 className="text-xl font-bold text-black mb-2">
                            Comprehensive Support
                        </h2>
                        <p className="text-gray-700 text-center">
                            We provide free consultations, secure installations, regular
                            maintenance, and excellent after-sales support.
                        </p>
                    </div>

                    {/* Proven Track Record */}
                    <div className="card flex flex-col items-center shadow-lg rounded-lg p-6 bg-white">
                        <FaChartBar className="h-16 w-16 text-coral-red mb-4" />
                        <h2 className="text-xl font-bold text-black mb-2">
                            Proven Track Record
                        </h2>
                        <p className="text-gray-700 text-center">
                            We have satisfied clients who can vouch for the effectiveness and
                            durability of our products.
                        </p>
                    </div>

                    {/* Customer-Centric Approach */}
                    <div className="card flex flex-col items-center shadow-lg rounded-lg p-6 bg-white">
                        <FaUsers className="h-16 w-16 text-coral-red mb-4" />
                        <h2 className="text-xl font-bold text-black mb-2">
                            Customer-Centric Approach
                        </h2>
                        <p className="text-gray-700 text-center">
                            We prioritize your needs and are always open to feedback to ensure
                            your satisfaction.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
