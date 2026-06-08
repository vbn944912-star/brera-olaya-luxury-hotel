import { Language } from '../types';
import { TRANSLATIONS } from '../data';
import { Globe, Menu, X, Phone, Moon } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onNavigateToSection: (sectionId: string) => void;
  onOpenCinematic: () => void;
}

export default function Header({ language, setLanguage, onNavigateToSection, onOpenCinematic }: HeaderProps) {
  const t = TRANSLATIONS[language];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: t.navRooms, id: 'rooms' },
    { label: t.navAmenities, id: 'amenities' },
    { label: t.navDining, id: 'dining' },
    { label: t.navLocation, id: 'location' },
    { label: t.navBusiness, id: 'business' },
    { label: t.navFamily, id: 'family' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-royal-gold/20 bg-deep-charcoal text-white shadow-xl" id="main_header">
      {/* Top micro banner for direct booking discount */}
      <div className="bg-royal-gold text-deep-charcoal py-1.5 px-4 text-center text-xs font-bold tracking-wide flex items-center justify-center gap-2 select-none animate-pulse">
        <span className="inline-block w-2 h-2 rounded-full bg-deep-charcoal"></span>
        <span className="font-arabic">{t.directBookingOffer}</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo and Title */}
        <div 
          onClick={() => onNavigateToSection('hero')} 
          className="flex flex-col cursor-pointer select-none group"
        >
          <span className="font-serif text-2xl font-bold tracking-widest text-royal-gold uppercase group-hover:text-warm-sand transition-colors">
            {language === 'en' ? 'BRERA' : 'بريرا'}
          </span>
          <span className="font-sans text-[10px] tracking-[0.25em] text-warm-sand/80 uppercase">
            {language === 'en' ? 'OLAYA • RIYADH' : 'العليا • الرياض'}
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigateToSection(item.id)}
              className="font-arabic font-medium text-sm text-luxury-ivory/80 hover:text-royal-gold transition-colors py-2 cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-royal-gold hover:after:w-full after:transition-all"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Widgets */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Cinematic preview button */}
          <button
            onClick={onOpenCinematic}
            className="flex items-center gap-2 text-xs border border-royal-gold/40 hover:border-royal-gold text-royal-gold hover:text-warm-sand px-3 py-1.5 rounded-full transition-all bg-royal-gold/5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
            <span className="font-arabic">{t.playCinematic}</span>
          </button>

          {/* Quick call */}
          <a
            href="tel:+966920000555"
            className="text-luxury-ivory hover:text-royal-gold transition-colors flex items-center gap-1 text-sm dir-ltr font-mono"
            title={t.footerPhone}
          >
            <Phone size={14} className="text-royal-gold" />
            <span>9200 00555</span>
          </a>

          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            className="flex items-center gap-1.5 text-sm bg-royal-gold/10 hover:bg-royal-gold/20 text-royal-gold px-3.5 py-1.5 rounded-full transition-all border border-royal-gold/30 cursor-pointer"
          >
            <Globe size={15} />
            <span className="font-arabic font-bold text-xs">
              {language === 'ar' ? 'English' : 'العربية'}
            </span>
          </button>
        </div>

        {/* Mobile menu and language triggers */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Fast language swap for mobile */}
          <button
            onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
            className="flex items-center gap-1 text-xs bg-royal-gold/10 hover:bg-royal-gold/20 text-royal-gold px-2.5 py-1.5 rounded-full border border-royal-gold/30 cursor-pointer"
          >
            <Globe size={13} />
            <span className="font-bold text-[10px]">
              {language === 'ar' ? 'EN' : 'عربي'}
            </span>
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-luxury-ivory hover:text-royal-gold p-1 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-royal-gold/20 bg-deep-charcoal/95 backdrop-blur-md animate-fade-in absolute w-full left-0 shadow-2xl z-40">
          <div className="px-4 pt-3 pb-6 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigateToSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className="block w-full text-right font-arabic font-medium text-base text-luxury-ivory hover:text-royal-gold py-2.5 border-b border-white/5 transition-colors"
              >
                {item.label}
              </button>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => {
                  onOpenCinematic();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center font-arabic border border-royal-gold text-royal-gold py-2 rounded-lg hover:bg-royal-gold hover:text-deep-charcoal transition-all text-sm flex items-center justify-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                {t.playCinematic}
              </button>

              <a
                href="tel:+966920000555"
                className="w-full text-center font-mono border border-white/10 text-white py-2 rounded-lg hover:bg-white/5 transition-all text-sm flex items-center justify-center gap-2"
              >
                <Phone size={14} className="text-royal-gold" />
                <span>+966 9200 00555</span>
              </a>

              <button
                onClick={() => {
                  onNavigateToSection('rooms');
                  setMobileMenuOpen(false);
                }}
                className="w-full text-center font-arabic bg-royal-gold text-deep-charcoal font-bold py-2.5 rounded-lg hover:bg-warm-sand transition-all text-sm"
              >
                {t.bookNow}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
