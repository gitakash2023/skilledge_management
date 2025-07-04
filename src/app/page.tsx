import { businessesServiced } from "./_utilities";
import { Banner, Button, BusinessCard, ClientList, Video } from "./_components";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex flex-col gap-3 min-h-screen">
            <Banner
                backgroundImageUrl="/shiny-night-city.jpg"
                altText="Shiny night city"
                isHomePage={true}
            >
                <h1> SKILLEDGE MANAGEMENT  COMMERCIAL CLEANING SERVICES</h1>
                <Link
                    href="/schedule-meeting"
                    className="text-lg sm:text-2xl 2xl:text-3xl *:gap-0.5 *:sm:gap-4 *:pl-5 *:sm:pl-10 *:py-2 *:lg:py-3   *:*:*:size-9 *:*:*:sm:size-10 *:*:*:2xl:size-11  *:*:pr-1.5 *:*:sm:pr-4"
                >
                    <Button text={"BOOK A FREE ON-SITE ESTIMATE"} />
                </Link>
                <span className="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl">
                    General Cleaning of Buildings | Mohali, Punjab | CIN: U81210PB2025PTC063560
                </span>
            </Banner>
            <section className="">
                <figure className="relative w-full">
                    <Image
                        src="/man-holding-cleaning-supplies.jpg"
                        alt="Man in uniform holding commercial cleaning supplies"
                        fill={true}
                        priority={true}
                        className="opacity-50"
                    />

                    <article className="relative w-full h-full bg-navy-blue/75 flex flex-col justify-center items-center text-center py-9 2xl:py-16 gap-5 lg:gap-7 2xl:gap-10">
                        <h2 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl">
                            We Offer Commercial Cleaning Services to
                        </h2>
                        <div className="grid grid-cols-2 min-[410px]:grid-cols-3 justify-items-center 2xl:w-[70%] max-w-[90%] sm:max-w-[85%] xl:max-w-[1000px] gap-x-7 sm:gap-x-14 md:gap-x-14 xl:gap-x-20 gap-y-7 sm:gap-y-12 md:gap-y-12 xl:gap-y-20">
                            {businessesServiced.map((business, index) => (
                                <BusinessCard business={business} key={index} />
                            ))}
                        </div>
                    </article>
                </figure>
            </section>
            <section className="mx-auto w-[95%] max-w-[1400px]">
                <article className="flex flex-col gap-5 lg:gap-7 xl:gap-10 px-5 lg:px-0 py-9 xl:py-16 bg-gray-blue-yellow-gradient">
                    <h2 className="text-navy-blue text-center font-bold text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl">
                        Our Mission Is To Go Beyond Cleaning
                    </h2>
                    <div className="flex flex-col-reverse lg:flex-row gap-8 w-full sm:w-[90%] md:w-[85%] lg:w-[95%] mx-auto">
                        <div className="flex flex-col justify-around items-center w-full lg:w-1/2 text-center lg:text-start gap-8 lg:gap-0">
                            <div className="flex flex-col gap-3 xl:gap-5">
                                <p>
                                    Skilledge Management pvt ltd&apos; value to you
                                    is defined by the high quality we bring to
                                    your facilities and reduced downtime in your
                                    labor, processes, supplies and equipment.
                                </p>
                                <p>
                                    Our mission is to be the premier provider of
                                    commercial and industrial cleaning services
                                    and products in Westmoreland, Indiana and
                                    surrounding counties.
                                </p>
                                <p>
                                    By listening and responding, we build
                                    satisfying relationships with our clients
                                    and employees. The result is quality,
                                    stability and consistency.
                                </p>
                            </div>
                            <Link
                                href="/about"
                                className="text-lg md:text-2xl 2xl:text-3xl *:gap-0.5 *:md:gap-4 *:pl-5 *:md:pl-10 *:py-1 *:md:py-1.5 *:2xl:py-2 *:*:*:size-8 *:*:*:lg:size-9 *:*:*:2xl:size-11 *:*:pr-1.5 *:*:md:pr-4"
                            >
                                <Button text={"LEARN MORE"} />
                            </Link>
                        </div>
                        <div className="relative w-full mx-auto max-w-[350px] sm:max-w-[450px] lg:min-w-[500px] lg:w-3/5 xl:w-1/2 xl:max-w-[600px] 2xl:min-w-[730px] h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[550px] 2xl:h-[700px] drop-shadow-lg">
                            <Image
                                src="/professional-cleaner-showing-approval.jpg"
                                alt="Smiling professional cleaner in uniform giving a thumbs up"
                                fill={true}
                                className="rounded-xl"
                            />
                        </div>
                    </div>
                </article>
            </section>
            <section className="mx-auto w-[95%] max-w-[1400px]">
                <article className="flex flex-col gap-5 lg:gap-7 xl:gap-10 px-5 lg:px-0 py-9 xl:py-16">
                    <h2 className="text-navy-blue text-center font-bold text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl">
                        Top-Quality Cleaning Supplies Used
                    </h2>
                    <div className="flex flex-col lg:flex-row gap-8 w-full sm:w-[90%] md:w-[85%] lg:w-[95%] mx-auto">
                        <div className="relative w-full mx-auto max-w-[350px] sm:max-w-[450px] lg:min-w-[500px] lg:w-3/5 xl:w-1/2 xl:max-w-[600px] 2xl:min-w-[730px] h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[550px] 2xl:h-[700px] drop-shadow-lg">
                            <Image
                                src="/quality-cleaning-supplies.jpg"
                                alt="Quality cleaning supplies"
                                fill={true}
                                className="rounded-xl"
                            />
                        </div>
                        <div className="flex flex-col justify-around items-center w-full lg:w-1/2 text-center lg:text-start gap-8 lg:gap-0">
                            <div className="flex flex-col gap-3 xl:gap-5">
                                <p>
                                    When you need janitorial and cleaning
                                    supplies to beautify and clean your
                                    facility, trust our products and their
                                    capability to give you just that! We use
                                    them each and every day.
                                </p>
                                <p>
                                    We understand that cleaning and janitorial
                                    services are crucial for your commercial and
                                    industrial business. That&apos;s why we
                                    strive to be the region&apos;s most
                                    dependable and professional business
                                    cleaning service.
                                </p>
                            </div>
                            <Link
                                href="/janitorial-supplies"
                                className="text-lg md:text-2xl 2xl:text-3xl *:gap-0.5 *:md:gap-4 *:pl-5 *:md:pl-10 *:py-1 *:md:py-1.5 *:2xl:py-2 *:*:*:size-8 *:*:*:lg:size-9 *:*:*:2xl:size-11 *:*:pr-1.5 *:*:md:pr-4"
                            >
                                <Button text={"LEARN MORE"} />
                            </Link>
                        </div>
                    </div>
                </article>
            </section>
            <section className="mx-auto w-[95%] max-w-[1400px]">
                <article className="flex flex-col gap-5 lg:gap-7 xl:gap-10 px-5 lg:px-0 py-9 xl:py-16 bg-off-white">
                    <h2 className="text-navy-blue text-center font-bold text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl">
                        Reliable Janitorial Services
                    </h2>
                    <div className="flex flex-col-reverse lg:flex-row gap-8 w-full sm:w-[90%] md:w-[85%] lg:w-[95%] mx-auto">
                        <div className="flex flex-col justify-around items-center w-full lg:w-1/2 text-center lg:text-start gap-8 lg:gap-0">
                            <div className="flex flex-col gap-3 xl:gap-5">
                                <p>
                                    Skilledge Management Industries serves businesses
                                    and organizations in Westmoreland, Indiana
                                    and surrounding counties.
                                </p>
                                <p>
                                    Whether your facility is small or big, the
                                    health and safety of you and your staff is
                                    very important. This not only keeps the
                                    employees happy but also contributes to the
                                    productivity and positive attitude of your
                                    staff.
                                </p>
                            </div>
                            <Link
                                href="/janitorial-services"
                                className="text-lg md:text-2xl 2xl:text-3xl *:gap-0.5 *:md:gap-4 *:pl-5 *:md:pl-10 *:py-1 *:md:py-1.5 *:2xl:py-2 *:*:*:size-8 *:*:*:lg:size-9 *:*:*:2xl:size-11 *:*:pr-1.5 *:*:md:pr-4"
                            >
                                <Button text={"LEARN MORE"} />
                            </Link>
                        </div>
                        <div className="relative w-full mx-auto max-w-[350px] sm:max-w-[450px] lg:min-w-[500px] lg:w-3/5 xl:w-1/2 xl:max-w-[600px] 2xl:min-w-[730px] h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[550px] 2xl:h-[700px] drop-shadow-lg">
                            <Image
                                src="/reliable-janitorial-service.jpg"
                                alt="Reliable janitorial service"
                                fill={true}
                                className="rounded-xl"
                            />
                        </div>
                    </div>
                </article>
            </section>
            <section className="mx-auto w-[95%]">
                <article className="flex flex-col text-center gap-5 lg:gap-7 xl:gap-10 px-2 py-9 xl:py-16 overflow-hidden">
                    <h2 className="text-navy-blue font-bold text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl">
                        Our Clients
                    </h2>
                    <p className="w-full max-w-[1400px] sm:w-[90%] md:w-[85%] xl:w-[95%] mx-auto">
                        Skilledge Management offers dependable and professional
                        cleaning and janitorial services for any business or
                        organization in Westmoreland, Indiana, and surrounding
                        counties.
                    </p>
                    <div className="flex">
                        <ClientList />
                    </div>
                </article>
            </section>
            {/* <section className="mx-auto w-[95%] max-w-[1400px]">
                <article className="flex flex-col justify-center items-center pt-5 xl:pt-11">
                    <div className="w-[95%] max-w-[1400px] sm:w-[90%] lg:w-[90%]">
                        <Video />
                    </div>
                </article>
            </section> */}
        </main>
    );
}
