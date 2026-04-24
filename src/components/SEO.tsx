import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const siteUrl = 'https://www.ajinyx.com';

const seoByPath = {
  '/': {
    title: 'Ajinyx Advisory Group | Amarillo AI Automation & Strategy',
    description:
      'Ajinyx helps Amarillo and Texas Panhandle businesses implement AI automation, voice assistants, and custom systems to capture more leads and eliminate manual work.',
  },
  '/enterprise': {
    title: 'Enterprise AI Advisory | Ajinyx',
    description:
      'Strategic AI advisory, governance, and automation systems for established organizations.',
  },
  '/small-business': {
    title: 'AI Automation for Small Businesses | Ajinyx',
    description:
      'AI chat, voice, follow-up, booking, and reputation systems for service businesses.',
  },
  '/custom-solutions': {
    title: 'Custom AI Solutions | Ajinyx',
    description:
      'Custom-built AI software, integrations, and automation systems tailored to your business.',
  },
  '/book/meeting': {
    title: 'Book AI Strategy Call | Ajinyx',
    description:
      'Schedule a consultation to implement AI systems and automation into your business.',
  },
};

export default function SEO() {
  const { pathname } = useLocation();
  const seo = seoByPath[pathname] || seoByPath['/'];

  useEffect(() => {
    document.title = seo.title;

    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', seo.description);
    setMeta('robots', 'index, follow');

    // Canonical
    let link = document.querySelector("link[rel='canonical']");
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', siteUrl + pathname);

  }, [pathname]);

  return null;
}
