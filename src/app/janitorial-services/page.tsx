import { Banner } from "../_components";
import Image from "next/image";

export default function RecruitmentServices() {
    return (
        <main className="flex flex-col gap-10 xl:gap-14 min-h-screen">
            <Banner
                backgroundImageUrl="/professional-cleaning-service-person-using-steam-cleaner-office.jpg"
                altText="Recruitment agency professionals at work"
            >
                <div className="flex items-end w-full h-full">
                    <div className="bg-blue-white/50 w-full pl-5 lg:pl-20 py-2 sm:py-3">
                        <h1>RECRUITMENT SERVICES</h1>
                    </div>
                </div>
            </Banner>

            <section className="mx-auto w-[95%] max-w-[1400px] lg:mt-4">
                <article className="flex flex-col justify-center items-center gap-5 lg:gap-7 xl:gap-10 text-center text-dark-gray w-full sm:w-[90%] md:w-[85%] xl:w-[95%] mx-auto *:leading-relaxed">
                    <h2 className="text-navy-blue text-center font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl px-2 lg:px-0">
                        Global Recruitment Solutions
                    </h2>
                    <div className="flex flex-col gap-3 xl:gap-5 px-2 lg:px-0">
                        <p>
                            Skilledge Management Pvt Ltd is a trusted name in manpower recruitment, connecting employers with qualified candidates across India, Gulf countries, and Europe.
                        </p>
                        <p>
                            From skilled labor to specialized professionals, we deliver recruitment solutions that meet your unique business needs. Our experience spans across industries including construction, oil & gas, hospitality, healthcare, and more.
                        </p>
                    </div>
                    <footer className="w-full mt-2 bg-light-blue/30 flex flex-col items-center gap-3 xl:gap-5 py-3 px-8 drop-shadow-xl text-navy-blue font-bold text-center">
                        <p>
                            Trusted by thousands of businesses globally for efficient hiring.
                        </p>
                        <p>Your success is our priority!</p>
                    </footer>
                </article>
            </section>

            <section className="mx-auto w-[95%] max-w-[1400px] relative">
                <figure className="relative mt-2 drop-shadow-lg w-full sm:w-[90%] md:w-[85%] xl:w-[95%] mx-auto *:rounded-xl">
                    <Image
                        src="/person-taking-care-office-cleaning.jpg"
                        alt="Recruitment process in progress"
                        fill={true}
                    />
                    <div className="relative flex flex-col items-center w-full h-full bg-diagonal-light-blue-to-navy text-white py-9 xl:py-16 2xl:py-24 *:w-[85%] mx-auto gap-5 lg:gap-7 xl:gap-10">
                        <h3 className="text-center font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                            Our Recruitment Process
                        </h3>
                        <ul className="flex flex-col gap-3 xl:gap-6 font-bold list-disc ml-10 sm:ml-14">
                            <li>Job Profiling & Requirements Analysis</li>
                            <li>Candidate Sourcing & Pre-screening</li>
                            <li>Interviews & Background Verification</li>
                            <li>Offer Negotiation & Onboarding</li>
                        </ul>
                        <p>
                            Each step is carefully planned with clients to ensure precise hiring solutions. Contact us for customized recruitment services.
                        </p>
                    </div>
                </figure>
            </section>

            <section className="mx-auto w-[95%] max-w-[1400px]">
                <article className="flex flex-col-reverse xl:flex-row w-full sm:w-[90%] md:w-[85%] xl:w-[95%] gap-5 lg:gap-7 xl:gap-10 px-2 lg:px-0 mx-auto">
                    <div className="flex flex-col w-full xl:w-1/2 gap-5 lg:gap-7 xl:gap-10 justify-center">
                        <h4 className="text-navy-blue text-center xl:text-start font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                            Specialized Manpower Supply
                        </h4>
                        <div className="flex flex-col gap-3 xl:gap-5 text-center xl:text-start">
                            <p>
                                We specialize in providing skilled, semi-skilled, and unskilled manpower across various industries.
                            </p>
                            <p>
                                From short-term projects to long-term staffing, we supply the right talent to meet your workforce needs efficiently.
                            </p>
                        </div>
                    </div>

                    <div className="relative w-full mx-auto max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[600px] xl:min-w-[600px] xl:w-1/2 xl:max-w-[600px] h-[350px] sm:h-[450px] lg:h-[550px] drop-shadow-lg">
                        <Image
                            src="/full-shot-man-vacuuming-office-floor.jpg"
                            alt="Candidates ready for deployment"
                            fill={true}
                            className="rounded-xl"
                        />
                    </div>
                </article>
            </section>

            <section className="mx-auto w-[95%] max-w-[1400px]">
                <article className="flex flex-col xl:flex-row w-full sm:w-[90%] md:w-[85%] xl:w-[95%] 2xl:w-full gap-5 lg:gap-7 xl:gap-10 px-2 lg:px-0 mx-auto">
                    <div className="relative w-full mx-auto max-w-[350px] sm:max-w-[450px] md:max-w-[500px] lg:max-w-[600px] xl:min-w-[600px] xl:w-1/2 xl:max-w-[600px] h-[350px] sm:h-[450px] lg:h-[550px] drop-shadow-lg">
                        <Image
                            src="/professional-cleaner-showing-approval.jpg"
                            alt="Happy candidates with recruitment team"
                            fill={true}
                            className="rounded-xl"
                        />
                    </div>
                    <div className="flex flex-col justify-around items-center w-full xl:w-1/2 xl:text-start text-dark-gray gap-8 xl:gap-0 ">
                        <div className="flex flex-col w-full gap-5 lg:gap-7 xl:gap-10 justify-center">
                            <h4 className="text-navy-blue text-center xl:text-start font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                                Our Mission
                            </h4>
                            <div className="flex flex-col gap-3 xl:gap-5 text-center xl:text-start">
                                <p>
                                    Our mission is to empower businesses by delivering exceptional recruitment and staffing services worldwide. We are committed to connecting talent with opportunity and helping candidates achieve their dream jobs.
                                </p>
                                <p>
                                    Through integrity, dedication, and innovation, we continue to transform lives and drive business success globally.
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
}
