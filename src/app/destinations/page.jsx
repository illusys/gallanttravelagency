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
  title: 'Travel Agency 2 - Free Tailwind Template',
  description:  'Download this free Tailwind CSS Travel website template for Travel Agency 2. Features a wanderlust design, fully responsive layout, and includes 6 pre-built pages like blog.html, index.html, about.html.',
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <>
        <header>
          <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="flex justify-between items-center h-20">
                <Link className="flex items-center gap-2 group" href="index.html"><Compass className="w-8 h-8 text-primary" />
                <Text className="font-heading text-3xl text-primary tracking-wide"> WANDERLUST </Text></Link>
                <div className="hidden md:flex items-center gap-8">
                  <Link className="text-base font-medium text-text hover:text-primary transition-colors" href="index.html"> Home </Link>
                  <Link className="text-base font-medium text-text hover:text-primary transition-colors" href="about.html"> About </Link>
                  <Link className="text-base font-medium text-text hover:text-primary transition-colors" href="destinations.html"> Destinations </Link>
                  <Link className="text-base font-medium text-text hover:text-primary transition-colors" href="services.html"> Packages </Link>
                  <Link className="text-base font-medium text-text hover:text-primary transition-colors" href="blog.html"> Journal </Link>
                  <Link contentKey="cta_19" className="bg-cta hover:bg-orange-700 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/30" href="contact.html"> Book Trip </Link>
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
              <Link className="flex items-center gap-2 group" href="index.html"><Compass className="w-8 h-8 text-primary" />
              <Text className="font-heading text-3xl text-primary tracking-wide"> WANDERLUST </Text></Link>
              <div className="hidden md:flex items-center gap-8">
                <Link className="text-base font-medium text-text hover:text-primary transition-colors" href="index.html"> Home </Link>
                <Link className="text-base font-medium text-text hover:text-primary transition-colors" href="about.html"> About </Link>
                <Link className="text-base font-medium text-primary transition-colors" href="destinations.html"> Destinations </Link>
                <Link className="text-base font-medium text-text hover:text-primary transition-colors" href="services.html"> Packages </Link>
                <Link className="text-base font-medium text-text hover:text-primary transition-colors" href="blog.html"> Journal </Link>
                <Link contentKey="cta_20" className="bg-cta hover:bg-orange-700 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/30" href="contact.html"> Book Trip </Link>
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
          <Link className="text-4xl font-heading text-text hover:text-primary" href="services.html"> Packages </Link>
          <Link className="text-4xl font-heading text-text hover:text-primary" href="blog.html"> Journal </Link>
          <Link className="text-4xl font-heading text-cta hover:text-orange-700" href="contact.html"> Book Trip </Link>
        </div>
        {/* The World Awaits */}
        <section id="the_world_awaits" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-6xl lg:text-8xl font-heading text-white mb-6"> The World Awaits </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
               From the frozen poles to the tropical equator, we have scouted the most incredible locations on Earth. 
            </p>
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <Button variant="primary" contentKey="cta_21" className="px-6 py-2 rounded-full bg-white text-primary font-bold shadow-lg"> All </Button>
              <Button contentKey="cta_22" className="px-6 py-2 rounded-full bg-white/10 text-white border border-white/30 hover:bg-white/20 transition-colors"> South America </Button>
              <Button contentKey="cta_23" className="px-6 py-2 rounded-full bg-white/10 text-white border border-white/30 hover:bg-white/20 transition-colors"> Asia </Button>
              <Button contentKey="cta_24" className="px-6 py-2 rounded-full bg-white/10 text-white border border-white/30 hover:bg-white/20 transition-colors"> Africa </Button>
              <Button contentKey="cta_25" className="px-6 py-2 rounded-full bg-white/10 text-white border border-white/30 hover:bg-white/20 transition-colors"> Europe </Button>
              <Button contentKey="cta_26" className="px-6 py-2 rounded-full bg-white/10 text-white border border-white/30 hover:bg-white/20 transition-colors"> Polar </Button>
            </div>
          </div>
        </section>
        {/* Patagonia */}
        <section id="patagonia" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <Link className="destination-card group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer block" href="services.html"><Image variant="cover" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" alt="Patagonia" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <Text variant="bold" className="text-cta font-bold tracking-wider text-sm uppercase mb-2 block"> South America </Text>
                <h3 className="text-4xl font-heading text-white mb-2"> Patagonia </h3>
                <p className="text-gray-300 line-clamp-2 mb-4">
                   Glaciers, granite peaks, and vast steppes. The ultimate playground for hikers and climbers. 
                </p>
                <Text variant="bold" className="text-white font-bold border-b border-cta inline-block pb-1 group-hover:text-cta transition-colors"> View Packages </Text>
              </div></Link>
              {/* Card 2 */}
              <Link className="destination-card group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer block" href="services.html"><Image variant="cover" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700" src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800&auto=format&fit=crop" alt="Kenya" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <Text variant="bold" className="text-cta font-bold tracking-wider text-sm uppercase mb-2 block"> Africa </Text>
                <h3 className="text-4xl font-heading text-white mb-2"> Kenya </h3>
                <p className="text-gray-300 line-clamp-2 mb-4">
                   Witness the Great Migration and camp under the stars in the Maasai Mara. 
                </p>
                <Text variant="bold" className="text-white font-bold border-b border-cta inline-block pb-1 group-hover:text-cta transition-colors"> View Packages </Text>
              </div></Link>
              {/* Card 3 */}
              <Link className="destination-card group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer block" href="services.html"><Image variant="cover" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700" src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop" alt="Bali" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <Text variant="bold" className="text-cta font-bold tracking-wider text-sm uppercase mb-2 block"> Asia </Text>
                <h3 className="text-4xl font-heading text-white mb-2"> Bali </h3>
                <p className="text-gray-300 line-clamp-2 mb-4">
                   Volcano treks, hidden waterfalls, and spiritual temples in the Island of Gods. 
                </p>
                <Text variant="bold" className="text-white font-bold border-b border-cta inline-block pb-1 group-hover:text-cta transition-colors"> View Packages </Text>
              </div></Link>
              {/* Card 4 */}
              <Link className="destination-card group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer block" href="services.html"><Image variant="cover" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=800&auto=format&fit=crop" alt="Switzerland" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <Text variant="bold" className="text-cta font-bold tracking-wider text-sm uppercase mb-2 block"> Europe </Text>
                <h3 className="text-4xl font-heading text-white mb-2"> Swiss Alps </h3>
                <p className="text-gray-300 line-clamp-2 mb-4">
                   Classic mountaineering and scenic train rides through the heart of Europe. 
                </p>
                <Text variant="bold" className="text-white font-bold border-b border-cta inline-block pb-1 group-hover:text-cta transition-colors"> View Packages </Text>
              </div></Link>
              {/* Card 5 */}
              <Link className="destination-card group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer block" href="services.html"><Image variant="cover" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700" src="https://images.unsplash.com/photo-1531572753322-ad063cecc140?q=80&w=800&auto=format&fit=crop" alt="Iceland" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <Text variant="bold" className="text-cta font-bold tracking-wider text-sm uppercase mb-2 block"> Europe </Text>
                <h3 className="text-4xl font-heading text-white mb-2"> Iceland </h3>
                <p className="text-gray-300 line-clamp-2 mb-4">
                   Land of fire and ice. Explore volcanoes, geysers, and massive waterfalls. 
                </p>
                <Text variant="bold" className="text-white font-bold border-b border-cta inline-block pb-1 group-hover:text-cta transition-colors"> View Packages </Text>
              </div></Link>
              {/* Card 6 */}
              <Link className="destination-card group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer block" href="services.html"><Image variant="cover" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700" src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=800&auto=format&fit=crop" alt="Maldives" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <Text variant="bold" className="text-cta font-bold tracking-wider text-sm uppercase mb-2 block"> Asia </Text>
                <h3 className="text-4xl font-heading text-white mb-2"> Maldives </h3>
                <p className="text-gray-300 line-clamp-2 mb-4">
                   Luxury overwater bungalows and world-class diving in crystal clear atolls. 
                </p>
                <Text variant="bold" className="text-white font-bold border-b border-cta inline-block pb-1 group-hover:text-cta transition-colors"> View Packages </Text>
              </div></Link>
            </div>
          </div>
        </section>
        {/* Footer */}
        <footer className="bg-text text-white pt-20 pb-10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-12 mb-16">
              <div className="col-span-1 md:col-span-2">
                <Link className="flex items-center gap-2 mb-6" href="index.html"><Compass className="w-8 h-8 text-secondary" />
                <Text className="font-heading text-3xl text-white tracking-wide"> WANDERLUST </Text></Link>
                <p className="text-gray-400 max-w-sm mb-8">
                   Inspiring the spirit of adventure since 2010. We believe in travel that transforms you and respects the planet. 
                </p>
                <div className="flex gap-4">
                  <Link className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cta transition-colors" href="#"><Instagram className="w-5 h-5" /></Link>
                  <Link className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cta transition-colors" href="#"><Facebook className="w-5 h-5" /></Link>
                  <Link className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-cta transition-colors" href="#"><Twitter className="w-5 h-5" /></Link>
                </div>
              </div>
              <div>
                <h4 className="font-heading text-xl text-white mb-6"> Explore </h4>
                <ul className="space-y-4">
                  <li>
                    <Link className="text-gray-400 hover:text-cta transition-colors" href="about.html"> About Us </Link>
                  </li>
                  <li>
                    <Link className="text-gray-400 hover:text-cta transition-colors" href="destinations.html"> Destinations </Link>
                  </li>
                  <li>
                    <Link className="text-gray-400 hover:text-cta transition-colors" href="services.html"> Packages </Link>
                  </li>
                  <li>
                    <Link className="text-gray-400 hover:text-cta transition-colors" href="blog.html"> Journal </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-heading text-xl text-white mb-6"> Contact </h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-400">
                    <MapPin className="w-5 h-5 text-secondary mt-1" />
                    <Text> 123 Adventure Way 
                    <br />
                     Boulder, CO 80302 </Text>
                  </li>
                  <li className="flex items-center gap-3 text-gray-400">
                    <Phone className="w-5 h-5 text-secondary" />
                    <Text> +1 (555) 987-6543 </Text>
                  </li>
                  <li className="flex items-center gap-3 text-gray-400">
                    <Mail className="w-5 h-5 text-secondary" />
                    <Text> hello@wanderlust.com </Text>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-sm"> © 2024 Wanderlust Expeditions. All rights reserved. </p>
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
