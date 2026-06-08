import { useState, useEffect } from 'react';
import { Language, BookingDetails } from '../types';
import { TRANSLATIONS, INSTALLED_ROOMS } from '../data';
import { Calendar, Users, Percent, CheckCircle, ChevronDown, Sparkles } from 'lucide-react';

interface BookingBarProps {
  language: Language;
  onBookConfirmed: (details: BookingDetails & { totalCost: number }) => void;
  selectedRoomId?: string;
}

export default function BookingBar({ language, onBookConfirmed, selectedRoomId }: BookingBarProps) {
  const t = TRANSLATIONS[language];
  
  // Set default dates: check-in tomorrow, check-out 2 days later
  const getFormattedDate = (offsetDays: number) => {
    const d = new Date();
    d.setDate(d.getDate() + offsetDays);
    return d.toISOString().split('T')[0];
  };

  const [booking, setBooking] = useState<BookingDetails>({
    checkIn: getFormattedDate(1),
    checkOut: getFormattedDate(3),
    roomsCount: 1,
    guestsCount: 2,
    roomType: selectedRoomId || INSTALLED_ROOMS[0].id,
    promoCode: '',
  });

  const [appliedDiscount, setAppliedDiscount] = useState(false);
  const [promoError, setPromoError] = useState('');
  const [promoSuccessMsg, setPromoSuccessMsg] = useState('');
  const [nightsCount, setNightsCount] = useState(2);
  const [estimatedCost, setEstimatedCost] = useState(0);

  // Sync state if a room is selected from the Rooms Section list
  useEffect(() => {
    if (selectedRoomId) {
      setBooking(prev => ({ ...prev, roomType: selectedRoomId }));
    }
  }, [selectedRoomId]);

  // Calculate nights and prices
  useEffect(() => {
    const checkInDate = new Date(booking.checkIn);
    const checkOutDate = new Date(booking.checkOut);
    
    let nights = 1;
    if (!isNaN(checkInDate.getTime()) && !isNaN(checkOutDate.getTime())) {
      const diffTime = checkOutDate.getTime() - checkInDate.getTime();
      nights = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      if (nights < 1) nights = 1;
    }
    setNightsCount(nights);

    // Get live room price
    const currentRoom = INSTALLED_ROOMS.find(r => r.id === booking.roomType) || INSTALLED_ROOMS[0];
    let total = currentRoom.priceUSD * nights * booking.roomsCount;
    if (appliedDiscount) {
      total = Math.round(total * 0.85); // 15% discount
    }
    setEstimatedCost(total);
  }, [booking.checkIn, booking.checkOut, booking.roomType, booking.roomsCount, appliedDiscount]);

  const handleInputChange = (field: keyof BookingDetails, value: any) => {
    setBooking(prev => ({ ...prev, [field]: value }));
  };

  const applyPromo = () => {
    if (booking.promoCode?.trim().toUpperCase() === 'ROYAL15') {
      setAppliedDiscount(true);
      setPromoError('');
      setPromoSuccessMsg(t.promoSuccess);
    } else {
      setAppliedDiscount(false);
      setPromoSuccessMsg('');
      setPromoError(t.promoError);
    }
  };

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onBookConfirmed({
      ...booking,
      totalCost: estimatedCost,
    });
  };

  const activeRoomObj = INSTALLED_ROOMS.find(r => r.id === booking.roomType) || INSTALLED_ROOMS[0];

  return (
    <div className="w-full bg-deep-charcoal border-y border-royal-gold/30 text-white py-4 px-4 sm:px-6 lg:px-8 shadow-2xl relative z-30" id="booking_bar_container">
      <div className="max-w-7xl mx-auto">
        <form onSubmit={handleBookSubmit} className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4 justify-between">
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 flex-1">
            {/* Check-In */}
            <div className="flex flex-col">
              <label className="text-[11px] text-royal-gold uppercase tracking-wider mb-1 font-arabic font-medium">
                {t.checkIn}
              </label>
              <div className="relative">
                <Calendar size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-warm-sand pointer-events-none" />
                <input
                  type="date"
                  value={booking.checkIn}
                  min={getFormattedDate(0)}
                  onChange={(e) => handleInputChange('checkIn', e.target.value)}
                  className="w-full bg-black/40 border border-royal-gold/20 hover:border-royal-gold/40 rounded-md py-2 pl-9 pr-3 text-xs text-luxury-ivory focus:outline-none focus:border-royal-gold transition-all cursor-pointer font-mono"
                  required
                />
              </div>
            </div>

            {/* Check-Out */}
            <div className="flex flex-col">
              <label className="text-[11px] text-royal-gold uppercase tracking-wider mb-1 font-arabic font-medium">
                {t.checkOut}
              </label>
              <div className="relative">
                <Calendar size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-warm-sand pointer-events-none" />
                <input
                  type="date"
                  value={booking.checkOut}
                  min={booking.checkIn || getFormattedDate(1)}
                  onChange={(e) => handleInputChange('checkOut', e.target.value)}
                  className="w-full bg-black/40 border border-royal-gold/20 hover:border-royal-gold/40 rounded-md py-2 pl-9 pr-3 text-xs text-luxury-ivory focus:outline-none focus:border-royal-gold transition-all cursor-pointer font-mono"
                  required
                />
              </div>
            </div>

            {/* Room Type Dropdown */}
            <div className="flex flex-col col-span-2 md:col-span-1">
              <label className="text-[11px] text-royal-gold uppercase tracking-wider mb-1 font-arabic font-medium">
                {t.chooseRoom}
              </label>
              <div className="relative">
                <select
                  value={booking.roomType}
                  onChange={(e) => handleInputChange('roomType', e.target.value)}
                  className="w-full bg-black/40 border border-royal-gold/20 hover:border-royal-gold/40 rounded-md py-2 px-3 text-xs text-luxury-ivory focus:outline-none focus:border-royal-gold transition-all appearance-none cursor-pointer font-arabic"
                >
                  {INSTALLED_ROOMS.map(room => (
                    <option key={room.id} value={room.id} className="bg-deep-charcoal text-white">
                      {language === 'ar' ? room.nameAr : room.nameEn} (${room.priceUSD}/n)
                    </option>
                  ))}
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-warm-sand">
                  <ChevronDown size={14} />
                </div>
              </div>
            </div>

            {/* Guests & Rooms */}
            <div className="flex flex-col">
              <label className="text-[11px] text-royal-gold uppercase tracking-wider mb-1 font-arabic font-medium">
                {t.guests}
              </label>
              <div className="relative">
                <Users size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-warm-sand pointer-events-none" />
                <select
                  value={booking.guestsCount}
                  onChange={(e) => handleInputChange('guestsCount', Number(e.target.value))}
                  className="w-full bg-black/40 border border-royal-gold/20 hover:border-royal-gold/40 rounded-md py-2 pl-9 pr-3 text-xs text-luxury-ivory focus:outline-none focus:border-royal-gold transition-all cursor-pointer font-mono"
                >
                  <option value={1} className="bg-deep-charcoal">1 Guest</option>
                  <option value={2} className="bg-deep-charcoal">2 Guests</option>
                  <option value={3} className="bg-deep-charcoal">3 Guests</option>
                  <option value={4} className="bg-deep-charcoal">4 Guests</option>
                  <option value={5} className="bg-deep-charcoal">5 Guests</option>
                </select>
              </div>
            </div>

            {/* Rooms Count */}
            <div className="flex flex-col">
              <label className="text-[11px] text-royal-gold uppercase tracking-wider mb-1 font-arabic font-medium">
                {t.rooms}
              </label>
              <select
                value={booking.roomsCount}
                onChange={(e) => handleInputChange('roomsCount', Number(e.target.value))}
                className="w-full bg-black/40 border border-royal-gold/20 hover:border-royal-gold/40 rounded-md py-2 px-3 text-xs text-luxury-ivory focus:outline-none focus:border-royal-gold transition-all cursor-pointer font-mono"
              >
                <option value={1} className="bg-deep-charcoal">1 Room</option>
                <option value={2} className="bg-deep-charcoal">2 Rooms</option>
                <option value={3} className="bg-deep-charcoal">3 Rooms</option>
                <option value={4} className="bg-deep-charcoal">4 Rooms</option>
              </select>
            </div>

            {/* Promo Code Input */}
            <div className="flex flex-col">
              <label className="text-[11px] text-royal-gold uppercase tracking-wider mb-1 font-arabic font-medium flex justify-between">
                <span>{t.promoCode}</span>
                {appliedDiscount && <Sparkles size={11} className="text-yellow-400 animate-bounce" />}
              </label>
              <div className="flex gap-1">
                <input
                  type="text"
                  placeholder="ROYAL15"
                  value={booking.promoCode}
                  onChange={(e) => handleInputChange('promoCode', e.target.value)}
                  className="w-full bg-black/40 border border-royal-gold/20 hover:border-royal-gold/40 rounded-md py-1.5 px-2.5 text-xs text-luxury-ivory focus:outline-none focus:border-royal-gold uppercase tracking-wider font-mono"
                />
                <button
                  type="button"
                  onClick={applyPromo}
                  className="bg-royal-gold/20 hover:bg-royal-gold text-royal-gold hover:text-deep-charcoal text-xs font-bold px-2 py-1.5 rounded-md border border-royal-gold/30 transition-all cursor-pointer"
                >
                  {language === 'ar' ? 'تطبيق' : 'Apply'}
                </button>
              </div>
            </div>
          </div>

          {/* Value Display and Book Confirmation Button */}
          <div className="flex flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-center border-t lg:border-t-0 lg:border-l lg:border-r border-royal-gold/20 pt-3 lg:pt-0 lg:px-6 gap-2">
            <div className="text-right">
              <div className="text-[10px] text-warm-sand/80 uppercase tracking-wider font-mono">
                {nightsCount} {t.nights}
              </div>
              <div className="flex items-baseline gap-1.5 justify-end">
                {appliedDiscount && (
                  <span className="text-xs text-red-400 line-through font-mono">
                    ${Math.round(estimatedCost / 0.85)}
                  </span>
                )}
                <span className="text-xl font-serif font-bold text-royal-gold font-mono">
                  ${estimatedCost}
                </span>
              </div>
              <div className="text-[10px] text-gray-400 font-arabic">
                {language === 'ar' ? `تشمل الخدمات والضرائب` : `All taxes & fees included`}
              </div>
            </div>

            {/* Urgency remaining counter */}
            <div className="text-[10px] bg-red-950/80 text-red-200 border border-red-500/30 px-2 py-0.5 rounded flex items-center gap-1.5 font-arabic select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
              <span>{t.remainingRoomsLabel.replace('{count}', String(activeRoomObj.roomsLeft))}</span>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <button
              type="submit"
              className="w-full bg-royal-gold hover:bg-warm-sand text-deep-charcoal font-bold font-arabic text-sm py-3 px-6 rounded-md shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
            >
              <CheckCircle size={15} />
              <span>{t.bookBtn}</span>
            </button>
            
            {promoSuccessMsg && (
              <p className="text-[10px] text-green-400 text-center font-arabic">{promoSuccessMsg}</p>
            )}
            {promoError && (
              <p className="text-[10px] text-red-400 text-center font-arabic">{promoError}</p>
            )}
          </div>

        </form>
      </div>
    </div>
  );
}
