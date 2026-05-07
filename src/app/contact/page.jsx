import { Button } from '@/components/Button';
import { Compass } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Input } from '@/components/Input';
import { Instagram } from 'lucide-react';
import { Link } from '@/components/Link';
import { Mail } from 'lucide-react';
import { MapPin } from 'lucide-react';
import { Menu } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Text } from '@/components/Text';
import { Twitter } from 'lucide-react';
import { X } from 'lucide-react';
import { Youtube } from 'lucide-react';

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
                  <Link contentKey="cta_16" className="bg-cta hover:bg-orange-700 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/30" href="contact.html"> Book Trip </Link>
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
                <Link className="text-base font-medium text-text hover:text-primary transition-colors" href="blog.html"> Journal </Link>
                <Link contentKey="cta_17" className="bg-cta hover:bg-orange-700 text-white px-6 py-2 rounded-full font-bold transition-all shadow-lg hover:shadow-orange-500/30" href="contact.html"> Book Trip </Link>
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
          <Link className="text-4xl font-heading text-text hover:text-primary" href="blog.html"> Journal </Link>
          <Link className="text-4xl font-heading text-cta hover:text-orange-700" href="contact.html"> Book Trip </Link>
        </div>
        {/* Start Your Journey */}
        <section id="start_your_journey" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-primary overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-6xl lg:text-8xl font-heading text-white mb-6"> Start Your Journey </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
               Have questions or ready to book? Our team is here to help you plan the perfect adventure. 
            </p>
          </div>
        </section>
        {/* Get In Touch */}
        <section id="get_in_touch" className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="text-5xl font-heading text-primary mb-8"> Get In Touch </h2>
                <p className="text-lg text-muted mb-12">
                   We'd love to hear from you. Whether you're looking for a custom itinerary or just want to say hello, drop us a line. 
                </p>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 text-primary"><MapPin className="w-6 h-6" /></div>
                    <div>
                      <h3 className="text-xl font-heading text-text mb-1"> Visit Us </h3>
                      <p className="text-muted">
                         123 Adventure Way, Suite 101 
                        <br />
                         Boulder, CO 80302 
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 text-primary"><Mail className="w-6 h-6" /></div>
                    <div>
                      <h3 className="text-xl font-heading text-text mb-1"> Email Us </h3>
                      <p className="text-muted">
                         hello@wanderlust.com 
                        <br />
                         bookings@wanderlust.com 
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 text-primary"><Phone className="w-6 h-6" /></div>
                    <div>
                      <h3 className="text-xl font-heading text-text mb-1"> Call Us </h3>
                      <p className="text-muted">
                         +1 (555) 987-6543 
                        <br />
                         Mon-Fri, 9am-6pm MST 
                      </p>
                    </div>
                  </div>
                </div>
                {/* Socials */}
                <div className="mt-12">
                  <h3 className="text-xl font-heading text-text mb-4"> Follow Our Adventures </h3>
                  <div className="flex gap-4">
                    <Link className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-text hover:bg-primary hover:text-white hover:border-primary transition-all" href="#"><Instagram className="w-6 h-6" /></Link>
                    <Link className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-text hover:bg-primary hover:text-white hover:border-primary transition-all" href="#"><Facebook className="w-6 h-6" /></Link>
                    <Link className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-text hover:bg-primary hover:text-white hover:border-primary transition-all" href="#"><Twitter className="w-6 h-6" /></Link>
                    <Link className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-text hover:bg-primary hover:text-white hover:border-primary transition-all" href="#"><Youtube className="w-6 h-6" /></Link>
                  </div>
                </div>
              </div>
              {/* Contact Form */}
              <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-border">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-bold text-text uppercase tracking-wider"> First Name </label>
                      <Input className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:bg-white" type="text" placeholder="Jane" id="firstName" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-bold text-text uppercase tracking-wider"> Last Name </label>
                      <Input className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:bg-white" type="text" placeholder="Doe" id="lastName" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-text uppercase tracking-wider"> Email Address </label>
                    <Input className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:bg-white" type="email" placeholder="jane@example.com" id="email" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="interest" className="text-sm font-bold text-text uppercase tracking-wider"> Interested In </label>
                    <select id="interest" className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:bg-white">
                      <option> General Inquiry </option>
                      <option> The Alpine Explorer </option>
                      <option> Deep Blue Odyssey </option>
                      <option> Silk Road Journey </option>
                      <option> Custom Itinerary </option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-text uppercase tracking-wider"> Message </label>
                    <textarea id="message" placeholder="Tell us about your dream trip..." rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:bg-white"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-cta hover:bg-orange-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-orange-500/30 text-lg"> Send Message </button>
                </form>
              </div>
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
