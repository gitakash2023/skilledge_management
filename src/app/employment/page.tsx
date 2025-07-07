import { Banner, Button, Video } from "../_components";
import Image from "next/image";
import { employeeBenefitsList } from "../_utilities";

export default function Employment() {
    return (
        <main className="flex flex-col gap-10 xl:gap-14 min-h-screen">
            <Banner
                backgroundImageUrl="/cleaning-crew-giving-thumbs-up.jpg"
                altText="Recruitment team giving thumbs up"
            >
                <div className="flex items-end w-full h-full">
                    <div className="bg-blue-white/50 w-full pl-5 lg:pl-20 py-1 sm:py-2 xl:py-3">
                        <h1>Skilledge Management IS NOW RECRUITING!!</h1>
                    </div>
                </div>
            </Banner>
            <section className="mx-auto w-[95%] max-w-[1400px] lg:mt-4">
                <article className="flex flex-col justify-center items-center px-5 lg:px-0  gap-5 lg:gap-7 xl:gap-10 w-full sm:w-[90%] xl:w-[95%] mx-auto *:leading-relaxed">
                    <h2 className="text-navy-blue text-center font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                        Join Skilledge Management Global Workforce
                    </h2>
                    <div className="w-full *:max-w-[350px] *:lg:max-w-[430px] mt-2 bg-light-blue/30 flex flex-col items-center py-3 drop-shadow-xl text-navy-blue font-bold px-8 text-center">
                        <span>
                            Competitive Salary + International Placement + Flexible Shifts + Career Growth + Global Opportunities
                        </span>
                    </div>
                    <h3 className="text-navy-blue text-center font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl">
                        Start Your Global Career Journey Today!
                    </h3>
                    <div className="flex flex-col gap-3 xl:gap-5">
                        <p>
                            With decades of expertise in recruitment, Skilledge Management connects talent with global opportunities. We understand your career goals and offer flexible placements, attractive packages, and full respect for every candidate. If you are motivated, hardworking, and ready for overseas opportunities, we invite you to join us!
                        </p>
                        <p>
                            We are passionate about creating rewarding job experiences. Our vision is to empower individuals and build long-term relationships with both candidates and employers worldwide. Your dream job abroad starts here with Skilledge Management.
                        </p>
                    </div>
                    <a
                        href="#"
                        className="text-lg sm:text-2xl xl:text-3xl 2xl:text-3xl  *:gap-0.5 *:sm:gap-4 *:pl-5 *:sm:pl-10 *:py-2 *:sm:py-2 *:xl:py-2  *:*:*:size-9 *:*:*:sm:size-10 *:*:*:xl:size-11 *:*:*:2xl:size-12  *:*:pr-1.5 *:*:sm:pr-4"
                        rel="noopener noreferrer"
                        target="_blank"
                        aria-label="View available jobs"
                    >
                        <Button text={"EXPLORE JOB OPENINGS"} />
                    </a>
                    <figure className="relative w-full mt-2 h-[15rem] sm:h-[20rem] md:h-[25rem] lg:h-[30rem] xl:h-[35rem] 2xl:h-[40rem] *:rounded-xl">
                        <Image
                            src="/team-members-cleaning-office.jpg"
                            alt="Global recruitment team working together"
                            fill={true}
                        />
                    </figure>
                </article>
            </section>
            <section className="mx-auto w-[95%] max-w-[1400px] relative">
                <article className="flex flex-col items-center w-full sm:w-[90%] xl:w-[95%] *:xl:w-[85%] mx-auto gap-5 lg:gap-7 xl:gap-10">
                    <h3 className="text-navy-blue text-center font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                        Benefits of Working with Skilledge Management
                    </h3>

                    <ul className="grid md:grid-cols-2 gap-3 xl:gap-6 font-bold text-navy-blue list-disc ml-10 md:ml-14 *:w-[90%]">
                        {employeeBenefitsList.map((benefit, index) => (
                            <li key={index}>{benefit.name}</li>
                        ))}
                    </ul>
                </article>
            </section>
        </main>
    );
}
