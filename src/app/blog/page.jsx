import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
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
                  <Link contentKey="cta_21" className="bg-cta hover:bg-orange-700 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/30" href="contact.html"> Book Trip </Link>
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
                <Link className="text-base font-medium text-text hover:text-primary transition-colors" href="destinations.html"> Destinations </Link>
                <Link className="text-base font-medium text-text hover:text-primary transition-colors" href="services.html"> Packages </Link>
                <Link className="text-base font-medium text-primary transition-colors" href="blog.html"> Journal </Link>
                <Link contentKey="cta_22" className="bg-cta hover:bg-orange-700 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/30" href="contact.html"> Book Trip </Link>
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
          <Link className="text-4xl font-heading text-text hover:text-primary" href="destinations.html"> Destinations </Link>
          <Link className="text-4xl font-heading text-text hover:text-primary" href="services.html"> Packages </Link>
          <Link className="text-4xl font-heading text-primary" href="blog.html"> Journal </Link>
          <Link className="text-4xl font-heading text-cta hover:text-orange-700" href="contact.html"> Book Trip </Link>
        </div>
        {/* The Journal */}
        <section id="the_journal" className="relative pt-32 pb-20 lg:pt-48 lg:pb-24 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-6xl lg:text-8xl font-heading text-white mb-6"> The Journal </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
               Tales from the trail, gear guides, and inspiration for your next great escape. 
            </p>
            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <Button variant="primary" contentKey="cta_23" className="px-6 py-2 rounded-full bg-white text-primary font-bold shadow-lg"> All Stories </Button>
              <Button contentKey="cta_24" className="px-6 py-2 rounded-full bg-white/10 text-white border border-white/30 hover:bg-white/20 transition-colors"> Guides </Button>
              <Button contentKey="cta_25" className="px-6 py-2 rounded-full bg-white/10 text-white border border-white/30 hover:bg-white/20 transition-colors"> Inspiration </Button>
              <Button contentKey="cta_26" className="px-6 py-2 rounded-full bg-white/10 text-white border border-white/30 hover:bg-white/20 transition-colors"> Gear </Button>
              <Button contentKey="cta_27" className="px-6 py-2 rounded-full bg-white/10 text-white border border-white/30 hover:bg-white/20 transition-colors"> Sustainability </Button>
            </div>
          </div>
        </section>
        {/* 10 Essentials For High Altitude Trekking */}
        <section id="10_essentials_for_high_altitude_trekking" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Article 1 */}
              <article className="blog-card bg-white rounded-2xl overflow-hidden border border-border transition-all duration-300 group cursor-pointer">
                <div className="h-64 overflow-hidden relative">
                  <Image variant="cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=800&auto=format&fit=crop" alt="Hiking" />
                  <Badge className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"> Guide </Badge>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-sm text-muted mb-3">
                    <Text> Oct 24, 2023 </Text>
                    <Text> • </Text>
                    <Text> 5 min read </Text>
                  </div>
                  <h3 className="text-2xl font-heading text-text mb-3 group-hover:text-cta transition-colors"> 10 Essentials for High Altitude Trekking </h3>
                  <p className="text-muted mb-6 line-clamp-3">
                     Preparing for the Andes or Himalayas? Don't leave home without these critical pieces of gear that could save your life. 
                  </p>
                  <Text variant="bold" className="inline-flex items-center text-cta font-bold group-hover:gap-2 transition-all"> Read Story 
                  <ArrowRight className="w-4 h-4 ml-1" /></Text>
                </div>
              </article>
              {/* Article 2 */}
              <article className="blog-card bg-white rounded-2xl overflow-hidden border border-border transition-all duration-300 group cursor-pointer">
                <div className="h-64 overflow-hidden relative">
                  <Image variant="cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop" alt="Nature" />
                  <Badge className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"> Sustainability </Badge>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-sm text-muted mb-3">
                    <Text> Oct 18, 2023 </Text>
                    <Text> • </Text>
                    <Text> 4 min read </Text>
                  </div>
                  <h3 className="text-2xl font-heading text-text mb-3 group-hover:text-cta transition-colors"> Leave No Trace: A Traveler's Responsibility </h3>
                  <p className="text-muted mb-6 line-clamp-3">
                     How to explore the world's most beautiful places without leaving a mark. Practical tips for eco-conscious adventurers. 
                  </p>
                  <Text variant="bold" className="inline-flex items-center text-cta font-bold group-hover:gap-2 transition-all"> Read Story 
                  <ArrowRight className="w-4 h-4 ml-1" /></Text>
                </div>
              </article>
              {/* Article 3 */}
              <article className="blog-card bg-white rounded-2xl overflow-hidden border border-border transition-all duration-300 group cursor-pointer">
                <div className="h-64 overflow-hidden relative">
                  <Image variant="cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop" alt="Van Life" />
                  <Badge className="absolute top-4 left-4 bg-cta text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"> Inspiration </Badge>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-sm text-muted mb-3">
                    <Text> Oct 12, 2023 </Text>
                    <Text> • </Text>
                    <Text> 6 min read </Text>
                  </div>
                  <h3 className="text-2xl font-heading text-text mb-3 group-hover:text-cta transition-colors"> Why Getting Lost is the Best Way to Find Yourself </h3>
                  <p className="text-muted mb-6 line-clamp-3">
                     Sometimes the best plan is no plan at all. Stories from travelers who threw away the map and discovered something unexpected. 
                  </p>
                  <Text variant="bold" className="inline-flex items-center text-cta font-bold group-hover:gap-2 transition-all"> Read Story 
                  <ArrowRight className="w-4 h-4 ml-1" /></Text>
                </div>
              </article>
              {/* Article 4 */}
              <article className="blog-card bg-white rounded-2xl overflow-hidden border border-border transition-all duration-300 group cursor-pointer">
                <div className="h-64 overflow-hidden relative">
                  <Image variant="cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=800&auto=format&fit=crop" alt="Cinque Terre" />
                  <Badge className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"> Guide </Badge>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-sm text-muted mb-3">
                    <Text> Sep 28, 2023 </Text>
                    <Text> • </Text>
                    <Text> 7 min read </Text>
                  </div>
                  <h3 className="text-2xl font-heading text-text mb-3 group-hover:text-cta transition-colors"> Hidden Gems of the Italian Coast </h3>
                  <p className="text-muted mb-6 line-clamp-3">
                     Beyond Cinque Terre and Amalfi. Discover the quiet fishing villages and secret coves that tourists often miss. 
                  </p>
                  <Text variant="bold" className="inline-flex items-center text-cta font-bold group-hover:gap-2 transition-all"> Read Story 
                  <ArrowRight className="w-4 h-4 ml-1" /></Text>
                </div>
              </article>
              {/* Article 5 */}
              <article className="blog-card bg-white rounded-2xl overflow-hidden border border-border transition-all duration-300 group cursor-pointer">
                <div className="h-64 overflow-hidden relative">
                  <Image variant="cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=800&auto=format&fit=crop" alt="Camping" />
                  <Badge className="absolute top-4 left-4 bg-cta text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"> Gear </Badge>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-sm text-muted mb-3">
                    <Text> Sep 15, 2023 </Text>
                    <Text> • </Text>
                    <Text> 5 min read </Text>
                  </div>
                  <h3 className="text-2xl font-heading text-text mb-3 group-hover:text-cta transition-colors"> The Best Lightweight Tents of 2024 </h3>
                  <p className="text-muted mb-6 line-clamp-3">
                     We tested the top ultralight shelters on the market. Here are our winners for durability, weight, and ease of setup. 
                  </p>
                  <Text variant="bold" className="inline-flex items-center text-cta font-bold group-hover:gap-2 transition-all"> Read Story 
                  <ArrowRight className="w-4 h-4 ml-1" /></Text>
                </div>
              </article>
              {/* Article 6 */}
              <article className="blog-card bg-white rounded-2xl overflow-hidden border border-border transition-all duration-300 group cursor-pointer">
                <div className="h-64 overflow-hidden relative">
                  <Image variant="cover" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=800&auto=format&fit=crop" alt="Venice" />
                  <Badge className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"> Inspiration </Badge>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-sm text-muted mb-3">
                    <Text> Sep 02, 2023 </Text>
                    <Text> • </Text>
                    <Text> 4 min read </Text>
                  </div>
                  <h3 className="text-2xl font-heading text-text mb-3 group-hover:text-cta transition-colors"> Solo Travel: Why Everyone Should Try It Once </h3>
                  <p className="text-muted mb-6 line-clamp-3">
                     Building confidence, meeting new people, and the freedom to do exactly what you want. The case for traveling alone. 
                  </p>
                  <Text variant="bold" className="inline-flex items-center text-cta font-bold group-hover:gap-2 transition-all"> Read Story 
                  <ArrowRight className="w-4 h-4 ml-1" /></Text>
                </div>
              </article>
            </div>
            {/* Pagination */}
            <div className="flex justify-center mt-16 gap-2">
              <Button variant="primary" className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted hover:bg-primary hover:text-white hover:border-primary transition-colors"><ChevronLeft className="w-5 h-5" /></Button>
              <Button variant="primary" contentKey="cta_28" className="w-10 h-10 rounded-lg bg-primary text-white font-bold flex items-center justify-center"> 1 </Button>
              <Button variant="primary" contentKey="cta_29" className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted hover:bg-primary hover:text-white hover:border-primary transition-colors"> 2 </Button>
              <Button variant="primary" contentKey="cta_30" className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted hover:bg-primary hover:text-white hover:border-primary transition-colors"> 3 </Button>
              <Button variant="primary" className="w-10 h-10 rounded-lg border border-border flex items-center justify-center text-muted hover:bg-primary hover:text-white hover:border-primary transition-colors"><ChevronRight className="w-5 h-5" /></Button>
            </div>
          </div>
        </section>
        {/* Join The Adventure */}
        <section id="join_the_adventure" className="py-20 border-t border-border bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-heading text-primary mb-4"> Join The Adventure </h2>
            <p className="text-muted mb-8">
               Get travel tips, destination guides, and exclusive offers delivered to your inbox. 
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input placeholder="Enter your email" type="email" className="flex-1 px-6 py-3 rounded-full bg-background border border-border focus:border-cta focus:ring-1 focus:ring-cta outline-none transition-all" />
              <Button contentKey="cta_31" className="bg-cta hover:bg-orange-700 text-white font-bold px-8 py-3 rounded-full transition-all shadow-lg hover:shadow-orange-500/30" type="submit"> Subscribe </Button>
            </form>
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
