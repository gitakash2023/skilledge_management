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
                            Skilledge Management  has been locally owned and
                            serving Western PA since 1986, and proudly
                            employee-owned since 2024! We don&apos;t require a
                            long-term contract with our customers. From 2,000
                            square foot dentist office to a 200,000 square foot
                            plant, no job is too big or too small for us to
                            handle.{" "}
                            <a
                                href="tel:+1724-539-4199"
                                className="underline decoration-yellow decoration-4 underline-offset-4 text-navy-blue font-bold"
                                aria-label="Call Skilledge Management Industries for a free estimate"
                            >
                                Call us
                            </a>{" "}
                            for a FREE estimate today!
                        </p>
                        <p>
                            The team at Skilledge Management  considers
                            customer service as our #1 priority. The entire team
                            has been trained and works at various janitorial
                            sites performing various janitorial services. Our
                            staff is familiar with the mottos/principles of the
                            company and their work is continually evaluated by
                            the Quality Inspection Team.
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
                            Cleaning and janitorial services are critical to our
                            commercial and industrial client, that is why
                            Skilledge Management is this region&apos;s most dependable
                            and professional business cleaning service. We serve
                            businesses and organizations in Westmoreland,
                            Indiana and surrounding counties. Whether large or
                            small, they all consider that a clean facility is
                            essential to the comfort, health and safety of their
                            customers and contributes to the productivity and
                            positive attitude of everyone on their staff.
                        </p>
                    </div>
                </article>
            </section>
            <section className="mx-auto w-[95%] max-w-[1400px]">
                <article className="w-full mt-2 mb-5 drop-shadow-lg">
                    <iframe
                        className="aspect-video h-full min-h-[545px] lg:min-h-[650px] max-h-[800px] xl:max-h-[900px] rounded-xl"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042.0390909054245!2d-79.38554292325173!3d40.31928997145544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834cd4d7433928d%3A0x230fc3511100926c!2sRolling%20Hills%20Industries!5e0!3m2!1sen!2sus!4v1730999364494!5m2!1sen!2sus"
                        width={"100%"}
                        height={"100%"}
                        style={{ border: "0" }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </article>
            </section>
        </main>
    );
}
