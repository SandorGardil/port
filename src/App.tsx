// import { Header } from './components/header.tsx';
// import { Routes, Route } from 'react-router-dom';
// import  Home  from './pages/Home.tsx';
// import  About  from './pages/About.tsx';
// import  Resume  from './pages/Resume.tsx';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../src/components/ui/tooltip"
import ExperienceItem from "./components/ui/experience-item"
import Navigation from "./components/ui/navigation"
import Spotlight from "./components/ui/spotlight"


function App() {
  return (
    <>
      <div className="group/spotlight relative">
        <Spotlight />
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl"><a href="/">Sandor Gardil</a></h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">Full Stack Software Engineer</h2>
                <p className="mt-4 max-w-xs leading-normal">First name Him, last name Othy</p>
                <Navigation />
              </div>
              <ul className="ml-1 mt-8 flex items-center">
                <li className="mr-5 text-xs shrink-0">
                <TooltipProvider delayDuration={200}>
                  <Tooltip>
                    <TooltipTrigger>
                      <a className="block hover:text-slate-200" href="https://www.linkedin.com/in/sandor-gardil/" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn (opens in a new tab)"><span className="sr-only">LinkedIn</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path></svg></a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>LinkedIn</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                </li>
              </ul>
            </header>
            <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
              <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit adipisci distinctio quae, voluptatibus ab maiores blanditiis eum aspernatur id nostrum, nihil quia? Eius officiis molestiae quisquam maiores libero blanditiis veniam inventore eum voluptatibus delectus. Exercitationem laboriosam dolorum numquam nihil assumenda reprehenderit ipsam ipsum, laudantium incidunt asperiores consequuntur hic vitae cupiditate rerum quia consectetur nemo natus amet.
                  </p>
                  <p className="mb-4">
                    Est quidem, ratione hic quia ea ut autem dolorem eum nesciunt pariatur distinctio natus dolor sequi quos! Nihil quisquam nemo voluptates. Eos soluta pariatur possimus neque dolores. Obcaecati veniam eaque architecto quae veritatis, tempora facere doloremque a id eveniet cumque omnis quod voluptatum! Blanditiis ad, cumque eaque, laborum aperiam vitae eos amet aut vel eligendi dicta error veritatis in? Quis voluptatum necessitatibus animi modi ab eaque sunt.
                  </p>
                   
              </section>
              <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
                </div>
                <div>
                  <ol className="group/list">
                    <ExperienceItem
                      dateRange={"July 2024 — Present"}
                      companyName={"Nagios"}
                      companyUrl={"https://www.nagios.com/"}
                      jobTitle={"Full Stack Software Developer"}
                      description={"temp"}
                      technologies={[
                        { name: "jQuery"},
                        { name: "PHP"},
                        { name: "React"},
                        { name: "TailwindCSS"},
                        { name: "CSS"},
                        { name: "HTML"},
                        { name: "MySQL"},
                        { name: "CodeIgniter"}
                      ]}
                    />
                    <ExperienceItem
                      dateRange={"Jan 2023 — July 2024"}
                      companyName={"Nagios"}
                      companyUrl={"https://www.nagios.com/"}
                      jobTitle={"Jr. Full Stack Software Developer"}
                      description={"temp"}
                      technologies={[
                        { name: "jQuery"},
                        { name: "PHP"},
                        { name: "React"},
                        { name: "TailwindCSS"},
                        { name: "Testcafe"},
                        { name: "CSS"},
                        { name: "HTML"},
                        { name: "MySQL"}
                      ]}
                    />
                    <ExperienceItem
                      dateRange={"Sept 2022 — Jan 2023"}
                      companyName={"Nagios"}
                      companyUrl={"https://www.nagios.com/"}
                      jobTitle={"Intern Software Developer"}
                      description={"test"}
                      technologies={[
                        { name: "jQuery"},
                        { name: "PHP"},
                        { name: "CSS"},
                        { name: "HTML"}
                      ]}
                    />
                    {/* <li className="mb-12">
                      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                        <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" aria-label="2024 to Present">2024 — Present</header>
                        <div className="z-10 sm:col-span-6">
                          <h3 className="font-medium leading-snug text-slate-200">
                            <div>
                              <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base" href="https://www.nagios.com/" target="_blank" rel="noreferrer noopener" aria-label="Full Stack Developer, Accessibility at Nagios (opens in a new tab)">
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>Full Stack Software Developer · 
                                  <span className="inline-block ml-1">Nagios
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                      <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                    </svg>
                                  </span>
                                </span>
                              </a>
                            </div>
                          </h3>
                          <p className="mt-2 text-sm leading-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam veniam natus voluptas iure nostrum ducimus! Pariatur, sunt eos nulla non deserunt rerum ad ea voluptates porro aut consequuntur dolor, assumenda dolore totam, rem eveniet. Consequuntur quia porro neque nam laboriosam commodi minus inventore non nostrum! Sit accusamus fuga nam. Repellat!</p>
                          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">JavaScript</div></li>
                            <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">PHP</div></li>
                            <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">React</div></li>
                            <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">TailWind CSS</div></li>
                          </ul>
                        </div>
                      </div>
                    </li> */}
                  </ol>
                  <div className="mt-12">
                    <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base" href="/resume.pdf" target="_blank" rel="noreferrer noopener" aria-label="View Full Resume (opens in a new tab)">
                      <span>View Full <span className="inline-block">Resume<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg></span></span>
                    </a>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
