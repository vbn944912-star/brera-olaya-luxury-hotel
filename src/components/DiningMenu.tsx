import { X, Sparkles, Coffee, Utensils, Award } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data';
import { useState } from 'react';

interface DiningMenuProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export default function DiningMenu({ isOpen, onClose, language }: DiningMenuProps) {
  const t = TRANSLATIONS[language];
  const [activeCategory, setActiveCategory] = useState<'breakfast' | 'coffee' | 'dinner'>('breakfast');

  const menuData = {
    breakfast: [
      {
        nameAr: "الفطور السعودي الهام",
        nameEn: "Royal Saudi Signature Breakfast",
        descAr: "فول حجازي مميز، شكشوكة غنية بالأعشاب، جبنة بلدي بزيت الزيتون، عسل النحل البري، تمور فاخرة مع خبز التميس الساخن والشاي.",
        descEn: "Traditional Hijazi fava beans, spiced Shakshuka, local cheese with wild honey, premium Saudi dates, hot Tamees bread and tea.",
        price: "$18"
      },
      {
        nameAr: "الفطور الفرنسي الأنيق",
        nameEn: "Elegant Parisian Breakfast",
        descAr: "كرواسون فرنسي هش بالزبدة الطازجة، بيض مسلوق، مربى الفراولة البرية، زبدة اللوز، وعصير البرتقال الطازج مع القهوة.",
        descEn: "Warm buttery croissants, organic eggs, wild berry jam, almond butter, fresh orange squeeze and choice of coffee.",
        price: "$21"
      },
      {
        nameAr: "بندكت البيض الملكي وماربل اللحم البارد",
        nameEn: "Imperial Eggs Benedict",
        descAr: "بيض بوشيه مثالي على مافن إنجليزي محمص مع صوص هولنديز برائحة الليمون ولحم بقري مقدد فاخر.",
        descEn: "Perfectly poached farm eggs on toasted English muffin topped with velvety lemon hollandaise sauce & premium cured beef.",
        price: "$24"
      }
    ],
    coffee: [
      {
        nameAr: "القهوة السعودية الشقراء الفاخرة",
        nameEn: "Elite Golden Saudi Coffee",
        descAr: "محضّرة بأفخر حبوب خولانية بلدية ممزوجة بعبق الهيل والنخا والزعفران الأصيل، تقدم في دلة ملكية مع رطب السكري الطازج.",
        descEn: "Exquisite Khawlani beans infused with pure cardamom & organic saffron. Served in a majestic Dallah with VIP sukkary dates.",
        price: "$12"
      },
      {
        nameAr: "سبانيش لاتيه بارد ومقطرة كولد برو",
        nameEn: "Cold Spanish Latte & Cold Brew Selection",
        descAr: "إسبرسو غني مستخلص من حبوب بن معالجة مضاف إليه حليب مكثف ومبرد بقطع الثلج النقية.",
        descEn: "High-grade espresso extraction blended with rich sweet condensed milk served double chilled on request.",
        price: "$8"
      },
      {
        nameAr: "إسبرسو وكابتشينو مخصص بمسحوق الذهب",
        nameEn: "Gilded 24k Gold Flake Cappuccino",
        descAr: "كابتشينو كريمي باذخ مكسو برغوة الحرير والمزين ببريق أوراق الذهب الباريستا الصالحة للأكل.",
        descEn: "A magnificent creamy cappuccino with double shot espresso topped with edible 24-karat gold flakes for luxury prestige.",
        price: "$15"
      }
    ],
    dinner: [
      {
        nameAr: "الكبسة النجدية بكتف الخروف الهش",
        nameEn: "Royal Najdi lamb Kabsa",
        descAr: "أرز بسمتي عتيق مطهو ببهارات نجد الأصيلة يعلوه كتف الغنم المطهو ببطء شديد حتى الذوبان مع المكسرات المحمصة وزينة الذهب.",
        descEn: "Long grain basmati steamed in secret Najdi spices, carrying slow-braised tender lamb shoulder topped with gilded nuts.",
        price: "$45"
      },
      {
        nameAr: "سلمون الأطلسي بصلصة المورهيل والزعتر البري",
        nameEn: "Seared Atlantic Salmon with Morel Herbs",
        descAr: "قطعة سلمون مشوية بعناية فائقة، تقدم فوق هريس البطاطس بفلزات الجبن السويسري مع فطر الموريل الحار.",
        descEn: "Perfectly seared Atlantic salmon fillet on a bed of Swiss cheese mashed potatoes carrying creamy morel sauces.",
        price: "$38"
      },
      {
        nameAr: "أضلاع العجل المعتقة بصوص العسل الأسود",
        nameEn: "Aged Wagyu Tenderloin with Black Honey Glaze",
        descAr: "شريحة واغيو فاخرة بدرجة تعتيق مثالية، تقدم مع الهليون المشوي وصوص البلاك فلفري المبتكر.",
        descEn: "Perfect master-cut premium Wagyu steak accompanied by baby asparagus structures, glazed in black honey pepper sauce.",
        price: "$65"
      }
    ]
  };

  if (!isOpen) return null;

  const currentItems = menuData[activeCategory];

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
      <div 
        className="w-full max-w-4xl bg-[#F8F6F2] border border-royal-gold/30 rounded-2xl overflow-hidden shadow-2xl relative flex flex-col"
        style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
      >
        {/* Header Title Bar */}
        <div className="bg-deep-charcoal text-white p-5 flex items-center justify-between border-b border-royal-gold/30">
          <div className="flex items-center gap-3">
            <Award className="text-royal-gold animate-bounce" size={20} />
            <div>
              <h2 className="font-serif text-lg font-bold text-royal-gold uppercase tracking-wider">
                {language === 'ar' ? 'قائمة المأكولات والمشروبات الفاخرة' : 'Premium Culinary Selection'}
              </h2>
              <p className="text-[10px] text-gray-400 font-arabic">
                {language === 'ar' ? 'أطباق وقهوة مجهزة بيد طاهٍ فائز بجوائز ميشلان' : 'Gourmet treasures crafted by Michelin accredited culinary masters'}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white border border-white/10 p-1.5 rounded-full hover:border-white transition-all cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Tab Buttons select category */}
        <div className="bg-black/5 border-b border-royal-gold/20 flex p-2 gap-2">
          <button
            onClick={() => setActiveCategory('breakfast')}
            className={`flex-1 py-3 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeCategory === 'breakfast' 
                ? 'bg-deep-charcoal text-royal-gold shadow-lg font-bold border border-royal-gold/30' 
                : 'text-gray-600 hover:bg-black/5 hover:text-deep-charcoal'
            }`}
          >
            <Utensils size={14} />
            <span className="font-arabic">{language === 'ar' ? 'بوفيه الإفطار الملكي' : 'Royal Breakfast'}</span>
          </button>

          <button
            onClick={() => setActiveCategory('coffee')}
            className={`flex-1 py-3 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeCategory === 'coffee' 
                ? 'bg-deep-charcoal text-royal-gold shadow-lg font-bold border border-royal-gold/30' 
                : 'text-gray-600 hover:bg-black/5 hover:text-deep-charcoal'
            }`}
          >
            <Coffee size={14} />
            <span className="font-arabic">{language === 'ar' ? 'قهوة بريرا المقطرة' : 'Specialty Coffee'}</span>
          </button>

          <button
            onClick={() => setActiveCategory('dinner')}
            className={`flex-1 py-3 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${
              activeCategory === 'dinner' 
                ? 'bg-deep-charcoal text-royal-gold shadow-lg font-bold border border-royal-gold/30' 
                : 'text-gray-600 hover:bg-black/5 hover:text-deep-charcoal'
            }`}
          >
            <Sparkles size={14} />
            <span className="font-arabic">{language === 'ar' ? 'قائمة الغداء والعشاء' : 'Lunch & Dinner'}</span>
          </button>
        </div>

        {/* Menu List of entries */}
        <div className="p-6 overflow-y-auto max-h-[380px] space-y-6">
          {currentItems.map((item, index) => (
            <div 
              key={index}
              className="group bg-white p-5 rounded-xl border border-royal-gold/10 hover:border-royal-gold/30 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2.5 mb-1">
                  <span className="inline-block w-2 h-2 rounded-full bg-royal-gold"></span>
                  <h3 className="font-serif text-base font-bold text-deep-charcoal group-hover:text-royal-gold transition-colors">
                    {language === 'ar' ? item.nameAr : item.nameEn}
                  </h3>
                </div>
                <p className="text-xs text-gray-600 font-arabic leading-relaxed">
                  {language === 'ar' ? item.descAr : item.descEn}
                </p>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-3 shrink-0 border-t md:border-t-0 border-gray-100 pt-3 md:pt-0">
                <span className="font-mono text-royal-gold font-bold text-lg bg-royal-gold/5 border border-royal-gold/20 px-3 py-1 rounded-md">
                  {item.price}
                </span>
                
                <button
                  onClick={() => {
                    alert(language === 'ar' ? 'لقد تم إرسال طلب حجز الطاولة للخدمة التابعة للغرفة.' : 'Table reservation alert sent to room service desk successfully.');
                  }}
                  className="bg-deep-charcoal hover:bg-royal-gold text-royal-gold hover:text-deep-charcoal font-arabic text-[10px] font-bold px-3 py-2 rounded-md border border-royal-gold/20 hover:border-royal-gold transition-all cursor-pointer"
                >
                  {language === 'ar' ? 'حجز طاولة' : 'Reserve Table'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom micro note */}
        <div className="bg-deep-charcoal text-[11px] text-gray-400 p-4 text-center font-arabic border-t border-royal-gold/20">
          {language === 'ar' 
            ? "يقدم مطعم بريرا خدماته على مدار الساعة للغرف. لطلب خدمة فورية اتصل بالزر رقم ٤ من هاتف غرفتك."
            : "All meals and specialty coffee are served 24/7 to rooms. Dial 4 from your bed-side system for rapid order."}
        </div>
      </div>
    </div>
  );
}
