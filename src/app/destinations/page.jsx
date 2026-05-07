import { Button } from '@/components/Button';
import { Compass } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Image } from '@/components/Image';
import { Instagram } from 'lucide-react';
import { Link } from '@/components/Link';
import { Mail } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Menu } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Text } from '@/components/Text';
import { Twitter } from 'lucide-react';
import { X } from 'lucide-react';

export const metadata = {
  title: 'Gallant Travel Agency',
  description:  'Gallant Travel Agency creates dependable flight, hotel, holiday, visa support, and travel management solutions for individuals, families, groups, and businesses.',
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <>
        <header>
          <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="flex justify-between items-center h-20">
                <Link className="flex items-center gap-2 group" href="index.html"><Image className="h-14 w-auto object-contain" src="/gallant_travel_agency_logo.png" alt="Gallant Travel Agency" width={230} height={59} /></Link>
                <div className="hidden md:flex items-center gap-8">
                  <Link className="text-base font-medium text-text hover:text-primary transition-colors" href="index.html"> Home </Link>
                  <Link className="text-base font-medium text-text hover:text-primary transition-colors" href="about.html"> About </Link>
                  <Link className="text-base font-medium text-text hover:text-primary transition-colors" href="destinations.html"> Destinations </Link>
                  <Link className="text-base font-medium text-text hover:text-primary transition-colors" href="services.html"> Services </Link>
                  <Link className="text-base font-medium text-text hover:text-primary transition-colors" href="contact.html"> Contact </Link>
                  <Link contentKey="cta_19" className="bg-cta hover:bg-orange-700 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/30" href="contact.html"> Plan a Trip </Link>
                </div>
                <Button variant="primary" className="md:hidden text-text hover:text-primary" id="mobileMenuBtn"><Menu className="w-8 h-8" /></Button>
              </div>
            </div>
          </nav>
        </header>
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <Link className="flex items-center gap-2 group" href="index.html"><Image className="h-14 w-auto object-contain" src="/gallant_travel_agency_logo.png" alt="Gallant Travel Agency" width={230} height={59} /></Link>
              <div className="hidden md:flex items-center gap-8">
                <Link className="text-base font-medium text-text hover:text-primary transition-colors" href="index.html"> Home </Link>
                <Link className="text-base font-medium text-text hover:text-primary transition-colors" href="about.html"> About </Link>
                <Link className="text-base font-medium text-primary transition-colors" href="destinations.html"> Destinations </Link>
                <Link className="text-base font-medium text-text hover:text-primary transition-colors" href="services.html"> Services </Link>
                <Link className="text-base font-medium text-text hover:text-primary transition-colors" href="contact.html"> Contact </Link>
                <Link contentKey="cta_20" className="bg-cta hover:bg-orange-700 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/30" href="contact.html"> Plan a Trip </Link>
              </div>
              <Button variant="primary" className="md:hidden text-text hover:text-primary" id="mobileMenuBtn"><Menu className="w-8 h-8" /></Button>
            </div>
          </div>
        </nav>
        {/* Mobile Menu Overlay */}
        <div id="mobileMenu" className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl hidden flex-col items-center justify-center gap-8 transition-all duration-300">
          <Button variant="primary" className="absolute top-6 right-6 text-text hover:text-primary" id="closeMenuBtn"><X className="w-8 h-8" /></Button>
          <Link className="text-4xl font-heading text-text hover:text-primary" href="index.html"> Home </Link>
          <Link className="text-4xl font-heading text-text hover:text-primary" href="about.html"> About </Link>
          <Link className="text-4xl font-heading text-primary" href="destinations.html"> Destinations </Link>
          <Link className="text-4xl font-heading text-text hover:text-primary" href="services.html"> Services </Link>
          <Link className="text-4xl font-heading text-text hover:text-primary" href="contact.html"> Contact </Link>
          <Link className="text-4xl font-heading text-cta hover:text-orange-700" href="contact.html"> Plan a Trip </Link>
        </div>
        {/* Destinations We Serve */}
        <section id="the_world_awaits" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-6xl lg:text-8xl font-heading text-white mb-6"> Destinations We Serve </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
               Gallant Travel helps you explore local favorites, African cities, European breaks, American visits, Asian escapes, and more by enquiry.
            </p>
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <Button variant="primary" contentKey="cta_21" className="px-6 py-2 rounded-full bg-white text-primary font-bold shadow-lg"> All </Button>
              <Button contentKey="cta_22" className="px-6 py-2 rounded-full bg-white/10 text-white border border-white/30 hover:bg-white/20 transition-colors"> Domestic </Button>
              <Button contentKey="cta_23" className="px-6 py-2 rounded-full bg-white/10 text-white border border-white/30 hover:bg-white/20 transition-colors"> Asia </Button>
              <Button contentKey="cta_24" className="px-6 py-2 rounded-full bg-white/10 text-white border border-white/30 hover:bg-white/20 transition-colors"> Africa </Button>
              <Button contentKey="cta_25" className="px-6 py-2 rounded-full bg-white/10 text-white border border-white/30 hover:bg-white/20 transition-colors"> Europe </Button>
              <Button contentKey="cta_26" className="px-6 py-2 rounded-full bg-white/10 text-white border border-white/30 hover:bg-white/20 transition-colors"> Americas </Button>
            </div>
          </div>
        </section>
        {/* Lagos & Abuja */}
        <section id="patagonia" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <Link className="destination-card group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer block" href="services.html"><Image variant="cover" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" alt="Lagos & Abuja" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <Text variant="bold" className="text-cta font-bold tracking-wider text-sm uppercase mb-2 block"> Domestic </Text>
                <h3 className="text-4xl font-heading text-white mb-2"> Lagos & Abuja </h3>
                <p className="text-gray-300 line-clamp-2 mb-4">
                   Convenient city stays, business trips, family visits, and short breaks across Nigeria.
                </p>
                <Text variant="bold" className="text-white font-bold border-b border-cta inline-block pb-1 group-hover:text-cta transition-colors"> Enquire Now </Text>
              </div></Link>
              {/* Card 2 */}
              <Link className="destination-card group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer block" href="services.html"><Image variant="cover" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700" src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800&auto=format&fit=crop" alt="Accra & Nairobi" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <Text variant="bold" className="text-cta font-bold tracking-wider text-sm uppercase mb-2 block"> Africa </Text>
                <h3 className="text-4xl font-heading text-white mb-2"> Accra & Nairobi </h3>
                <p className="text-gray-300 line-clamp-2 mb-4">
                   African city breaks, safari add-ons, conferences, family travel, and group movement support.
                </p>
                <Text variant="bold" className="text-white font-bold border-b border-cta inline-block pb-1 group-hover:text-cta transition-colors"> Enquire Now </Text>
              </div></Link>
              {/* Card 3 */}
              <Link className="destination-card group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer block" href="services.html"><Image variant="cover" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700" src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop" alt="Dubai & Doha" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <Text variant="bold" className="text-cta font-bold tracking-wider text-sm uppercase mb-2 block"> Asia </Text>
                <h3 className="text-4xl font-heading text-white mb-2"> Dubai & Doha </h3>
                <p className="text-gray-300 line-clamp-2 mb-4">
                   Shopping holidays, stopovers, family packages, luxury stays, and event travel in the Middle East.
                </p>
                <Text variant="bold" className="text-white font-bold border-b border-cta inline-block pb-1 group-hover:text-cta transition-colors"> Enquire Now </Text>
              </div></Link>
              {/* Card 4 */}
              <Link className="destination-card group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer block" href="services.html"><Image variant="cover" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop" alt="Switzerland" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <Text variant="bold" className="text-cta font-bold tracking-wider text-sm uppercase mb-2 block"> Europe </Text>
                <h3 className="text-4xl font-heading text-white mb-2"> London & Paris </h3>
                <p className="text-gray-300 line-clamp-2 mb-4">
                   European holidays, school trips, honeymoon plans, business travel, and multi-city itineraries.
                </p>
                <Text variant="bold" className="text-white font-bold border-b border-cta inline-block pb-1 group-hover:text-cta transition-colors"> Enquire Now </Text>
              </div></Link>
              {/* Card 5 */}
              <Link className="destination-card group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer block" href="services.html"><Image variant="cover" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700" src="https://images.unsplash.com/photo-1531572753322-ad063cecc140?q=80&w=800&auto=format&fit=crop" alt="New York & Toronto" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <Text variant="bold" className="text-cta font-bold tracking-wider text-sm uppercase mb-2 block"> Europe </Text>
                <h3 className="text-4xl font-heading text-white mb-2"> New York & Toronto </h3>
                <p className="text-gray-300 line-clamp-2 mb-4">
                   Land of fire and ice. Explore volcanoes, geysers, and massive waterfalls.
                </p>
                <Text variant="bold" className="text-white font-bold border-b border-cta inline-block pb-1 group-hover:text-cta transition-colors"> Enquire Now </Text>
              </div></Link>
              {/* Card 6 */}
              <Link className="destination-card group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer block" href="services.html"><Image variant="cover" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700" src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop" alt="Maldives & Seychelles" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <Text variant="bold" className="text-cta font-bold tracking-wider text-sm uppercase mb-2 block"> Asia </Text>
                <h3 className="text-4xl font-heading text-white mb-2"> Maldives & Seychelles </h3>
                <p className="text-gray-300 line-clamp-2 mb-4">
                   Island honeymoons, anniversary escapes, premium resorts, beach holidays, and relaxation-focused packages.
                </p>
                <Text variant="bold" className="text-white font-bold border-b border-cta inline-block pb-1 group-hover:text-cta transition-colors"> Enquire Now </Text>
              </div></Link>
            </div>
            <div className="mt-12 text-center bg-white p-8 rounded-2xl border border-border">
              <h2 className="text-3xl font-heading text-primary mb-4">Need somewhere else?</h2>
              <p className="text-muted max-w-3xl mx-auto mb-6">Gallant Travel can prepare options for destinations not listed here, including domestic routes, African cities, Europe, the Americas, Asia, and special event travel.</p>
              <Link className="bg-cta hover:bg-orange-700 text-white px-8 py-3 rounded-full font-bold transition-all inline-flex" href="contact.html">Send an Enquiry</Link>
            </div>
            <div className="mt-10 text-center">
              <Text variant="bold" className="text-cta font-bold tracking-wider text-sm uppercase mb-3 block">Airline partners</Text>
              <p className="text-xl text-muted max-w-3xl mx-auto">We help compare suitable options across major domestic, regional, and international airline networks for your route.</p>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-text text-white pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
              <div className="col-span-1 md:col-span-2">
                <Link className="flex items-center gap-2 mb-6" href="index.html"><Compass className="w-8 h-8 text-secondary" />
                <Text className="font-heading text-3xl text-white tracking-wide"> GALLANT TRAVEL </Text></Link>
                <p className="text-gray-400 max-w-sm mb-8">
                   Gallant Travel Agency helps clients plan smooth, memorable journeys with reliable guidance, responsive service, and carefully selected travel options.
                </p>
                <div className="flex gap-4">
                  <Link className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cta transition-colors" href="#"><Instagram className="w-5 h-5" /></Link>
                  <Link className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cta transition-colors" href="#"><Facebook className="w-5 h-5" /></Link>
                  <Link className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cta transition-colors" href="#"><Twitter className="w-5 h-5" /></Link>
                </div>
              </div>
              <div>
                <h4 className="font-heading text-xl text-white mb-6"> Company </h4>
                <ul className="space-y-4">
                  <li>
                    <Link className="text-gray-400 hover:text-cta transition-colors" href="about.html"> About Gallant </Link>
                  </li>
                  <li>
                    <Link className="text-gray-400 hover:text-cta transition-colors" href="destinations.html"> Destinations </Link>
                  </li>
                  <li>
                    <Link className="text-gray-400 hover:text-cta transition-colors" href="services.html"> Services </Link>
                  </li>
                  <li>
                    <Link className="text-gray-400 hover:text-cta transition-colors" href="contact.html"> Contact </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-heading text-xl text-white mb-6"> Contact </h4>
                <ul className="space-y-4">
  <li className="flex items-start gap-3 text-gray-400">
    <MapPin className="w-5 h-5 text-secondary mt-1" />
    <Text>
      <a
        href="https://www.google.com/maps/search/?api=1&query=Union+Bank+Building,+Japan+Line,+Alaba+International+Market,+Alaba,+Lagos+102111,+Lagos,+Nigeria"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition-colors"
      >
        Union Bank Building, Japan Line,
        <br />
        Alaba International Market, Alaba,
        <br />
        Lagos 102111, Lagos, Nigeria
      </a>
    </Text>
  </li>

  <li className="flex items-center gap-3 text-gray-400">
    <Phone className="w-5 h-5 text-secondary" />
    <Text>
      <a href="tel:+2348064196301" className="hover:text-white transition-colors">
        0806 419 6301
      </a>
    </Text>
  </li>

  <li className="flex items-center gap-3 text-gray-400">
    <Mail className="w-5 h-5 text-secondary" />
    <Text>
      <a href="mailto:hello@gallanttravel.ng" className="hover:text-white transition-colors">
        hello@gallanttravel.ng
      </a>
    </Text>
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
