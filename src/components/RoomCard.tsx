import { Room, Language } from '../types';
import { TRANSLATIONS } from '../data';
import { useState } from 'react';
import { Star, Eye, Compass, RefreshCw, Sparkles, Check } from 'lucide-react';

interface RoomCardProps {
  room: Room;
  language: Language;
  onSelect: (roomId: string) => void;
}

export default function RoomCard({ room, language, onSelect }: RoomCardProps) {
  const t = TRANSLATIONS[language];
  const [is360Mode, setIs360Mode] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [rotateDeg, setRotateDeg] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);

  // Simple drag mechanics to slide room panoramic views and rotate degrees
  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    setDragStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    const deltaX = e.clientX - dragStartX;
    setRotateDeg(prev => (prev + deltaX * 0.4) % 360);
    setDragStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const toggle360 = () => {
    setIs360Mode(!is360Mode);
  };

  const name = language === 'ar' ? room.nameAr : room.nameEn;
  const description = language === 'ar' ? room.descriptionAr : room.descriptionEn;
  const capacity = language === 'ar' ? room.capacityAr : room.capacityEn;
  const size = language === 'ar' ? room.sizeAr : room.sizeEn;
  const view = language === 'ar' ? room.viewAr : room.viewEn;
  const features = language === 'ar' ? room.featuresAr : room.featuresEn;

  return (
    <div className="bg-white rounded-xl shadow-xl border border-royal-gold/10 overflow-hidden flex flex-col hover:shadow-2xl hover:border-royal-gold/30 transition-all duration-300" id={`room_card_${room.id}`}>
      {/* Visual Header containing photos or 360 simulator */}
      <div className="relative h-64 md:h-72 w-full overflow-hidden bg-black">
        {!is360Mode ? (
          <>
            <img
              src={room.imageUrl}
              alt={name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 select-none"
              referrerPolicy="no-referrer"
            />
            {/* Urgent remaining room pill */}
            <div className="absolute top-4 right-4 bg-red-900/90 text-red-100 border border-red-500/30 text-[10px] font-bold px-3 py-1 rounded-full z-10 flex items-center gap-1.5 font-arabic uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
              <span>{t.remainingRoomsLabel.replace('{count}', String(room.roomsLeft))}</span>
            </div>
          </>
        ) : (
          <div 
            className="w-full h-full relative cursor-grab active:cursor-grabbing select-none overflow-hidden"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {/* Render tilted or rotated image representing 360 simulation */}
            <div 
              className="absolute inset-0 w-[120%] h-full -left-[10%] transition-transform duration-200 ease-out"
              style={{ transform: `scale(1.1) translateX(${rotateDeg * 0.25}px)` }}
            >
              <img
                src={room.images360[activeImageIndex]}
                alt="360 view"
                className="w-full h-full object-cover pointer-events-none filter brightness-95"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Simulated 360 Overlay Highlights */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm p-3 rounded-lg text-xs text-white flex items-center justify-between pointer-events-none font-arabic">
              <div className="flex items-center gap-2">
                <Compass className="text-royal-gold animate-spin-slow" size={16} />
                <span>{t.simulatorInstruction}</span>
              </div>
              <div className="font-mono text-royal-gold font-bold">
                {Math.round((rotateDeg + 360) % 360)}°
              </div>
            </div>

            {/* Quick hot-spots inside 360 room simulator */}
            <div 
              className="absolute left-1/3 top-1/2 -translate-y-1/2 p-2 bg-royal-gold/85 text-deep-charcoal font-bold rounded-full text-[10px] shadow-lg animate-bounce cursor-pointer items-center gap-1 flex pointer-events-auto"
              title={language === 'ar' ? 'مرتبة ملكية معالجة حرارياً' : 'Therapeutic Premium Bedding'}
            >
              <Sparkles size={10} />
              <span className="font-arabic">{language === 'ar' ? 'فراش وثير ملكي' : 'Royal Comfort Bedding'}</span>
            </div>

            <div 
              className="absolute right-1/4 top-1/3 p-2 bg-royal-gold/85 text-deep-charcoal font-bold rounded-full text-[10px] shadow-lg animate-bounce cursor-pointer items-center gap-1 flex pointer-events-auto"
              title={language === 'ar' ? 'صنبور مطلي بماء الذهب' : 'Gilded gold plumbing'}
            >
              <Sparkles size={10} />
              <span className="font-arabic">{language === 'ar' ? 'حمام رخام متكامل' : 'Luxury Marble Suite'}</span>
            </div>

            {/* Perspective swap */}
            <div className="absolute top-4 left-4 flex gap-1.5 z-10">
              {room.images360.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-6 h-6 rounded-full text-[10px] font-bold flex items-center justify-center transition-all ${activeImageIndex === idx ? 'bg-royal-gold text-deep-charcoal' : 'bg-black/60 text-white hover:bg-black'}`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* 360 Mode Button Launcher */}
        <button
          onClick={toggle360}
          className={`absolute bottom-4 right-4 text-xs font-bold py-1.5 px-3 rounded-md shadow-lg transition-all duration-300 flex items-center gap-1.5 cursor-pointer z-10 font-arabic ${is360Mode ? 'bg-royal-gold text-deep-charcoal border border-royal-gold' : 'bg-black/80 hover:bg-black text-royal-gold hover:text-white border border-royal-gold/40'}`}
        >
          {is360Mode ? <Eye size={12} /> : <Compass size={12} />}
          <span>{is360Mode ? t.backToNormalView : t.simulator360}</span>
        </button>
      </div>

      {/* Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex justify-between items-start gap-2 mb-2">
            <h3 className="font-serif text-xl font-bold text-deep-charcoal group-hover:text-royal-gold transition-colors">
              {name}
            </h3>
            <span className="font-mono text-royal-gold text-sm font-bold bg-royal-gold/5 px-2.5 py-1 rounded border border-royal-gold/20 flex items-center gap-1">
              ${room.priceUSD} <span className="text-[10px] font-normal text-gray-500">/ night</span>
            </span>
          </div>

          <p className="text-xs text-gray-600 font-arabic leading-relaxed mb-4">
            {description}
          </p>

          {/* Quick Technical specifications */}
          <div className="grid grid-cols-2 gap-x-2 gap-y-2.5 text-xs text-gray-700 py-3 border-y border-gray-100 mb-4 bg-luxury-ivory/50 rounded-lg p-2.5">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-royal-gold font-arabic">{t.roomSize}</span>
              <span className="font-sans font-medium">{size}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-royal-gold font-arabic">{t.roomCapacity}</span>
              <span className="font-sans font-medium">{capacity}</span>
            </div>
            <div className="flex col-span-2 items-center gap-1.5">
              <span className="font-bold text-royal-gold font-arabic">{t.roomView}</span>
              <span className="font-sans font-semibold text-deep-charcoal">{view}</span>
            </div>
          </div>

          {/* Luxury Features Checklists */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-1.5">
              {features.map((feat, i) => (
                <span 
                  key={i} 
                  className="bg-royal-gold/5 border border-royal-gold/20 text-deep-charcoal text-[10px] font-medium font-arabic px-2 py-1 rounded flex items-center gap-1"
                >
                  <Check size={10} className="text-royal-gold font-bold" />
                  <span>{feat}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => onSelect(room.id)}
          className="w-full py-3 bg-deep-charcoal hover:bg-royal-gold text-luxury-ivory hover:text-deep-charcoal font-bold font-arabic text-xs rounded-md uppercase tracking-wider transition-all duration-300 transform hover:translate-y-[-1px] shadow-md border border-royal-gold/20 hover:border-royal-gold cursor-pointer flex items-center justify-center gap-1"
        >
          <span>{t.bookNow}</span>
          <span>({language === 'ar' ? 'حجز مباشر' : 'Book Direct'})</span>
        </button>
      </div>
    </div>
  );
}
