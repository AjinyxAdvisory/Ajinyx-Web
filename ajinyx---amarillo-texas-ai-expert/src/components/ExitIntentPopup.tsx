import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseOut = (e: MouseEvent) => {
      if (!hasShown && e.clientY <= 0) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseOut);

    // Load GoHighLevel Form Script
    const script = document.createElement('script');
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.removeEventListener('mouseleave', handleMouseOut);
      document.body.removeChild(script);
    };
  }, [hasShown]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl max-h-[90vh] bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-2xl overflow-y-auto"
        >
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors z-10"
          >
            <X size={24} />
          </button>

          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-white leading-tight">
                How Smart Business Owners Are Turning Generic AI Into a High-Performance Digital Strategist
              </h2>
              <p className="text-zinc-400 text-lg">
                Get The AI Business Brain Setup Cheat Sheet: How to Teach ChatGPT, Claude & Google Gemini Everything About Your Business So They Actually Work For You... Not Against You
              </p>
            </div>

            <div className="w-full min-h-[600px] bg-zinc-800/50 rounded-lg overflow-hidden">
              <iframe 
                src="https://api.leadconnectorhq.com/widget/form/pcq8V4IWsoM6VeB2m6mU" 
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px' }}
                id="inline-pcq8V4IWsoM6VeB2m6mU" 
                data-layout="{'id':'INLINE'}" 
                data-trigger-type="alwaysShow" 
                data-trigger-value="" 
                data-activation-type="alwaysActivated" 
                data-activation-value="" 
                data-deactivation-type="neverDeactivate" 
                data-deactivation-value="" 
                data-form-name="Form 3" 
                data-height="1204" 
                data-layout-iframe-id="inline-pcq8V4IWsoM6VeB2m6mU" 
                data-form-id="pcq8V4IWsoM6VeB2m6mU" 
                title="Form 3"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
