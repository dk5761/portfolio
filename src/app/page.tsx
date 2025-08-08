import LeftSidebar from "@/components/LeftSidebar";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import { personal } from "@/lib/data";

export default function Home() {
  return (
    <div className="min-h-screen page-bg">
      <div className="max-w-7xl mx-auto  flex flex-col  lg:flex-row gap-3">
        <LeftSidebar />
        <main className="px-6 space-y-16 sm:space-y-20 lg:space-y-24 py-12 lg:py-24 lg:flex-1">
          <section id="about" className="scroll-mt-24" aria-label="About">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen  px-6 py-5 backdrop-blur sm:-mx-12 sm:px-12 md:hidden lg:hidden">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200">
                About
              </h2>
            </div>
            {personal.about.map((para, idx) => (
              <p
                key={idx}
                className={`text-slate-300 leading-7 max-w-3xl ${
                  idx > 0 ? "mt-6" : ""
                }`}
              >
                {para}
              </p>
            ))}
          </section>

          <section
            id="experience"
            className="scroll-mt-24"
            aria-label="Work experience"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-full  px-6 py-5 backdrop-blur sm:-mx-12 sm:px-12 md:hidden lg:hidden">
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
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-full  px-6 py-5 backdrop-blur sm:-mx-12 sm:px-12 md:hidden lg:hidden">
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
