import { Room, Amenity, Testimonial } from './types';

export const TRANSLATIONS = {
  ar: {
    brandName: "بريرا العليا",
    brandTitle: "فندق بريرا العليا",
    brandSubtitle: "حيث تلتقي الفخامة بالرياض",
    tagline: "فخامة هادئة • أناقة معاصرة • ضيافة سعودية أصيلة",
    
    // Header & Navigation
    navHome: "الرئيسية",
    navRooms: "الغرف والأجنحة",
    navAmenities: "المرافق",
    navDining: "المطعم والمقهى",
    navLocation: "الموقع",
    navBusiness: "الأعمال",
    navFamily: "العائلات",
    bookNow: "احجز الآن",
    directBookingOffer: "خصم 15% للحجز المباشر بالرمز ROYAL15",
    
    // Booking Bar
    checkIn: "تاريخ الوصول",
    checkOut: "تاريخ المغادرة",
    guests: "الضيوف",
    rooms: "الغرف",
    chooseRoom: "نوع الغرفة",
    estTotal: "التكلفة التقديرية",
    remainingRoomsLabel: "متبقي {count} غرف لليوم!",
    promoCode: "رمز ترويجي",
    promoSuccess: "تم تطبيق خصم الحجز المباشر 15%!",
    promoError: "الرمز الترويجي غير صالح",
    bookBtn: "تأكيد الحجز المباشر",
    calculatedCost: "سعر الليلة:",
    nights: "ليالٍ",
    loading: "جاري حجز غرفتك الأنيقة...",
    bookingConfirmed: "تم تأكيد حجزك بنجاح! رقم الحجز:",
    bookingConfirmationDetails: "تم إرسال تفاصيل الإقامة ورموز الدخول لبريدك الإلكتروني. يسعدنا استقبالكم قريباً في فندق بريرا العليا.",
    close: "إغلاق",

    // Hero Section
    heroTitle: "إقامة استثنائية في قلب الرياض",
    heroSubtitle: "استمتع بتجربة ضيافة راقية تجمع بين الموقع المثالي والخدمة الرفيعة والمرافق الفاخرة على بعد دقائق من أبرز معالم العاصمة.",
    heroCTA1: "احجز إقامتك الآن",
    heroCTA2: "استكشف الغرف والأجنحة",
    
    // Stats Section
    statReviewsVal: "+6,973",
    statReviewsLbl: "تقييم من النزلاء",
    statRatingVal: "4.4/5",
    statRatingLbl: "متوسط التقييم الموثق",
    statServiceVal: "24/7",
    statServiceLbl: "خدمة غرف واستقبال متفانية",
    statProximityVal: "15 دقيقة",
    statProximityLbl: "إلى برج الفيصلية سيراً",

    // About Section
    aboutTitle: "تجربة إقامة تتجاوز التوقعات",
    aboutLine1: "يقع فندق بريرا العليا في أحد أكثر مواقع الرياض حيوية ورقياً مقابل مكتبة الملك فهد الوطنية وبالقرب من برج الفيصلية. تم تصميم كل تفصيلة بعناية لتمنح الضيوف تجربة إقامة تجمع بين الراحة والفخامة والخدمة الراقية.",
    aboutLine2: "سواء كنت في رحلة عمل أو عطلة عائلية فإن الفندق يوفر كل ما تحتاجه لإقامة لا تنسى. نرحب بكم في بوابتكم لإقامة مترفة بالرياض.",
    aboutDetailButton: "احجز بوابتك المترفة",

    // Rooms Section
    roomsTitle: "غرف وأجنحة مصممة للفخامة",
    roomsSubtitle: "ملاذك الخاص للراحة والهدوء مع إطلالات ساحرة وتصاميم داخلية مذهلة تجمع بين الطابع المعاصر والأنيق.",
    allRoomsCTA: "استعرض جميع الغرف",
    roomCapacity: "السعة: ",
    roomSize: "المساحة: ",
    roomView: "الإطلالة: ",
    roomPrice: "تبدأ من {price} $ / ليلة",
    simulator360: "عرض بانورامي 360° تفاعلي",
    simulatorInstruction: "اسحب لرؤية تفاصيل الغرفة الرخامية والسرير الفاخر",
    backToNormalView: "الرجوع للمعرض",

    // Amenities Section
    amenitiesTitle: "مرافق صممت لراحتك",
    amenitiesSubtitle: "اكتشف مجموعة من خدماتنا ومرافقنا ذات الخمس نجوم المتاحة على مدار الساعة لجعل إقامتك معنا فاخرة وبلا عناء.",

    // Dining Section
    diningTitle: "نكهات استثنائية تبدأ مع الصباح",
    diningSubtitle: "استمتع ببوفيه إفطار غني بالأطباق المحلية والعالمية وسط أجواء راقية تعكس مستوى الضيافة الذي يشتهر به الفندق.",
    diningItem1: "بوفيه إفطار فاخر",
    diningItem1Desc: "تشكيلة غنية بالأطباق الشرقية والعالمية والمخبوزات الطازجة يومياً.",
    diningItem2: "جلسات داخلية وخارجية أنيقة",
    diningItem2Desc: "تصاميم راقية تمنحك الخصوصية والراحة التامة أثناء وجبتك المفضلة.",
    diningItem3: "قهوة مختصة وشاي باذخ",
    diningItem3Desc: "معدّة بأيدي باريستا محترفين لتناسب رغبة النزلاء المميزين.",
    diningItem4: "خدمة احترافية على مدار الساعة",
    diningItem4Desc: "طاقم متأهب لتقديم كافة طلباتكم الفواحة بابتسامة سعودية أصيلة.",
    interactiveMenu: "عرض قائمة الطعام والمشروبات التفاعلية",

    // Location Section
    locationTitle: "الموقع الأكثر تميزاً في الرياض",
    locationSubtitle: "نحن نقف في قلب العاصمة - شارع العليا الحيوي على مسامع وأملاك معالم الرياض العريقة.",
    locationDesc: "استمتع بالقرب المباشر من أهم مراكز التسوق المرموقة، مكتبة الملك فهد الوطنية العريقة، ومراكز المال والأعمال والمطاعم والمقاهي العصرية.",
    landmark1: "مكتبة الملك فهد الوطنية (مقابل الفندق مباشرة)",
    landmark2: "برج الفيصلية الشهير (5 دقائق بالسيارة / 15 دقيقة مشياً)",
    landmark3: "أهم مراكز الأعمال والتسوق بوسط الرياض",
    landmark4: "مجموعة ضخمة من المطاعم والمقاهي الفاخرة المجاورة",
    getDirections: "الوصول المباشر عبر خرائط Google",

    // Testimonials
    testimonialTitle: "ماذا يقول ضيوفنا",
    testimonialSubtitle: "نسعى دوماً لأن تكون تجربتك استثنائية. إليك كوكبة من انطباعات نزلائنا الأعزاء.",

    // Business Travelers Section
    businessTitle: "الخيار المفضل لرجال الأعمال",
    businessSubtitle: "تسهيلات متكاملة لضمان أداء أعمالك بكفاءة ودون أي مقاطعة بوسط الرياض.",
    bizPoints: [
      "مركز أعمال رفيع ومجهز بالكامل",
      "إنترنت فضائي عالي السرعة بجميع المرافق والغرف",
      "موقع استراتيجي بالقرب من مقرات الهيئات والشركات الكبرى",
      "قاعات اجتماعات ذكية بطلب مسبق مزودة بأحدث التقنيات",
      "خدمة سريعة وغسيل ملابس عاجل على مدار الساعة"
    ],

    // Family Section
    familyTitle: "إقامة مثالية ومرحبة بالعائلات",
    familySubtitle: "مساحة آمنة ومريحة تجمع أفراد العائلة لقضاء أوقات إيجابية لا تُنسى في الرياض.",
    familyPoints: [
      "إقامة ووجبة إفطار مجانية للأطفال حتى 5 سنوات",
      "غرف عائلية فسيحة وأجنحة متصلة مريحة",
      "مسبح خارجي فاخر متاح بأوقات خاصة ملائمة لجميع النزلاء",
      "خدمات عائلية متكاملة وسرير أطفال إضافي مجاني عند الطلب",
      "أجواء ودودة تشعركم وكأنكم في منزلكم الفاخر"
    ],

    // Concierge Assistant UI
    conciergeTitle: "الكونسيرج الذكي لبريرا العليا",
    conciergePlaceholder: "اسألنا عن الغرف، المرافق، العروض أو حجز الطاولات...",
    conciergeWelcome: "أهلاً بك! أنا الكونسيرج الذكي لـ بريرا العليا. كيف يمكنني إثراء إقامتك بالرياض اليوم؟",
    chatSend: "إرسال",
    whatsappBtn: "تواصل مباشر عبر WhatsApp",
    specialOfferBanner: "حجز مباشر حصري: تفضل بالحصول على ترقية غرفتك مجاناً (حسب التوفر) + تسجيل خروج متأخر حتى 3:00 مساءً! استخدم الرمز ROYAL15 للحصول على خصم 15% مباشرة.",

    // Cinematic Video
    playCinematic: "شاهد العرض السينمائي للفندق",
    closeCinematic: "إغلاق العرض",
    cinematicVideoTitle: "فيديو التجربة الفاخرة - بريرا العليا",

    // Final CTA
    finalCTAHeadline: "احجز تجربة استثنائية اليوم",
    finalCTASubline: "استمتع بإقامة تجمع بين الفخامة والموقع المثالي والخدمة الراقية في قلب العاصمة الرياض.",
    finalCTA_BookNow: "احجز بأفضل سعر مضمون",
    finalCTA_Contact: "اتصل بنا الآن",

    // Footer
    footerAddress: "شارع العليا، الرياض، المملكة العربية السعودية",
    footerPhone: "+966 9200 00555",
    footerEmail: "reservations@breraolaya.com",
    footerQuickLinks: "روابط سريعة",
    footerCopyright: "© 2026 فندق بريرا العليا. جميع الحقوق محفوظة لرجال الأعمال والعائلات.",
  },
  en: {
    brandName: "Brera Olaya",
    brandTitle: "Brera Olaya Hotel",
    brandSubtitle: "Where Luxury Meets Riyadh",
    tagline: "Quiet Luxury • Contemporary Elegance • Authentic Saudi Hospitality",
    
    // Header & Navigation
    navHome: "Home",
    navRooms: "Rooms & Suites",
    navAmenities: "Amenities",
    navDining: "Dining & Cafe",
    navLocation: "Location",
    navBusiness: "Business",
    navFamily: "Family",
    bookNow: "Book Now",
    directBookingOffer: "15% Direct Booking Discount with code ROYAL15",
    
    // Booking Bar
    checkIn: "Check-in",
    checkOut: "Check-out",
    guests: "Guests",
    rooms: "Rooms",
    chooseRoom: "Room Type",
    estTotal: "Estimated Total",
    remainingRoomsLabel: "Only {count} rooms left for today!",
    promoCode: "Promo Code",
    promoSuccess: "15% Direct Booking Discount Applied!",
    promoError: "Invalid promo code",
    bookBtn: "Confirm Direct Booking",
    calculatedCost: "Price/Night:",
    nights: "nights",
    loading: "Booking your luxury room...",
    bookingConfirmed: "Booking confirmed successfully! Confirmation Number:",
    bookingConfirmationDetails: "All registration steps and entry codes have been sent to your email. We look forward to welcoming you soon to Brera Olaya.",
    close: "Close",

    // Hero Section
    heroTitle: "Exceptional Stay in the Heart of Riyadh",
    heroSubtitle: "Enjoy a refined hospitality experience combining a perfect location, exquisite service, and luxury facilities just minutes from the capital's top landmarks.",
    heroCTA1: "Book Your Stay Now",
    heroCTA2: "Explore Rooms & Suites",
    
    // Stats Section
    statReviewsVal: "+6,973",
    statReviewsLbl: "Verified Guest Reviews",
    statRatingVal: "4.4/5",
    statRatingLbl: "Average Quality Score",
    statServiceVal: "24/7",
    statServiceLbl: "Dedicated In-Room Service",
    statProximityVal: "15 Minutes",
    statProximityLbl: "Walk to Al Faisaliah Tower",

    // About Section
    aboutTitle: "An Accommodation Beyond Expectations",
    aboutLine1: "Brera Olaya Hotel is located in one of Riyadh's most prestigious and vibrant districts, directly opposite the King Fahd National Library and near the iconic Al Faisaliah Tower. Every detail is meticulously crafted to give guests a supreme blend of peace, sophistication, and elite service.",
    aboutLine2: "Whether you are embarking on a business mission or a luxury family holiday, our hotel provides everything you require for an unforgettable stay. We welcome you to your boutique gateway in Riyadh.",
    aboutDetailButton: "Book Your Gateway",

    // Rooms Section
    roomsTitle: "Rooms & Suites Designed for Opulence",
    roomsSubtitle: "Your personal spacious sanctuary of peace and comfort equipped with magnificent views and majestic interior design.",
    allRoomsCTA: "Examine All Rooms",
    roomCapacity: "Capacity: ",
    roomSize: "Size: ",
    roomView: "View: ",
    roomPrice: "Starting from ${price} / night",
    simulator360: "Interactive 360° Panoramic View",
    simulatorInstruction: "Drag around to experience the marble setup and custom bedding firstheaded.",
    backToNormalView: "Return to Gallery",

    // Amenities Section
    amenitiesTitle: "Amenities Built for Absolute Peace",
    amenitiesSubtitle: "Explore our luxury five-star facilities and continuous round-the-clock staff support to secure a frictionless stay.",

    // Dining Section
    diningTitle: "Exceptional Flavors Starting at Golden Dawn",
    diningSubtitle: "Relish in a rich, gourmet breakfast buffet loaded with delicious culinary options from local treasures to classic international flavors.",
    diningItem1: "Grand Buffet Breakfast",
    diningItem1Desc: "Warm oriental treats, artisan breads, and wholesome modern selections made daily.",
    diningItem2: "Stylish Indoor & Outdoor Seating",
    diningItem2Desc: "Beautifully organized private tables presenting maximum discretion and prestige.",
    diningItem3: "Specialty Coffee Bar",
    diningItem3Desc: "Exemplary coffee prepared by expert baristas specifically customized for our corporate and leisure guests.",
    diningItem4: "24-Hour Premium Dining Room",
    diningItem4Desc: "Sincere and quick catering available straight to your bed or terrace on request.",
    interactiveMenu: "Display Interactive Menu & Drinks",

    // Location Section
    locationTitle: "The Most Premium Strategic Location in Riyadh",
    locationSubtitle: "Directly located on Olaya Main Road near government buildings and business towers.",
    locationDesc: "Walk or ride seamlessly because of our central presence adjacent to King Fahd National library, financial centers, major dining complexes, and elegant shopping options.",
    landmark1: "King Fahd National Library (Directly Opposite)",
    landmark2: "Al Faisaliah Tower (5 mins drive / 15 mins stroll)",
    landmark3: "Prestigious Olaya Financial corporate blocks",
    landmark4: "Fine selection of surrounding executive cafes and spaces",
    getDirections: "Get Direct Route on Google Maps",

    // Testimonials
    testimonialTitle: "Words From Our Prestigious Guests",
    testimonialSubtitle: "We seek excellence in every detail. Here are verified direct reviews from seasoned guests.",

    // Business Travelers Section
    businessTitle: "The Preferred Choice of Corporate Leaders",
    businessSubtitle: "High-level facilities guaranteeing absolute peak concentration and seamless operation in central Riyadh.",
    bizPoints: [
      "Fully featured professional business center",
      "Fast, unlimited space satellite internet in all spaces",
      "Strategic adjacent alignment to ministerial blocks",
      "Cohesive corporate board rooms with cutting-edge screen hubs",
      "Prompt express cleaning and pressing round-the-clock"
    ],

    // Family Section
    familyTitle: "Perfect for Discerning Family Stays",
    familySubtitle: "Safe, joyous, and comforting space that brings your family close with maximum private ease.",
    familyPoints: [
      "Complimentary access and breakfast stay for children under 5 years",
      "Comfortable spacious adjacent and connected suites",
      "Secure outdoor swimming pool setting open for family slots",
      "Cots, cribs, and supportive accessories available on request",
      "A warm family-first cultural reception that feels like a secure palace"
    ],

    // Concierge Assistant UI
    conciergeTitle: "Brera Olaya Live Smart Concierge",
    conciergePlaceholder: "Ask about room upgrades, laundry, buffet or SPA appointments...",
    conciergeWelcome: "Greetings! I am your dedicated Virtual Concierge. How can I enhance your prestigious Riyadh stay today?",
    chatSend: "Send",
    whatsappBtn: "Contact Direct on WhatsApp",
    specialOfferBanner: "Direct Booking Benefit: Receive a complimentary room upgrade (subject to availability) and 3:00 PM late check-out! Use voucher code ROYAL15 for 15% discount.",

    // Cinematic Video
    playCinematic: "Play Cinematic Presentation",
    closeCinematic: "Close Screen",
    cinematicVideoTitle: "Brera Olaya - High Premium Teaser",

    // Final CTA
    finalCTAHeadline: "Secure an Elite Experience Today",
    finalCTASubline: "Immerse in a gorgeous setting that blends high executive comfort with deep-rooted Arabian hospitality.",
    finalCTA_BookNow: "Book Best Guaranteed Price",
    finalCTA_Contact: "Call Front Desk Directly",

    // Footer
    footerAddress: "Olaya Street, Riyadh, Kingdom of Saudi Arabia",
    footerPhone: "+966 9200 00555",
    footerEmail: "reservations@breraolaya.com",
    footerQuickLinks: "Quick Links",
    footerCopyright: "© 2026 Brera Olaya Hotel. All rights reserved.",
  }
};

export const INSTALLED_ROOMS: Room[] = [
  {
    id: "deluxe",
    nameAr: "غرفة ديلوكس المترفة",
    nameEn: "Magnificent Deluxe Room",
    descriptionAr: "غرفة أنيقة بتصميم حديث مع سرير كينغ فاخر مكسو بالحرير، حمام رخامي إسباني متكامل، طاولة قهوة مخصصة، وخدمة واي فاي فائقة السرعة تمنحك الراحة المطلقة.",
    descriptionEn: "Elegant spacious modern chamber outfitted with an ultra-premium King size bed, real Spanish marble bathroom suite, dedicated seating area, and seamless Wi-Fi.",
    priceUSD: 165,
    capacityAr: "شخصين بالغين + طفل",
    capacityEn: "2 Adults + 1 Child",
    sizeAr: "٣٨ متر مربع",
    sizeEn: "38 sqm",
    viewAr: "إطلالة على حديقة مكتبة الملك فهد",
    viewEn: "King Fahd Library Gardens",
    featuresAr: ["سرير King ملكي", "حمام رخامي إسباني", "إنترنت فائق السرعة", "فرش قطني مصري فاخر", "صانعة قهوة نسبريسو"],
    featuresEn: ["Royal King Bed", "Spanish Marble Shower", "High-speed Wi-Fi", "Egyptian Cotton Linens", "Nespresso Coffee Station"],
    imageUrl: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=800",
    roomsLeft: 3,
    images360: [
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: "executive",
    nameAr: "غرفة تنفيذية ملكية",
    nameEn: "Executive Elite Room",
    descriptionAr: "مساحات أوسع مصممة لرجال الأعمال الباحثين عن الهدوء والتركيز، تضم إطلالات ممتدة على شارع العليا الصاخب وطاولة مكتب مجهزة بأدق تفاصيل العمل الذكي مع امتيازات الدخول الخاص للنادي الرياضي.",
    descriptionEn: "Lavish accommodations highlighting wider floor spaces and executive workspace, looking directly out on the Riyadh skyline, and offering complimentary fitness club access.",
    priceUSD: 230,
    capacityAr: "شخصين بالغين + طفلين",
    capacityEn: "2 Adults + 2 Children",
    sizeAr: "٤٨ متر مربع",
    sizeEn: "48 sqm",
    viewAr: "إطلالة مرتفعة على مدينة العليا وبرج الفيصلية",
    viewEn: "Premium Skyline & Al Faisaliah View",
    featuresAr: ["مكتب عمل مجهز", "آلة قهوة متكاملة", "ميني بار مجاني", "عازل صوتي متطور", "دخول المسبح مجاناً"],
    featuresEn: ["Premium Work Station", "Full Coffee Bar", "Complimentary Mini Bar", "High Soundproofing", "Free Pool Access"],
    imageUrl: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
    roomsLeft: 4,
    images360: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: "premium",
    nameAr: "جناح بريميوم العائلي الفاخر",
    nameEn: "Grand Premium Suite",
    descriptionAr: "شقة ملكية مصغرة تضم غرفة نوم رئيسية بسرير كينغ وحمام مستقل متكامل برداء فاخر، مع منطقة صالون مستقلة لاستقبال الضيوف أو التجمع العائلي وتصاميم معبرة عن أصالة الثقافة السعودية بلمسة عالمية.",
    descriptionEn: "A magnificent corporate and family suite featuring a large master masterhood bedroom, private elegant living saloon, upscale luxury robes, and genuine cultural Saudi craft accents.",
    priceUSD: 390,
    capacityAr: "٤ أشخاص بالغين + طفلين",
    capacityEn: "4 Adults + 2 Children",
    sizeAr: "٧٢ متر مربع",
    sizeEn: "72 sqm",
    viewAr: "إطلالة ثنائية بانورامية على برج الفيصلية ومكتبة الملك فهد",
    viewEn: "Panoramic Al Faisaliah & Library View",
    featuresAr: ["صالون معيشة مستقل", "جهاز تلفزيون 4K ذكي 65 بوصة", "حوض استحمام جاكوزي", "رداء وسبا فاخر", "إفطار مجاني لشخصين"],
    featuresEn: ["Independent Salon Lounge", "65-inch 4K Smart TV", "Jacuzzi Bathtub Suite", "Luxury Plush Robes", "Free Daily Gourmet Breakfast"],
    imageUrl: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800",
    roomsLeft: 2,
    images360: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80&w=1200"
    ]
  },
  {
    id: "royal",
    nameAr: "الجناح الملكي الاستثنائي",
    nameEn: "Imperial Royal Suite",
    descriptionAr: "الملجأ الأقصى للرفاهية والأناقة بالرياض؛ يضم صالتين معيشة، مطبخ مصغر فاخر، طاولة عشاء، حمامين من الرخام الإيطالي، وإطلالة بانورامية بزاوية ٢٧٠ درجة على العاصمة مع كوكبة من خدمات الضيافة الخاصة والمجانية.",
    descriptionEn: "The crowning glory of Brera Olaya, structured with two expansive living lobbies, custom dining suite, personal service kitchenette, and 270-degree majestic view of central Riyadh.",
    priceUSD: 750,
    capacityAr: "٥ أشخاص بالغين + ٣ أطفال",
    capacityEn: "5 Adults + 3 Children",
    sizeAr: "١١٨ متر مربع",
    sizeEn: "118 sqm",
    viewAr: "إطلالة بانورامية علوية كاملة على ناطحات سحاب الرياض",
    viewEn: "Ultimate Dual View of Riyadh Downtown Skyline",
    featuresAr: ["خدمة خادم شخصي متاح", "مطبخ مصغر متكامل", "حمامين رخام متكاملين", "توصيل مجاني من المطار", "بار قهوة مختصة مخصص"],
    featuresEn: ["Dedicated Private Butler Service", "Private Kitchenette Set", "Two Full Italian Baths", "Free Airport Transfer", "En-suite Custom Coffee Boutique"],
    imageUrl: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80&w=800",
    roomsLeft: 1,
    images360: [
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=1200"
    ]
  }
];

export const INSTALLED_AMENITIES: Amenity[] = [
  {
    id: "pool",
    nameAr: "مسبح خارجي فاخر",
    nameEn: "Luxury Outdoor Swimming Pool",
    descriptionAr: "مسبح خلاب هادئ ومحاط بأرقى الكراسي المريحة والأشجار لتستجم وتستمتع بشمس الرياض الدافئة وسط عزلة هادئة.",
    descriptionEn: "An oasis of tranquility surrounded by palm trees and comfortable loungers, perfect for taking in the golden Riyadh sun.",
    icon: "waves"
  },
  {
    id: "gym",
    nameAr: "مركز لياقة بدنية فائقة القوة",
    nameEn: "Elite Fitness Center",
    descriptionAr: "صالة رياضية مفتوحة للنزلاء تتميز بأحدث التقنيات وأجهزة الجري لمواصلة نمط حياتك الرياضي بكل ثقة.",
    descriptionEn: "State-of-the-art weights and conditioning machines accessible all day to preserve your focus and health while staying with us.",
    icon: "dumbbell"
  },
  {
    id: "dining",
    nameAr: "مطعم بريرا الفخم",
    nameEn: "Signature Restaurant",
    descriptionAr: "يقدم وجبات فطور استثنائية وبوفيه غني بأرقى الأطباق الغربية والشرقية التي يصوغها كبار الطهاة خصيصاً.",
    descriptionEn: "A culinary journey crafted by highly accredited gourmet chefs presenting authentic spices and majestic breakfasts.",
    icon: "utensils"
  },
  {
    id: "cafe",
    nameAr: "مقهى الكورس الأنيق",
    nameEn: "The Course Cafe",
    descriptionAr: "وجهتك المفضلة لتذوق القهوة المختصة، والحلويات الفرنسية المبتكرة، وعقد الاجتماعات السريعة وسط أجواء هادئة فاخرة.",
    descriptionEn: "The ultimate cozy layout for handpicked single-origin coffee beans, exquisite desserts, and business encounters.",
    icon: "coffee"
  },
  {
    id: "parking",
    nameAr: "مواقف سيارات آمنة ومجانية",
    nameEn: "Free Indoor Parking",
    descriptionAr: "مساحات داخلية فسيحة وآمنة مخصصة لسيارات نزلائنا مجاناً طوال فترة الإقامة مع خدمات غسيل وحماية.",
    descriptionEn: "Stress-free secure subterranean spaces exclusively reserved for our hotel guests free of charge with round-the-clock patrol.",
    icon: "car"
  },
  {
    id: "wifi",
    nameAr: "إنترنت عالي السرعة",
    nameEn: "High-Speed Wi-Fi",
    descriptionAr: "اتصال لاسلكي مجاني فائق السرعة وبلا حدود في كامل أرجاء الغرف واللوبي لدعم عملك واستمتاعك.",
    descriptionEn: "High-speed gigabit Wi-Fi covers the entire hotel completely free, securing your continuous digital workflow.",
    icon: "wifi"
  },
  {
    id: "roomservice",
    nameAr: "خدمة غرف ٢٤ ساعة",
    nameEn: "24-Hour Room Service",
    descriptionAr: "طاقم متأهب لتوصيل أشهى المأكولات والمشروبات والقهوة الساخنة إلى سريرك مباشرة وفي أي وقت طوال الليل والنهار.",
    descriptionEn: "Five-star room service brings warm, delicious meals and single origin items right to your room's comfort within minutes.",
    icon: "clock"
  },
  {
    id: "business",
    nameAr: "مركز أعمال متكامل وقاعات",
    nameEn: "Fully Featured Business Block",
    descriptionAr: "مساحات عمل مجهزة بطابعات وشاشات عرض ذكية وغرف اجتماعات خاصة لضمان استمرار صفقاتك الهامة بكل نجاح.",
    descriptionEn: "Complete workplace solution showing highly silent individual computers, smart projectors, and corporate board suites.",
    icon: "briefcase"
  }
];

export const INSTALLED_TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    nameAr: "محمد إبراهيم",
    nameEn: "Mohammed Ibrahim",
    quoteAr: "موقع الفندق استثنائي بكل معنى الكلمة في العليا ومقابل مكتبة الملك فهد مباشرة. الغرف نظيفة جداً، الديكورات راقية والأسرة لا تقارن في الراحة. كذلك خدمة الاستقبال والقهوة السعودية عند الدخول تعكس كرم الضيافة بحق.",
    quoteEn: "The location of the hotel is absolutely pristine right in Olaya directly opposite the King Fahd Library. Extremely tidy, opulent furnishings, and highly comfortable beds. Warm reception with authentic Arabic coffee makes a great difference.",
    rating: 5,
    stayDate: "June 2026"
  },
  {
    id: "2",
    nameAr: "لولوة البراكان",
    nameEn: "Loloua Albraikan",
    quoteAr: "من أجمل فنادق الرياض لقضاء عطلة نهاية الأسبوع! الإفطار في الصباح مطل على أشجار المكتبة والنافورة، البوفيه شهي ومنوع للغاية وبحالة تقديم لافتة. الجناح فسيح جداً والخدمة سريعة في تلبية الطلبات على مدار الساعة.",
    quoteEn: "One of the most glorious Riyadh hotels for a staycation! Morning breakfast overlooking the library greenery and fountains was splendid. Highly varied buffet. The premium suite is extremely spacious and quiet.",
    rating: 5,
    stayDate: "May 2026"
  },
  {
    id: "3",
    nameAr: "عبد الله المالكي",
    nameEn: "Abdullah Al-Malki",
    quoteAr: "فندق ممتاز جداً لرجال الأعمال. قمت بعقد ثلاثة اجتماعات في مركز الأعمال وكانت التسهيلات ممتازة والإنترنت سريع ومستقر جداً. سهولة الوصول إلى برج الفيصلية ومكاتب العليا توفر الكثير من وقت التنقل الثمين.",
    quoteEn: "Excellent and highly strategic boutique choice for corporate executives. Held three seamless meetings in their business suite with ultra fast internet. Proximity to Al Faisaliah and core towers saves precious commute hours.",
    rating: 4.8,
    stayDate: "April 2026"
  }
];
