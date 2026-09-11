/**
 * 🌾 AGRIWISE AI - Multilingual Localization Engine
 * Supports 9 Major Indian Agricultural Languages:
 * English (en), Hindi (hi), Punjabi (pa), Marathi (mr), Telugu (te),
 * Tamil (ta), Gujarati (gu), Bengali (bn), Kannada (kn).
 */

const AgriI18n = {
  currentLang: localStorage.getItem('agriwise_lang') || 'en',
  translations: {},

  // Built-in synchronous fallbacks to guarantee immediate, flicker-free rendering
  DICTIONARIES: {
    en: {
      app_name: "AGRIWISE AI",
      tagline: "From Seed Selection to Market Sale — One Intelligent Agriculture Platform",
      hero_title: "Make Every Acre a Smarter Decision.",
      hero_subtitle: "AI-powered crop suitability, certified seed comparison, scientific fertilizer plans, real-time mandi prices, and direct buyer linkage — built for Indian farmers.",
      start_farm_analysis: "🌱 Start Farm Analysis",
      explore_market_intel: "💹 Explore Market Intelligence",
      demo_journey: "🚜 2-Min Demo Journey",
      dashboard: "Dashboard",
      farm_profile: "Farm Profile",
      farm_analysis: "Soil & Water",
      weather: "Weather & Advisory",
      crop_recommendation: "Crops",
      seed_recommendation: "Seed Varieties",
      cultivation_plan: "Cultivation Timeline",
      fertilizer_plan: "Fertilizer Plan",
      fertilizer_market: "Inputs",
      water_analysis: "Water Quality",
      market_intel: "Markets",
      crop_demand: "Crop Demand",
      crop_shortage: "Shortages",
      profit_estimator: "Profit Estimator",
      buyer_market: "Buyer Marketplace",
      transport_market: "Logistics & Transport",
      farm_to_market: "Farm-to-Market",
      ai_assistant: "AI Advisor",
      farm_calendar: "Farm Calendar",
      notifications: "Notifications",
      farm_report: "Farm Decision Report",
      admin: "Admin Portal",
      sign_in: "Sign In",
      sign_out: "Sign Out",
      register: "Register",
      my_account: "My Account",
      role_farmer: "Farmer (किसान)",
      role_dealer: "Input Dealer",
      role_transporter: "Transporter",
      role_buyer: "Wholesale Buyer",
      role_admin: "Admin",
      nav_dashboard: "🌾 Dashboard",
      nav_soil_water: "🔬 Soil & Water",
      nav_crops: "🌱 Crops",
      nav_inputs: "🛒 Inputs",
      nav_markets: "💹 Markets",
      nav_shortages: "🗺 Shortages",
      nav_farm_to_market: "🚜 Farm-to-Market",
      nav_payments: "💳 Payments",
      nav_ai_advisor: "🤖 AI Advisor"
    },
    hi: {
      app_name: "एग्रीवाइज एआई",
      tagline: "बीज चयन से लेकर मंडी बिक्री तक — संपूर्ण कृषि निर्णय मंच",
      hero_title: "हर एकड़ जमीन पर लें समझदार और लाभकारी फैसला।",
      hero_subtitle: "भारतीय किसानों के लिए एआई-संचालित फसल, बीज, खाद और बाजार विश्लेषण मंच।",
      start_farm_analysis: "🌱 खेत विश्लेषण शुरू करें",
      explore_market_intel: "💹 मंडी भाव और मांग देखें",
      demo_journey: "🚜 २-मिनट डेमो यात्रा",
      dashboard: "डैशबोर्ड",
      farm_profile: "खेत प्रोफ़ाइल",
      farm_analysis: "मिट्टी व पानी",
      weather: "मौसम व सलाह",
      crop_recommendation: "फसल सिफारिश",
      seed_recommendation: "अनुशंसित बीज",
      cultivation_plan: "खेती समय-सारणी",
      fertilizer_plan: "उर्वरक योजना",
      fertilizer_market: "खाद व इनपुट",
      water_analysis: "पानी की गुणवत्ता",
      market_intel: "मंडी भाव",
      crop_demand: "फसल मांग",
      crop_shortage: "फसल कमी मैप",
      profit_estimator: "मुनाफा कैलकुलेटर",
      buyer_market: "थोक खरीदार",
      transport_market: "वाहन व ढुलाई",
      farm_to_market: "खेत से बाजार",
      ai_assistant: "एआई सलाहकार",
      farm_calendar: "कृषि कैलेंडर",
      notifications: "सूचनाएं",
      farm_report: "कृषि निर्णय रिपोर्ट",
      admin: "प्रशासक पोर्टल",
      sign_in: "लॉग इन करें",
      sign_out: "लॉग आउट",
      register: "पंजीकरण करें",
      my_account: "मेरा खाता",
      role_farmer: "किसान (Farmer)",
      role_dealer: "खाद/बीज डीलर",
      role_transporter: "ट्रांसपोर्टर",
      role_buyer: "थोक खरीदार / मिल",
      role_admin: "व्यवस्थापक (Admin)",
      nav_dashboard: "🌾 डैशबोर्ड",
      nav_soil_water: "🔬 मिट्टी व पानी",
      nav_crops: "🌱 फसलें",
      nav_inputs: "🛒 खाद व इनपुट",
      nav_markets: "💹 मंडी भाव",
      nav_shortages: "🗺 फसल कमी",
      nav_farm_to_market: "🚜 खेत से बाजार",
      nav_payments: "💳 भुगतान",
      nav_ai_advisor: "🤖 एआई सलाहकार"
    },
    pa: {
      app_name: "ਐਗਰੀਵਾਈਜ਼ ਏਆਈ",
      tagline: "ਬੀਜ ਦੀ ਚੋਣ ਤੋਂ ਲੈ ਕੇ ਮੰਡੀ ਦੀ ਵਿਕਰੀ ਤੱਕ — ਇਕ ਸਮਾਰਟ ਖੇਤੀਬਾੜੀ ਪਲੇਟਫਾਰਮ",
      hero_title: "ਹਰ ਏਕੜ ਜ਼ਮੀਨ 'ਤੇ ਕਰੋ ਸਭ ਤੋਂ ਸਹੀ ਅਤੇ ਸਮਝਦਾਰ ਫੈਸਲਾ।",
      hero_subtitle: "ਭਾਰਤੀ ਕਿਸਾਨਾਂ ਲਈ ਏਆਈ-ਸੰਚਾਲਿਤ ਫਸਲ, ਬੀਜ, ਖਾਦ ਅਤੇ ਮੰਡੀ ਵਿਸ਼ਲੇਸ਼ਣ ਪਲੇਟਫਾਰਮ।",
      start_farm_analysis: "🌱 ਖੇਤ ਵਿਸ਼ਲੇਸ਼ਣ ਸ਼ੁਰੂ ਕਰੋ",
      explore_market_intel: "💹 ਮੰਡੀ ਰੇਟ ਅਤੇ ਮੰਗ ਵੇਖੋ",
      demo_journey: "🚜 ੨-ਮਿੰਟ ਡੈਮੋ ਯਾਤਰਾ",
      dashboard: "ਡੈਸ਼ਬੋਰਡ",
      farm_profile: "ਖੇਤ ਪ੍ਰੋਫਾਈਲ",
      farm_analysis: "ਮਿੱਟੀ ਤੇ ਪਾਣੀ",
      weather: "ਮੌਸਮ ਤੇ ਸਲਾਹ",
      crop_recommendation: "ਫਸਲ ਸਿਫਾਰਸ਼",
      seed_recommendation: "ਸਿਫਾਰਸ਼ੀ ਬੀਜ",
      cultivation_plan: "ਖੇਤੀ ਸਮਾਂ-ਸਾਰਣੀ",
      fertilizer_plan: "ਖਾਦ ਯੋਜਨਾ",
      fertilizer_market: "ਖਾਦ ਤੇ ਇਨਪੁਟ ਬਾਜ਼ਾਰ",
      water_analysis: "ਪਾਣੀ ਦੀ ਗੁਣਵੱਤਾ",
      market_intel: "ਮੰਡੀ ਰੇਟ",
      crop_demand: "ਫਸਲ ਦੀ ਮੰਗ",
      crop_shortage: "ਰਾਸ਼ਟਰੀ ਕਮੀ ਨਕਸ਼ਾ",
      profit_estimator: "ਮੁਨਾਫਾ ਕੈਲਕੁਲੇਟਰ",
      buyer_market: "ਥੋਕ ਖਰੀਦਦਾਰ",
      transport_market: "ਟਰਾਂਸਪੋਰਟ ਤੇ ਵਾਹਨ",
      farm_to_market: "ਖੇਤ ਤੋਂ ਮੰਡੀ",
      ai_assistant: "ਏਆਈ ਸਹਾਇਕ",
      farm_calendar: "ਖੇਤੀ ਕੈਲੰਡਰ",
      notifications: "ਸੂਚਨਾਵਾਂ",
      farm_report: "ਖੇਤੀ ਫੈਸਲਾ ਰਿਪੋਰਟ",
      admin: "ਐਡਮਿਨ ਪੋਰਟਲ",
      sign_in: "ਲੌਗ ਇਨ ਕਰੋ",
      sign_out: "ਲੌਗ ਆਉਟ",
      register: "ਰਜਿਸਟਰ ਕਰੋ",
      my_account: "ਮੇਰਾ ਖਾਤਾ",
      role_farmer: "ਕਿਸਾਨ (Farmer)",
      role_dealer: "ਖਾਦ/ਬੀਜ ਡੀਲਰ",
      role_transporter: "ਟਰਾਂਸਪੋਰਟਰ",
      role_buyer: "ਥੋਕ ਵਪਾਰੀ/ਮਿੱਲਰ",
      role_admin: "ਪ੍ਰਸ਼ਾਸਕ (Admin)",
      nav_dashboard: "🌾 ਡੈਸ਼ਬੋਰਡ",
      nav_soil_water: "🔬 ਮਿੱਟੀ ਤੇ ਪਾਣੀ",
      nav_crops: "🌱 ਫਸਲਾਂ",
      nav_inputs: "🛒 ਖਾਦ ਤੇ ਇਨਪੁਟ",
      nav_markets: "💹 ਮੰਡੀ ਰੇਟ",
      nav_shortages: "🗺 ਕਮੀ ਨਕਸ਼ਾ",
      nav_farm_to_market: "🚜 ਖੇਤ ਤੋਂ ਮੰਡੀ",
      nav_payments: "💳 ਭੁਗਤਾਨ",
      nav_ai_advisor: "🤖 ਏਆਈ ਸਲਾਹਕਾਰ"
    },
    mr: {
      app_name: "एग्रीवाइज एआय",
      tagline: "बियाणे निवडीपासून ते बाजार विक्रीपर्यंत — एकात्मिक कृषी निर्णय मंच",
      hero_title: "प्रत्येक एकर शेतीवर घ्या योग्य आणि फायदेशीर निर्णय.",
      hero_subtitle: "भारतीय शेतकऱ्यांसाठी एआय-आधारित पीक, बियाणे, खते आणि थेट बाजारभाव मंच.",
      start_farm_analysis: "🌱 शेत विश्लेषण सुरू करा",
      explore_market_intel: "💹 बाजारभाव आणि मागणी पहा",
      demo_journey: "🚜 २-मिनिट डेमो फेरफटका",
      dashboard: "डॅशबोर्ड",
      farm_profile: "शेत प्रोफाइल",
      farm_analysis: "माती व पाणी",
      weather: "हवामान व सल्ला",
      crop_recommendation: "पीक शिफारस",
      seed_recommendation: "शिफारस केलेली बियाणे",
      cultivation_plan: "शेती नियोजन वेळापत्रक",
      fertilizer_plan: "खत व्यवस्थापन योजना",
      fertilizer_market: "खते व बियाणे बाजार",
      water_analysis: "पाणी गुणवत्ता",
      market_intel: "बाजारभाव",
      crop_demand: "पीक मागणी",
      crop_shortage: "पीक टंचाई नकाशा",
      profit_estimator: "नफा कॅल्क्युलेटर",
      buyer_market: "थोक खरेदीदार",
      transport_market: "वाहतूक व वाहने",
      farm_to_market: "शेतातून बाजारात",
      ai_assistant: "एआय कृषी सल्लागार",
      farm_calendar: "कृषी दिनदर्शिका",
      notifications: "सूचना",
      farm_report: "कृषी निर्णय अहवाल",
      admin: "प्रशासक पोर्टल",
      sign_in: "लॉग इन करा",
      sign_out: "लॉग आउट",
      register: "नोंदणी करा",
      my_account: "माझे खाते",
      role_farmer: "शेतकरी (Farmer)",
      role_dealer: "खत/बियाणे विक्रेता",
      role_transporter: "वाहतूकदार",
      role_buyer: "थोक खरेदीदार / मिल",
      role_admin: "व्यवस्थापक",
      nav_dashboard: "🌾 डॅशबोर्ड",
      nav_soil_water: "🔬 माती व पाणी",
      nav_crops: "🌱 पिके",
      nav_inputs: "🛒 खते व बियाणे",
      nav_markets: "💹 बाजारभाव",
      nav_shortages: "🗺 टंचाई नकाशा",
      nav_farm_to_market: "🚜 शेतातून बाजारात",
      nav_payments: "💳 पेमेंट",
      nav_ai_advisor: "🤖 एआय सल्लागार"
    },
    te: {
      app_name: "అగ్రివైజ్ AI",
      tagline: "విత్తనాల ఎంపిక నుండి మార్కెట్ అమ్మకాల వరకు — సమగ్ర వ్యవసాయ నిర్ణయ వేదిక",
      hero_title: "ప్రతి ఎకరా భూమిపై సరైన, లాభదాయక నిర్ణయం తీసుకోండి.",
      hero_subtitle: "భారతీయ రైతుల కోసం AI ఆధారిత పంట, విత్తనాలు, ఎరువులు మరియు మార్కెట్ ధరల విశ్లేషణ వేదిక.",
      start_farm_analysis: "🌱 పొలం విశ్లేషణ ప్రారంభించండి",
      explore_market_intel: "💹 మార్కెట్ ధరలు & డిమాండ్ చూడండి",
      demo_journey: "🚜 2-నిమిషాల డెమో టూర్",
      dashboard: "డాష్‌బోర్డ్",
      farm_profile: "వ్యవసాయ ప్రొఫైల్",
      farm_analysis: "నేల & నీరు",
      weather: "వాతావరణం & సలహాలు",
      crop_recommendation: "పంట సిఫార్సు",
      seed_recommendation: "సిఫార్సు చేసిన విత్తనాలు",
      cultivation_plan: "సాగు కాలపట్టిక",
      fertilizer_plan: "ఎరువుల ప్రణాళిక",
      fertilizer_market: "ఎరువులు & విత్తనాల మార్కెట్",
      water_analysis: "నీటి నాణ్యత",
      market_intel: "మార్కెట్ ధరలు",
      crop_demand: "పంట డిమాండ్",
      crop_shortage: "కొరత మ్యాప్",
      profit_estimator: "లాభాల కాలిక్యులేటర్",
      buyer_market: "హోల్‌సేల్ కొనుగోలుదారులు",
      transport_market: "రవాణా & వాహనాలు",
      farm_to_market: "పొలం నుండి మార్కెట్",
      ai_assistant: "AI వ్యవసాయ సలహాదారు",
      farm_calendar: "వ్యవసాయ క్యాలెండర్",
      notifications: "నోటిఫికేషన్లు",
      farm_report: "వ్యవసాయ నిర్ణయ నివేదిక",
      admin: "అడ్మిన్ పోర్టల్",
      sign_in: "లాగిన్ అవ్వండి",
      sign_out: "లాగ్ అవుట్",
      register: "రిజిస్టర్ చేసుకోండి",
      my_account: "నా ఖాతా",
      role_farmer: "రైతు (Farmer)",
      role_dealer: "ఎరువుల డీలర్",
      role_transporter: "రవాణాదారు",
      role_buyer: "కొనుగోలుదారు / మిల్లు",
      role_admin: "అడ్మినిస్ట్రేటర్",
      nav_dashboard: "🌾 డాష్‌బోర్డ్",
      nav_soil_water: "🔬 నేల & నీరు",
      nav_crops: "🌱 పంటలు",
      nav_inputs: "🛒 ఎరువులు & విత్తనాలు",
      nav_markets: "💹 మార్కెట్లు",
      nav_shortages: "🗺 కొరత మ్యాప్",
      nav_farm_to_market: "🚜 పొలం నుండి మార్కెట్",
      nav_payments: "💳 చెల్లింపులు",
      nav_ai_advisor: "🤖 AI సలహాదారు"
    },
    ta: {
      app_name: "அக்ரிவைஸ் AI",
      tagline: "விதை தேர்வு முதல் சந்தை விற்பனை வரை — ஒரே ஸ்மார்ட் விவசாய தளம்",
      hero_title: "ஒவ்வொரு ஏக்கர் நிலத்திலும் சிறந்த, லாபகரமான முடிவை எடுங்கள்.",
      hero_subtitle: "இந்திய விவசாயிகளுக்காக உருவாக்கப்பட்ட AI பயிர், விதை, உரம் மற்றும் சந்தை விலை தளமாகும்.",
      start_farm_analysis: "🌱 பண்ணை பகுப்பாய்வு தொடங்குக",
      explore_market_intel: "💹 சந்தை விலை & தேவை அறிக",
      demo_journey: "🚜 2 நிமிட டெமோ பயணம்",
      dashboard: "டாஷ்போர்டு",
      farm_profile: "பண்ணை விவரம்",
      farm_analysis: "மண் & நீர்",
      weather: "வானிலை & ஆலோசனைகள்",
      crop_recommendation: "பயிர் பரிந்துரை",
      seed_recommendation: "பரிந்துரைக்கப்பட்ட விதைகள்",
      cultivation_plan: "பயிரிடல் கால அட்டவணை",
      fertilizer_plan: "உரத் திட்டம்",
      fertilizer_market: "உரங்கள் & விதைகள்",
      water_analysis: "நீரின் தரம்",
      market_intel: "சந்தை விலைகள்",
      crop_demand: "பயிர் தேவை",
      crop_shortage: "பற்றாக்குறை வரைபடம்",
      profit_estimator: "லாப கால்குலேட்டர்",
      buyer_market: "மொத்த கொள்முதல்",
      transport_market: "போக்குவரத்து & வாகனங்கள்",
      farm_to_market: "பண்ணை முதல் சந்தை வரை",
      ai_assistant: "AI விவசாய ஆலோசகர்",
      farm_calendar: "விவசாய காலண்டர்",
      notifications: "அறிவிப்புகள்",
      farm_report: "விவசாய முடிவு அறிக்கை",
      admin: "நிர்வாகி போர்டல்",
      sign_in: "உள்நுழைக",
      sign_out: "வெளியேறுக",
      register: "பதிவு செய்க",
      my_account: "எனது கணக்கு",
      role_farmer: "விவசாயி (Farmer)",
      role_dealer: "உர வியாபாரி",
      role_transporter: "போக்குவரத்தாளர்",
      role_buyer: "மொத்த கொள்முதல் ஆலை",
      role_admin: "நிர்வாகி",
      nav_dashboard: "🌾 டாஷ்போர்டு",
      nav_soil_water: "🔬 மண் & நீர்",
      nav_crops: "🌱 பயிர்கள்",
      nav_inputs: "🛒 உரங்கள் & விதைகள்",
      nav_markets: "💹 சந்தை விலைகள்",
      nav_shortages: "🗺 பற்றாக்குறை",
      nav_farm_to_market: "🚜 பண்ணை முதல் சந்தை",
      nav_payments: "💳 கட்டணங்கள்",
      nav_ai_advisor: "🤖 AI ஆலோசகர்"
    },
    gu: {
      app_name: "એગ્રીવાઇઝ AI",
      tagline: "બીજની પસંદગીથી બજાર વેચાણ સુધી — એક સંપૂર્ણ ડિજિટલ કૃષિ મંચ",
      hero_title: "દરેક એકર જમીન પર લો સમજદારીપૂર્વકનો અને નફાકારક નિર્ણય.",
      hero_subtitle: "ભારતીય ખેડૂતો માટે AI-સંચાલિત પાક, બિયારણ, ખાતર અને લાઈવ બજારભાવ મંચ.",
      start_farm_analysis: "🌱 ખેતરનું વિશ્લેષણ શરૂ કરો",
      explore_market_intel: "💹 બજારભાવ અને માંગ જુઓ",
      demo_journey: "🚜 ૨-મિનિટ ડેમો પ્રવાસ",
      dashboard: "ડેશબોર્ડ",
      farm_profile: "ખેતર પ્રોફાઇલ",
      farm_analysis: "માટી અને પાણી",
      weather: "હવામાન અને સલાહ",
      crop_recommendation: "પાકની ભલામણ",
      seed_recommendation: "સુધારેલા બિયારણ",
      cultivation_plan: "ખેતી સમયપત્રક",
      fertilizer_plan: "ખાતર વ્યવસ્થાપન",
      fertilizer_market: "ખાતર અને બિયારણ બજાર",
      water_analysis: "પાણીની ગુણવત્તા",
      market_intel: "બજારભાવ",
      crop_demand: "પાકની માંગ",
      crop_shortage: "પાક અછત નકશો",
      profit_estimator: "નફો કેલ્ક્યુલેટર",
      buyer_market: "જથ્થાબંધ ખરીદદારો",
      transport_market: "પરિવહન અને વાહનો",
      farm_to_market: "ખેતરથી બજાર સુધી",
      ai_assistant: "AI કૃષિ સલાહકાર",
      farm_calendar: "ખેતી કેલેન્ડર",
      notifications: "સૂચનાઓ",
      farm_report: "ખેતી નિર્ણય અહેવાલ",
      admin: "એડમિન પોર્ટલ",
      sign_in: "લૉગ ઇન કરો",
      sign_out: "લૉગ આઉਟ",
      register: "નોંધણી કરો",
      my_account: "મારું એકાઉન્ટ",
      role_farmer: "ખેડૂત (Farmer)",
      role_dealer: "ખાતર/બિયારણ વેપારી",
      role_transporter: "ટ્રાન્સપોર્ટર",
      role_buyer: "જથ્થાબંધ ખરીદદાર / મિલ",
      role_admin: "એડમિનિસ્ટ્રેટર",
      nav_dashboard: "🌾 ડેશબોર્ડ",
      nav_soil_water: "🔬 માટી અને પાણી",
      nav_crops: "🌱 પાકો",
      nav_inputs: "🛒 ખાતર અને બિયારણ",
      nav_markets: "💹 બજારભાવ",
      nav_shortages: "🗺 અછત નકશો",
      nav_farm_to_market: "🚜 ખેતરથી બજાર",
      nav_payments: "💳 પેમેન્ટ",
      nav_ai_advisor: "🤖 AI સલાહકાર"
    },
    bn: {
      app_name: "এগ্রিওয়াইজ এআই",
      tagline: "বীজ নির্বাচন থেকে মাণ্ডিতে বিক্রি — একটি বুদ্ধিমান কৃষি সিদ্ধান্ত প্ল্যাটফর্ম",
      hero_title: "প্রতিটি একর জমিতে নিন সবচেয়ে সঠিক ও লাভজনক সিদ্ধান্ত।",
      hero_subtitle: "ভারতীয় কৃষকদের জন্য এআই-চালিত ফসল, বীজ, সার এবং রিয়েল-টাইম বাজারদর প্ল্যাটফর্ম।",
      start_farm_analysis: "🌱 খামার বিশ্লেষণ শুরু করুন",
      explore_market_intel: "💹 মাণ্ডির দর ও চাহিদা দেখুন",
      demo_journey: "🚜 ২-মিনিটের ডেমো সফর",
      dashboard: "ড্যাশবোর্ড",
      farm_profile: "খামার প্রোফাইল",
      farm_analysis: "মাটি ও জল",
      weather: "আবহাওয়া ও পরামর্শ",
      crop_recommendation: "ফসল সুপারিশ",
      seed_recommendation: "সুপারিশকৃত বীজ",
      cultivation_plan: "চাষের সময়সূচী",
      fertilizer_plan: "সার প্রয়োগ পরিকল্পনা",
      fertilizer_market: "সার ও বীজ বাজার",
      water_analysis: "জলের গুণমান",
      market_intel: "বাজারদর",
      crop_demand: "ফসলের চাহিদা",
      crop_shortage: "ঘাটতি মানচিত্র",
      profit_estimator: "মুনাফা ক্যালকুলেটর",
      buyer_market: "পাইকারি ক্রেতা",
      transport_market: "পরিবহন ও যানবাহন",
      farm_to_market: "খামার থেকে বাজার",
      ai_assistant: "এআই কৃষি পরামর্শক",
      farm_calendar: "কৃষি ক্যালেন্ডার",
      notifications: "বিজ্ঞপ্তি",
      farm_report: "কৃষি সিদ্ধান্ত রিপোর্ট",
      admin: "অ্যাডমিন পোর্টাল",
      sign_in: "লগ ইন করুন",
      sign_out: "লগ আউট",
      register: "নিবন্ধন করুন",
      my_account: "আমার অ্যাকাউন্ট",
      role_farmer: "কৃষক (Farmer)",
      role_dealer: "সার/বীজ ডিলার",
      role_transporter: "পরিবহনকারী",
      role_buyer: "পাইকারি মিল মালিক",
      role_admin: "প্রশাসক",
      nav_dashboard: "🌾 ড্যাশবোর্ড",
      nav_soil_water: "🔬 মাটি ও জল",
      nav_crops: "🌱 ফসল",
      nav_inputs: "🛒 সার ও বীজ",
      nav_markets: "💹 বাজারদর",
      nav_shortages: "🗺 ঘাটতি মানচিত্র",
      nav_farm_to_market: "🚜 খামার থেকে বাজার",
      nav_payments: "💳 পেমেন্ট",
      nav_ai_advisor: "🤖 এআই পরামর্শক"
    },
    kn: {
      app_name: "ಅಗ್ರಿ ವೈಸ್ AI",
      tagline: "ಬೀಜ ಆಯ್ಕೆಯಿಂದ ಮಾರುಕಟ್ಟೆ ಮಾರಾಟದವರೆಗೆ — ಸಮಗ್ರ ಕೃಷಿ ನಿರ್ಧಾರ ವೇದಿಕೆ",
      hero_title: "ಪ್ರತಿ ಎಕರೆ ಭೂಮಿಯಲ್ಲಿ ಸರಿಯಾದ, ಲಾಭದಾಯಕ ನಿರ್ಧಾರ ತೆಗೆದುಕೊಳ್ಳಿ.",
      hero_subtitle: "ಭಾರತೀಯ ರೈತರಿಗಾಗಿ AI-ಚಾಲಿತ ಬೆಳೆ, ಬೀಜ, ಗೊಬ್ಬರ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳ ವೇದಿಕೆ.",
      start_farm_analysis: "🌱 ಜಮೀನು ವಿಶ್ಲೇಷಣೆ ಪ್ರಾರಂಭಿಸಿ",
      explore_market_intel: "💹 ಮಾರುಕಟ್ಟೆ ದರ ಮತ್ತು ಬೇಡಿಕೆ ನೋಡಿ",
      demo_journey: "🚜 ೨-ನಿಮಿಷದ ಡೆಮೊ ಪ್ರವಾಸ",
      dashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
      farm_profile: "ಜಮೀನಿನ ವಿವರ",
      farm_analysis: "ಮಣ್ಣು ಮತ್ತು ನೀರು",
      weather: "ಹವಾಮಾನ ಮತ್ತು ಸಲಹೆ",
      crop_recommendation: "ಬೆಳೆ ಶಿಫಾರಸು",
      seed_recommendation: "ಶಿಫಾರಸು ಮಾಡಿದ ಬೀಜಗಳು",
      cultivation_plan: "ಬೇಸಾಯ ವೇಳಾಪಟ್ಟಿ",
      fertilizer_plan: "ಗೊಬ್ಬರ ನಿರ್ವಹಣೆ",
      fertilizer_market: "ಗೊಬ್ಬರ ಮತ್ತು ಬೀಜ ಮಾರುಕಟ್ಟೆ",
      water_analysis: "ನೀರಿನ ಗುಣಮಟ್ಟ",
      market_intel: "ಮಾರುಕಟ್ಟೆ ದರಗಳು",
      crop_demand: "ಬೆಳೆ ಬೇಡಿಕೆ",
      crop_shortage: "ಕೊರತೆಯ ನಕ್ಷೆ",
      profit_estimator: "ಲಾಭ ಕ್ಯಾಲ್ಕುಲೇಟರ್",
      buyer_market: "ಸಗಟು ಖರೀದಿದಾರರು",
      transport_market: "ಸಾರಿಗೆ ಮತ್ತು ವಾಹನಗಳು",
      farm_to_market: "ಜಮೀನಿನಿಂದ ಮಾರುಕಟ್ಟೆಗೆ",
      ai_assistant: "AI ಕೃಷಿ ಸಲಹೆಗಾರ",
      farm_calendar: "ಕೃಷಿ ಕ್ಯಾಲೆಂಡರ್",
      notifications: "ಸೂಚನೆಗಳು",
      farm_report: "ಕೃಷಿ ನಿರ್ಧಾರ ವರದಿ",
      admin: "ನಿರ್ವಾಹಕ ಪೋರ್ಟಲ್",
      sign_in: "ಲಾಗಿನ್ ಆಗಿ",
      sign_out: "ಲಾಗ್ ಔಟ್",
      register: "ನೋಂದಣಿ ಮಾಡಿ",
      my_account: "ನನ್ನ ಖಾತೆ",
      role_farmer: "ರೈತ (Farmer)",
      role_dealer: "ಗೊಬ್ಬರ/ಬೀಜ ವ್ಯಾಪಾರಿ",
      role_transporter: "ಸಾರಿಗೆದಾರ",
      role_buyer: "ಖರೀದಿದಾರ / ಗಿರಣಿ ಮಾಲೀಕ",
      role_admin: "ನಿರ್ವಾಹಕ",
      nav_dashboard: "🌾 ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
      nav_soil_water: "🔬 ಮಣ್ಣು ಮತ್ತು ನೀರು",
      nav_crops: "🌱 ಬೆಳೆಗಳು",
      nav_inputs: "🛒 ಗೊಬ್ಬರ ಮತ್ತು ಬೀಜ",
      nav_markets: "💹 ಮಾರುಕಟ್ಟೆ ದರಗಳು",
      nav_shortages: "🗺 ಕೊರತೆ ನಕ್ಷೆ",
      nav_farm_to_market: "🚜 ಜಮೀನಿನಿಂದ ಮಾರುಕಟ್ಟೆ",
      nav_payments: "💳 ಪಾವತಿಗಳು",
      nav_ai_advisor: "🤖 AI ಸಲಹೆಗಾರ"
    }
  },

  async init() {
    this.currentLang = localStorage.getItem('agriwise_lang') || 'en';
    // 1. Load embedded synchronous dictionary first
    this.translations = Object.assign({}, this.DICTIONARIES[this.currentLang] || this.DICTIONARIES.en);

    // 2. Fetch full JSON async and re-apply
    await this.loadLocale(this.currentLang);
    this.applyTranslations();
  },

  async loadLocale(lang) {
    this.currentLang = lang;
    localStorage.setItem('agriwise_lang', lang);

    // Seed with embedded fallback
    this.translations = Object.assign({}, this.DICTIONARIES[lang] || this.DICTIONARIES.en);

    try {
      const res = await fetch(`/locales/${lang}.json`);
      if (res.ok) {
        const remoteTranslations = await res.json();
        this.translations = Object.assign(this.translations, remoteTranslations);
      }
    } catch (e) {
      console.warn(`Local locale file used for ${lang}`);
    }
  },

  t(key, fallback = "") {
    return this.translations[key] || fallback || key;
  },

  applyTranslations() {
    const t = this.translations;

    // 1. Translate elements with explicit [data-i18n]
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = t[key];
        } else {
          el.innerHTML = t[key];
        }
      }
    });

    // 2. Translate Navigation Links across any header / drawer
    const navMapping = {
      'dashboard': t.nav_dashboard || t.dashboard || '🌾 Dashboard',
      'farm-analysis': t.nav_soil_water || t.farm_analysis || '🔬 Soil & Water',
      'crop-recommendation': t.nav_crops || t.crop_recommendation || '🌱 Crops',
      'fertilizer-market': t.nav_inputs || t.fertilizer_market || '🛒 Inputs',
      'transport-marketplace': t.services || t.transport_market || '🚜 Services',
      'market-intelligence': t.nav_markets || t.market_intel || '💹 Markets',
      'crop-shortage': t.nav_shortages || t.crop_shortage || '🗺 Shortages',
      'farm-to-market': t.nav_farm_to_market || t.farm_to_market || '🚜 Farm-to-Market',
      'payment': t.nav_payments || t.payment_gateway || '💳 Payments',
      'ai-assistant': t.nav_ai_advisor || t.ai_assistant || '🤖 AI Advisor',
      'farmer-orders': t.my_orders || '📦 Orders',
      'farm-profile': t.farm_profile || '👤 Profile',
      'weather': t.weather || '⛅ Weather',
      'notifications': t.notifications || '🔔 Notifications',
      'dealer-dashboard': t.dashboard || '📊 Dealer Overview',
      'transport-dashboard': t.dashboard || '🚜 Fleet Overview',
      'buyer-dashboard': t.dashboard || '🏢 Procurement',
      'admin': t.admin || '⚙ Admin'
    };

    document.querySelectorAll('.nav-link, .mobile-nav-item, .mobile-drawer-link').forEach(link => {
      const route = link.getAttribute('data-route');
      if (route && navMapping[route]) {
        if (link.classList.contains('mobile-nav-item')) {
          const span = link.querySelector('span:last-child');
          if (span) span.innerText = (navMapping[route]).replace(/[^\w\s\u0900-\u0D7F]/gi, '').trim();
        } else if (link.classList.contains('mobile-drawer-link')) {
          const spans = link.querySelectorAll('span');
          if (spans.length >= 2) {
            spans[1].innerText = navMapping[route].replace(/^[^\w\s\u0900-\u0D7F]+\s*/, '');
          }
        } else {
          link.innerHTML = navMapping[route];
        }
      }
    });

    // 3. Update Cart Button Label
    document.querySelectorAll('.nav-cart-btn .cart-btn-label').forEach(label => {
      label.innerText = t.cart || 'Cart';
    });

    // 4. Update Role Badges
    document.querySelectorAll('.user-role-badge').forEach(badge => {
      const textSpan = badge.querySelector('.badge-role-text');
      if (textSpan) {
        if (badge.classList.contains('badge-role-farmer') && t.role_farmer) {
          textSpan.innerText = t.role_farmer.replace(/\s*\(.*\)/, '');
        } else if (badge.classList.contains('badge-role-dealer') && t.role_dealer) {
          textSpan.innerText = t.role_dealer;
        } else if (badge.classList.contains('badge-role-provider') && t.role_provider) {
          textSpan.innerText = t.role_provider;
        } else if (badge.classList.contains('badge-role-buyer') && t.role_buyer) {
          textSpan.innerText = t.role_buyer;
        } else if (badge.classList.contains('badge-role-admin') && t.role_admin) {
          textSpan.innerText = t.role_admin;
        }
      }
    });

    // 5. Update all Language Selectors on page
    document.querySelectorAll('select.lang-select, #langSelect, #loginLangSelect, #regLangSelect').forEach(select => {
      select.value = this.currentLang;
    });

    // 6. Broadcast Language Changed Event
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: this.currentLang, translations: t } }));
  },

  async setLanguage(lang) {
    await this.switchLanguage(lang);
  },

  async switchLanguage(lang) {
    await this.loadLocale(lang);
    this.applyTranslations();
  }
};

window.AgriI18n = AgriI18n;

document.addEventListener('DOMContentLoaded', () => {
  AgriI18n.init();
});
