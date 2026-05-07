import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/Button';
import { Camera } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { Compass } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Image } from '@/components/Image';
import { Instagram } from 'lucide-react';
import { Link } from '@/components/Link';
import { Mail } from 'lucide-react';
import { Map } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Menu } from 'lucide-react';
import { Mountain } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Plane } from 'lucide-react';
import { Tent } from 'lucide-react';
import { Text } from '@/components/Text';
import { Twitter } from 'lucide-react';
import { Waves } from 'lucide-react';
import { X } from 'lucide-react';

export const metadata = {
  title: 'Travel Agency 2 - Free Tailwind Template',
  description:  'Download this free Tailwind CSS Travel website template for Travel Agency 2. Features a wanderlust design, fully responsive layout, and includes 6 pre-built pages like blog.html, index.html, about.html.',
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <>
        {/* Navigation */}
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
                  <Link contentKey="cta_30" className="bg-cta hover:bg-orange-700 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/30" href="contact.html"> Book Trip </Link>
                </div>
                <Button variant="primary" className="md:hidden text-text hover:text-primary" id="mobileMenuBtn"><Menu className="w-8 h-8" /></Button>
              </div>
            </div>
          </nav>
        </header>
        {/* Mobile Menu Overlay */}
        <div id="mobileMenu" className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl hidden flex-col items-center justify-center gap-8 transition-all duration-300">
          <Button variant="primary" className="absolute top-6 right-6 text-text hover:text-primary" id="closeMenuBtn"><X className="w-8 h-8" /></Button>
          <Link className="text-4xl font-heading text-text hover:text-primary" href="index.html"> Home </Link>
          <Link className="text-4xl font-heading text-text hover:text-primary" href="about.html"> About </Link>
          <Link className="text-4xl font-heading text-text hover:text-primary" href="destinations.html"> Destinations </Link>
          <Link className="text-4xl font-heading text-text hover:text-primary" href="services.html"> Packages </Link>
          <Link className="text-4xl font-heading text-text hover:text-primary" href="blog.html"> Journal </Link>
          <Link className="text-4xl font-heading text-cta hover:text-orange-700" href="contact.html"> Book Trip </Link>
        </div>
        {/* Hero Section */}
        <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center bg-hero-pattern bg-cover bg-center bg-no-repeat bg-fixed">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            <Text variant="bold" className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-bold tracking-wider mb-6 border border-white/30"> EXPLORE THE UNCHARTED </Text>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading text-white mb-6 text-shadow leading-none">
               Find Your 
              <br />
              <Text className="text-cta"> Wild </Text>
               Side 
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-2xl mx-auto font-light">
               Curated expeditions for those who seek more than just a vacation. Experience the raw beauty of the natural world. 
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link contentKey="cta_31" className="bg-cta hover:bg-orange-700 text-white text-lg px-8 py-4 rounded-full font-bold transition-all shadow-xl hover:shadow-orange-500/30 flex items-center justify-center gap-2" href="contact.html"> Book Your Trip 
              <ArrowRight className="w-5 h-5" /></Link>
              <Link contentKey="cta_32" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 text-lg px-8 py-4 rounded-full font-bold transition-all flex items-center justify-center" href="destinations.html"> View Destinations </Link>
            </div>
          </div>
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70"><ChevronDown className="w-10 h-10" /></div>
        </section>
        {/* Why Travel With Us */}
        <section id="why_travel_with_us" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-heading text-primary mb-4"> Why Travel With Us? </h2>
              <p className="text-xl text-muted max-w-2xl mx-auto">
                 We don't just plan trips; we craft life-changing experiences tailored to your adventurous spirit. 
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {/* Feature 1 */}
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Map className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-heading text-text mb-3"> Expert Guides </h3>
                <p className="text-muted">
                   Our local experts know every hidden trail and secret spot, ensuring you see the authentic side of every destination. 
                </p>
              </div>
              {/* Feature 2 */}
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Tent className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-heading text-text mb-3"> Sustainable Travel </h3>
                <p className="text-muted">
                   We are committed to eco-friendly practices that preserve the environment and support local communities. 
                </p>
              </div>
              {/* Feature 3 */}
              <div className="text-center group">
                <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Camera className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-heading text-text mb-3"> Small Groups </h3>
                <p className="text-muted">
                   Intimate group sizes mean more personalized attention and a deeper connection with your fellow travelers. 
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Popular Destinations */}
        <section id="popular_destinations" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <Text variant="bold" className="text-cta font-bold tracking-wider text-sm uppercase mb-2 block"> Where to next? </Text>
                <h2 className="text-5xl font-heading text-primary"> Popular Destinations </h2>
              </div>
              <Link className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-cta transition-colors" href="destinations.html"> View All 
              <ArrowRight className="w-5 h-5" /></Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <Link className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer" href="destinations.html"><Image variant="cover" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop" alt="Patagonia" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <Text variant="bold" className="text-white/80 text-sm font-bold mb-1 block"> South America </Text>
                <h3 className="text-3xl font-heading text-white group-hover:text-cta transition-colors"> Patagonia </h3>
              </div></Link>
              {/* Card 2 */}
              <Link className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer lg:mt-12" href="destinations.html"><Image variant="cover" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80" alt="Iceland" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <Text variant="bold" className="text-white/80 text-sm font-bold mb-1 block"> Europe </Text>
                <h3 className="text-3xl font-heading text-white group-hover:text-cta transition-colors"> Iceland </h3>
              </div></Link>
              {/* Card 3 */}
              <Link className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer" href="destinations.html"><Image variant="cover" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=800&auto=format&fit=crop" alt="Safari" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <Text variant="bold" className="text-white/80 text-sm font-bold mb-1 block"> Africa </Text>
                <h3 className="text-3xl font-heading text-white group-hover:text-cta transition-colors"> Serengeti </h3>
              </div></Link>
              {/* Card 4 */}
              <Link className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer lg:mt-12" href="destinations.html"><Image variant="cover" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop" alt="Bali" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <Text variant="bold" className="text-white/80 text-sm font-bold mb-1 block"> Asia </Text>
                <h3 className="text-3xl font-heading text-white group-hover:text-cta transition-colors"> Bali </h3>
              </div></Link>
            </div>
            <div className="mt-8 text-center md:hidden">
              <Link variant="inline" className="inline-flex items-center gap-2 text-primary font-bold hover:text-cta transition-colors" href="destinations.html"> View All Destinations 
              <ArrowRight className="w-5 h-5" /></Link>
            </div>
          </div>
        </section>
        {/* Adventure Styles */}
        <section id="adventure_styles" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-heading text-primary mb-4"> Adventure Styles </h2>
              <p className="text-xl text-muted max-w-2xl mx-auto"> Choose the type of journey that speaks to your soul. </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Service 1 */}
              <div className="bg-white p-8 rounded-2xl border border-border card-hover">
                <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center mb-6 text-primary"><Mountain className="w-8 h-8" /></div>
                <h3 className="text-2xl font-heading text-text mb-3"> Trekking & Hiking </h3>
                <p className="text-muted mb-6">
                   Conquer peaks and traverse valleys. From the Andes to the Himalayas, our trekking packages are designed for all fitness levels. 
                </p>
                <Link variant="inline" className="text-cta font-bold hover:text-orange-700 inline-flex items-center gap-1" href="services.html"> Learn More 
                <ChevronRight className="w-4 h-4" /></Link>
              </div>
              {/* Service 2 */}
              <div className="bg-white p-8 rounded-2xl border border-border card-hover">
                <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center mb-6 text-primary"><Waves className="w-8 h-8" /></div>
                <h3 className="text-2xl font-heading text-text mb-3"> Water Expeditions </h3>
                <p className="text-muted mb-6">
                   Dive into the deep blue. Kayaking, rafting, and diving adventures in the world's most pristine waters. 
                </p>
                <Link variant="inline" className="text-cta font-bold hover:text-orange-700 inline-flex items-center gap-1" href="services.html"> Learn More 
                <ChevronRight className="w-4 h-4" /></Link>
              </div>
              {/* Service 3 */}
              <div className="bg-white p-8 rounded-2xl border border-border card-hover">
                <div className="w-14 h-14 bg-secondary/20 rounded-lg flex items-center justify-center mb-6 text-primary"><Compass className="w-8 h-8" /></div>
                <h3 className="text-2xl font-heading text-text mb-3"> Cultural Immersion </h3>
                <p className="text-muted mb-6">
                   Connect with local traditions. Stay in villages, learn ancient crafts, and experience life as a local. 
                </p>
                <Link variant="inline" className="text-cta font-bold hover:text-orange-700 inline-flex items-center gap-1" href="services.html"> Learn More 
                <ChevronRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </div>
        </section>
        {/* Ready To Start Your Adventure */}
        <section id="ready_to_start_your_adventure" className="py-24 bg-primary relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-5xl md:text-6xl font-heading text-white mb-6"> Ready to Start Your Adventure? </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
               Life is short and the world is wide. Don't wait for the perfect moment—create it. Book your dream trip today. 
            </p>
            <Link variant="inline" contentKey="cta_33" className="bg-cta hover:bg-white hover:text-cta text-white text-xl px-10 py-4 rounded-full font-bold transition-all shadow-xl inline-flex items-center gap-2" href="contact.html"> Book Your Trip Now 
            <Plane className="w-6 h-6" /></Link>
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
