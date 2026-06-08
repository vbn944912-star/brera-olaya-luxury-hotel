import { useState } from 'react';
import { Language, BookingDetails } from './types';
import { TRANSLATIONS, INSTALLED_ROOMS, INSTALLED_AMENITIES, INSTALLED_TESTIMONIALS } from './data';
import Header from './components/Header';
import BookingBar from './components/BookingBar';
import RoomCard from './components/RoomCard';
import VirtualConcierge from './components/VirtualConcierge';
import CinematicVideo from './components/CinematicVideo';
import DiningMenu from './components/DiningMenu';

// Import Icons
import { 
  MapPin, Phone, Mail, Star, Waves, Dumbbell, Utensils, Coffee, 
  Car, Wifi, Clock, Briefcase, ChevronRight, Check, Award,
  ExternalLink, HelpCircle, Sparkles, Building, Landmark, Users, CheckCircle, Percent
} from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<Language>('ar');
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>(undefined);
  const [showCinematic, setShowCinematic] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [activeBooking, setActiveBooking] = useState<any | null>(null);
  const [isBookingSubmitting, setIsBookingSubmitting] = useState(false);

  const t = TRANSLATIONS[language];

  // Helper mapping string to Lucide React Icon components
  const getAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'waves': return <Waves className="text-royal-gold" size={24} />;
      case 'dumbbell': return <Dumbbell className="text-royal-gold" size={24} />;
      case 'utensils': return <Utensils className="text-royal-gold" size={24} />;
      case 'coffee': return <Coffee className="text-royal-gold" size={24} />;
      case 'car': return <Car className="text-royal-gold" size={24} />;
      case 'wifi': return <Wifi className="text-royal-gold" size={24} />;
      case 'clock': return <Clock className="text-royal-gold" size={24} />;
      case 'briefcase': return <Briefcase className="text-royal-gold" size={24} />;
      default: return <Sparkles className="text-royal-gold" size={24} />;
    }
  };

  // Scroll smoothly to target section
  const handleNavigateToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Callback when booking bar is confirmed (Direct booking system)
  const handleBookingConfirmed = (details: BookingDetails & { totalCost: number }) => {
    setIsBookingSubmitting(true);
    setTimeout(() => {
      setIsBookingSubmitting(false);
      setActiveBooking({
        ...details,
        id: `BO-2026-${Math.floor(100000 + Math.random() * 900000)}`,
        roomDetail: INSTALLED_ROOMS.find(r => r.id === details.roomType) || INSTALLED_ROOMS[0],
      });
    }, 1500);
  };

  // Copy-to-clipboard trigger for special coupon voucher in AIChat Concierge
  const handleSelectPromoCode = () => {
    navigator.clipboard.writeText('ROYAL15');
    alert(language === 'ar' ? 'تم نسخ الرمز الترويجي ROYAL15 بنجاح!' : 'Coupon Voucher ROYAL15 copied successfully!');
  };

  return (
    <div 
      className="min-h-screen flex flex-col font-sans select-none overflow-x-hidden text-deep-charcoal"
      style={{ direction: language === 'ar' ? 'rtl' : 'ltr', backgroundColor: '#F8F6F2' }}
    >
      {/* 1. Luxurious Sticky Header */}
      <Header 
        language={language}
        setLanguage={setLanguage}
        onNavigateToSection={handleNavigateToSection}
        onOpenCinematic={() => setShowCinematic(true)}
      />

      {/* 2. Persistent Booking Bar */}
      <BookingBar 
        language={language} 
        onBookConfirmed={handleBookingConfirmed} 
        selectedRoomId={selectedRoomId}
      />

      {/* 3. Hero Section with Cinematic Twilight Background */}
      <section id="hero" className="relative min-h-[580px] md:min-h-[640px] flex items-center justify-center bg-black overflow-hidden select-none">
        
        {/* Animated ken-burns luxury panoramic background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=1920" 
            alt="Brera Olaya Outer View"
            className="w-full h-full object-cover opacity-65 scale-105 animate-kenburns filter contrast-105 brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
          {/* Royal gold & charcoal color wash */}
          <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal via-deep-charcoal/40 to-black/30"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-royal-gold/5 to-transparent"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-14 flex flex-col items-center">
          
          {/* Subtle gold brand crest badge */}
          <div className="mb-6 flex items-center gap-1.5 border border-royal-gold/40 bg-royal-gold/10 px-4 py-1.5 rounded-full backdrop-blur-sm shadow-xl hover:bg-royal-gold/20 transition-all">
            <Sparkles size={14} className="text-royal-gold animate-pulse" />
            <span className="font-serif text-[10px] tracking-[0.2em] font-bold text-royal-gold uppercase font-arabic">
              {t.tagline}
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight drop-shadow-md font-arabic">
            {t.heroTitle}
          </h1>

          <p className="max-w-2xl text-sm md:text-base text-luxury-ivory/90 font-arabic leading-relaxed mb-10 drop-shadow-sm font-medium">
            {t.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => handleNavigateToSection('rooms')}
              className="w-full sm:w-auto px-8 py-3.5 bg-royal-gold hover:bg-warm-sand text-deep-charcoal font-bold font-arabic rounded-lg transition-all transform hover:scale-[1.02] shadow-2xl cursor-pointer"
            >
              {t.heroCTA1}
            </button>
            
            <button
              onClick={() => setShowCinematic(true)}
              className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold font-arabic rounded-lg border border-white/20 hover:border-royal-gold/60 transition-all backdrop-blur-sm cursor-pointer flex items-center justify-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
              {t.playCinematic}
            </button>
          </div>
        </div>

        {/* Outer overlay framing for majestic luxury look */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-[#F8F6F2] to-transparent pointer-events-none"></div>
      </section>

      {/* 4. Luxury Statistics Section */}
      <section className="relative z-20 -mt-10 px-4 max-w-6xl mx-auto w-full select-none" id="stats">
        <div className="bg-white rounded-xl shadow-2xl border border-royal-gold/20 p-6 md:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          
          <div className="border-r border-gray-100 last:border-none flex flex-col justify-center">
            <span className="font-serif text-3xl md:text-4xl font-extrabold text-royal-gold font-mono block">
              {t.statReviewsVal}
            </span>
            <span className="text-[11px] md:text-xs text-gray-500 font-bold font-arabic mt-1">
              {t.statReviewsLbl}
            </span>
          </div>

          <div className="border-r lg:border-r border-gray-100 last:border-none flex flex-col justify-center">
            <span className="font-serif text-3xl md:text-4xl font-extrabold text-[#111] font-mono block">
              {t.statRatingVal}
            </span>
            <span className="text-[11px] md:text-xs text-royal-gold font-bold font-arabic mt-1">
              {t.statRatingLbl}
            </span>
          </div>

          <div className="border-r border-gray-100 last:border-none flex flex-col justify-center">
            <span className="font-serif text-3xl md:text-4xl font-extrabold text-royal-gold font-mono block">
              {t.statServiceVal}
            </span>
            <span className="text-[11px] md:text-xs text-gray-500 font-bold font-arabic mt-1">
              {t.statServiceLbl}
            </span>
          </div>

          <div className="last:border-none flex flex-col justify-center col-span-2 lg:col-span-1 border-t lg:border-t-0 border-gray-100 pt-4 lg:pt-0">
            <span className="font-serif text-3xl md:text-4xl font-extrabold text-[#111] font-mono block">
              {t.statProximityVal}
            </span>
            <span className="text-[11px] md:text-xs text-royal-gold font-bold font-arabic mt-1">
              {t.statProximityLbl}
            </span>
          </div>

        </div>
      </section>

      {/* 5. About Hotel Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="inline-block w-8 h-[2px] bg-royal-gold"></span>
              <span className="text-xs uppercase tracking-widest text-royal-gold font-bold font-arabic">
                {language === 'ar' ? 'رحلتك الفخمة في الرياض' : 'A Stay To Remember'}
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-bold text-deep-charcoal font-arabic leading-tight">
              {t.aboutTitle}
            </h2>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed font-arabic font-medium">
              {t.aboutLine1}
            </p>

            <p className="text-xs md:text-sm text-gray-600 leading-relaxed font-arabic">
              {t.aboutLine2}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <div className="bg-white border border-royal-gold/20 rounded-lg p-4 flex-1 min-w-[180px] shadow-sm">
                <Landmark className="text-royal-gold mb-2" size={20} />
                <h4 className="font-serif text-xs font-bold text-deep-charcoal mb-1">
                  {language === 'ar' ? 'الموقع الأكثر رقياً' : 'Prestigious District'}
                </h4>
                <p className="text-[11px] text-gray-500 font-arabic">
                  {language === 'ar' ? 'مقابل مكتبة الملك فهد وبجانب أبراج الفيصلية.' : 'Adjacent to the central libraries and financial blocks.'}
                </p>
              </div>

              <div className="bg-white border border-royal-gold/20 rounded-lg p-4 flex-1 min-w-[180px] shadow-sm">
                <Award className="text-royal-gold mb-2" size={20} />
                <h4 className="font-serif text-xs font-bold text-deep-charcoal mb-1">
                  {language === 'ar' ? 'الضيافة السعودية الأصيلة' : 'Five-Star Credentials'}
                </h4>
                <p className="text-[11px] text-gray-500 font-arabic">
                  {language === 'ar' ? 'تجمع بين الأصالة العريقة واللمسة العصرية الفائقة.' : 'An exceptional match of tradition and modernity.'}
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => handleNavigateToSection('rooms')}
                className="bg-deep-charcoal hover:bg-royal-gold text-luxury-ivory hover:text-deep-charcoal text-xs font-bold font-arabic py-3 px-6 rounded transition-all transform hover:scale-[1.01] cursor-pointer"
              >
                {t.aboutDetailButton}
              </button>
            </div>
          </div>

          {/* Right Imagery layout representing premium architectural views */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5]">
              <img 
                src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800" 
                alt="Brera Olaya Interior Design"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Absolute floating micro card */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-deep-charcoal text-white p-5 rounded-xl border border-royal-gold/40 shadow-2xl max-w-[200px] hidden sm:block">
              <div className="flex items-center gap-1 text-royal-gold mb-1 text-xs font-bold">
                <Star size={12} className="fill-royal-gold" />
                <Star size={12} className="fill-royal-gold" />
                <Star size={12} className="fill-royal-gold" />
                <Star size={12} className="fill-royal-gold" />
                <Star size={12} className="fill-royal-gold" />
              </div>
              <h5 className="font-serif text-xs font-bold text-royal-gold mb-1">
                {language === 'ar' ? 'تجربة خمس نجوم' : '5-Star Saudi Luxury'}
              </h5>
              <p className="text-[9px] text-gray-400 font-arabic">
                {language === 'ar' ? 'مصنف كواحد من أفضل الفنادق البوتيكية بالمنطقة.' : 'Recognized among Riyad’s finest boutique properties.'}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Rooms & Suites Section */}
      <section id="rooms" className="py-20 bg-[#ECE9E0]/40 border-y border-royal-gold/10 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-royal-gold uppercase tracking-widest font-arabic">
              {language === 'ar' ? 'الملاذ الخاص بكم' : 'Exquisite Accommodations'}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-deep-charcoal font-arabic">
              {t.roomsTitle}
            </h2>
            <div className="w-12 h-0.5 bg-royal-gold mx-auto"></div>
            <p className="text-xs md:text-sm text-gray-600 font-arabic">
              {t.roomsSubtitle}
            </p>
          </div>

          {/* Grid Layout of Room Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INSTALLED_ROOMS.map((room) => (
              <RoomCard 
                key={room.id}
                room={room}
                language={language}
                onSelect={(roomId) => {
                  setSelectedRoomId(roomId);
                  handleNavigateToSection('booking_bar_container');
                }}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xs text-gray-500 font-arabic mb-4">
              {language === 'ar' 
                ? "* الأسعار تشمل الدخول المجاني للنادي الرياضي وتغطية الإنترنت السريعة ومواقف السيارات."
                : "* All prices cover complimentary access to fitness units, gigabit internet, and secure indoor parking."}
            </p>
            <button
              onClick={() => handleNavigateToSection('booking_bar_container')}
              className="bg-royal-gold hover:bg-warm-sand text-deep-charcoal font-bold font-arabic text-sm py-3 px-8 rounded shadow-lg transition-all transform hover:scale-[1.01] cursor-pointer"
            >
              {t.allRoomsCTA}
            </button>
          </div>

        </div>
      </section>

      {/* 7. Amenities Section */}
      <section id="amenities" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-royal-gold uppercase tracking-widest font-arabic">
            {language === 'ar' ? 'تفاصيل تصنع الفارق' : 'World-Class Amenities'}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-deep-charcoal font-arabic">
            {t.amenitiesTitle}
          </h2>
          <div className="w-12 h-0.5 bg-royal-gold mx-auto"></div>
          <p className="text-xs md:text-sm text-gray-600 font-arabic">
            {t.amenitiesSubtitle}
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {INSTALLED_AMENITIES.map((amenity) => (
            <div 
              key={amenity.id}
              className="bg-white rounded-xl p-6 border border-royal-gold/10 hover:border-royal-gold/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-royal-gold/10 border border-royal-gold/30 flex items-center justify-center mx-auto mb-4 hover:rotate-6 transition-transform">
                {getAmenityIcon(amenity.icon)}
              </div>
              <h3 className="font-serif text-sm font-bold text-deep-charcoal mb-2">
                {language === 'ar' ? amenity.nameAr : amenity.nameEn}
              </h3>
              <p className="text-[11px] text-gray-500 font-arabic leading-relaxed">
                {language === 'ar' ? amenity.descriptionAr : amenity.descriptionEn}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Dining Experience */}
      <section id="dining" className="py-20 bg-deep-charcoal text-white relative overflow-hidden select-none">
        
        {/* Absolute dynamic texture */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1200" 
            alt="Brera Fine Dining Room"
            className="w-full h-full object-cover opacity-15 filter grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal via-deep-charcoal to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photos */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden shadow-2xl border border-royal-gold/20 aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=600" 
                alt="Brera Gourmet Breakfast"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-2xl border border-royal-gold/20 aspect-square mt-6">
              <img 
                src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&q=80&w=600" 
                alt="Specialty Coffee Coffee"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Texts */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="inline-block w-8 h-[2px] bg-royal-gold"></span>
              <span className="text-xs uppercase tracking-widest text-royal-gold font-bold font-arabic">
                {language === 'ar' ? 'فنون الطهي الفاخرة' : 'Culinary Masterpieces'}
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-bold text-royal-gold font-arabic leading-tight">
              {t.diningTitle}
            </h2>

            <p className="text-xs md:text-sm text-gray-300 leading-relaxed font-arabic">
              {t.diningSubtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-black/40 border border-royal-gold/20 p-4 rounded-lg">
                <h4 className="font-serif text-xs font-bold text-royal-gold mb-1">{t.diningItem1}</h4>
                <p className="text-[11px] text-gray-400 font-arabic">{t.diningItem1Desc}</p>
              </div>

              <div className="bg-black/40 border border-royal-gold/20 p-4 rounded-lg">
                <h4 className="font-serif text-xs font-bold text-royal-gold mb-1">{t.diningItem2}</h4>
                <p className="text-[11px] text-gray-400 font-arabic">{t.diningItem2Desc}</p>
              </div>

              <div className="bg-black/40 border border-royal-gold/20 p-4 rounded-lg">
                <h4 className="font-serif text-xs font-bold text-royal-gold mb-1">{t.diningItem3}</h4>
                <p className="text-[11px] text-gray-400 font-arabic">{t.diningItem3Desc}</p>
              </div>

              <div className="bg-black/40 border border-royal-gold/20 p-4 rounded-lg">
                <h4 className="font-serif text-xs font-bold text-royal-gold mb-1">{t.diningItem4}</h4>
                <p className="text-[11px] text-gray-400 font-arabic">{t.diningItem4Desc}</p>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => setShowMenu(true)}
                className="bg-royal-gold hover:bg-warm-sand text-deep-charcoal text-xs font-bold font-arabic py-3 px-6 rounded transition-all transform hover:scale-[1.01] cursor-pointer"
              >
                {t.interactiveMenu}
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 9. Location & Proximity Section */}
      <section id="location" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="inline-block w-8 h-[2px] bg-royal-gold"></span>
              <span className="text-xs uppercase tracking-widest text-royal-gold font-bold font-arabic">
                {language === 'ar' ? 'قلب الرياض النابض' : 'The Center of it All'}
              </span>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl font-bold text-deep-charcoal font-arabic leading-tight">
              {t.locationTitle}
            </h2>

            <p className="text-xs md:text-sm text-gray-600 font-arabic leading-relaxed">
              {t.locationDesc}
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3 border-l-2 border-royal-gold/40 pl-4 py-1">
                <Landmark className="text-royal-gold shrink-0 mt-0.5" size={16} />
                <div>
                  <h4 className="font-serif text-xs font-bold text-deep-charcoal">{language === 'ar' ? 'مكتبة الملك فهد الوطنية' : 'King Fahd National Library'}</h4>
                  <p className="text-[10px] text-gray-500 font-arabic">{language === 'ar' ? 'مساحات خضراء مقابل الفندق مباشرة صالحة للمشي الصباحي.' : 'Lush public gardens right across Olaya Street from the entryway.'}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 border-l-2 border-royal-gold/40 pl-4 py-1">
                <Building className="text-royal-gold shrink-0 mt-0.5" size={16} />
                <div>
                  <h4 className="font-serif text-xs font-bold text-deep-charcoal">{language === 'ar' ? 'برج الفيصلية' : 'Al Faisaliah Tower'}</h4>
                  <p className="text-[10px] text-gray-500 font-arabic">{language === 'ar' ? 'أشهر مجمعات التسوق والشركات بالرياض على بعد ١٥ دقيقة سيراً.' : 'Riyadh’s most iconic skyscraper and shopping center in 15 mins walkable range.'}</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a 
                href="https://maps.google.com/?q=Brera+Olaya+Hotel+Riyadh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-deep-charcoal hover:bg-royal-gold text-white hover:text-deep-charcoal text-xs font-bold font-arabic py-3.5 px-6 rounded-lg transition-all shadow-md cursor-pointer"
              >
                <MapPin size={14} />
                <span>{t.getDirections}</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Right simulated smart interactive map */}
          <div className="lg:col-span-7 bg-white p-4 rounded-2xl border border-royal-gold/20 shadow-xl overflow-hidden relative group">
            <div className="relative h-96 w-full rounded-xl bg-luxury-ivory border border-gray-100 overflow-hidden">
              {/* Map background style resembling high luxury custom maps styles */}
              <div className="absolute inset-0 bg-[#f4ebd0]/30 flex items-center justify-center opacity-85">
                <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#111]/5 pointer-events-none"></div>
                {/* Simulated Grid Lines */}
                <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-0 opacity-20">
                  {Array.from({ length: 144 }).map((_, i) => (
                    <div key={i} className="border-[0.5px] border-royal-gold/40"></div>
                  ))}
                </div>
              </div>

              {/* Central Map Pin */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10 animate-bounce">
                <div className="bg-deep-charcoal text-white rounded-lg p-2.5 shadow-2xl border border-royal-gold text-[10px] font-bold font-arabic relative flex flex-col items-center">
                  <span className="text-royal-gold text-xs font-serif tracking-widest block font-sans">BRERA OLAYA</span>
                  <span className="text-gray-300 font-arabic text-[9px] mt-0.5">{language === 'ar' ? '📍 هنا ملاذكم الفاخر' : '📍 Your luxury hideaway'}</span>
                  {/* Small pointer tail */}
                  <div className="absolute -bottom-1 w-2.5 h-2.5 bg-deep-charcoal border-r border-b border-royal-gold rotate-45"></div>
                </div>
              </div>

              {/* Neighboring Landmarks on the Map */}
              <div className="absolute left-1/4 top-1/3 bg-white/90 text-[9px] font-bold p-1.5 rounded shadow border border-royal-gold/10 font-arabic">
                🏛️ {language === 'ar' ? 'مكتبة الملك فهد' : 'King Fahd Library'}
              </div>

              <div className="absolute right-1/4 bottom-1/3 bg-white/90 text-[9px] font-bold p-1.5 rounded shadow border border-royal-gold/10 font-arabic">
                🏢 {language === 'ar' ? 'برج الفيصلية' : 'Al Faisaliah Tower'}
              </div>

              <div className="absolute left-2/3 top-2/3 bg-white/90 text-[9px] font-bold p-1.5 rounded shadow border border-royal-gold/10 font-arabic animate-pulse">
                ☕ {language === 'ar' ? 'مقهى بريرا لولو' : 'The Course Cafe'}
              </div>

              <div className="absolute bottom-4 right-4 bg-deep-charcoal/95 border border-royal-gold/30 p-2.5 rounded-lg text-[9px] text-white font-arabic">
                <div className="font-serif text-royal-gold mb-0.5">LOCATION SPECS // KO-99</div>
                <div>📍 24.6865° N, 46.6882° E</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 10. Split Segments: Business & Families */}
      <section className="py-20 bg-luxury-ivory select-none" id="business-family-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Segment Business */}
          <div id="business" className="bg-white rounded-2xl p-8 border border-royal-gold/10 shadow-lg flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Briefcase className="text-royal-gold" size={20} />
                <span className="text-xs uppercase tracking-widest text-royal-gold font-bold font-arabic">
                  {language === 'ar' ? 'تسهيلات مخصصة للأعمال' : 'Executive Business Unit'}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-deep-charcoal font-arabic leading-snug">
                {t.businessTitle}
              </h3>

              <p className="text-xs text-gray-600 font-arabic leading-relaxed">
                {t.businessSubtitle}
              </p>

              <div className="space-y-2 pt-2">
                {t.bizPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-gray-700 font-arabic">
                    <Check size={14} className="text-royal-gold mt-0.5 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100 mt-6 text-right">
              <button 
                onClick={() => handleNavigateToSection('booking_bar_container')}
                className="text-royal-gold hover:text-deep-charcoal font-bold text-xs uppercase tracking-wider font-arabic flex items-center justify-end gap-1 cursor-pointer"
              >
                <span>{language === 'ar' ? 'احجز رحلة عملك الفاخرة' : 'Book Executive Stay'}</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

          {/* Segment Family */}
          <div id="family" className="bg-white rounded-2xl p-8 border border-royal-gold/10 shadow-lg flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Users className="text-royal-gold" size={20} />
                <span className="text-xs uppercase tracking-widest text-royal-gold font-bold font-arabic">
                  {language === 'ar' ? 'ملاذ عائلي دافئ' : 'Elite Family Sabbatical'}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-deep-charcoal font-arabic leading-snug">
                {t.familyTitle}
              </h3>

              <p className="text-xs text-gray-600 font-arabic leading-relaxed">
                {t.familySubtitle}
              </p>

              <div className="space-y-2 pt-2">
                {t.familyPoints.map((pt, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-gray-700 font-arabic">
                    <Check size={14} className="text-royal-gold mt-0.5 shrink-0" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100 mt-6 text-right">
              <button 
                onClick={() => handleNavigateToSection('booking_bar_container')}
                className="text-royal-gold hover:text-deep-charcoal font-bold text-xs uppercase tracking-wider font-arabic flex items-center justify-end gap-1 cursor-pointer"
              >
                <span>{language === 'ar' ? 'احجز جناحك العائلي المريح' : 'Book Family Stay'}</span>
                <ChevronRight size={14} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 11. Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto select-none" id="testimonials">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-royal-gold uppercase tracking-widest font-arabic">
            {language === 'ar' ? 'رأي عملائنا موضع تقديرنا' : 'Refinement & Feedback'}
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-deep-charcoal font-arabic">
            {t.testimonialTitle}
          </h2>
          <div className="w-12 h-0.5 bg-royal-gold mx-auto"></div>
          <p className="text-xs md:text-sm text-gray-600 font-arabic">
            {t.testimonialSubtitle}
          </p>
        </div>

        {/* Testimonials Review Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INSTALLED_TESTIMONIALS.map((test) => (
            <div 
              key={test.id}
              className="bg-white border border-royal-gold/15 p-6 rounded-2xl shadow-md flex flex-col justify-between relative"
            >
              {/* Star rating component overlay */}
              <div className="flex gap-1 mb-4 select-none">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    className={`${i < Math.floor(test.rating) ? 'text-royal-gold fill-royal-gold' : 'text-gray-200'} `} 
                    size={13} 
                  />
                ))}
              </div>

              <blockquote className="text-xs text-gray-700 font-arabic leading-relaxed mb-6 italic">
                "{language === 'ar' ? test.quoteAr : test.quoteEn}"
              </blockquote>

              <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                <div>
                  <cite className="not-italic font-serif text-sm font-bold text-deep-charcoal block">
                    {language === 'ar' ? test.nameAr : test.nameEn}
                  </cite>
                  <span className="text-[10px] text-gray-400 font-mono">
                    {language === 'ar' ? 'نزيل معتمد' : 'Verified Stay'} // {test.stayDate}
                  </span>
                </div>

                <div className="bg-royal-gold/10 border border-royal-gold/20 text-royal-gold font-bold text-[10px] px-2.5 py-1 rounded">
                  {test.rating} / 5
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 12. Final High Contrast Royal CTA Banner */}
      <section className="py-20 select-none bg-deep-charcoal text-white relative border-t-4 border-royal-gold" id="final-cta">
        {/* Color Wash Overlay */}
        <div className="absolute inset-0 bg-radial-gradient from-royal-gold/5 via-transparent to-black/40 pointer-events-none"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-8">
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-arabic">
            {t.finalCTAHeadline}
          </h2>

          <p className="text-sm md:text-base text-gray-300 font-arabic max-w-2xl mx-auto leading-relaxed">
            {t.finalCTASubline}
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => handleNavigateToSection('booking_bar_container')}
              className="w-full sm:w-auto px-8 py-3.5 bg-royal-gold hover:bg-warm-sand text-deep-charcoal font-bold font-arabic text-sm rounded-lg transition-all transform hover:scale-[1.02] shadow-2xl cursor-pointer"
            >
              {t.finalCTA_BookNow}
            </button>

            <a
              href="tel:+966920000555"
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-white/5 text-white font-bold font-arabic text-sm rounded-lg border border-white/20 hover:border-royal-gold transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Phone size={14} className="text-royal-gold" />
              <span>{t.finalCTA_Contact}</span>
            </a>
          </div>
        </div>
      </section>

      {/* 13. Luxury Footer */}
      <footer className="bg-[#111] text-gray-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-white/5 select-none" id="footer">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Section Brand */}
          <div className="space-y-4">
            <span className="font-serif text-lg font-bold tracking-widest text-royal-gold block">
              {language === 'en' ? 'BRERA OLAYA' : 'بريرا العليا'}
            </span>
            <p className="text-xs text-gray-400 font-arabic leading-relaxed">
              {t.brandSubtitle} - {t.tagline}
            </p>
            <div className="flex gap-3 pt-2 text-xs">
              <a href="#instagram" className="hover:text-royal-gold transition-colors">Instagram</a>
              <span>•</span>
              <a href="#x" className="hover:text-royal-gold transition-colors">X</a>
              <span>•</span>
              <a href="#snap" className="hover:text-royal-gold transition-colors">Snapchat</a>
              <span>•</span>
              <a href="#linkedin" className="hover:text-royal-gold transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Section Address */}
          <div className="space-y-3">
            <h4 className="text-white text-xs font-serif uppercase tracking-wider border-b border-white/5 pb-2 text-royal-gold/80">
              {language === 'ar' ? 'العنوان والاتصال' : 'Contact Details'}
              </h4>
            <ul className="text-xs space-y-2 font-arabic">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-royal-gold shrink-0 mt-0.5" />
                <span>{t.footerAddress}</span>
              </li>
              <li className="flex items-center gap-2 font-mono">
                <Phone size={14} className="text-royal-gold" />
                <span>{t.footerPhone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-royal-gold" />
                <span>{t.footerEmail}</span>
              </li>
            </ul>
          </div>

          {/* Section Links */}
          <div className="space-y-3 col-span-1 md:col-span-2">
            <h4 className="text-white text-xs font-serif uppercase tracking-wider border-b border-white/5 pb-2 text-royal-gold/80">
              {t.footerQuickLinks}
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-arabic">
              <button onClick={() => handleNavigateToSection('hero')} className="text-right hover:text-royal-gold transition-colors cursor-pointer py-1">
                {t.navHome}
              </button>
              <button onClick={() => handleNavigateToSection('rooms')} className="text-right hover:text-royal-gold transition-colors cursor-pointer py-1">
                {t.navRooms}
              </button>
              <button onClick={() => handleNavigateToSection('amenities')} className="text-right hover:text-royal-gold transition-colors cursor-pointer py-1">
                {t.navAmenities}
              </button>
              <button onClick={() => handleNavigateToSection('dining')} className="text-right hover:text-royal-gold transition-colors cursor-pointer py-1">
                {t.navDining}
              </button>
              <button onClick={() => handleNavigateToSection('location')} className="text-right hover:text-royal-gold transition-colors cursor-pointer py-1">
                {t.navLocation}
              </button>
              <button onClick={() => handleNavigateToSection('business-family-section')} className="text-right hover:text-royal-gold transition-colors cursor-pointer py-1">
                {t.navBusiness} / {t.navFamily}
              </button>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto border-t border-white/5 mt-10 pt-6 text-center text-xs text-gray-500 font-arabic flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>{t.footerCopyright}</p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-royal-gold transition-colors">{language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Code'}</a>
            <a href="#terms" className="hover:text-royal-gold transition-colors">{language === 'ar' ? 'شروط الحجز المباشر' : 'Direct Booking Terms'}</a>
          </div>
        </div>
      </footer>

      {/* 14. Floating AI Smart Concierge Assistant with WhatsApp support */}
      <VirtualConcierge 
        language={language}
        onSelectPromoCode={handleSelectPromoCode}
      />

      {/* 15. Cinematic Teaser Slide Panel Popovers */}
      <CinematicVideo 
        isOpen={showCinematic}
        onClose={() => setShowCinematic(false)}
        language={language}
      />

      {/* 16. Gourmet Dining Tasting Menu Popovers */}
      <DiningMenu 
        isOpen={showMenu}
        onClose={() => setShowMenu(false)}
        language={language}
      />

      {/* 17. Booking Success Dialog Modal with confirmation codes (Commission-Free system) */}
      {activeBooking && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div 
            className="w-full max-w-lg bg-white border border-royal-gold/30 rounded-2xl p-6 md:p-8 shadow-2xl relative animate-scale-up"
            style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
          >
            <div className="text-center space-y-4">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto border border-green-300">
                <CheckCircle className="text-green-600" size={32} />
              </div>

              <h3 className="font-serif text-2xl font-bold text-deep-charcoal font-arabic">
                {language === 'ar' ? 'لقد تم تأكيد إقامتك الملكية!' : 'Your Royal Stay is Confirmed!'}
              </h3>

              <p className="text-xs text-gray-600 font-arabic leading-relaxed">
                {t.bookingConfirmationDetails}
              </p>

              {/* Booking Voucher Cards details */}
              <div className="bg-luxury-ivory/80 border border-royal-gold/20 p-5 rounded-xl text-right text-xs space-y-2 font-mono">
                <div className="flex justify-between border-b border-gray-100 pb-1 font-arabic">
                  <span className="text-gray-500">{language === 'ar' ? 'كود حجز بريرا:' : 'Confirmation Code:'}</span>
                  <span className="font-bold text-royal-gold">{activeBooking.id}</span>
                </div>

                <div className="flex justify-between border-b border-gray-100 pb-1 font-arabic">
                  <span className="text-gray-500">{language === 'ar' ? 'الغرفة المحجوزة:' : 'Reserved Room:'}</span>
                  <span className="font-bold">{language === 'ar' ? activeBooking.roomDetail.nameAr : activeBooking.roomDetail.nameEn}</span>
                </div>

                <div className="flex justify-between border-b border-gray-100 pb-1 font-arabic">
                  <span className="text-gray-500">{language === 'ar' ? 'النزلاء:' : 'Guests:'}</span>
                  <span className="font-bold">{activeBooking.guestsCount} {language === 'ar' ? 'أشخاص' : 'Guests'}</span>
                </div>

                <div className="flex justify-between border-b border-gray-100 pb-1 font-arabic">
                  <span className="text-gray-500">{language === 'ar' ? 'عدد الليالي:' : 'Stay Period:'}</span>
                  <span className="font-bold">
                    {activeBooking.checkIn} {language === 'ar' ? 'إلى' : 'to'} {activeBooking.checkOut}
                  </span>
                </div>

                <div className="flex justify-between pt-1 font-arabic border-t border-royal-gold/20 mt-2">
                  <span className="font-bold text-deep-charcoal text-sm">{language === 'ar' ? 'القيمة المدفوعة:' : 'Paid Total:'}</span>
                  <span className="font-bold text-royal-gold text-lg">${activeBooking.totalCost}</span>
                </div>
              </div>

              {/* Direct reservation perks highlights */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-[11px] text-amber-800 font-arabic leading-relaxed text-right flex items-center gap-2">
                <Percent size={18} className="text-amber-600 shrink-0" />
                <div>
                  <strong>{language === 'ar' ? 'مزايا الحجز المباشر الحصرية:' : 'Direct Booking Benefits:'}</strong>
                  <span> {language === 'ar' ? 'تسجيل وصول مبكر، تسجيل خروج متأخر حتى 3:00 مساءً، مع خصم 15% على السبا والمطعم.' : 'Free Early check-in, late check-out till 3 PM, and 15% discount for spa/restaurants.'}</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setActiveBooking(null)}
                  className="w-full bg-deep-charcoal hover:bg-royal-gold text-white hover:text-deep-charcoal font-bold font-arabic py-3.5 rounded-lg transition-all cursor-pointer"
                >
                  {t.close}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Micro indicator when submitting direct booking */}
      {isBookingSubmitting && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl border border-royal-gold/30 flex flex-col items-center gap-3">
            <span className="w-8 h-8 rounded-full border-4 border-royal-gold border-t-transparent animate-spin"></span>
            <span className="font-arabic text-sm text-deep-charcoal font-bold">{t.loading}</span>
          </div>
        </div>
      )}

    </div>
  );
}
