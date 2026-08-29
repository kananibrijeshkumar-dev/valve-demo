import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translation dictionaries
const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "about": "About Us",
        "gallery": "Gallery",
        "quality": "Quality",
        "contact": "Contact"
      },
      "header": {
        "request_quote": "Request Quote"
      },
      "home": {
        "hero_title": "Precision",
        "hero_title_bold": "Engineered.",
        "hero_desc": "D.M. Valve Product manufactures heavy-duty, zero-leakage industrial valves for the world's most demanding environments. Based in Ahmedabad, trusted globally.",
        "request_quote": "Request a Quote",
        "view_catalog": "View Catalog",
        "standard_title": "The D.M. Valve",
        "standard_title_bold": "Standard"
      }
    }
  },
  hi: {
    translation: {
      "nav": {
        "home": "मुख्य पृष्ठ",
        "about": "हमारे बारे में",
        "gallery": "गैलरी",
        "quality": "गुणवत्ता",
        "contact": "संपर्क करें"
      },
      "header": {
        "request_quote": "कोटेशन मांगें"
      },
      "home": {
        "hero_title": "सटीक",
        "hero_title_bold": "इंजीनियरिंग।",
        "hero_desc": "D.M. वॉल्व प्रोडक्ट दुनिया के सबसे कठिन उद्योगों के लिए हेवी-ड्यूटी, जीरो-लीकेज इंडस्ट्रियल वॉल्व बनाती है। अहमदाबाद में स्थित, विश्व स्तर पर विश्वसनीय।",
        "request_quote": "कोटेशन मांगें",
        "view_catalog": "कैटलॉग देखें",
        "standard_title": "D.M. वॉल्व के",
        "standard_title_bold": "मानक"
      }
    }
  },
  gu: {
    translation: {
      "nav": {
        "home": "મુખ્ય પૃષ્ઠ",
        "about": "અમારા વિશે",
        "gallery": "ગેલેરી",
        "quality": "ગુણવત્તા",
        "contact": "સંપર્ક કરો"
      },
      "header": {
        "request_quote": "ભાવ પૂછો"
      },
      "home": {
        "hero_title": "ચોક્કસ",
        "hero_title_bold": "એન્જિનિયરિંગ.",
        "hero_desc": "D.M. વાલ્વ પ્રોડક્ટ વિશ્વના સૌથી કઠિન ઉદ્યોગો માટે હેવી-ડ્યુટી, ઝીરો-લીકેજ ઔદ્યોગિક વાલ્વ બનાવે છે. અમદાવાદમાં સ્થિત, વૈશ્વિક સ્તરે વિશ્વસનીય.",
        "request_quote": "ભાવ પૂછો",
        "view_catalog": "કેટેલોગ જુઓ",
        "standard_title": "D.M. વાલ્વનું",
        "standard_title_bold": "ધોરણ"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
