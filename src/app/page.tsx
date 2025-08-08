import LeftSidebar from "@/components/LeftSidebar";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="min-h-screen page-bg">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:[grid-template-columns:minmax(260px,1fr)_minmax(700px,2fr)] gap-12">
        <LeftSidebar />
        <main className="px-6 space-y-24 py-24">
          <section id="about" className="scroll-mt-24">
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

          <section id="experience" className="scroll-mt-24">
            <Experience />
          </section>

          <section id="projects" className="scroll-mt-24">
            <Projects />
          </section>
        </main>
      </div>
    </div>
  );
}
