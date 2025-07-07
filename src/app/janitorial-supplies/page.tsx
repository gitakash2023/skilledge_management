import { Banner, Video } from "../_components";
import Image from "next/image";
import { cleaningProductsList } from "../_utilities";

export default function JanitorialSupplies() {
    return (
        <main className="flex flex-col gap-10 xl:gap-14 min-h-screen">
            <Banner
                backgroundImageUrl="/person-taking-care-office-cleaning2.jpg"
                altText="Person taking care office cleaning"
            >
                <div className="flex items-end w-full h-full">
                    <div className="bg-blue-white/50 w-full pl-5 lg:pl-20 py-1 sm:py-2 xl:py-3">
                        <h1>MANPOWER SUPPLY SERVICES</h1>
                    </div>
                </div>
            </Banner>
            <section className="mx-auto w-[95%] max-w-[1400px] lg:mt-4">
                <article className="flex flex-col justify-center items-center gap-5 lg:gap-7 xl:gap-10 w-full sm:w-[90%] xl:w-[95%] mx-auto *:leading-relaxed">
                    <h2 className="text-navy-blue text-center font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl px-2 lg:px-0">
                        Global Manpower Solutions with FREE Consultation
                    </h2>
                    <div className="flex flex-col gap-3 xl:gap-5 px-2 lg:px-0">
                        <p>
                            Skilledge Management Pvt Ltd has been a trusted name in manpower supply for over 20 years, successfully placing lakhs of candidates in their dream jobs across India, Gulf countries, and Europe.
                        </p>
                        <p>
                            We help companies worldwide close their hiring gaps quickly, delivering skilled and verified workers. Our consultation is absolutely FREE, ensuring smooth and hassle-free recruitment.
                        </p>
                    </div>
                    <figure className="relative w-full h-[10rem] sm:h-[15rem] md:h-[20rem] lg:h-[25rem] xl:h-[30rem] 2xl:h-[35rem] mt-2 *:rounded-xl">
                        <Image
                            src="/person-holding-cleaning-products.jpg"
                            alt="Person holding cleaning products"
                            fill={true}
                        />
                    </figure>
                </article>
            </section>
            <section className="mx-auto w-[95%] max-w-[1400px] relative">
                <article className="flex flex-col items-center w-full sm:w-[90%] xl:w-[95%] mx-auto gap-5 lg:gap-7 xl:gap-10">
                    <h3 className="text-navy-blue text-center font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                        Industries We Serve Globally
                    </h3>
                    <div className="flex flex-col w-full lg:w-[90%] gap-8 sm:gap-10 lg:gap-12 px-4 lg:px-0">
                        <ul className="grid sm:grid-cols-2 gap-3 xl:gap-6 font-bold text-navy-blue list-disc ml-6 sm:ml-8">
                            {cleaningProductsList.map((product, index) => (
                                <li key={index}>{product.name}</li>
                            ))}
                        </ul>
                    </div>
                    <p className="px-2 lg:px-0">
                        We customize manpower solutions according to your specific business needs. Connect with us to discuss your hiring requirements and get the right workforce for your company.
                    </p>
                    <footer className="w-full mt-2 bg-light-blue/30 flex flex-col items-center py-3 drop-shadow-xl text-navy-blue font-bold px-8 text-center">
                        <p>24/7 Dedicated Support for Manpower Requirements.</p>
                    </footer>
                </article>
            </section>
        </main>
    );
}
