export interface SupplierItem {
  id?: string;
  name: string;
  category: string;
  commissionBadge: string;
  description: string;
}

export const PREFERRED_SUPPLIERS: SupplierItem[] = [
  {
    id: 'bedsonline',
    name: 'BedsOnline',
    category: 'Wholesale Hotel Accommodations',
    commissionBadge: 'High Net Margin',
    description: 'Leading global B2B provider of hotel accommodation and ancillary products with exclusive rates.'
  },
  {
    id: 'air-canada',
    name: 'Air Canada',
    category: 'Airlines & Vacation Packages',
    commissionBadge: 'Up to 100%',
    description: 'Canada’s flagship carrier offering worldwide flight networks and dedicated agent desk support.'
  },
  {
    id: 'royal-caribbean',
    name: 'Royal Caribbean International',
    category: 'Ocean Cruising & Private Islands',
    commissionBadge: 'Top Tier Commission',
    description: 'World-renowned cruise line featuring award-winning ships, private islands, and high override tiers.'
  },
  {
    id: 'avis',
    name: 'Avis & Budget',
    category: 'Car Rental & Mobility',
    commissionBadge: 'Preferred Partner',
    description: 'Global mobility network with competitive rental rates, commission protections, and VIP status.'
  },
  {
    id: 'g-adventures',
    name: 'G Adventures',
    category: 'Small Group & Adventure',
    commissionBadge: 'Preferred Partner',
    description: 'Pioneers of community tourism and guided small-group adventure travel across all seven continents.'
  },
  {
    id: 'abercrombie-kent',
    name: 'Abercrombie & Kent',
    category: 'Luxury & Bespoke Tours',
    commissionBadge: 'LUXE Tier',
    description: 'Pinnacle bespoke luxury travel, private expeditions, and handcrafted private villa arrangements.'
  },
  {
    id: 'hurtigruten',
    name: 'Hurtigruten',
    category: 'Expedition Cruising',
    commissionBadge: 'Top Tier Commission',
    description: 'Pioneers in sustainable polar and coastal Norway expedition voyages with specialized agent training.'
  },
  {
    id: 'railbookers',
    name: 'Railbookers',
    category: 'Independent Rail Journeys',
    commissionBadge: 'Preferred Partner',
    description: 'Customizable rail itineraries across Europe, Canada, USA, and beyond with instant booking APIs.'
  }
];

export const APPROVED_SUPPLIERS: SupplierItem[] = [
  {
    id: 'westjet-vacations',
    name: 'WestJet Vacations',
    category: 'Leisure Flights & Sun Resorts',
    commissionBadge: 'Approved Partner',
    description: 'Extensive Canadian network, nonstop Caribbean & European flights, and package options.'
  },
  {
    id: 'transat',
    name: 'Transat',
    category: 'Transatlantic & Sun Packages',
    commissionBadge: 'Approved Partner',
    description: 'Award-winning leisure travel specialist offering flights, packages, and guided European circuits.'
  },
  {
    id: 'sunwing',
    name: 'Sunwing Vacations',
    category: 'All-Inclusive Resorts',
    commissionBadge: 'Approved Partner',
    description: 'Leading all-inclusive vacation brand with exclusive hotelier contracts and direct sun flights.'
  },
  {
    id: 'celebrity-cruises',
    name: 'Celebrity Cruises',
    category: 'Premium Modern Luxury Cruising',
    commissionBadge: 'Approved Partner',
    description: 'Relaxed luxury cruise experiences with culinary excellence and distinctive itineraries.'
  },
  {
    id: 'ama-waterways',
    name: 'AmaWaterways',
    category: 'Luxury River Cruising',
    commissionBadge: 'Approved Partner',
    description: 'Family-owned river cruise pioneer along the rivers of Europe, Asia, and Africa.'
  },
  {
    id: 'expedia-taap',
    name: 'Expedia TAAP',
    category: 'Global Travel Inventory',
    commissionBadge: 'Approved Partner',
    description: 'Access to 3+ million properties, car rentals, flights, and activities worldwide with instant confirmation.'
  },
  {
    id: 'globus-family',
    name: 'Globus family of brands',
    category: 'Escorted Touring & River',
    commissionBadge: 'Approved Partner',
    description: 'Globus, Cosmos, and Avalon Waterways worldwide touring programs with comprehensive advisor protections.'
  },
  {
    id: 'viking',
    name: 'Viking Cruises',
    category: 'River & Ocean Cruising',
    commissionBadge: 'Approved Partner',
    description: 'The thinking person’s cruise line spanning European rivers, oceans, and polar expeditions.'
  }
];

export interface TestimonialItem {
  id: string;
  advisorName: string;
  agencyName: string;
  location: string;
  experienceLevel: string;
  quote: string;
  outcome: string;
  yearsWithTTAND: string;
  avatarSeed: string;
}

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    advisorName: 'Karen Henderson',
    agencyName: 'Bespoke Wanderlust Travel',
    location: 'Calgary, Alberta',
    experienceLevel: 'Experienced Advisor (14 Years in Travel)',
    quote: 'Switching to The Travel Agent Next Door was the best business decision I ever made. Their Phenix booking tool and marketing automation give me back 15 hours every week, and having true 100% commission on preferred suppliers without hidden fees transformed my bottom line.',
    outcome: '+42% Revenue Growth in Year 1',
    yearsWithTTAND: '5 Years with TTAND',
    avatarSeed: 'karen'
  },
  {
    id: 't2',
    advisorName: 'Marcus Tremblay',
    agencyName: 'Vanguard Voyages & Corporate Retreats',
    location: 'Montreal, Quebec',
    experienceLevel: 'Agency Owner (5 Sub-Advisors)',
    quote: 'Managing a team of advisors used to mean constant accounting headaches and endless manual invoice reconciliation. TTAND’s back-office and ticketing team take care of all the operational friction so my team can focus solely on delivering high-end client experiences.',
    outcome: 'Doubled Team Size Without Adding Admin Staff',
    yearsWithTTAND: '4 Years with TTAND',
    avatarSeed: 'marcus'
  },
  {
    id: 't3',
    advisorName: 'Sarah Jenkins',
    agencyName: 'Latitude 49 Journeys',
    location: 'Halifax, Nova Scotia',
    experienceLevel: 'New to Travel Industry Graduate',
    quote: 'I had zero travel agency experience when I joined. The STEP training program, weekly mentorship clinics, and dedicated support desk gave me the exact confidence I needed. Within my first six months, I booked over $320,000 in bucket-list itineraries.',
    outcome: '$320K First 6-Month Gross Bookings',
    yearsWithTTAND: '2 Years with TTAND',
    avatarSeed: 'sarah'
  },
  {
    id: 't4',
    advisorName: 'David & Elena Rossi',
    agencyName: 'Rossi Global Travel Specialists',
    location: 'Toronto, Ontario',
    experienceLevel: 'Experienced Luxury Partners',
    quote: 'The LUXE program is in a class of its own. Between the quarterly glossy print magazines mailed to our VIP clients and the direct connections to luxury hoteliers worldwide, our average booking size jumped from $6,500 to over $18,000.',
    outcome: 'Average Booking Value Tripled to $18K+',
    yearsWithTTAND: '6 Years with TTAND',
    avatarSeed: 'elena'
  }
];

export const SOCIAL_PROOF_METRICS = [
  {
    metric: '1,700+',
    label: 'Agent Partners',
    subtext: 'Across every Canadian province and territory'
  },
  {
    metric: '10+ Years',
    label: 'Trusted Growth',
    subtext: 'Founded in 2014 with unwavering agent focus'
  },
  {
    metric: '70+',
    label: 'Support-Team Specialists',
    subtext: 'Dedicated ticketing, tech, marketing & accounting'
  },
  {
    metric: '600+',
    label: 'New-to-Industry Graduates',
    subtext: 'Successfully launched through STEP training'
  }
];

export const SERVICES_OVERVIEW = [
  {
    id: 'tech',
    title: 'Technology That Gives You Time Back',
    description: 'Work faster with connected tools and fewer manual tasks. Access Phenix proprietary booking engine, automated itinerary creators, and integrated client CRM.',
    badge: 'Proprietary Technology',
    link: '#technology'
  },
  {
    id: 'marketing',
    title: 'Marketing That Builds Your Brand',
    description: 'Attract clients and stay connected with ready-to-use marketing campaigns, automated client newsletters, social media toolkits, and customizable branded magazines.',
    badge: 'Turnkey Marketing',
    link: '#marketing'
  },
  {
    id: 'training',
    title: 'Training at Every Stage',
    description: 'Build your knowledge and grow with practical, ongoing education. From comprehensive STEP training for newcomers to advanced masterclasses and annual national conferences.',
    badge: 'Award-Winning Education',
    link: '#training'
  },
  {
    id: 'support',
    title: 'Personal, Responsive Support',
    description: 'Get expert help and guidance whenever you need it. Our Canadian-based support team answers your calls and tickets promptly—no automated dead-ends or long hold times.',
    badge: '70+ Specialists',
    link: '#support'
  },
  {
    id: 'suppliers',
    title: 'Stronger Supplier Partnerships',
    description: 'Access competitive commissions and more earning opportunities. Enjoy up to 100% commission retention on preferred air, cruise, tour, and luxury partners.',
    badge: 'Up to 100% Commission',
    link: '#suppliers'
  },
  {
    id: 'backoffice',
    title: 'Back-Office Services',
    description: 'Let us manage the operational details behind your business. We handle invoicing reconciliation, TICO/CPBC compliance, trust accounting, and merchant processing.',
    badge: 'Full Operational Relief',
    link: '#backoffice'
  }
];
