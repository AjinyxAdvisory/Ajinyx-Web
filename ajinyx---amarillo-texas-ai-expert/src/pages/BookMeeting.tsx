import { motion } from 'motion/react';
import { useEffect } from 'react';

export default function BookMeeting() {
  useEffect(() => {
    // Load GoHighLevel Form Script
    const script = document.createElement('script');
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-20 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10 space-y-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-white"
          >
            Book Your Lunch Meeting
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
          >
            Let’s discuss your vision for the future of your business. Pick a day and time that works for you, and I'll buy you lunch.
          </motion.p>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-zinc-900/30 border border-[#333333] overflow-hidden shadow-2xl min-h-[800px] md:min-h-[1000px]"
          >
            <iframe 
              src="https://api.leadconnectorhq.com/widget/booking/uU6owSDHY4qbl2efNl4u" 
              style={{ width: '100%', height: '1000px', border: 'none', overflow: 'hidden' }} 
              scrolling="no" 
              id="uU6owSDHY4qbl2efNl4u_1774504145003"
              title="Book Your Lunch Meeting"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* The Ajinyx Promise Footer */}
      <section className="py-24 bg-black border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-black text-white">The Ajinyx Promise</h2>
            <p className="text-xl text-zinc-400 leading-relaxed">
              "Our goal isn't just to deploy technology; it's to give you your time and business back. We build intelligent, reliable solutions that eliminate your daily bottlenecks, so you can get back to actually leading your company."
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
