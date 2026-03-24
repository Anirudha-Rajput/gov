export const schemes = [
  {
    id: 1,
    title: { en: "Pradhan Mantri Awas Yojana (PMAY)", hi: "प्रधानमंत्री आवास योजना (PMAY)" },
    category: { en: "Housing", hi: "आवास" },
    ministry: { en: "Ministry of Housing and Urban Affairs", hi: "आवास और शहरी मामलों के मंत्रालय" },
    description: { 
      en: "Aiming to provide housing for all by providing affordable homes with subsidies on interest for home loans.",
      hi: "होम लोन के ब्याज पर सब्सिडी के साथ किफायती घर प्रदान करके सभी के लिए आवास प्रदान करने का लक्ष्य।"
    },
    benefits: {
      en: ["Subsidy of up to 2.67 Lakhs on home loans", "Priority for women, SC, ST, and EWS categories", "Sustainable and eco-friendly construction materials"],
      hi: ["होम लोन पर 2.67 लाख तक की सब्सिडी", "महिलाओं, अनुसूचित जाति, अनुसूचित जनजाति और ईडब्ल्यूएस श्रेणियों के लिए प्राथमिकता", "स्थायी और पर्यावरण के अनुकूल निर्माण सामग्री"]
    },
    eligibility: {
      en: ["Annual income below ₹18 Lakhs", "Applicant must not own a pucca house in India", "Beneficiary must be an Indian citizen"],
      hi: ["वार्षिक आय ₹18 लाख से कम", "आवेदक के पास भारत में एक पक्का घर नहीं होना चाहिए", "लाभार्थी एक भारतीय नागरिक होना चाहिए"]
    },
    applicationUrl: "https://pmay-urban.gov.in/",
    documents: {
      en: ["Aadhaar Card", "Income Certificate", "Identity Proof", "Address Proof"],
      hi: ["आधार कार्ड", "आय प्रमाण पत्र", "पहचान प्रमाण", "पता प्रमाण"]
    },
    stats: {
      beneficiaries: { en: "1.2 Crore+", hi: "1.2 करोड़+" },
      budget: { en: "₹2.01 Lakh Crore", hi: "₹2.01 लाख करोड़" },
      launched: "2015"
    }
  },
  {
    id: 2,
    title: { en: "Ayushman Bharat - PMJAY", hi: "आयुष्मान भारत - PMJAY" },
    category: { en: "Health", hi: "स्वास्थ्य" },
    ministry: { en: "Ministry of Health and Family Welfare", hi: "स्वास्थ्य और परिवार कल्याण मंत्रालय" },
    description: { 
      en: "The world's largest health insurance scheme providing health cover of ₹5 Lakhs per family per year for secondary and tertiary care hospitalization.",
      hi: "दुनिया की सबसे बड़ी स्वास्थ्य बीमा योजना जो माध्यमिक और तृतीयक देखभाल अस्पताल में भर्ती होने के लिए प्रति परिवार प्रति वर्ष ₹5 लाख का स्वास्थ्य कवर प्रदान करती है।"
    },
    benefits: {
      en: ["Cashless treatment at empaneled hospitals", "Coverage for 1393 medical procedures", "Pre and post-hospitalization expenses covered"],
      hi: ["पैनल में शामिल अस्पतालों में कैशलेस उपचार", "1393 चिकित्सा प्रक्रियाओं के लिए कवरेज", "अस्पताल में भर्ती होने से पहले और बाद के खर्च शामिल"]
    },
    eligibility: {
      en: ["Socio-Economic Caste Census (SECC) database families", "Low-income workers/labourers", "No age, gender, or family size limit"],
      hi: ["सामाजिक-आर्थिक जाति जनगणना (SECC) डेटाबेस परिवार", "कम आय वाले श्रमिक/मजदूर", "आयु, लिंग या परिवार के आकार की कोई सीमा नहीं"]
    },
    applicationUrl: "https://pmjay.gov.in/",
    documents: {
      en: ["Aadhaar Card/Ration Card", "PMJAY ID/Letter", "Mobile Number Verification"],
      hi: ["आधार कार्ड/राशन कार्ड", "PMJAY आईडी/पत्र", "मोबाइल नंबर सत्यापन"]
    },
    stats: {
      beneficiaries: { en: "50 Crore+", hi: "50 करोड़+" },
      budget: { en: "₹6,400 Crore (Annual)", hi: "₹6,400 करोड़ (वार्षिक)" },
      launched: "2018"
    }
  },
  {
    id: 3,
    title: { en: "PM-Kisan Samman Nidhi", hi: "PM-किसान सम्मान निधि" },
    category: { en: "Agriculture", hi: "कृषि" },
    ministry: { en: "Ministry of Agriculture & Farmers Welfare", hi: "कृषि और किसान कल्याण मंत्रालय" },
    description: { 
      en: "An initiative by the Government of India in which all farmers will get up to ₹6,000 per year as minimum income support.",
      hi: "भारत सरकार की एक पहल जिसमें सभी किसानों को न्यूनतम आय सहायता के रूप में प्रति वर्ष ₹6,000 तक मिलेंगे।"
    },
    benefits: {
      en: ["Direct Benefit Transfer (DBT) of ₹6,000", "Equal quarterly installments of ₹2,000", "No middleman involved"],
      hi: ["₹6,000 का प्रत्यक्ष लाभ हस्तांतरण (DBT)", "₹2,000 की समान त्रैमासिक किस्तें", "कोई बिचौलिया शामिल नहीं"]
    },
    eligibility: {
      en: ["Small and marginal farmers", "Owning cultivable land up to 2 hectares", "Registered on PM-Kisan portal"],
      hi: ["छोटे और सीमांत किसान", "2 हेक्टेयर तक कृषि योग्य भूमि के मालिक", "PM-Kisan पोर्टल पर पंजीकृत"]
    },
    applicationUrl: "https://pmkisan.gov.in/",
    documents: {
      en: ["Land Ownership Documents", "Aadhaar Card", "Bank Account Details"],
      hi: ["भूमि स्वामित्व दस्तावेज", "आधार कार्ड", "बैंक खाता विवरण"]
    },
    stats: {
      beneficiaries: { en: "11 Crore+", hi: "11 करोड़+" },
      budget: { en: "₹75,000 Crore", hi: "₹75,000 करोड़" },
      launched: "2019"
    }
  },
  {
    id: 4,
    title: { en: "Startup India Initiative", hi: "स्टार्टअप इंडिया पहल" },
    category: { en: "Business", hi: "व्यवसाय" },
    ministry: { en: "Ministry of Commerce and Industry", hi: "वाणिज्य और उद्योग मंत्रालय" },
    description: { 
      en: "A flagship initiative of the Government of India, intended to build a strong ecosystem that is conducive for the growth of startup businesses.",
      hi: "भारत सरकार की एक प्रमुख पहल, जिसका उद्देश्य एक मजबूत पारिस्थितिकी तंत्र का निर्माण करना है जो स्टार्टअप व्यवसायों के विकास के लिए अनुकूल हो।"
    },
    benefits: {
      en: ["Tax exemptions for 3 consecutive years", "Fast-tracking of patent applications", "Credit Guarantee Fund of ₹2,000 Crore"],
      hi: ["लगातार 3 वर्षों के लिए कर छूट", "पेटेंट आवेदनों की फास्ट-ट्रैकिंग", "₹2,000 करोड़ का क्रेडिट गारंटी कोष"]
    },
    eligibility: {
      en: ["Entity incorporated as Pvt Ltd/LLP/Partnership", "Turnover less than ₹100 Crore", "Operating for less than 10 years"],
      hi: ["प्राथमिकता Pvt Ltd/LLP/साझेदारी के रूप में शामिल इकाई", "टर्नओवर ₹100 करोड़ से कम", "10 वर्षों से कम समय के लिए परिचालन"]
    },
    applicationUrl: "https://www.startupindia.gov.in/",
    documents: {
      en: ["Incorporation Certificate", "Brief Description of Innovativeness", "Letter of Recommendation (optional)"],
      hi: ["निगमन प्रमाण पत्र", "नवाचार का संक्षिप्त विवरण", "सिफारिश पत्र (वैकल्पिक)"]
    },
    stats: {
      beneficiaries: { en: "60,000+ Startups", hi: "60,000+ स्टार्टअप" },
      budget: { en: "₹10,000 Crore Fund", hi: "₹10,000 करोड़ फंड" },
      launched: "2016"
    }
  },
  {
    id: 5,
    title: { en: "Ujjwala Yojana 2.0", hi: "उज्ज्वला योजना 2.0" },
    category: { en: "Social Welfare", hi: "समाज कल्याण" },
    ministry: { en: "Ministry of Petroleum and Natural Gas", hi: "पेट्रोलियम और प्राकृतिक गैस मंत्रालय" },
    description: { 
      en: "Providing clean cooking fuel like LPG to rural and deprived households which were otherwise using traditional cooking fuels.",
      hi: "ग्रामीण और वंचित परिवारों को एलपीजी जैसे स्वच्छ खाना पकाने के ईंधन प्रदान करना जो अन्यथा पारंपरिक खाना पकाने के ईंधन का उपयोग कर रहे थे।"
    },
    benefits: {
      en: ["Free LPG connection with first refill", "Free stove (hotplate) included", "EMI facility for subsequent refills"],
      hi: ["पहली रिफिल के साथ मुफ्त एलपीजी कनेक्शन", "मुफ्त स्टोव (हॉटप्लेट) शामिल", "बाद के रिफिल के लिए ईएमआई सुविधा"]
    },
    eligibility: {
      en: ["Adult women from BPL households", "Should not have existing LPG connection", "Priority for SC/ST and forest dwellers"],
      hi: ["बीपीएल परिवारों की वयस्क महिलाएं", "मौजूदा एलपीजी कनेक्शन नहीं होना चाहिए", "अनुसूचित जाति/अनुसूचित जनजाति और वनवासियों के लिए प्राथमिकता"]
    },
    applicationUrl: "https://www.pmuy.gov.in/",
    documents: {
      en: ["KYC (Aadhaar/Ration Card)", "Bank Account Details", "BPL Certificate"],
      hi: ["केवाईसी (आधार/राशन कार्ड)", "बैंक खाता विवरण", "बीपीएल प्रमाण पत्र"]
    },
    stats: {
      beneficiaries: { en: "9 Crore+", hi: "9 करोड़+" },
      budget: { en: "₹1,600 Crore (Extra allocation)", hi: "₹1,600 करोड़ (अतिरिक्त आवंटन)" },
      launched: "2021"
    }
  },
  {
    id: 6,
    title: { en: "Skill India Mission", hi: "स्किल इंडिया मिशन" },
    category: { en: "Education", hi: "शिक्षा" },
    ministry: { en: "Ministry of Skill Development and Entrepreneurship", hi: "कौशल विकास और उद्यमिता मंत्रालय" },
    description: { 
      en: "An initiative to provide market-relevant skills training to over 40 crore people in India by 2022.",
      hi: "2022 तक भारत में 40 करोड़ से अधिक लोगों को बाजार-प्रासंगिक कौशल प्रशिक्षण प्रदान करने की एक पहल।"
    },
    benefits: {
      en: ["Free vocational training", "National Skill Qualification Framework (NSQF) certification", "Placement assistance"],
      hi: ["मुफ्त व्यावसायिक प्रशिक्षण", "राष्ट्रीय कौशल योग्यता ढांचा (NSQF) प्रमाणन", "प्लेसमेंट सहायता"]
    },
    eligibility: {
      en: ["Indian youth aged 15-45", "School/College dropouts", "Unemployed youth"],
      hi: ["15-45 वर्ष की आयु के भारतीय युवा", "स्कूल/कॉलेज ड्रॉपआउट", "बेरोजगार युवा"]
    },
    applicationUrl: "https://www.skillindia.gov.in/",
    documents: {
      en: ["Aadhaar Card", "Educational Certificates", "Photographs"],
      hi: ["आधार कार्ड", "शैक्षिक प्रमाण पत्र", "तस्वीरें"]
    },
    stats: {
      beneficiaries: { en: "1.2 Crore per year", hi: "1.2 करोड़ प्रति वर्ष" },
      budget: { en: "₹12,000 Crore", hi: "₹12,000 करोड़" },
      launched: "2015"
    }
  }
];
