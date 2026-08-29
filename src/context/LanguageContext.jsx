import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

const translations = {
  en: {
    nav: { home: "Home", about: "About Us", gallery: "Gallery", quality: "Quality", contact: "Contact" },
    header: { request_quote: "Request Quote" },
    home: {
      hero_title: "Precision",
      hero_title_bold: "Engineered.",
      hero_desc: "D.M. Valve Product manufactures heavy-duty, zero-leakage industrial valves for the world's most demanding environments. Based in Ahmedabad, trusted globally.",
      request_quote: "Request a Quote",
      view_catalog: "View Catalog",
      standard_title: "The D.M. Valve",
      standard_title_bold: "Standard",
      features: {
        f1_title: "ISO 9001:2015", f1_desc: "Internationally certified manufacturing processes ensuring consistent quality and material traceability.",
        f2_title: "100% Tested", f2_desc: "Every valve undergoes intense hydrostatic testing for a strict zero-leakage guarantee before shipping.",
        f3_title: "Custom Fabrication", f3_desc: "We design and manufacture specialized valves based on client requirements for unique industrial applications."
      }
    }
  },
  hi: {
    nav: { home: "मुख्य पृष्ठ", about: "हमारे बारे में", gallery: "गैलरी", quality: "गुणवत्ता", contact: "संपर्क" },
    header: { request_quote: "कोटेशन मांगें" },
    home: {
      hero_title: "सटीक",
      hero_title_bold: "इंजीनियरिंग।",
      hero_desc: "D.M. वॉल्व प्रोडक्ट दुनिया के सबसे कठिन उद्योगों के लिए हेवी-ड्यूटी, जीरो-लीकेज इंडस्ट्रियल वॉल्व बनाती है। अहमदाबाद में स्थित, विश्व स्तर पर विश्वसनीय।",
      request_quote: "कोटेशन मांगें",
      view_catalog: "कैटलॉग देखें",
      standard_title: "D.M. वॉल्व के",
      standard_title_bold: "मानक",
      features: {
        f1_title: "ISO 9001:2015", f1_desc: "अंतरराष्ट्रीय स्तर पर प्रमाणित निर्माण प्रक्रियाएं।",
        f2_title: "100% परीक्षण", f2_desc: "शिपिंग से पहले हर वॉल्व का गहन हाइड्रोस्टेटिक परीक्षण।",
        f3_title: "कस्टम निर्माण", f3_desc: "हम ग्राहकों की आवश्यकता के अनुसार विशेष वॉल्व डिजाइन करते हैं।"
      }
    }
  },
  gu: {
    nav: { home: "મુખ્ય પૃષ્ઠ", about: "અમારા વિશે", gallery: "ગેલેરી", quality: "ગુણવત્તા", contact: "સંપર્ક" },
    header: { request_quote: "ભાવ પૂછો" },
    home: {
      hero_title: "ચોક્કસ",
      hero_title_bold: "એન્જિનિયરિંગ.",
      hero_desc: "D.M. વાલ્વ પ્રોડક્ટ વિશ્વના સૌથી કઠિન ઉદ્યોગો માટે હેવી-ડ્યુટી, ઝીરો-લીકેજ ઔદ્યોગિક વાલ્વ બનાવે છે. અમદાવાદમાં સ્થિત, વૈશ્વિક સ્તરે વિશ્વસનીય.",
      request_quote: "ભાવ પૂછો",
      view_catalog: "કેટેલોગ જુઓ",
      standard_title: "D.M. વાલ્વનું",
      standard_title_bold": "ધોરણ",
      features: {
        f1_title: "ISO 9001:2015", f1_desc: "આંતરરાષ્ટ્રીય સ્તરે પ્રમાણિત ઉત્પાદન પ્રક્રિયાઓ.",
        f2_title: "100% પરીક્ષણ", f2_desc: "શિપિંગ પહેલાં દરેક વાલ્વનું સઘન હાઇડ્રોસ્ટેટિક પરીક્ષણ.",
        f3_title: "કસ્ટમ ઉત્પાદન", f3_desc: "અમે ગ્રાહકોની જરૂરિયાત મુજબ ખાસ વાલ્વ ડિઝાઇન કરીએ છીએ."
      }
    }
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const t = (section, key) => {
    return translations[language]?.[section]?.[key] || translations['en'][section]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
