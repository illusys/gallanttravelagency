'use client';

import { ArrowRight } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Image } from '@/components/Image';
import { Instagram } from 'lucide-react';
import { Link } from '@/components/Link';
import { Mail } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Menu } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Text } from '@/components/Text';
import { X } from 'lucide-react';
import { useEffect } from 'react';

export default function Page() {
  useEffect(() => {
    const mobileMenu    = document.getElementById('mobileMenu');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const closeMenuBtn  = document.getElementById('closeMenuBtn');

    function openMenu() {
      mobileMenu.classList.remove('hidden');
      mobileMenu.classList.add('flex');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
      document.body.style.overflow = '';
    }

    mobileMenuBtn?.addEventListener('click', openMenu);
    closeMenuBtn?.addEventListener('click', closeMenu);
    mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

    return () => {
      mobileMenuBtn?.removeEventListener('click', openMenu);
      closeMenuBtn?.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <>
        {/* Navigation */}
        <header>
          <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="flex justify-between items-center h-20">
                <Link className="flex items-center gap-2 group" href="index.html">
                  <Image className="h-14 w-auto object-contain" src="/gallant_travel_agency_logo.png" alt="Gallant Travel Agency" width={230} height={59} />
                </Link>
                <div className="hidden md:flex items-center gap-8">
                  <Link className="text-base font-medium text-text hover:text-primary transition-colors" href="index.html"> Home </Link>
                  <Link className="text-base font-medium text-text hover:text-primary transition-colors" href="about.html"> About </Link>
                  <Link className="text-base font-medium text-primary transition-colors" href="destinations.html"> Destinations </Link>
                  <Link className="text-base font-medium text-text hover:text-primary transition-colors" href="services.html"> Services </Link>
                  <Link className="text-base font-medium text-text hover:text-primary transition-colors" href="contact.html"> Contact </Link>
                  <Link className="bg-cta hover:bg-orange-700 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/30" href="contact.html"> Plan a Trip </Link>
                </div>
                <button
                  id="mobileMenuBtn"
                  className="md:hidden text-text hover:text-primary p-2 rounded-md focus:outline-none"
                  aria-label="Open navigation menu"
                >
                  <Menu className="w-8 h-8" />
                </button>
              </div>
            </div>
          </nav>
        </header>

        {/* Mobile Menu Overlay */}
        <div
          id="mobileMenu"
          className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl hidden flex-col items-center justify-center gap-8 transition-all duration-300"
        >
          <button
            id="closeMenuBtn"
            className="absolute top-6 right-6 text-text hover:text-primary p-2 rounded-md focus:outline-none"
            aria-label="Close navigation menu"
          >
            <X className="w-8 h-8" />
          </button>
          <Link className="text-4xl font-heading text-text hover:text-primary" href="index.html"> Home </Link>
          <Link className="text-4xl font-heading text-text hover:text-primary" href="about.html"> About </Link>
          <Link className="text-4xl font-heading text-primary" href="destinations.html"> Destinations </Link>
          <Link className="text-4xl font-heading text-text hover:text-primary" href="services.html"> Services </Link>
          <Link className="text-4xl font-heading text-text hover:text-primary" href="contact.html"> Contact </Link>
          <Link className="text-4xl font-heading text-cta hover:text-orange-700" href="contact.html"> Plan a Trip </Link>
        </div>

        {/* Page Hero */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-6xl lg:text-8xl font-heading text-white mb-6"> Destinations </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              From Lagos to London. From Abuja to Amsterdam. Wherever you need to go, Gallant Travel will get you there.
            </p>
          </div>
        </section>

        {/* Domestic */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Text variant="bold" className="text-cta font-bold tracking-wider text-sm uppercase mb-2 block"> Within Nigeria </Text>
            <h2 className="text-5xl font-heading text-primary mb-4"> Domestic Destinations </h2>
            <p className="text-lg text-muted mb-10 max-w-2xl">
              We offer fast, affordable ticketing on all major domestic routes across Nigeria. Our airline partners include Arik Air, Air Peace, Lufthansa, British Airways, and more.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { route: 'Lagos ↔ Abuja', img: 'https://images.unsplash.com/photo-1570458436416-b8fcccfe883f?q=80&w=800&auto=format&fit=crop', label: 'Most Popular' },
                { route: 'Lagos ↔ Port Harcourt', img: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800&auto=format&fit=crop', label: 'Domestic' },
                { route: 'Lagos ↔ Kano', img: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=800&auto=format&fit=crop', label: 'Domestic' },
                { route: 'Abuja ↔ Enugu', img: 'https://images.unsplash.com/photo-1543731068-7e0f5beff43a?q=80&w=800&auto=format&fit=crop', label: 'Domestic' },
                { route: 'Abuja ↔ Calabar', img: 'https://images.unsplash.com/photo-1596895111956-bf1cf0599ce5?q=80&w=800&auto=format&fit=crop', label: 'Domestic' },
                { route: 'All Other Routes', img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop', label: 'Nationwide' },
              ].map(({ route, img, label }) => (
                <Link key={route} className="group relative h-56 rounded-2xl overflow-hidden cursor-pointer" href="contact.html">
                  <Image variant="cover" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={img} alt={route} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-5">
                    <Text variant="bold" className="text-white/70 text-xs font-bold mb-1 block uppercase tracking-wider"> {label} </Text>
                    <h3 className="text-2xl font-heading text-white group-hover:text-cta transition-colors"> {route} </h3>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link className="inline-flex items-center gap-2 text-primary font-bold hover:text-cta transition-colors" href="contact.html">
                Book a Domestic Flight <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Africa */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Text variant="bold" className="text-cta font-bold tracking-wider text-sm uppercase mb-2 block"> Continent </Text>
            <h2 className="text-5xl font-heading text-primary mb-12"> Africa </h2>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <Image className="rounded-2xl shadow-xl w-full object-cover h-80" src="https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=1000&auto=format&fit=crop" alt="Kenya" />
              <div>
                <h3 className="text-3xl font-heading text-primary mb-2"> Kenya </h3>
                <p className="text-cta font-bold text-sm uppercase tracking-wider mb-4"> 90-Day Visa Available </p>
                <p className="text-lg text-muted mb-4">
                  Visit Nairobi, experience the Maasai Mara, or conduct business in one of Africa's fastest-growing economies. Gallant offers Kenya visa assistance and flight bookings to make your East Africa trip smooth and straightforward.
                </p>
                <p className="text-sm font-bold text-text mb-6"> Services: Visa Assistance · Flight Booking · Hotel Reservation </p>
                <Link className="inline-flex items-center gap-2 bg-cta hover:bg-orange-700 text-white px-6 py-3 rounded-full font-bold transition-all" href="contact.html">
                  Enquire Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Europe */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Text variant="bold" className="text-cta font-bold tracking-wider text-sm uppercase mb-2 block"> Region </Text>
            <h2 className="text-5xl font-heading text-primary mb-12"> Europe </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  country: 'United Kingdom',
                  tag: 'Study · Tourist · Visit Visa',
                  desc: 'Home to world-class universities, iconic landmarks, and rich history. Whether you\'re applying for a UK Standard Visitor Visa or a Student Visa, our team will guide you through every requirement and submission.',
                  services: 'Visa Processing · Flight Booking · Hotel Reservation',
                  img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop',
                },
                {
                  country: 'Schengen Zone',
                  tag: '26 Countries, One Visa',
                  desc: 'France · Germany · Italy · Spain · Netherlands and more. A single Schengen visa opens the door to 26 European countries. Our visa experts help you identify the right consulate and prepare the strongest possible application.',
                  services: 'Schengen Visa Processing · Flight Booking · Travel Insurance Guidance',
                  img: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=800&auto=format&fit=crop',
                },
                {
                  country: 'Turkey',
                  tag: 'E-Visa Available',
                  desc: 'Istanbul bridges East and West — a vibrant destination for tourism, trade, and study. Turkey offers an accessible e-visa option for many Nigerian travellers, and our team handles the application from start to finish.',
                  services: 'E-Visa Application · Flight Booking · Hotel Reservation',
                  img: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?q=80&w=800&auto=format&fit=crop',
                },
              ].map(({ country, tag, desc, services, img }) => (
                <div key={country} className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <Image variant="cover" className="absolute inset-0 w-full h-full object-cover" src={img} alt={country} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-heading text-primary mb-1"> {country} </h3>
                    <p className="text-cta font-bold text-xs uppercase tracking-wider mb-3"> {tag} </p>
                    <p className="text-muted text-sm mb-4"> {desc} </p>
                    <p className="text-xs font-bold text-text mb-5"> Services: {services} </p>
                    <Link className="inline-flex items-center gap-1 text-cta font-bold hover:text-orange-700 transition-colors text-sm" href="contact.html">
                      Enquire Now <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Americas */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Text variant="bold" className="text-cta font-bold tracking-wider text-sm uppercase mb-2 block"> Region </Text>
            <h2 className="text-5xl font-heading text-primary mb-12"> The Americas </h2>
            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  country: 'Canada',
                  tag: 'Visitor · Study · Work Permit',
                  desc: 'Canada is one of the most sought-after destinations for Nigerians seeking study, work, and migration opportunities. Gallant Travel provides expert guidance on Canadian immigration pathways and handles your visa documentation professionally.',
                  services: 'Visa Processing · Flight Booking · Hotel Reservation',
                  img: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?q=80&w=800&auto=format&fit=crop',
                },
                {
                  country: 'United States',
                  tag: 'Business · Tourist · Student Visa',
                  desc: 'The US remains one of the most popular destinations for Nigerian travellers. Our team provides professional guidance on B1/B2 visa applications, interview preparation tips, and all flight booking requirements.',
                  services: 'Visa Guidance · Flight Booking · Hotel Reservation',
                  img: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=800&auto=format&fit=crop',
                },
              ].map(({ country, tag, desc, services, img }) => (
                <div key={country} className="grid sm:grid-cols-2 gap-6 bg-background rounded-2xl overflow-hidden border border-border">
                  <div className="relative h-full min-h-[200px] overflow-hidden">
                    <Image variant="cover" className="absolute inset-0 w-full h-full object-cover" src={img} alt={country} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-heading text-primary mb-1"> {country} </h3>
                    <p className="text-cta font-bold text-xs uppercase tracking-wider mb-3"> {tag} </p>
                    <p className="text-muted text-sm mb-4"> {desc} </p>
                    <p className="text-xs font-bold text-text mb-5"> Services: {services} </p>
                    <Link className="inline-flex items-center gap-1 text-cta font-bold hover:text-orange-700 transition-colors text-sm" href="contact.html">
                      Enquire Now <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Asia */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Text variant="bold" className="text-cta font-bold tracking-wider text-sm uppercase mb-2 block"> Region </Text>
            <h2 className="text-5xl font-heading text-primary mb-12"> Asia </h2>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-3xl font-heading text-primary mb-2"> Vietnam </h3>
                <p className="text-cta font-bold text-sm uppercase tracking-wider mb-4"> E-Visa Available </p>
                <p className="text-lg text-muted mb-4">
                  Vietnam is a rising star in Southeast Asian tourism — stunning landscapes, vibrant street food, and rich culture await. Let us help you plan the ultimate Vietnam adventure with e-visa processing and curated travel arrangements.
                </p>
                <p className="text-sm font-bold text-text mb-6"> Services: E-Visa Application · Flight Booking · Hotel Reservation </p>
                <Link className="inline-flex items-center gap-2 bg-cta hover:bg-orange-700 text-white px-6 py-3 rounded-full font-bold transition-all" href="contact.html">
                  Enquire Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <Image className="rounded-2xl shadow-xl w-full object-cover h-80" src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1000&auto=format&fit=crop" alt="Vietnam" />
            </div>
          </div>
        </section>

        {/* Airlines & Enquiry CTA */}
        <section className="py-16 bg-white border-t border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <p className="text-muted text-base mb-3">
              We book flights on all major airlines including Arik Air · Air Peace · British Airways · Lufthansa · Air France · Emirates · Qatar Airways · Turkish Airlines · RwandAir · and more.
            </p>
            <p className="text-muted mb-8"> Don't see your destination? We cover many more countries — contact us to discuss your travel plans. </p>
            <Link className="inline-flex items-center gap-2 bg-cta hover:bg-orange-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg" href="contact.html">
              Enquire About a Destination <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-text text-white pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
              <div className="col-span-1 md:col-span-2">
                <Link className="flex items-center gap-2 mb-6" href="index.html">
                  <Image className="h-14 w-auto object-contain" src="/gallant_travel_agency_logo.png" alt="Gallant Travel Agency" width={230} height={59} />
                </Link>
                <p className="text-gray-400 max-w-sm mb-8">
                  Gallant Travel Agency helps clients plan smooth, memorable journeys with reliable guidance, responsive service, and carefully selected travel options.
                </p>
                <div className="flex gap-4">
                  <a href="https://www.instagram.com/gallanttravelagency2/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cta transition-colors" aria-label="Instagram">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://web.facebook.com/gallanttravelagency" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cta transition-colors" aria-label="Facebook">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.tiktok.com/@gallanttravelagency2" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cta transition-colors" aria-label="TikTok">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h4 className="font-heading text-xl text-white mb-6"> Company </h4>
                <ul className="space-y-4">
                  <li><Link className="text-gray-400 hover:text-cta transition-colors" href="about.html"> About Gallant </Link></li>
                  <li><Link className="text-gray-400 hover:text-cta transition-colors" href="destinations.html"> Destinations </Link></li>
                  <li><Link className="text-gray-400 hover:text-cta transition-colors" href="services.html"> Services </Link></li>
                  <li><Link className="text-gray-400 hover:text-cta transition-colors" href="contact.html"> Contact </Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-heading text-xl text-white mb-6"> Contact </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-400">
                    <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                    <a href="https://www.google.com/maps/search/?api=1&query=Union+Bank+Building,+Japan+Line,+Alaba+International+Market,+Alaba,+Lagos+102111,+Lagos,+Nigeria" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                      Union Bank Building, Japan Line,<br />Alaba International Market, Alaba,<br />Lagos 102111, Lagos, Nigeria
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-gray-400">
                    <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                    <a href="tel:+2348064196301" className="hover:text-white transition-colors"> 0806 419 6301 </a>
                  </li>
                  <li className="flex items-center gap-3 text-gray-400">
                    <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                    <a href="mailto:hello@gallanttravel.ng" className="hover:text-white transition-colors"> hello@gallanttravel.ng </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm"> © 2026 Gallant Travel Agency. All rights reserved. </p>
              <div className="flex gap-6 text-sm text-gray-500">
                <Link className="hover:text-white transition-colors" href="#"> Privacy Policy </Link>
                <Link className="hover:text-white transition-colors" href="#"> Terms of Service </Link>
              </div>
            </div>
          </div>
        </footer>
      </>
    </div>
  );
}
