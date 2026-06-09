import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import EmployeeAccess from "../components/EmployeeAccess";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <EmployeeAccess />
    </div>
  );
}