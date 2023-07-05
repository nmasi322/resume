import Experience from "../components/Experience";
import Project from "../components/Project";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div className="">
      <div className="bg-gray-100 p-5 md:p-10 min-h-screen">
        <div className="bg-white shadow-sm py-10 px-7 max-md:w-full lg:w-[90%] mx-auto">
          <div className="text-center pb-6 border-b-2 border-black">
            <h1 className="text-xl md:text-3xl">
              Divinefavour Edeh, Software Developer
            </h1>
          </div>

          {/* CONTACT INFORMATION  */}
          <div>
            <div className="lg:w-[90%] lg:mx-auto max-lg:justify-between xs:flex items-center lg:justify-evenly font-normal my-3">
              <div className="lg:flex max-xs:mt-2 space-y-2">
                <div className="lg:border-r border-black pr-3">
                  <h2>Nigeria</h2>
                </div>

                <div className="lg:border-r border-black pr-3">
                  <a
                    className="text-black no-underline font-normal"
                    href="tel:+2347040303857"
                  >
                    +2347040303857
                  </a>
                </div>
              </div>
              <div className="lg:flex max-xs:text-left max-lg:text-right max-xs:mt-2 space-y-2">
                <div className="lg:border-r border-black pr-3">
                  <h2>
                    Github:{" "}
                    <a href="https://github.com/nmasi322">
                      github.com/nmasi322
                    </a>
                  </h2>
                </div>

                <div className="lg:border-r border-black pr-3">
                  <h2>
                    Email:{" "}
                    <a href="mailto:edehdivine042@gmail.com">
                      edehdivine042@gmail.com
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>

          {/* EXPERIENCE  */}
          <div className="mt-8 mb-3">
            <div>
              <h1 className="font-semibold text-xl text-center">Experience</h1>
            </div>

            <div>
              <div>
                <Experience
                  company="Tred Finance"
                  position="Backend Developer"
                  startTime="Sept 2022"
                  endTime="Present"
                  location="Remote, Nigeria"
                  duties={[
                    "Built databases and table structures following architecture methodology for web applications",
                    "Provided code maintenance and system upgrades to maximize performance.",
                    "Established a routine of planned tests using Jest to achieve software functionality, glitch elimination, and update maintenance.",
                    "Built our back-end services for payment, webhooks, and integrations built in Node.js (Express) and Typescript with MongoDB.",
                  ]}
                />
              </div>

              <div>
                <Experience
                  company="Mend"
                  position="Software Developer"
                  startTime="Feb 2022"
                  endTime="Mar 2023"
                  location="Remote, Nigeria"
                  duties={[
                    "Performed coaching of junior developers joining the team, doing frequent pair and mob programming sessions, while working with senior engineers to define roadmaps and feature priorities.",
                    "Worked with other Software Engineers to develop frontend and backend architecture that's well structured and flexible, along with the API to support it.",
                    "Installed and configured server environments for React deployments using Digital Ocean and GIT CI/CD deployments.",
                    "Worked with other Senior Software Engineers to build out microservices which boosted our efficiency by 40%.",
                  ]}
                />
              </div>

              <div>
                <Experience
                  company="Freelancer"
                  position="Web Developer"
                  startTime="Mar 2020"
                  endTime="Feb 2022"
                  location="Remote, Nigeria"
                  duties={[
                    "Worked as a freelance software developer for two years, building websites and web applications for various clients. ",
                    "Collaborated with clients to understand their needs and preferences and delivered customized solutions that met their requirements. ",
                    "Developed strong problem-solving and communication skills while working independently and managing multiple projects simultaneously.",
                  ]}
                />
              </div>
            </div>
          </div>

          {/* PROJECTS  */}
          <div className="mt-5">
            <div>
              <h1 className="font-semibold text-xl text-center">Projects</h1>
            </div>
            <div>
              <div>
                <Project />
              </div>
            </div>
          </div>

          {/* TECHNICAL SKILLS  */}
          <div className="mt-7">
            <div>
              <h1 className="font-semibold text-xl text-center">
                Technical Skills
              </h1>
              <div>
                <Skills />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;