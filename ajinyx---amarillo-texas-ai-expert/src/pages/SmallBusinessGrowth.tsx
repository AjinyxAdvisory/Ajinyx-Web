import { motion } from 'motion/react';
import AjinyxPromise from '../components/AjinyxPromise';

const cards = [
  {
    eyebrow: "NEVER MISS ANOTHER LEAD",
    title: "AI CHAT + VOICE ASSISTANT",
    text: "A 24/7 AI assistant lives on your website — answering questions, qualifying leads, booking appointments, and closing jobs while you're on the job site. It responds in seconds. It never calls in sick. It handles everything so you can focus on the work."
  },
  {
    eyebrow: "NO LEAD LEFT BEHIND",
    title: "AI-POWERED FOLLOW-UP",
    text: "Warm leads who didn't book yet. Cold prospects who went quiet. Both get intelligent, automated follow-up sequences — by text, email, or both — that feel personal, not robotic. The system stays in touch so you don't have to."
  },
  {
    eyebrow: "BUILD A REPUTATION THAT SELLS",
    title: "REPUTATION MANAGEMENT",
    text: "Automatically request reviews from every satisfied customer at exactly the right moment. Responses to new reviews are handled. Your rating climbs. New customers see social proof before they even pick up the phone. Your reputation works while you sleep."
  }
];

export default function SmallBusinessGrowth() {
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
            Small Business Growth
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed"
          >
            We build AI systems that give you your time and business back. Transform generic AI into your most reliable employee.
          </motion.p>
        </div>
      </section>

      {/* 3-Column Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-zinc-900/30 border border-zinc-800 hover:border-cyan-500/30 transition-all duration-500 group"
              >
                <div className="space-y-6">
                  <span className="text-xs font-black tracking-widest text-cyan-500 uppercase">
                    {card.eyebrow}
                  </span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AjinyxPromise />
    </main>
  );
}
