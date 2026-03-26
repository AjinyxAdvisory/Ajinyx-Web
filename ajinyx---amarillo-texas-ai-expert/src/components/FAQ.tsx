import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What exactly does a custom AI system do for my daily operations?",
    answer: "A custom AI system acts as an invisible, highly efficient employee that never sleeps. It handles the repetitive, time consuming tasks like answering common customer questions, booking appointments, and following up on leads, freeing you up to focus on the high level work of actually growing your company. It essentially gives you your time back while ensuring no potential customer is ever ignored."
  },
  {
    question: "Do I need technical skills to use the software once it is built?",
    answer: "Not at all. We design everything specifically so that you do not need to be a tech expert to run it. The interfaces are clean and intuitive, and the AI handles the complex processing in the background. If you know how to use an internet browser or a basic smartphone app, you will have complete command over your new system from day one."
  },
  {
    question: "How does the AI handle customer inquiries outside of normal business hours?",
    answer: "While our official consulting hours are 9 AM to 5 PM, the systems we build for you ensure your business is open 24 hours a day. Your custom AI chat assistant and voice receptionist will happily answer questions, qualify leads, and book appointments at two in the morning on a Sunday, meaning you wake up to a calendar full of qualified meetings instead of a voicemail box full of missed opportunities."
  },
  {
    question: "Will the AI sound like a robot when talking to my customers?",
    answer: "Modern AI voice and chat systems are incredibly natural and conversational. We train the AI specifically on your business data, your tone of voice, and your specific offerings. It will greet your customers warmly, answer their questions accurately, and guide them toward a booking with the same friendly professionalism you would expect from your best human team member."
  },
  {
    question: "What exactly is the Ajinyx Promise?",
    answer: "We measure our success by the amount of stress we remove from your daily operations. We promise to act as your dedicated digital strategists, deploying the exact level of AI integration you need to scale effortlessly. We handle the immense complexity of the technology in the background, so you can experience the relief of a business that runs smoothly, day or night."
  },
  {
    question: "Are there hidden fees or expensive monthly software retainers?",
    answer: "We completely reject the standard agency model of trapping businesses in expensive software retainers. Our custom builds typically involve a straightforward, one time implementation fee. After that, there is just a highly manageable, predictable monthly structure strictly for the server hosting and API maintenance required to keep the AI models running flawlessly."
  },
  {
    question: "How does this system help us generate more positive reviews?",
    answer: "The system completely automates the review gathering process. Once a service is completed or an appointment concludes, the AI automatically reaches out to the customer to ensure they were satisfied. If they had a great experience, it instantly provides them with a direct link to leave a positive review on your Google Business Profile, organically boosting your local ranking without you lifting a finger."
  },
  {
    question: "Can the new AI system integrate with the calendar I already use?",
    answer: "Yes, the systems we build are designed to seamlessly connect with the tools you already rely on. Whether you use Google Calendar, Outlook, or a specific industry booking software, the AI will read your real time availability and instantly sync new appointments, eliminating the risk of double booking or scheduling conflicts."
  },
  {
    question: "Is my company data and my customers' information kept secure?",
    answer: "Security is our top priority when building custom internal tools. We utilize the enterprise grade security infrastructure of Google Cloud to ensure your data is encrypted and protected. Your proprietary business information is never used to train public AI models, keeping your operational secrets strictly confidential."
  },
  {
    question: "How do we get started and how long does the process take?",
    answer: "The best way to start is to book a day and time that works for you using our calendar link, and we will buy you lunch to discuss your vision for the future of your business. Depending on the complexity of the custom app or system, implementation can take anywhere from a few days to a few weeks, but we will provide a precise timeline during our initial consultation."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Common Questions</h2>
          <p className="text-zinc-500 text-lg">Everything you need to know about partnering with Ajinyx.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-zinc-800 rounded-2xl overflow-hidden bg-zinc-900/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-zinc-800/50 transition-colors"
              >
                <span className="text-lg font-bold text-white pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="text-cyan-500 shrink-0" />
                ) : (
                  <Plus className="text-cyan-500 shrink-0" />
                )}
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-8 pb-8 text-zinc-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
