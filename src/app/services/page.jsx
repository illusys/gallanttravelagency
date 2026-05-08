'use client';

import { Calendar } from 'lucide-react';
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
        {/* Navigation — single instance, PNG logo */}
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
                  <Link className="text-base font-medium text-text hover:text-primary transition-colors" href="destinations.html"> Destinations </Link>
                  <Link className="text-base font-medium text-primary transition-colors" href="services.html"> Services </Link>
                  <Link className="text-base font-medium text-text hover:text-primary transition-colors" href="contact.html"> Contact </Link>
                  <Link className="bg-cta hover:bg-orange-700 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/30" href="contact.html"> Plan a Trip </Link>
                </div>
                {/* Native <button> — fires click reliably on all mobile browsers */}
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

        {/* Mobile Menu Overlay — z-[60] sits above fixed nav (z-50) */}
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
          <Link className="text-4xl font-heading text-text hover:text-primary" href="destinations.html"> Destinations </Link>
          <Link className="text-4xl font-heading text-primary" href="services.html"> Services </Link>
          <Link className="text-4xl font-heading text-text hover:text-primary" href="contact.html"> Contact </Link>
          <Link className="text-4xl font-heading text-cta hover:text-orange-700" href="contact.html"> Plan a Trip </Link>
        </div>

        {/* Travel Packages & Services — Hero */}
        <section id="curated_adventures" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-6xl lg:text-8xl font-heading text-white mb-6"> Travel Packages & Services </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Choose from practical Gallant Travel services designed for holidays, business trips, family visits, group travel, and special getaways.
            </p>
          </div>
        </section>

        {/* Packages */}
        <section id="the_alpine_explorer" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">

            {/* Package 1 — Flight & Hotel Bookings */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Text variant="bold" className="text-cta font-bold tracking-wider text-sm uppercase mb-2 block"> Core Service </Text>
                <h2 className="text-5xl font-heading text-primary mb-6"> Flight & Hotel Bookings </h2>
                <p className="text-lg text-muted mb-8">
                  Get help finding flight options, comfortable accommodation, and trip combinations that match your travel dates, destination, and budget.
                </p>
                <ul className="check-list text-muted mb-8">
                  <li> Local and international flight options </li>
                  <li> Hotel and apartment stay coordination </li>
                  <li> Itinerary reminders and confirmation support </li>
                  <li> Fare, baggage, and timing guidance </li>
                  <li> Support before and during travel </li>
                </ul>
                <div className="flex items-center gap-6">
                  <Text className="text-3xl font-heading text-text"> Custom
                    <Text variant="muted" className="text-sm font-body text-muted font-normal"> &nbsp;quote </Text>
                  </Text>
                  <Link className="bg-primary hover:bg-green-900 text-white px-8 py-3 rounded-full font-bold transition-all" href="contact.html"> Enquire Now </Link>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <Image className="rounded-2xl shadow-2xl" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop" alt="Mountains" />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-primary"><Calendar className="w-6 h-6" /></div>
                    <div>
                      <p className="text-sm text-muted"> Available </p>
                      <p className="font-bold text-text"> On request </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Package 2 — Family & Leisure Holidays */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <Image className="rounded-2xl shadow-2xl" src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1000&auto=format&fit=crop" alt="Diving" />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-primary"><Calendar className="w-6 h-6" /></div>
                    <div>
                      <p className="text-sm text-muted"> Available </p>
                      <p className="font-bold text-text"> On request </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Text variant="bold" className="text-cta font-bold tracking-wider text-sm uppercase mb-2 block"> Holiday Package </Text>
                <h2 className="text-5xl font-heading text-primary mb-6"> Family & Leisure Holidays </h2>
                <p className="text-lg text-muted mb-8">
                  Enjoy carefully arranged leisure packages for families, couples, solo travelers, and groups seeking memorable stays and experiences.
                </p>
                <ul className="check-list text-muted mb-8">
                  <li> Resort, city, and beach holiday options </li>
                  <li> Tours, transfers, and activity add-ons </li>
                  <li> Family-friendly and honeymoon-ready plans </li>
                  <li> Flexible budgets and travel styles </li>
                  <li> Destination guidance and travel tips </li>
                </ul>
                <div className="flex items-center gap-6">
                  <Text className="text-3xl font-heading text-text"> Custom
                    <Text variant="muted" className="text-sm font-body text-muted font-normal"> &nbsp;quote </Text>
                  </Text>
                  <Link className="bg-primary hover:bg-green-900 text-white px-8 py-3 rounded-full font-bold transition-all" href="contact.html"> Enquire Now </Link>
                </div>
              </div>
            </div>

            {/* Package 3 — Corporate & Group Travel */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Text variant="bold" className="text-cta font-bold tracking-wider text-sm uppercase mb-2 block"> Business Travel </Text>
                <h2 className="text-5xl font-heading text-primary mb-6"> Corporate & Group Travel </h2>
                <p className="text-lg text-muted mb-8">
                  Keep work trips, conferences, retreats, and group movements organized with responsive coordination and clear itinerary support.
                </p>
                <ul className="check-list text-muted mb-8">
                  <li> Group flight and accommodation planning </li>
                  <li> Corporate travel documentation guidance </li>
                  <li> Airport transfers and ground transport </li>
                  <li> Schedule-aware itinerary coordination </li>
                  <li> Support for meetings, events, and retreats </li>
                </ul>
                <div className="flex items-center gap-6">
                  <Text className="text-3xl font-heading text-text"> Custom
                    <Text variant="muted" className="text-sm font-body text-muted font-normal"> &nbsp;quote </Text>
                  </Text>
                  <Link className="bg-primary hover:bg-green-900 text-white px-8 py-3 rounded-full font-bold transition-all" href="contact.html"> Enquire Now </Link>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <Image className="rounded-2xl shadow-2xl" src="https://images.unsplash.com/photo-1528702748617-c64d49f918af?q=80&w=1000&auto=format&fit=crop" alt="Desert" />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg hidden md:block">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center text-primary"><Calendar className="w-6 h-6" /></div>
                    <div>
                      <p className="text-sm text-muted"> Available </p>
                      <p className="font-bold text-text"> On request </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* How We Work */}
        <section id="how_it_works" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-heading text-primary mb-4"> How We Work </h2>
              <p className="text-xl text-muted max-w-2xl mx-auto"> A simple planning process that keeps your travel request clear and organized. </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8 relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-border -z-10"></div>
              {/* Step 1 */}
              <div className="text-center bg-white pt-4">
                <div className="w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 border-4 border-white"> 1 </div>
                <h3 className="text-xl font-heading text-text mb-2"> Enquiry </h3>
                <p className="text-muted text-sm"> Tell us your destination, dates, travelers, budget, and trip purpose. </p>
              </div>
              {/* Step 2 */}
              <div className="text-center bg-white pt-4">
                <div className="w-16 h-16 mx-auto bg-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 border-4 border-white"> 2 </div>
                <h3 className="text-xl font-heading text-text mb-2"> Options </h3>
                <p className="text-muted text-sm"> We share suitable routes, stays, packages, and add-ons for review. </p>
              </div>
              {/* Step 3 */}
              <div className="text-center bg-white pt-4">
                <div className="w-16 h-16 mx-auto bg-cta text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 border-4 border-white"> 3 </div>
                <h3 className="text-xl font-heading text-text mb-2"> Confirmation </h3>
                <p className="text-muted text-sm"> Approve your preferred option and receive booking details and reminders. </p>
              </div>
              {/* Step 4 */}
              <div className="text-center bg-white pt-4">
                <div className="w-16 h-16 mx-auto bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 border-4 border-white"> 4 </div>
                <h3 className="text-xl font-heading text-text mb-2"> Travel </h3>
                <p className="text-muted text-sm"> Set out with a clear itinerary and Gallant Travel support within reach. </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="final_travel_cta" className="py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-5xl md:text-6xl font-heading text-white mb-6"> Ready for a Gallant Travel Plan? </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Send your preferred destination, dates, and traveler details, and we will help you review practical package and booking options.
            </p>
            <Link className="bg-cta hover:bg-white hover:text-cta text-white text-xl px-10 py-4 rounded-full font-bold transition-all shadow-xl inline-flex items-center gap-2" href="contact.html"> Request a Quote </Link>
          </div>
        </section>

        {/* Footer — PNG logo, real contact details, real social links */}
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
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Union+Bank+Building,+Japan+Line,+Alaba+International+Market,+Alaba,+Lagos+102111,+Lagos,+Nigeria"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      Union Bank Building, Japan Line,<br />
                      Alaba International Market, Alaba,<br />
                      Lagos 102111, Lagos, Nigeria
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
