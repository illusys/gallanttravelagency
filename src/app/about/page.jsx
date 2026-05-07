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
                  <Link contentKey="cta_22" className="bg-cta hover:bg-orange-700 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/30" href="contact.html"> Plan a Trip </Link>
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
                <Link className="text-base font-medium text-primary transition-colors" href="about.html"> About </Link>
                <Link className="text-base font-medium text-text hover:text-primary transition-colors" href="destinations.html"> Destinations </Link>
                <Link className="text-base font-medium text-text hover:text-primary transition-colors" href="services.html"> Services </Link>
                <Link className="text-base font-medium text-text hover:text-primary transition-colors" href="contact.html"> Contact </Link>
                <Link contentKey="cta_23" className="bg-cta hover:bg-orange-700 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/30" href="contact.html"> Plan a Trip </Link>
              </div>
              <Button variant="primary" className="md:hidden text-text hover:text-primary" id="mobileMenuBtn"><Menu className="w-8 h-8" /></Button>
            </div>
          </div>
        </nav>
        {/* Mobile Menu Overlay */}
        <div id="mobileMenu" className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl hidden flex-col items-center justify-center gap-8 transition-all duration-300">
          <Button variant="primary" className="absolute top-6 right-6 text-text hover:text-primary" id="closeMenuBtn"><X className="w-8 h-8" /></Button>
          <Link className="text-4xl font-heading text-text hover:text-primary" href="index.html"> Home </Link>
          <Link className="text-4xl font-heading text-primary" href="about.html"> About </Link>
          <Link className="text-4xl font-heading text-text hover:text-primary" href="destinations.html"> Destinations </Link>
          <Link className="text-4xl font-heading text-text hover:text-primary" href="services.html"> Services </Link>
          <Link className="text-4xl font-heading text-text hover:text-primary" href="contact.html"> Contact </Link>
          <Link className="text-4xl font-heading text-cta hover:text-orange-700" href="contact.html"> Plan a Trip </Link>
        </div>
        {/* About Gallant Travel */}
        <section id="our_story" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-6xl lg:text-8xl font-heading text-white mb-6"> About Gallant Travel </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
               Gallant Travel Agency was created to make travel planning feel clear, dependable, and personal for every client we serve.
            </p>
          </div>
        </section>
        {/* Travel Planning That Works */}
        <section id="travel_that_transforms" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Image className="rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500" src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1000&auto=format&fit=crop" alt="Hiking Team" />
              </div>
              <div>
                <Text variant="bold" className="text-cta font-bold tracking-wider text-sm uppercase mb-2 block"> Our Mission </Text>
                <h2 className="text-5xl font-heading text-primary mb-6"> Travel Planning That Works </h2>
                <p className="text-lg text-muted mb-6">
                   Our mission is to connect people with the right travel options through honest guidance, responsive communication, and careful attention to the details that make journeys run smoothly.
                </p>
                <p className="text-lg text-muted mb-8">
                   From quick domestic trips to international holidays and business itineraries, we support clients with flights, hotels, tours, travel insurance guidance, and visa assistance coordination.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-4xl font-heading text-secondary mb-1"> Trusted </h4>
                    <p className="text-sm font-bold text-text"> Travel Guidance </p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-heading text-secondary mb-1"> Flexible </h4>
                    <p className="text-sm font-bold text-text"> Trip Options </p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-heading text-secondary mb-1"> Family </h4>
                    <p className="text-sm font-bold text-text"> Friendly Service </p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-heading text-secondary mb-1"> Detail </h4>
                    <p className="text-sm font-bold text-text"> Focused Planning </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Our Values */}
        <section id="meet_the_guides" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-heading text-primary mb-4"> Our Values </h2>
              <p className="text-xl text-muted max-w-2xl mx-auto"> The principles that guide every Gallant Travel booking and recommendation. </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[3/4]">
                  <Image variant="cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800&auto=format&fit=crop" alt="Guide 1" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm"> Clear communication from first enquiry to final confirmation. </p>
                  </div>
                </div>
                <h3 className="text-2xl font-heading text-text"> Responsiveness </h3>
                <p className="text-cta font-bold text-sm uppercase tracking-wider"> Quick updates and practical answers </p>
              </div>
              {/* Team Member 2 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[3/4]">
                  <Image variant="cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop" alt="Guide 2" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm"> Travel options matched to your destination, budget, and purpose. </p>
                  </div>
                </div>
                <h3 className="text-2xl font-heading text-text"> Personalization </h3>
                <p className="text-cta font-bold text-sm uppercase tracking-wider"> Plans shaped around you </p>
              </div>
              {/* Team Member 3 */}
              <div className="group">
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[3/4]">
                  <Image variant="cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop" alt="Guide 3" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-white text-sm"> Careful checks on timing, documents, and booking details. </p>
                  </div>
                </div>
                <h3 className="text-2xl font-heading text-text"> Reliability </h3>
                <p className="text-cta font-bold text-sm uppercase tracking-wider"> Support you can count on </p>
              </div>
            </div>
          </div>
        </section>
        <section id="ready_to_work_with_us" className="py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-5xl md:text-6xl font-heading text-white mb-6">Why Work With Gallant?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">We listen carefully, explain your options clearly, and stay focused on the travel details that protect your time, budget, and peace of mind.</p>
            <Link variant="inline" className="bg-cta hover:bg-white hover:text-cta text-white text-xl px-10 py-4 rounded-full font-bold transition-all shadow-xl inline-flex items-center gap-2" href="contact.html">Start a Conversation</Link>
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