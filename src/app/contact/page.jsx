'use client';

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

    // Close menu when any nav link inside it is tapped
    mobileMenu?.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

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
                  <Link className="text-base font-medium text-text hover:text-primary transition-colors" href="destinations.html"> Destinations </Link>
                  <Link className="text-base font-medium text-text hover:text-primary transition-colors" href="services.html"> Services </Link>
                  <Link className="text-base font-medium text-primary transition-colors" href="contact.html"> Contact </Link>
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
          <Link className="text-4xl font-heading text-text hover:text-primary" href="services.html"> Services </Link>
          <Link className="text-4xl font-heading text-primary" href="contact.html"> Contact </Link>
          <Link className="text-4xl font-heading text-cta hover:text-orange-700" href="contact.html"> Plan a Trip </Link>
        </div>

        {/* Page Hero */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-6xl lg:text-8xl font-heading text-white mb-6"> Contact Us </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              We're here to help you plan your next journey. Reach out via phone, email, or social media — or come see us in person.
            </p>
          </div>
        </section>

        {/* Contact Details + Form */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">

              {/* Left — Contact Info */}
              <div>
                <Text variant="bold" className="text-cta font-bold tracking-wider text-sm uppercase mb-2 block"> Get In Touch </Text>
                <h2 className="text-5xl font-heading text-primary mb-6"> We'd Love to Hear From You </h2>
                <p className="text-lg text-muted mb-10">
                  Whether you need help booking a flight, processing a visa, or planning a full itinerary — our team is ready to assist. Contact us through any of the channels below.
                </p>

                <ul className="space-y-8">
                  {/* Address */}
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading text-xl text-text mb-1"> Our Office </h4>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Union+Bank+Building,+Japan+Line,+Alaba+International+Market,+Alaba,+Lagos+102111,+Lagos,+Nigeria"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-primary transition-colors"
                      >
                        Union Bank Building, Japan Line,<br />
                        Alaba International Market, Alaba,<br />
                        Lagos 102111, Lagos, Nigeria
                      </a>
                    </div>
                  </li>

                  {/* Phone */}
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading text-xl text-text mb-1"> Phone </h4>
                      <a
                        href="tel:+2348064196301"
                        className="text-muted hover:text-primary transition-colors"
                      >
                        0806 419 6301
                      </a>
                    </div>
                  </li>

                  {/* Email */}
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading text-xl text-text mb-1"> Email </h4>
                      <a
                        href="mailto:hello@gallanttravel.ng"
                        className="text-muted hover:text-primary transition-colors"
                      >
                        hello@gallanttravel.ng
                      </a>
                    </div>
                  </li>

                  {/* WhatsApp */}
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading text-xl text-text mb-1"> WhatsApp </h4>
                      <a
                        href="https://wa.me/2348064196301"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted hover:text-primary transition-colors"
                      >
                        Chat with us on WhatsApp
                      </a>
                    </div>
                  </li>
                </ul>

                {/* Social Links */}
                <div className="mt-10">
                  <h4 className="font-heading text-xl text-text mb-4"> Follow Us </h4>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/gallanttravelagency2/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-cta hover:text-white text-primary transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                    <a
                      href="https://web.facebook.com/gallanttravelagency"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-cta hover:text-white text-primary transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="https://www.tiktok.com/@gallanttravelagency2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-cta hover:text-white text-primary transition-colors"
                      aria-label="TikTok"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right — Contact Form */}
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
                <h3 className="text-3xl font-heading text-primary mb-2"> Send Us a Message </h3>
                <p className="text-muted mb-8"> Fill in the form and we'll get back to you within 24 hours. </p>

                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-text mb-2" htmlFor="firstName"> First Name </label>
                      <input
                        id="firstName"
                        type="text"
                        placeholder="e.g. Amaka"
                        className="w-full border border-border rounded-lg px-4 py-3 text-text placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-text mb-2" htmlFor="lastName"> Last Name </label>
                      <input
                        id="lastName"
                        type="text"
                        placeholder="e.g. Okonkwo"
                        className="w-full border border-border rounded-lg px-4 py-3 text-text placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-text mb-2" htmlFor="email"> Email Address </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full border border-border rounded-lg px-4 py-3 text-text placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-text mb-2" htmlFor="phone"> Phone Number </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+234 800 000 0000"
                      className="w-full border border-border rounded-lg px-4 py-3 text-text placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-text mb-2" htmlFor="service"> Service Needed </label>
                    <select
                      id="service"
                      className="w-full border border-border rounded-lg px-4 py-3 text-text focus:outline-none focus:ring-2 focus:ring-primary/40 transition bg-white"
                    >
                      <option value="" disabled defaultValue> Select a service </option>
                      <option value="flight"> Flight Booking </option>
                      <option value="hotel"> Hotel Reservation </option>
                      <option value="visa"> Visa Assistance </option>
                      <option value="evisa"> E-Visa Application </option>
                      <option value="group"> Group & Corporate Travel </option>
                      <option value="package"> Full Service Package </option>
                      <option value="other"> Other </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-text mb-2" htmlFor="message"> Your Message </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Tell us about your trip — destination, travel dates, number of travellers..."
                      className="w-full border border-border rounded-lg px-4 py-3 text-text placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary/40 transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-cta hover:bg-orange-700 text-white font-bold py-4 rounded-full transition-all shadow-lg hover:shadow-orange-500/30 text-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>

            </div>
          </div>
        </section>

        {/* Map Embed */}
        <section className="bg-white">
          <iframe
            title="Gallant Travel Agency Location"
            src="https://www.google.com/maps?q=Union+Bank+Building,+Japan+Line,+Alaba+International+Market,+Alaba,+Lagos+102111,+Lagos,+Nigeria&output=embed"
            width="100%"
            height="400"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>

        {/* CTA Banner */}
        <section className="py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-5xl md:text-6xl font-heading text-white mb-6"> Ready to Take Off? </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              From quick domestic bookings to full international packages — Gallant Travel is your reliable partner from enquiry to landing.
            </p>
            <a
              href="https://wa.me/2348064196301"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cta hover:bg-white hover:text-cta text-white text-xl px-10 py-4 rounded-full font-bold transition-all shadow-xl inline-flex items-center gap-2"
            >
              Chat on WhatsApp
            </a>
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
                  <a
                    href="https://www.instagram.com/gallanttravelagency2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cta transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://web.facebook.com/gallanttravelagency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cta transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@gallanttravelagency2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cta transition-colors"
                    aria-label="TikTok"
                  >
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
                    <a href="tel:+2348064196301" className="hover:text-white transition-colors">
                      0806 419 6301
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-gray-400">
                    <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                    <a href="mailto:hello@gallanttravel.ng" className="hover:text-white transition-colors">
                      hello@gallanttravel.ng
                    </a>
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
