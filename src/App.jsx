import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900">
      <Header />
      <Hero />
      <main className="mx-auto max-w-4xl px-4 sm:px-6">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="mt-4 border-t border-stone-200 py-4">
        <div className="mx-auto max-w-4xl px-4 font-mono text-xs text-stone-500 sm:px-6">
          © {new Date().getFullYear()} Dinesh. Built with React.
        </div>
      </footer>
    </div>
  );
}