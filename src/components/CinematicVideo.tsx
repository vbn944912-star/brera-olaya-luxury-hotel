import { X, Play, Volume2, Maximize, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';
import { useState, useEffect } from 'react';

interface CinematicVideoProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export default function CinematicVideo({ isOpen, onClose, language }: CinematicVideoProps) {
  const t = TRANSLATIONS[language];
  const [activeFrame, setActiveFrame] = useState(0);

  // Cinematic mock scenes of Brera Olaya hotel experiences
  const scenes = [
    {
      titleAr: "الواجهة الكلاسيكية والمدخل المهيب",
      titleEn: "The Majestic Classical Facade & Grand Entrance",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1200",
      captionAr: "غروب ساحر يلقي بظلاله الذهبية على جدران وحجارة فندق بريرا العليا الفخم.",
      captionEn: "Golden dusk rays bathing the elegant classical architecture of Brera Olaya Riyadh."
    },
    {
      titleAr: "اللوبي الدافئ ومراسم القهوة السعودية والترحيب",
      titleEn: "Opulent Grand Lobby & Saudi Greeting Ceremony",
      url: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200",
      captionAr: "تمتع بأصيل الكرم والضيافة والتمور الفاخرة المعتمدة لدى قدوم الكبار.",
      captionEn: "Experience rich premium dates and authentic Saudi cardamom hospitality on entry."
    },
    {
      titleAr: "الجناح الملكي وإشراقة شمس الرياض الفخمة",
      titleEn: "The Imperial Royal Suite & Panoramic Horizons",
      url: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80&w=1200",
      captionAr: "غرف مصممة بأنسجة الحرير الطبيعي والتطعيمات الذهبية والرخام الإفريقي.",
      captionEn: "Majestic luxury suites detailed with authentic silks, luxury marbles and custom golds."
    },
    {
      titleAr: "مسبح الكريستال الخارجي والحدائق الهادئة",
      titleEn: "The Crystal Outdoor Pool & Secret Oasis",
      url: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&q=80&w=1200",
      captionAr: "ملاذك السري للاسترخاء بمحاذاة مكتبة الملك فهد الوطنية الخلابة.",
      captionEn: "Your custom relaxation pool directly neighboring the iconic library gardens."
    }
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isOpen) {
      interval = setInterval(() => {
        setActiveFrame(prev => (prev + 1) % scenes.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isOpen]);

  if (!isOpen) return null;

  const currentScene = scenes[activeFrame];

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
      <div 
        className="w-full max-w-5xl bg-deep-charcoal border border-royal-gold/30 rounded-2xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row h-[500px]"
        style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
      >
        {/* Cinematic Simulation Screen */}
        <div className="flex-1 relative bg-black overflow-hidden group">
          <img
            src={currentScene.url}
            alt={currentScene.titleEn}
            className="w-full h-full object-cover animate-kenburns select-none transition-all duration-1000"
            referrerPolicy="no-referrer"
          />

          {/* Top Video Player UI Overlay */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white pointer-events-none">
            <div className="bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] flex items-center gap-1.5 font-mono">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
              <span>CINEMATIC LIVE TEASER // 0{activeFrame + 1}</span>
            </div>

            <div className="flex gap-2 pointer-events-auto">
              <button className="bg-black/60 hover:bg-black p-1.5 rounded-full text-white transition-all cursor-pointer">
                <Volume2 size={13} />
              </button>
              <button className="bg-black/60 hover:bg-black p-1.5 rounded-full text-white transition-all cursor-pointer">
                <Maximize size={13} />
              </button>
            </div>
          </div>

          {/* Core Player Trigger Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="w-16 h-16 rounded-full bg-royal-gold/90 text-deep-charcoal flex items-center justify-center shadow-2xl animate-pulse scale-95 hover:scale-100 transition-all cursor-pointer">
              <Play size={24} className="ml-1 fill-deep-charcoal" />
            </div>
          </div>

          {/* Bottom Caption overlay */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 pt-16">
            <h3 className="text-royal-gold text-lg font-serif font-bold mb-1 flex items-center gap-2">
              <Sparkles size={16} className="text-royal-gold" />
              <span>{language === 'ar' ? currentScene.titleAr : currentScene.titleEn}</span>
            </h3>
            <p className="text-xs text-luxury-ivory/90 leading-relaxed font-arabic">
              {language === 'ar' ? currentScene.captionAr : currentScene.captionEn}
            </p>
          </div>
        </div>

        {/* Cinematic Navigation Sidebars */}
        <div className="w-full md:w-80 bg-deep-charcoal text-white p-6 justify-between flex flex-col border-t md:border-t-0 md:border-l border-royal-gold/20">
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-serif text-lg font-bold text-royal-gold border-b border-royal-gold/20 pb-2 flex-1">
                {t.cinematicVideoTitle}
              </h2>
              <button 
                onClick={onClose}
                className="text-gray-400 hover:text-white-400 border border-white/10 p-1.5 rounded-full hover:border-white cursor-pointer ml-3 shrink-0"
              >
                <X size={16} />
              </button>
            </div>

            <p className="text-xs text-gray-300 font-arabic leading-relaxed mb-6">
              {language === 'ar'
                ? "انغمس في ثنايا الجودة الموثقة لبريرا العليا بالرياض. شاهد تفاصيل الغرف ومراسم الاستقبال الفاخرة وموقعنا الاستراتيجي الساحر."
                : "Immerse your senses in the meticulous world of Brera Olaya. Check our fine marbles, custom gold fixtures, and peaceful library view."}
            </p>

            {/* Timelines selection list */}
            <div className="space-y-2.5">
              {scenes.map((sc, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveFrame(idx)}
                  className={`w-full text-right px-4 py-3 rounded-lg border transition-all text-xs cursor-pointer flex items-center justify-between ${
                    activeFrame === idx 
                      ? 'bg-royal-gold/10 border-royal-gold text-royal-gold font-bold' 
                      : 'bg-black/20 border-white/5 hover:border-royal-gold/30 text-gray-400 hover:text-white'
                  }`}
                  style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
                >
                  <span className="font-arabic truncate">
                    {language === 'ar' ? sc.titleAr : sc.titleEn}
                  </span>
                  <span className="font-mono text-[10px] opacity-70">0{idx + 1}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 flex gap-2">
            <button
              onClick={onClose}
              className="flex-1 bg-royal-gold hover:bg-warm-sand text-deep-charcoal font-bold font-arabic text-xs py-2.5 rounded text-center transition-all cursor-pointer"
            >
              {t.closeCinematic}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
