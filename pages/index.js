import Head from "next/head";
import { useState } from "react";
import { motion } from "framer-motion";
import { Crosshair } from "lucide-react";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleInput = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Pro-Dispense | Elite Sports Nutrition Technology</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Precision nutrition technology with smart dispensing, tracking and performance optimization." />
      </Head>

      <main className="bg-gradient-to-b from-precision-blue to-focus-blue text-white min-h-screen font-sans">

        {/* Hero Section */}
        <section className="relative flex flex-col md:flex-row items-center justify-between px-8 max-w-7xl mx-auto py-32 gap-16 overflow-hidden">
          {/* Text Content */}
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-xl fadeInUp">
            <h1 className="text-6xl font-extrabold mb-6 leading-tight tracking-wide">Introducing <span className="bg-gradient-to-r from-neon-accent to-emerald-400 bg-clip-text text-transparent">Pro-Dispense</span></h1>
            <p className="text-lg font-semibold mb-10 leading-relaxed">Next-generation precision dispensing with the FLO 1 smart system for elite sports nutrition.</p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 14px #94e5ff" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("timeConvenience").scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-to-r from-precision-blue to-focus-blue text-white py-4 px-10 rounded-full font-bold tracking-wider shadow-md"
            >
              Explore Now
            </motion.button>
          </motion.div>

          {/* Powder-Man Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 0.3, scale: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="absolute right-0 bottom-0 w-1/3 pointer-events-none select-none z-0"
            aria-hidden="true"
          >
            <img src="/powder-man.png" alt="" draggable="false" />
          </motion.div>
        </section>

        {/* Time & Convenience - Problem */}
        <section id="timeConvenience" className="relative max-w-5xl mx-auto px-8 py-24 bg-gradient-to-r from-focus-blue to-precision-blue rounded-3xl shadow-lg mt-[-5rem] mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <motion.div initial={{ x: -40, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="text-white fadeInUp">
              <h2 className="text-4xl font-bold mb-5">Time & Convenience</h2>
              <p className="text-lg font-medium mb-4">
                Manual supplement preparation consumes precious time, adding friction to daily athlete routines.
              </p>
              <p className="text-lg font-light">
                Variations in measuring ingredients and mixing affect supplement quality and athlete outcomes, leading to inconsistencies that slow progress.
              </p>
            </motion.div>

            <motion.div initial={{ x: 40, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="fadeInUp">
              <Crosshair className="w-48 h-48 stroke-neon-accent opacity-40 mx-auto" />
            </motion.div>
          </div>
        </section>

        {/* Consistency & Quality */}
        <section id="consistencyQuality" className="max-w-5xl mx-auto px-8 py-20 relative rounded-3xl shadow-lg bg-gradient-to-r from-precision-blue to-focus-blue text-white mb-20">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="fadeInUp max-w-prose mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-5">Consistency & Quality</h2>
            <p className="text-lg leading-relaxed font-light">
              Ready-to-drink products often contain additives, generate plastic waste, and provide no bespoke nutrition to individual athletes.
            </p>
          </motion.div>
        </section>

        {/* Data Tracking & Analysis */}
        <section id="dataTracking" className="max-w-5xl mx-auto px-8 py-20 bg-transparent text-white mb-20">
          <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="fadeInUp max-w-prose mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-5 uppercase tracking-wide">Data Tracking & Analysis</h2>
            <p className="text-lg font-normal leading-relaxed">
              No current reliable solution tracks consumption, compliance, or nutritional behaviour—making understanding and optimisation impossible.
            </p>
          </motion.div>
        </section>

      </main>
    </>
  );
}
