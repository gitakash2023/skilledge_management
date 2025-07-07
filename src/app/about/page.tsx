import { Banner } from "../_components";

export default function About() {
    return (
        <main className="flex flex-col gap-10 xl:gap-14 min-h-screen">
            <Banner
                backgroundImageUrl="/shiny-night-city.jpg"
                altText="Shiny night city"
            >
                <div className="flex items-end w-full h-full">
                    <div className="bg-blue-white/50 w-full pl-5 lg:pl-20 py-2 sm:py-3">
                        <h1>ABOUT</h1>
                    </div>
                </div>
            </Banner>
            <section className="mx-auto w-[95%] max-w-[1400px] lg:mt-4">
                <article className="flex flex-col justify-center items-center gap-5 lg:gap-7 xl:gap-10 px-2 lg:px-0 text-center w-full max-w-[1430px] sm:w-[90%] md:w-[85%] xl:w-[95%] mx-auto *:leading-relaxed">
                    <h2 className="text-navy-blue text-center font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                        About Skilledge Management
                    </h2>
                    <div className="flex flex-col gap-3 xl:gap-5">
                        <p>
                            Skilledge Management Pvt Ltd is a leading global manpower recruitment agency, successfully connecting employers with skilled workers across <strong>India, Gulf countries, and Europe</strong> for over 20 years.
                        </p>
                        <p>
                            We specialize in providing end-to-end recruitment services across multiple industries including construction, hospitality, healthcare, oil & gas, manufacturing, and more. Our mission is to empower both companies and candidates by delivering reliable staffing solutions.
                        </p>
                        <p>
                            Over the past two decades, we have helped <strong>lakhs of candidates</strong> find their dream jobs and assisted countless companies in solving their toughest hiring challenges.
                        </p>
                        <p>
                            Whether you are an individual seeking overseas opportunities or a business in need of skilled manpower, we are your trusted recruitment partner.
                        </p>
                    </div>
                </article>
            </section>
            <section className="mx-auto w-[95%] max-w-[1400px]">
                <article className="flex flex-col justify-center items-center gap-5 lg:gap-7 xl:gap-10 px-2 lg:px-0 text-center w-full max-w-[1430px] sm:w-[90%] md:w-[85%] xl:w-[95%] mx-auto *:leading-relaxed">
                    <h2 className="text-navy-blue text-center font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                        Why Choose Skilledge Management?
                    </h2>
                    <div className="flex flex-col gap-3 xl:gap-5">
                        <p>
                            Our global recruitment network, advanced screening methods, and personalized consultation make us a preferred choice for companies and job seekers worldwide.
                        </p>
                        <p>
                            We are known for our commitment to quality, ethical practices, and quick turnaround time. Our experienced team ensures every recruitment is done with precision, ensuring the best fit for both candidates and employers.
                        </p>
                        <p>
                            We pride ourselves on building long-term relationships with clients and candidates through transparency, professionalism, and consistent results.
                        </p>
                    </div>
                </article>
            </section>
           
        </main>
    );
}
