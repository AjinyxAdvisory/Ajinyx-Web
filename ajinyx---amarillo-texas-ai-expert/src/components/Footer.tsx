import { motion, useScroll, useTransform } from 'motion/react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { businessAddressSchema, businessInfo } from '../lib/businessInfo';

export default function Footer() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessInfo.name,
    "image": "https://ais-dev-4egkxzciusngnvshspwrur-560263232515.us-east1.run.app/logo.png",
    "@id": `${businessInfo.url}/#organization`,
    "url": businessInfo.url,
    "telephone": businessInfo.telephone,
    "hasMap": businessInfo.address.mapsUrl,
    "address": businessAddressSchema,
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.222,
      "longitude": -101.8313
    },
    "areaServed": [
      { "@type": "City", "name": "Amarillo" },
      { "@type": "City", "name": "Canyon" },
      { "@type": "City", "name": "Borger" },
      { "@type": "City", "name": "Dumas" },
      { "@type": "City", "name": "Pampa" },
      { "@type": "City", "name": "Hereford" },
      { "@type": "City", "name": "Dalhart" },
      { "@type": "City", "name": "Perryton" },
      { "@type": "City", "name": "Childress" },
      { "@type": "City", "name": "Clarendon" }
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  };

  return (
    <footer className="bg-black border-t border-zinc-900 pt-20 pb-10">
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <span className="text-2xl font-black tracking-tighter text-white">
              AJI<span className="text-cyan-500">NYX</span>
            </span>
            <p className="text-zinc-500 text-sm leading-relaxed">
              The leading Amarillo Texas AI Expert. We build systems that give you your time and business back.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li><Link to="/enterprise" className="hover:text-cyan-500 transition-colors">Enterprise Advisory</Link></li>
              <li><Link to="/small-business" className="hover:text-cyan-500 transition-colors">Small Business Systems</Link></li>
              <li><Link to="/marketing" className="hover:text-cyan-500 transition-colors">Marketing Services</Link></li>
              <li><Link to="/custom-solutions" className="hover:text-cyan-500 transition-colors">Custom AI Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Consulting Hours</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li>Monday - Friday: 9 AM to 5 PM</li>
              <li className="text-cyan-500 font-medium">AI Systems Availability: 24/7/365</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-zinc-500">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-cyan-500" aria-hidden="true" />
                <a href={`tel:${businessInfo.telephone}`} className="hover:text-white transition-colors">{businessInfo.telephone}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-cyan-500" aria-hidden="true" />
                <a
                  href={businessInfo.address.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                  aria-label={`View directions to ${businessInfo.name} at ${businessInfo.address.display}`}
                >
                  {businessInfo.address.display}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-cyan-500" aria-hidden="true" />
                <span>Texas Panhandle Service Area</span>
              </li>
              <li>
                <Link 
                  to="/book/meeting" 
                  className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-400 font-bold mt-2"
                >
                  Book a Meeting <ExternalLink size={14} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs">
            © {new Date().getFullYear()} Ajinyx. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-zinc-600">
            <a href="#" className="hover:text-zinc-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
