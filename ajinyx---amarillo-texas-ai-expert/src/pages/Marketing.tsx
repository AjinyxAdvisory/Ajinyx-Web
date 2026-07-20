import { useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Camera,
  Check,
  ChevronDown,
  CircleCheck,
  Clapperboard,
  Globe2,
  LayoutTemplate,
  MapPin,
  MessageCircle,
  MonitorSmartphone,
  MousePointerClick,
  Phone,
  PhoneCall,
  Search,
  SearchCheck,
  Share2,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Video,
  type LucideIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { businessInfo } from '../lib/businessInfo';

type ServiceOverview = {
  id: string;
  name: string;
  description: string;
  features: string[];
  href: string;
  icon: LucideIcon;
};

type DetailedService = {
  id: string;
  eyebrow: string;
  heading: string;
  paragraphs: string[];
  included: string[];
  benefitHeading: string;
  benefitCopy: string;
  cta: string;
  icon: LucideIcon;
  visualTitle: string;
  visualItems: string[];
  disclosure?: string;
};

type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

const overviewServices: ServiceOverview[] = [
  {
    id: 'videography-card',
    name: 'Videography',
    description:
      'Professional video content built to capture attention, communicate your value, and give your business a library of content that can be used across multiple platforms.',
    features: ['Drone Footage', 'Commercials', 'Reels and Shorts'],
    href: '#videography',
    icon: Video,
  },
  {
    id: 'google-boost-card',
    name: 'Google Boost',
    description:
      'Google Business Profile optimization designed to improve how your business appears in local search and give potential customers more reasons to call, visit, or request information.',
    features: ['Profile Optimization', 'Local Visibility', 'Review Strategy'],
    href: '#google-boost',
    icon: MapPin,
  },
  {
    id: 'google-lsa-card',
    name: 'Google LSA',
    description:
      'Google Local Services Ads management that helps eligible businesses appear prominently when local customers search for the services they provide.',
    features: ['LSA Setup', 'Lead Management', 'Performance Optimization'],
    href: '#google-lsa',
    icon: BadgeCheck,
  },
  {
    id: 'social-media-card',
    name: 'Social Media Management',
    description:
      'Consistent Facebook and Instagram content supported by professional creative assets, short-form video, strategic posting, and expanded local distribution.',
    features: ['Facebook and Instagram', 'Content Management', 'Local Distribution'],
    href: '#social-media',
    icon: Share2,
  },
  {
    id: 'web-design-card',
    name: 'Web Design',
    description:
      'Custom websites designed to clearly communicate what you do, establish credibility, capture leads, and guide visitors toward taking action.',
    features: ['Custom Design', 'Lead Capture', 'Mobile Responsive'],
    href: '#web-design',
    icon: MonitorSmartphone,
  },
];

const detailedServices: DetailedService[] = [
  {
    id: 'videography',
    eyebrow: 'PROFESSIONAL CONTENT THAT EARNS ATTENTION',
    heading: 'Videography That Gives Your Business a Face, a Voice and a Story.',
    paragraphs: [
      'A strong video can communicate more in thirty seconds than a page of text. Ajinyx creates professional video assets that show customers who you are, what makes your business different, and why they should trust you.',
      'We plan each shoot around how the footage will actually be used. One production day can provide material for website videos, commercials, Facebook posts, Instagram Reels, YouTube Shorts, advertisements, and future campaigns.',
      'Instead of filming one video and using it once, we create a reusable content library that can continue working across your marketing.',
    ],
    included: [
      'Professional on-location videography',
      'Aerial drone footage when location, weather, and regulations permit',
      'Business overview and brand-story videos',
      'Television, connected-TV, digital, and social commercials',
      'Customer testimonial filming when real customers are available',
      'Product, service, facility, and project footage',
      'Vertical Reels and short-form video',
      'Horizontal website and commercial edits',
      'Captions, branded text, music, and platform-ready formatting',
      'Re-editing and repurposing footage for multiple channels',
    ],
    benefitHeading: 'One Shoot. Multiple Marketing Assets.',
    benefitCopy:
      'We capture footage with repurposing in mind. Long-form footage can become commercials, service highlights, employee introductions, behind-the-scenes content, Reels, Shorts, website backgrounds, and future advertisements.',
    cta: 'Plan Your Video Shoot',
    icon: Clapperboard,
    visualTitle: 'Production Library',
    visualItems: ['Drone footage', 'Commercial edits', 'Reels', 'Website video'],
  },
  {
    id: 'google-boost',
    eyebrow: 'LOCAL SEARCH VISIBILITY',
    heading: 'Google Boost: Turn Your Google Profile Into a Customer-Acquisition Asset.',
    paragraphs: [
      'Your Google Business Profile is often the first impression a customer receives before visiting your website or calling your business. An incomplete, inactive, or poorly structured profile can cost you visibility and trust.',
      'Ajinyx\'s Google Boost service focuses on Google Business Profile optimization, sometimes referred to as GMB optimization. We improve the accuracy, completeness, activity, and conversion potential of your profile so it better supports local discovery.',
      'This is not a promise of a specific ranking. It is a structured local-visibility strategy designed to make your profile stronger, more useful, and more competitive.',
    ],
    included: [
      'Business information and profile audit',
      'Primary and secondary category review',
      'Service and product configuration',
      'Business description optimization',
      'Service-area and location review',
      'Hours, contact information, and website-link verification',
      'Photo and video publishing strategy',
      'Google Post creation and publishing',
      'Frequently asked question development',
      'Review-request strategy',
      'Review-response support',
      'Profile activity and visibility monitoring',
      'Recommendations for correcting inconsistencies across the web',
    ],
    benefitHeading: 'Show Customers the Right Information at the Right Time.',
    benefitCopy:
      'A properly managed Google profile helps customers quickly understand what you offer, where you operate, when you are available, and why they should choose you.',
    cta: 'Improve My Google Visibility',
    icon: Search,
    visualTitle: 'Local Profile System',
    visualItems: ['Business info', 'Service areas', 'Posts', 'Reviews'],
  },
  {
    id: 'google-lsa',
    eyebrow: 'HIGH-INTENT LOCAL LEADS',
    heading: 'Put Your Business in Front of Customers Who Are Ready to Call.',
    paragraphs: [
      'Google Local Services Ads can place eligible businesses near the top of Google when local customers search for a specific service. Unlike traditional advertising focused primarily on clicks, LSA is structured around direct customer inquiries such as phone calls and messages.',
      'Ajinyx helps businesses set up, manage, monitor, and improve their Local Services Ads campaigns. We focus on responsiveness, service-area accuracy, budget pacing, lead quality, and the operational issues that can cause businesses to waste opportunities.',
      'Google Guaranteed or Google Screened participation depends on the business category, market, licensing, insurance, screening requirements, and Google approval. Participation is not automatic, and every business must meet Google\'s requirements.',
    ],
    included: [
      'Eligibility and account-readiness review',
      'Google LSA account setup',
      'Verification and onboarding guidance',
      'Service-category configuration',
      'Service-area configuration',
      'Budget and bidding guidance',
      'Business-hours and availability review',
      'Lead notification setup',
      'Missed-call and lead-response monitoring',
      'Lead-quality review',
      'Invalid-lead and dispute recommendations',
      'Budget-pacing analysis',
      'Geographic leakage review',
      'Service-category opportunity analysis',
      'Ongoing account optimization',
      'Performance reporting',
    ],
    benefitHeading: 'More Than Turning the Ads On.',
    benefitCopy:
      'LSA performance is affected by how quickly calls are answered, how consistently leads are handled, whether the service area is accurate, and whether invalid leads are identified. Ajinyx helps manage the full system around the campaign, not only the advertisement.',
    cta: 'See Whether My Business Qualifies',
    icon: SearchCheck,
    visualTitle: 'Lead Management View',
    visualItems: ['Eligibility', 'Service area', 'Lead review', 'Budget pacing'],
    disclosure:
      'Advertising spend is paid directly by the client and is separate from Ajinyx management fees. Google determines eligibility, verification, placement, and badge status.',
  },
  {
    id: 'social-media',
    eyebrow: 'CONSISTENCY, CONTENT AND DISTRIBUTION',
    heading: 'Social Media Management That Reaches Beyond Your Existing Followers.',
    paragraphs: [
      'Posting to a business page is only the beginning. Ajinyx develops and manages content for Facebook and Instagram while looking for additional opportunities to put that content in front of the local people most likely to care about it.',
      'We combine branded graphics, professional videos, Reels, business updates, educational content, promotions, project highlights, and customer-focused posts into a consistent publishing strategy.',
      'Where the client has appropriate access and where group rules allow it, Ajinyx can also distribute relevant content into established local Facebook groups. This gives strong content an opportunity to reach beyond the number of people already following the business page.',
      'Short-form video is especially valuable because Reels and similar formats can be distributed based on viewer interests and engagement rather than being limited solely to existing followers.',
    ],
    included: [
      'Facebook page management',
      'Instagram account management',
      'Monthly content planning',
      'Branded graphic creation',
      'Reels and short-form video publishing',
      'Repurposing professional video footage',
      'Business updates and promotional posts',
      'Educational and authority-building content',
      'Project and behind-the-scenes content',
      'Caption and call-to-action writing',
      'Scheduling and publishing',
      'Platform-appropriate formatting',
      'Local Facebook group distribution where authorized and permitted',
      'Basic engagement and comment monitoring',
      'Performance reporting and content recommendations',
    ],
    benefitHeading: 'Do Not Just Post. Distribute.',
    benefitCopy:
      'We build content to be reused and distributed across multiple channels. A single project, video shoot, promotion, or customer story can become several pieces of content instead of disappearing after one post.',
    cta: 'Build My Social Media Strategy',
    icon: MessageCircle,
    visualTitle: 'Content Distribution',
    visualItems: ['Facebook', 'Instagram', 'Reels', 'Local groups'],
    disclosure:
      'Group posting depends on administrator approval, client access, relevance, and each group\'s rules. Ajinyx will not use spam-based posting practices.',
  },
  {
    id: 'web-design',
    eyebrow: 'YOUR DIGITAL SALES FOUNDATION',
    heading: 'Custom Websites Built to Turn Visitors Into Conversations.',
    paragraphs: [
      'Your website should do more than confirm that your business exists. It should quickly explain what you offer, establish trust, answer common questions, and make it easy for the visitor to take the next step.',
      'Ajinyx creates custom, mobile-responsive websites designed around the customer journey. Every page should guide visitors toward a meaningful action such as calling, requesting an estimate, booking an appointment, starting a chat, or submitting a form.',
      'When appropriate, we can connect the website to appointment calendars, CRM systems, automated follow-up, AI chat assistants, talking AI assistants, review systems, and custom business workflows.',
    ],
    included: [
      'Custom website strategy',
      'Custom visual design',
      'Mobile-responsive development',
      'Clear service-page structure',
      'Conversion-focused page copy',
      'Calls to action throughout the website',
      'Click-to-call functionality',
      'Lead-capture forms',
      'Appointment-booking integration',
      'Contact routing',
      'Foundational on-page SEO structure',
      'Google Analytics or approved analytics integration',
      'CRM integration when included in the project',
      'AI chat or voice-assistant integration when included',
      'Performance and accessibility considerations',
      'Launch support',
    ],
    benefitHeading: 'Your Website Should Help Move the Customer Forward.',
    benefitCopy:
      'The strongest website creates a clear path from discovery to decision. It removes confusion, answers the questions that delay action, and makes contacting the business simple from any device.',
    cta: 'Discuss My Website',
    icon: Globe2,
    visualTitle: 'Conversion Website',
    visualItems: ['Lead capture', 'Booking', 'CRM', 'AI integration'],
  },
];

const journeySteps = [
  {
    id: 'get-discovered',
    title: 'Get Discovered',
    copy: 'Google Boost and Google LSA help put the business in front of local customers actively searching for its services.',
    icon: Search,
  },
  {
    id: 'capture-attention',
    title: 'Capture Attention',
    copy: 'Professional videography, drone footage, commercials, Reels, and social content give customers a reason to stop and learn more.',
    icon: Camera,
  },
  {
    id: 'build-trust',
    title: 'Build Trust',
    copy: 'Consistent branding, active profiles, useful content, reviews, and a polished website make the business look established and credible.',
    icon: BadgeCheck,
  },
  {
    id: 'create-action',
    title: 'Create Action',
    copy: 'Clear calls to action, lead forms, click-to-call buttons, appointment booking, and conversational tools make the next step easy.',
    icon: MousePointerClick,
  },
  {
    id: 'improve-system',
    title: 'Improve the System',
    copy: 'Reporting, lead analysis, content performance, and campaign management reveal where the customer journey can be improved.',
    icon: TrendingUp,
  },
];

const differentiators = [
  {
    id: 'connected-strategy',
    title: 'Connected Strategy',
    copy: 'Your videos, social content, Google presence, advertising, and website should support one another. We plan around the complete customer journey instead of treating every service as an isolated task.',
    icon: Sparkles,
  },
  {
    id: 'content-repurposing',
    title: 'Content Repurposing',
    copy: 'We look for ways to turn one production day, project, promotion, or customer story into multiple useful marketing assets across several channels.',
    icon: Clapperboard,
  },
  {
    id: 'local-distribution',
    title: 'Local Distribution',
    copy: 'We understand that local visibility often happens through search results, community pages, Facebook groups, recommendations, and regional relationships, not only through paid advertising.',
    icon: Users,
  },
  {
    id: 'built-for-conversion',
    title: 'Built for Conversion',
    copy: 'Visibility matters, but attention without a clear next step is wasted. Our work is designed to generate calls, form submissions, appointments, conversations, and qualified opportunities.',
    icon: Target,
  },
];

const processSteps = [
  {
    id: 'discovery',
    title: 'Discovery',
    copy: 'We learn about your business, services, customers, service area, current marketing, sales process, and growth goals.',
  },
  {
    id: 'strategy',
    title: 'Strategy',
    copy: 'We determine which combination of content, Google visibility, advertising, social media, and web infrastructure will have the greatest impact.',
  },
  {
    id: 'production-setup',
    title: 'Production and Setup',
    copy: 'Our team creates the content, configures the platforms, develops the website, and connects the necessary customer-acquisition systems.',
  },
  {
    id: 'launch-improve',
    title: 'Launch and Improve',
    copy: 'We publish, monitor, report, and make improvements based on performance, customer behavior, and business priorities.',
  },
];

const engagementOptions = [
  {
    id: 'focused-project',
    title: 'Focused Project',
    copy: 'Best for businesses that need a website, commercial, video shoot, Google setup, or another defined one-time project.',
  },
  {
    id: 'ongoing-marketing',
    title: 'Ongoing Marketing',
    copy: 'Best for businesses that need consistent content, social media management, Google visibility, campaign management, and reporting.',
  },
  {
    id: 'connected-growth-system',
    title: 'Connected Growth System',
    copy: 'Best for businesses that want Ajinyx to coordinate content, search visibility, lead generation, social media, web design, and conversion systems under one strategy.',
  },
];

const faqs: FaqItem[] = [
  {
    id: 'manage-all-marketing',
    question: 'Can Ajinyx manage all of our marketing?',
    answer:
      'Yes. Ajinyx can coordinate videography, Google Business Profile optimization, Google Local Services Ads, Facebook and Instagram management, and web design under one connected strategy. The exact scope is built around the business\'s goals, budget, current assets, and internal capabilities.',
  },
  {
    id: 'google-boost-ads',
    question: 'Is Google Boost the same as Google Ads?',
    answer:
      'No. Google Boost is Ajinyx\'s name for Google Business Profile optimization, sometimes called GMB optimization. It focuses on strengthening the business\'s local profile, information, content, photos, services, reviews, and activity. Google LSA and other paid advertising are separate services.',
  },
  {
    id: 'guarantee-first-place',
    question: 'Does Ajinyx guarantee first place on Google?',
    answer:
      'No ethical marketing company can guarantee a specific organic ranking, Local Services Ads position, number of leads, or Google badge. Ajinyx follows structured optimization and management practices designed to improve the account\'s quality, visibility, responsiveness, and conversion potential.',
  },
  {
    id: 'one-video-shoot',
    question: 'Can one video shoot provide content for several months?',
    answer:
      'Depending on the business and production plan, one organized shoot can create a substantial library of footage. That footage may be repurposed into commercials, website videos, Reels, Shorts, service highlights, employee introductions, project videos, and future advertisements.',
  },
  {
    id: 'facebook-groups',
    question: 'Will you post our content in local Facebook groups?',
    answer:
      'When the client has appropriate access and the content is relevant, Ajinyx may distribute posts into local Facebook groups where administrator approval and group rules permit it. We prioritize useful, community-appropriate content and do not use spam-based posting methods.',
  },
  {
    id: 'ad-spend-separate',
    question: 'Does the client pay Google advertising spend separately?',
    answer:
      'Yes. Google LSA and other advertising budgets are paid separately from Ajinyx\'s service or management fees unless a written proposal states otherwise.',
  },
  {
    id: 'crm-calendar',
    question: 'Can Ajinyx connect the website to our CRM and calendar?',
    answer:
      'Yes. Depending on the project, Ajinyx can connect websites to lead forms, appointment calendars, CRM systems, automated follow-up, AI chat assistants, voice assistants, and custom workflows.',
  },
  {
    id: 'amarillo-only',
    question: 'Do you work only with businesses in Amarillo?',
    answer:
      `Ajinyx is located at ${businessInfo.address.display} and serves businesses throughout the Texas Panhandle, but select marketing, web design, automation, and consulting services can also be delivered to businesses outside the region.`,
  },
];

const serviceNav = [
  { label: 'Videography', href: '#videography' },
  { label: 'Google Boost', href: '#google-boost' },
  { label: 'Google LSA', href: '#google-lsa' },
  { label: 'Social Media', href: '#social-media' },
  { label: 'Web Design', href: '#web-design' },
];

const touchpoints = [
  { label: 'Get Found', icon: Search },
  { label: 'Build Trust', icon: BadgeCheck },
  { label: 'Stay Visible', icon: Share2 },
  { label: 'Convert Attention', icon: MousePointerClick },
];

function MotionSection({
  children,
  className = '',
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      id={id}
      className={className}
    >
      {children}
    </motion.section>
  );
}

function PrimaryButton({ children }: { children: ReactNode }) {
  return (
    <Link
      to="/book/meeting"
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-bold text-black shadow-[0_0_28px_rgba(6,182,212,0.28)] transition-all hover:bg-cyan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-95"
    >
      {children}
    </Link>
  );
}

function HeroVisual() {
  const commandCards = [
    { label: 'Visibility', icon: Search },
    { label: 'Content', icon: Video },
    { label: 'Leads', icon: PhoneCall },
    { label: 'Reviews', icon: BadgeCheck },
    { label: 'Conversion', icon: MousePointerClick },
  ];

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-6 rounded-[2rem] bg-cyan-500/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950/80 p-5 shadow-2xl">
        <div className="mb-5 flex items-center justify-between border-b border-zinc-800 pb-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-400">Marketing Command Center</p>
            <p className="mt-1 text-sm text-zinc-500">Connected customer touchpoints</p>
          </div>
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-500" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {commandCards.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="rounded-2xl border border-zinc-800 bg-black/50 p-4">
                <Icon className="mb-4 h-5 w-5 text-cyan-400" aria-hidden="true" />
                <p className="text-sm font-bold text-white">{item.label}</p>
                <div className="mt-3 h-2 rounded-full bg-zinc-800">
                  <div className="h-2 w-2/3 rounded-full bg-cyan-500/70" />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-5 rounded-2xl border border-cyan-500/20 bg-cyan-500/5 p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-300">
              <Sparkles size={20} aria-hidden="true" />
            </div>
            <div>
              <p className="font-bold text-white">One connected system</p>
              <p className="text-sm text-zinc-400">Search, content, social, ads, and web working together.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceVisual({ service }: { service: DetailedService }) {
  const Icon = service.icon;

  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[2rem] bg-cyan-500/10 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2rem] border border-zinc-800 bg-zinc-950/80 p-6">
        <div className="flex items-center gap-3 border-b border-zinc-800 pb-5">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10 text-cyan-300">
            <Icon size={24} aria-hidden="true" />
          </div>
          <div>
            <p className="text-lg font-bold text-white">{service.visualTitle}</p>
            <p className="text-sm text-zinc-500">Ajinyx marketing workflow</p>
          </div>
        </div>
        <div className="mt-6 space-y-3">
          {service.visualItems.map((item) => (
            <div key={item} className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-black/50 p-4">
              <div className="flex items-center gap-3">
                <CircleCheck size={18} className="text-cyan-400" aria-hidden="true" />
                <span className="font-medium text-zinc-200">{item}</span>
              </div>
              <span className="h-2 w-12 rounded-full bg-cyan-500/50" aria-hidden="true" />
            </div>
          ))}
        </div>
        <div className="mt-6 grid grid-cols-3 gap-2" aria-hidden="true">
          <span className="h-16 rounded-2xl border border-zinc-800 bg-zinc-900/80" />
          <span className="h-16 rounded-2xl border border-cyan-500/20 bg-cyan-500/10" />
          <span className="h-16 rounded-2xl border border-zinc-800 bg-zinc-900/80" />
        </div>
      </div>
    </div>
  );
}

function DetailedServiceSection({ service, index }: { service: DetailedService; index: number }) {
  const isReversed = index % 2 === 1;

  return (
    <MotionSection
      className="scroll-mt-28 border-t border-zinc-900 py-20"
    >
      <div
        id={service.id}
        className="scroll-mt-28 grid items-center gap-12 lg:grid-cols-2"
      >
        <div className={isReversed ? 'lg:order-2' : ''}>
          <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-400">{service.eyebrow}</p>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">{service.heading}</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-400">
            {service.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-bold text-white">What Is Included</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {service.included.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-zinc-300">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-6">
            <h3 className="text-xl font-bold text-white">{service.benefitHeading}</h3>
            <p className="mt-3 leading-relaxed text-zinc-400">{service.benefitCopy}</p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <PrimaryButton>
              {service.cta}
              <ArrowRight size={18} aria-hidden="true" />
            </PrimaryButton>
          </div>
          {service.disclosure && (
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">{service.disclosure}</p>
          )}
        </div>

        <div className={isReversed ? 'lg:order-1' : ''}>
          <ServiceVisual service={service} />
        </div>
      </div>
    </MotionSection>
  );
}

function FaqAccordion() {
  const [openId, setOpenId] = useState(faqs[0].id);

  return (
    <div className="mx-auto mt-10 max-w-4xl divide-y divide-zinc-800 rounded-3xl border border-zinc-800 bg-zinc-950/60">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;
        return (
          <div key={faq.id}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-zinc-900/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-400"
              aria-expanded={isOpen}
              aria-controls={`${faq.id}-answer`}
              onClick={() => setOpenId(isOpen ? '' : faq.id)}
            >
              <span className="text-base font-bold text-white md:text-lg">{faq.question}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-cyan-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
            <div
              id={`${faq.id}-answer`}
              className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 leading-relaxed text-zinc-400">{faq.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Marketing() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="bg-black">
      <section className="relative overflow-hidden pt-32 pb-20 md:pt-40">
        <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-400">
              FULL-SERVICE MARKETING FOR LOCAL BUSINESSES
            </p>
            <h1 className="mt-5 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-7xl">
              Make Your Business <span className="text-cyan-400">Impossible to Ignore</span>.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
              Ajinyx combines professional content, local search visibility, social media distribution, Google lead
              generation, and conversion-focused web design into one connected marketing system. We do not focus on
              vanity metrics. We build the visibility, trust, and follow-up infrastructure that helps turn attention
              into customers.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton>
                <CalendarCheck size={18} aria-hidden="true" />
                Book a Marketing Strategy Call
              </PrimaryButton>
              <a
                href={`tel:${businessInfo.telephone}`}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-zinc-700 bg-zinc-950 px-6 py-3 text-sm font-bold text-white transition-all hover:border-cyan-400 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-95"
              >
                <Phone size={18} aria-hidden="true" />
                Call {businessInfo.telephone}
              </a>
            </div>
            <a
              href="#marketing-services"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-400 transition-colors hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Explore Our Marketing Services
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.55, ease: 'easeOut' }}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </section>

      <MotionSection className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] border border-zinc-800 bg-zinc-950/70 p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <h2 className="text-2xl font-black text-white md:text-4xl">One Strategy. Every Major Customer Touchpoint.</h2>
                <p className="mt-4 leading-relaxed text-zinc-400">
                  Your customers may discover you through Google, Facebook, Instagram, a video, a local recommendation,
                  or your website. Ajinyx connects those touchpoints so every part of your marketing reinforces the
                  next. You get consistent branding, stronger visibility, better content, and a clear path from first
                  impression to booked appointment.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {touchpoints.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="rounded-2xl border border-zinc-800 bg-black/40 p-4 text-center">
                      <Icon className="mx-auto h-5 w-5 text-cyan-400" aria-hidden="true" />
                      <p className="mt-3 text-sm font-bold text-white">{item.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      <section className="sticky top-20 z-30 border-y border-zinc-900 bg-black/85 py-4 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl flex-wrap justify-center gap-2 px-4 sm:px-6 lg:px-8" aria-label="Marketing services">
          {serviceNav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border border-zinc-800 bg-zinc-950 px-4 py-2 text-sm font-bold text-zinc-300 transition-colors hover:border-cyan-500/50 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </section>

      <MotionSection id="marketing-services" className="scroll-mt-32 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-400">CONNECTED MARKETING SERVICES</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
              Everything You Need to Be Seen, Remembered and Chosen.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-400">
              The strongest marketing does not rely on one channel. Ajinyx combines professional creative work with
              search visibility, social distribution, lead generation, and high-converting digital infrastructure.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {overviewServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.a
                  key={service.id}
                  href={service.href}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06, duration: 0.45 }}
                  className="group flex h-full flex-col rounded-3xl border border-zinc-800 bg-zinc-950/70 p-6 transition-all hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-[0_0_28px_rgba(6,182,212,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <Icon className="h-7 w-7 text-cyan-400" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-bold text-white group-hover:text-cyan-300">{service.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{service.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span key={feature} className="rounded-full border border-zinc-800 px-3 py-1 text-xs font-medium text-zinc-300">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-400">
                    Learn More
                    <ArrowRight size={15} aria-hidden="true" />
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {detailedServices.map((service, index) => (
          <div key={service.id}>
            <DetailedServiceSection service={service} index={index} />
          </div>
        ))}
      </div>

      <MotionSection className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-400">THE AJINYX ADVANTAGE</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
              Five Services. One Connected Customer Journey.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-5">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className="relative rounded-3xl border border-zinc-800 bg-zinc-950/70 p-6">
                  {index < journeySteps.length - 1 && (
                    <span className="absolute left-8 top-full h-4 w-px bg-cyan-500/40 lg:left-full lg:top-10 lg:h-px lg:w-4" aria-hidden="true" />
                  )}
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-sm font-black uppercase tracking-widest text-cyan-400">Step {index + 1}</p>
                  <h3 className="mt-2 text-xl font-bold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{step.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-black tracking-tight text-white md:text-5xl">Why Businesses Choose Ajinyx</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-6">
                  <Icon className="h-7 w-7 text-cyan-400" aria-hidden="true" />
                  <h3 className="mt-5 text-xl font-bold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.copy}</p>
                </div>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-400">A CLEAR, PRACTICAL PROCESS</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">From Strategy to Launch</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step.id} className="rounded-3xl border border-zinc-800 bg-zinc-950/70 p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500 text-sm font-black text-black">
                  {index + 1}
                </span>
                <h3 className="mt-5 text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
              Built Around What Your Business Actually Needs.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-zinc-400">
              Some businesses need a complete marketing system. Others need stronger video content, a better website,
              improved Google visibility, or professional management of one critical channel. Ajinyx builds the scope
              around your goals, current assets, market, service area, and internal capabilities.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {engagementOptions.map((option) => (
              <div key={option.id} className="flex flex-col rounded-3xl border border-zinc-800 bg-zinc-950/70 p-6">
                <LayoutTemplate className="h-7 w-7 text-cyan-400" aria-hidden="true" />
                <h3 className="mt-5 text-2xl font-bold text-white">{option.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-zinc-400">{option.copy}</p>
                <div className="mt-8">
                  <PrimaryButton>
                    Discuss My Marketing Plan
                    <ArrowRight size={18} aria-hidden="true" />
                  </PrimaryButton>
                </div>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-4xl text-center text-sm leading-relaxed text-zinc-500">
            Advertising budgets, media placement, third-party software, travel, talent, specialized production costs,
            and other pass-through expenses are quoted separately when applicable.
          </p>
        </div>
      </MotionSection>

      <MotionSection className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">Marketing FAQ</h2>
          </div>
          <FaqAccordion />
        </div>
      </MotionSection>

      <MotionSection className="pb-24 pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-cyan-500/20 bg-zinc-950 p-8 text-center md:p-12">
            <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/15 blur-3xl" />
            <div className="relative z-10 mx-auto max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-cyan-400">
                READY TO BUILD A STRONGER MARKETING SYSTEM?
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">
                Let's Turn More Attention Into Real Business.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-zinc-400">
                Schedule a strategy call with Ajinyx to discuss your current marketing, identify the largest gaps in
                your customer journey, and determine which services can create the greatest impact.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <PrimaryButton>
                  <CalendarCheck size={18} aria-hidden="true" />
                  Book My Marketing Strategy Call
                </PrimaryButton>
                <a
                  href={`tel:${businessInfo.telephone}`}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-zinc-700 bg-black/40 px-6 py-3 text-sm font-bold text-white transition-all hover:border-cyan-400 hover:text-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-95"
                >
                  <Phone size={18} aria-hidden="true" />
                  Call {businessInfo.telephone}
                </a>
              </div>
              <p className="mt-6 text-sm font-medium text-zinc-500">
                Serving Amarillo, the Texas Panhandle, and select businesses nationwide.
              </p>
            </div>
          </div>
        </div>
      </MotionSection>
    </main>
  );
}
