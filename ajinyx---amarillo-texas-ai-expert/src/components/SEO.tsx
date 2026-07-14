import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { businessAddressSchema, businessInfo } from '../lib/businessInfo';

const SITE_NAME = businessInfo.name;
const BASE_URL = businessInfo.url;
const DEFAULT_OG_IMAGE = 'https://www.ajinyx.com/og-image.jpg';

type RouteSeo = {
  title: string;
  description: string;
  robots?: string;
  ogType?: string;
};

const seoByPath: Record<string, RouteSeo> = {
  '/': {
    title: 'Ajinyx Advisory Group | Amarillo AI Automation & Strategy',
    description:
      'Ajinyx Advisory Group helps Amarillo and Texas Panhandle businesses use AI automation, voice AI, chat assistants, and custom systems to capture leads, book appointments, and reduce manual work.',
  },
  '/enterprise': {
    title: 'Enterprise AI Advisory in Amarillo, TX | Ajinyx Advisory Group',
    description:
      'Strategic AI advisory for Amarillo and Texas Panhandle organizations. Ajinyx Advisory Group builds secure AI roadmaps, governance frameworks, and enterprise automation that reduce manual work.',
  },
  '/small-business': {
    title: 'Small Business AI Automation in Amarillo, TX | Ajinyx Advisory Group',
    description:
      'AI automation for Amarillo small businesses. Lead capture, appointment booking, AI voice assistants, AI chat assistants, and follow-up systems built by Ajinyx Advisory Group.',
  },
  '/marketing': {
    title: 'Marketing Agency in Amarillo, TX | Ajinyx Advisory Group',
    description:
      'Ajinyx provides videography, drone footage, commercials, Reels, Google Business Profile optimization, Google LSA management, social media management, and custom web design for Amarillo and Texas Panhandle businesses.',
  },
  '/custom-solutions': {
    title: 'Custom AI Systems & Software in Amarillo, TX | Ajinyx Advisory Group',
    description:
      'Custom AI systems, internal tools, and integrations built for Amarillo and Texas Panhandle businesses. Ajinyx Advisory Group designs software around your exact workflow.',
  },
  '/book/meeting': {
    title: 'Book an AI Consultation | Ajinyx Advisory Group',
    description:
      'Schedule a consultation with Ajinyx Advisory Group to discuss AI automation, voice AI, chat assistants, and custom systems for your Amarillo or Texas Panhandle business.',
    robots: 'noindex,follow',
  },
};

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    element!.setAttribute(key, value);
  });
}

function upsertLink(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector(selector) as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    element!.setAttribute(key, value);
  });
}

function upsertJsonLd(id: string, data: Record<string, unknown> | null) {
  const existing = document.head.querySelector(
    `script[type="application/ld+json"][data-seo-id="${id}"]`,
  ) as HTMLScriptElement | null;

  if (!data) {
    if (existing) existing.remove();
    return;
  }

  const element = existing ?? document.createElement('script');
  element.setAttribute('type', 'application/ld+json');
  element.setAttribute('data-seo-id', id);
  element.textContent = JSON.stringify(data);
  if (!existing) document.head.appendChild(element);
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: businessInfo.name,
  '@id': `${BASE_URL}/#organization`,
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  telephone: businessInfo.telephone,
  hasMap: businessInfo.address.mapsUrl,
  description:
    `${businessInfo.name} provides AI automation consulting, AI strategy, AI voice assistants, AI chat assistants, custom AI software, and marketing services from ${businessInfo.address.display} for Amarillo and Texas Panhandle businesses.`,
  areaServed: [
    { '@type': 'City', name: 'Amarillo, Texas' },
    { '@type': 'Place', name: 'Texas Panhandle' },
    { '@type': 'City', name: 'Pampa, Texas' },
    { '@type': 'City', name: 'Borger, Texas' },
    { '@type': 'City', name: 'Canyon, Texas' },
  ],
  serviceType: [
    'AI automation consulting',
    'AI strategy',
    'AI voice assistants',
    'AI chat assistants',
    'Custom AI software',
  ],
  address: businessAddressSchema,
};

const homepageFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where is Ajinyx Advisory Group located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Ajinyx Advisory Group is located at ${businessInfo.address.display}. We work with businesses in Amarillo, Canyon, Borger, Pampa, Dumas, and across the Texas Panhandle, with select consulting, automation, web design, and marketing services available outside the region.`,
      },
    },
    {
      '@type': 'Question',
      name: 'What does Ajinyx Advisory Group do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ajinyx Advisory Group builds AI automation systems, AI voice assistants, AI chat assistants, and custom AI software for businesses in Amarillo and across the Texas Panhandle. Our focus is capturing leads, booking appointments, and reducing manual work so owners can reclaim their time.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas does Ajinyx serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Ajinyx Advisory Group is located at ${businessInfo.address.display}. We serve Amarillo, Canyon, Borger, Pampa, Dumas, and the broader Texas Panhandle region. Our systems are built for the way regional businesses actually operate.`,
      },
    },
    {
      '@type': 'Question',
      name: 'How do AI voice assistants help small businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AI voice assistants answer calls, qualify leads, and book appointments around the clock. For Amarillo small businesses, that means no missed opportunities after hours and consistent customer experience without hiring additional staff.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can an AI chat assistant do on my website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An AI chat assistant greets visitors, answers common questions, captures lead information, and books appointments directly into your calendar. It is trained on your business so conversations feel natural and on-brand.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Ajinyx build a custom AI system for my business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We design and build custom AI systems and internal tools around your exact workflow. That includes integrations with your CRM, calendar, and the software you already use, so automation fits your operation instead of forcing change.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does AI automation capture more leads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our AI automation systems respond to new inquiries instantly, route qualified leads, and follow up consistently. Faster response times and disciplined follow-up are the two largest drivers of improved conversion for local businesses.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I book a consultation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can schedule a consultation at ajinyx.com/book/meeting. We will discuss your current workflow, where AI automation can reduce manual work, and what a tailored system would look like for your Amarillo or Texas Panhandle business.',
      },
    },
  ],
};

const marketingServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Full-Service Marketing Services',
  url: `${BASE_URL}/marketing`,
  description:
    'Videography, drone footage, commercials, Reels, Google Business Profile optimization, Google LSA management, social media management, and custom web design for Amarillo and Texas Panhandle businesses.',
  provider: {
    '@type': 'ProfessionalService',
    name: businessInfo.name,
    '@id': `${BASE_URL}/#organization`,
    url: BASE_URL,
    telephone: businessInfo.telephone,
    hasMap: businessInfo.address.mapsUrl,
    address: businessAddressSchema,
  },
  areaServed: [
    { '@type': 'City', name: 'Amarillo, Texas' },
    { '@type': 'Place', name: 'Texas Panhandle' },
    { '@type': 'City', name: 'Canyon, Texas' },
    { '@type': 'City', name: 'Pampa, Texas' },
    { '@type': 'City', name: 'Borger, Texas' },
    { '@type': 'City', name: 'Dumas, Texas' },
    { '@type': 'City', name: 'Hereford, Texas' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Marketing Services',
    itemListElement: [
      'Videography',
      'Drone videography',
      'Commercial video production',
      'Short-form video production',
      'Google Business Profile optimization',
      'Google Local Services Ads management',
      'Social media management',
      'Web design',
    ].map((name) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name,
        provider: {
          '@type': 'ProfessionalService',
          name: 'Ajinyx Advisory Group',
        },
      },
    })),
  },
};

const marketingFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can Ajinyx manage all of our marketing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Ajinyx can coordinate videography, Google Business Profile optimization, Google Local Services Ads, Facebook and Instagram management, and web design under one connected strategy. The exact scope is built around the business\'s goals, budget, current assets, and internal capabilities.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Google Boost the same as Google Ads?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Google Boost is Ajinyx\'s name for Google Business Profile optimization, sometimes called GMB optimization. It focuses on strengthening the business\'s local profile, information, content, photos, services, reviews, and activity. Google LSA and other paid advertising are separate services.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Ajinyx guarantee first place on Google?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No ethical marketing company can guarantee a specific organic ranking, Local Services Ads position, number of leads, or Google badge. Ajinyx follows structured optimization and management practices designed to improve the account\'s quality, visibility, responsiveness, and conversion potential.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can one video shoot provide content for several months?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depending on the business and production plan, one organized shoot can create a substantial library of footage. That footage may be repurposed into commercials, website videos, Reels, Shorts, service highlights, employee introductions, project videos, and future advertisements.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will you post our content in local Facebook groups?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When the client has appropriate access and the content is relevant, Ajinyx may distribute posts into local Facebook groups where administrator approval and group rules permit it. We prioritize useful, community-appropriate content and do not use spam-based posting methods.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the client pay Google advertising spend separately?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Google LSA and other advertising budgets are paid separately from Ajinyx\'s service or management fees unless a written proposal states otherwise.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Ajinyx connect the website to our CRM and calendar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Depending on the project, Ajinyx can connect websites to lead forms, appointment calendars, CRM systems, automated follow-up, AI chat assistants, voice assistants, and custom workflows.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work only with businesses in Amarillo?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Ajinyx is located at ${businessInfo.address.display} and serves businesses throughout the Texas Panhandle, but select marketing, web design, automation, and consulting services can also be delivered to businesses outside the region.`,
      },
    },
  ],
};

export default function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const route = seoByPath[pathname] ?? seoByPath['/'];
    const canonicalUrl = new URL(pathname, BASE_URL).toString();
    const robots = route.robots ?? 'index,follow';
    const ogType = route.ogType ?? 'website';

    document.title = route.title;

    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: route.description,
    });

    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: robots,
    });

    upsertLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: canonicalUrl,
    });

    upsertMeta('meta[property="og:site_name"]', {
      property: 'og:site_name',
      content: SITE_NAME,
    });

    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: ogType,
    });

    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: route.title,
    });

    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: route.description,
    });

    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: canonicalUrl,
    });

    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: DEFAULT_OG_IMAGE,
    });

    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });

    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: route.title,
    });

    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: route.description,
    });

    upsertMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: DEFAULT_OG_IMAGE,
    });

    upsertJsonLd('organization', organizationSchema);
    upsertJsonLd('homepage-faq', pathname === '/' ? homepageFaqSchema : null);
    upsertJsonLd('marketing-service', pathname === '/marketing' ? marketingServiceSchema : null);
    upsertJsonLd('marketing-faq', pathname === '/marketing' ? marketingFaqSchema : null);
  }, [pathname]);

  return null;
}
