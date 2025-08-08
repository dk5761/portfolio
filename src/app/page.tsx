import LeftSidebar from "@/components/LeftSidebar";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen page-bg">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:[grid-template-columns:minmax(260px,1fr)_minmax(700px,2fr)] gap-12">
        <LeftSidebar />
        <main className="px-6 space-y-16 sm:space-y-20 lg:space-y-24 py-12 lg:py-24">
          <section id="about" className="scroll-mt-24" aria-label="About">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen  px-6 py-5 backdrop-blur sm:-mx-12 sm:px-12 md:hidden lg:hidden">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                About
              </h2>
            </div>
            <p className="text-slate-300 leading-7 max-w-3xl">
              I’m a developer passionate about crafting accessible,
              pixel-perfect user interfaces that blend thoughtful design with
              robust engineering. My favorite work lies at the intersection of
              design and development, creating experiences that not only look
              great but are meticulously built for performance and usability.
            </p>
            <p className="text-slate-300 leading-7 mt-6 max-w-3xl">
              Currently, I focus on front-end accessibility and component
              systems, ensuring platforms meet web accessibility standards and
              best practices to deliver an inclusive user experience.
            </p>
          </section>

          <section
            id="experience"
            className="scroll-mt-24"
            aria-label="Work experience"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen  px-6 py-5 backdrop-blur sm:-mx-12 sm:px-12 md:hidden lg:hidden">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                Experience
              </h2>
            </div>
            <Experience />
          </section>

          <section
            id="projects"
            className="scroll-mt-24"
            aria-label="Selected projects"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen  px-6 py-5 backdrop-blur sm:-mx-12 sm:px-12 md:hidden lg:hidden">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                Projects
              </h2>
            </div>
            <Projects />
          </section>
        </main>
      </div>
    </div>
  );
}
