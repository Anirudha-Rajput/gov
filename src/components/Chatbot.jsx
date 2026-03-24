import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Sparkles, Loader2, BrainCircuit, MessageSquareCode, Send, User, X, MessageCircle } from 'lucide-react';
import { schemes } from '../data/schemes';

const Chatbot = ({ lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, loading, isOpen]);

  // 🧠 MOCK RESPONSE LOGIC (Demo Move)
  const getMockResponse = (input) => {
    const text = input.toLowerCase();
    
    if (text.includes('kisan') || text.includes('farmer')) {
      return lang === 'hi' 
        ? "### 🌾 Pradhan Mantri Kisan Samman Nidhi (PM-Kisan)\n\nYeh Bharat Sarkar ki ek badi yojana hai jo chote aur simant kisano ko aarthik sahayata deti hai.\n\n**✨ Viseshtayen (Benefits):**\n- Saal mein ₹6,000 milte hain.\n- Yeh amount ₹2,000 ki 3 kishton (installments) mein seedhe bank account mein aata hai (DBT).\n\n**✅ Eligibility:**\n- Sabhi kisan parivar jinke naam par kheti ki zameen hai.\n- Institutional landholders aur tax bhugtan karne wale log isme shamil nahi hain.\n\nAap officially PM-Kisan portal par jaakar apna status check kar sakte hain."
        : "### 🌾 Pradhan Mantri Kisan Samman Nidhi (PM-Kisan)\n\nThis is a central sector scheme that provides income support to all landholding farmers' families in the country.\n\n**✨ Key Benefits:**\n- Financial benefit of ₹6,000 per year.\n- Transferred directly to the bank accounts in 3 equal installments of ₹2,000 each via Direct Benefit Transfer (DBT).\n\n**✅ Eligibility Criteria:**\n- All landholding farmer families with cultivable landholding in their names.\n- Certain exclusion categories exist (like institutional landholders, income tax payers, etc.).";
    }
    
    if (text.includes('awas') || text.includes('housing') || text.includes('ghar') || text.includes('pmay')) {
      return lang === 'hi'
        ? "### 🏠 Pradhan Mantri Awas Yojana (PMAY)\n\nIs yojana ka lakshya 2024 tak sabhi ke liye 'Pakka Ghar' sunishchit karna hai. Iske do bhaag hain: PMAY-Urban aur PMAY-Gramin.\n\n**✨ Viseshtayen (Benefits):**\n- Ghar kharidne ya banane ke liye loan par Interest Subsidy (CLSS).\n- Maximum subsidy ₹2.67 lakh tak mil sakti hai.\n- Mahilaon ko property ownership mein prathmikta milti hai.\n\n**✅ Eligibility:**\n- Pariwar ke paas desh mein kahin bhi pakka ghar nahi hona chahiye.\n- EWS (Economically Weaker Section) aur LIG (Low Income Group) categories ko target kiya gaya hai."
        : "### 🏠 Pradhan Mantri Awas Yojana (PMAY)\n\nLaunched with the aim to provide 'Housing for All'. It is segregated into two parts: PMAY-Urban and PMAY-Gramin.\n\n**✨ Key Benefits:**\n- Credit Linked Subsidy Scheme (CLSS) offers interest subsidy on home loans.\n- Maximum subsidy up to ₹2.67 Lakhs.\n- Promotes women empowerment by ensuring property ownership in their name.\n\n**✅ Eligibility Criteria:**\n- The beneficiary family should not own a pucca house anywhere in India.\n- Targets EWS (Economically Weaker Section) and LIG (Low Income Group) families.";
    }

    if (text.includes('health') || text.includes('ayushman') || text.includes('swasthya') || text.includes('hospital')) {
      return lang === 'hi'
        ? "### 🏥 Ayushman Bharat (PM-JAY)\n\nYeh duniya ki sabse badi government-funded health insurance scheme hai.\n\n**✨ Viseshtayen (Benefits):**\n- Har saal pratyek parivar ko ₹5 Lakh tak ka health cover milta hai.\n- Secondary aur tertiary care hospitalization cover hota hai.\n- Cashless aur paperless access milta hai empanelled hospitals mein.\n\n**✅ Eligibility:**\n- SECC-2011 (Socio Economic and Caste Census) data ke aadhar par eligible pariwaron ko identify kiya gaya hai.\n- Koi parivar ki aakar ya umar ki seema nahi hai."
        : "### 🏥 Ayushman Bharat (PM-JAY)\n\nIt is the world's largest government-funded health insurance scheme.\n\n**✨ Key Benefits:**\n- Provides a health cover of ₹5 Lakhs per family per year.\n- Covers secondary and tertiary care hospitalization.\n- Completely cashless and paperless access to services at empanelled hospitals.\n\n**✅ Eligibility Criteria:**\n- Beneficiaries are identified based on the socio-economic and caste census (SECC) 2011 data.\n- No cap on family size, age, or gender.";
    }

    if (text.includes('student') || text.includes('scholarship') || text.includes('education') || text.includes('padhai')) {
        return lang === 'hi'
          ? "### 🎓 National Scholarship Portal (NSP)\n\nSarkar students ke liye kai tarah ki scholarships chalati hai (Pre-matric, Post-matric, aur Merit-based).\n\n**✨ Kuch Pramukh Scholarships:**\n- **Minority Scholarships:** MoMA dwara chalayi jati hain.\n- **SC/ST/OBC Scholarships:** Social Justice ministry dwara di jati hain.\n- **Pragati Scholarship:** AICTE dwara girls ki technical education ke liye.\n\n**💡 Tip:** Aapko National Scholarship Portal par check karna chahiye jahan ek application bharkar aap apni eligibility match kar sakte hain."
          : "### 🎓 Government Scholarships for Students\n\nThe government offers various scholarships (Pre-matric, Post-matric, and Merit-cum-Means) hosted on the National Scholarship Portal (NSP).\n\n**✨ Key Categories:**\n- Scholarships for Minorities (MoMA).\n- Scholarships for SC/ST/OBC categories.\n- Pragati Scholarship for girl students pursuing technical education.\n\n**💡 Tip:** Visit the National Scholarship Portal to find schemes you are uniquely eligible for through a single application process.";
    }

    if (text.includes('business') || text.includes('startup') || text.includes('mudra') || text.includes('loan')) {
         return lang === 'hi'
          ? "### 💼 Pradhan Mantri Mudra Yojana (PMMY)\n\nNon-corporate, non-farm small/micro enterprises ko ₹10 lakh tak ka loan dene ki scheme hai.\n\n**✨ 3 Categories:**\n1. **Shishu:** ₹50,000 tak ka loan.\n2. **Kishore:** ₹50,000 se ₹5 Lakh tak ka loan.\n3. **Tarun:** ₹5 Lakh se ₹10 Lakh tak ka loan.\n\nBank, NBFCs aur Micro Finance Institutions ye loans dete hain. Collateral (girvi) rakhne ki zarurat nahi hoti hai."
          : "### 💼 Pradhan Mantri Mudra Yojana (PMMY)\n\nA scheme to provide loans up to ₹10 Lakh to the non-corporate, non-farm small/micro enterprises.\n\n**✨ 3 Loan Categories:**\n1. **Shishu:** Loans up to ₹50,000.\n2. **Kishore:** Loans from ₹50,000 to ₹5 Lakh.\n3. **Tarun:** Loans from ₹5 Lakh to ₹10 Lakh.\n\nThese loans are provided by Commercial Banks, RRBs, SFBs, Cooperative Banks, MFIs, and NBFCs, usually without requiring collateral.";
    }

    if (text.includes('eligibility') || text.includes('kaise') || text.includes('apply')) {
      return lang === 'hi'
        ? "✅ Aap specific scheme ki details jaanne ke liye hamare **'Eligibility Checker'** tool ka use kar sakte hain jo top menu mein hai. Wahan apni jankari daal kar aap dekh sakte hain ki aap kis yojana ke kabil hain.\n\nApply karne ke liye har scheme ka alag official portal hota hai jiska link scheme details mein diya gaya hai."
        : "✅ To check which exact schemes you qualify for, please use our **'Eligibility Checker'** wizard in the top navigation. \n\nApplication processes vary per scheme, usually requiring registration on their respective official government portals.";
    }

    return lang === 'hi'
      ? "Namaste! Main **Scheme Sahayak** hoon. Aap kisi bhi sarkari yojana ke baare mein mujhse jankari maang sakte hain.\n\nAap inse related sawal pooch sakte hain:\n- 🌾 Kisan (PM-Kisan)\n- 🏠 Awas (PMAY)\n- 🏥 Swasthya (Ayushman)\n- 🎓 Education/Scholarship\n- 💼 Business Loans (Mudra)"
      : "Namaste! I am **Scheme Sahayak**, your personal assistant for Government Schemes.\n\nFeel free to ask me details about:\n- 🌾 Farming (PM-Kisan)\n- 🏠 Housing (PMAY)\n- 🏥 Health Insurance (Ayushman)\n- 🎓 Education/Scholarships\n- 💼 Business Loans (Mudra)";
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!userInput.trim() || loading) return;

    const userMsg = userInput.trim();
    setUserInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);

    setLoading(true);

    // Simulate thinking delay for demo feel
    setTimeout(() => {
      const responseText = getMockResponse(userMsg);
      setMessages(prev => [...prev, { role: 'ai', content: responseText }]);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'var(--primary)',
          color: 'white',
          border: 'none',
          boxShadow: '0 10px 25px rgba(79, 70, 229, 0.4)',
          cursor: 'pointer',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)'
        }}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {isOpen && (
        <div 
          className="glass-panel animate-fade-in"
          style={{
            position: 'fixed',
            bottom: '6.5rem',
            right: '2rem',
            width: '380px',
            maxWidth: 'calc(100vw - 4rem)',
            height: '550px',
            maxHeight: 'calc(100vh - 10rem)',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0 20px 50px rgba(0,0,0,0.4)',
            border: '1px solid var(--glass-border)',
            borderRadius: '1.5rem'
          }}
        >
          <div style={{ padding: '1rem 1.5rem', background: 'rgba(79, 70, 229, 0.15)', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{ background: 'var(--primary)', padding: '0.5rem', borderRadius: '10px' }}>
              <BrainCircuit size={20} color="white" />
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700 }}>Scheme Sahayak</h3>
              <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)' }}>Demo Mode • Offline Active</p>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
              <X size={20} />
            </button>
          </div>

          <div style={{ flex: 1, overflowY: 'auto', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1.25rem', background: 'rgba(15, 23, 42, 0.3)' }}>
            {messages.length === 0 && (
              <div style={{ textAlign: 'center', marginTop: '3rem', color: 'var(--text-muted)' }}>
                <div style={{ width: '60px', height: '60px', background: 'var(--glass)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  <MessageSquareCode size={30} style={{ opacity: 0.3 }} />
                </div>
                <p style={{ fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.5rem' }}>Namaste! Main Government Schemes ke baare mein aapki help kar sakta hoon.</p>
                <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {['PM-Kisan details', 'PMAY eligibility', 'Ayushman Bharat benefits'].map(txt => (
                    <button 
                      key={txt}
                      onClick={() => {
                        const fakeEvent = { preventDefault: () => {} };
                        setUserInput(txt);
                        // Using timeout to let state update before manual send call if needed, but easier to just let user click send
                      }}
                      style={{ background: 'var(--glass)', border: '1px solid var(--glass-border)', color: 'var(--text-muted)', padding: '0.5rem', borderRadius: '0.5rem', fontSize: '0.75rem', cursor: 'pointer' }}
                    >
                      "{txt}"
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {messages.map((msg, idx) => (
              <div key={idx} style={{ alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start', maxWidth: '85%', display: 'flex', gap: '0.75rem', flexDirection: msg.role === 'user' ? 'row-reverse' : 'row' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: msg.role === 'user' ? 'rgba(255,255,255,0.1)' : 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {msg.role === 'user' ? <User size={16} /> : <BrainCircuit size={16} color="white" />}
                </div>
                <div style={{ 
                  background: msg.role === 'user' ? 'rgba(79, 70, 229, 0.3)' : 'rgba(255,255,255,0.05)', 
                  padding: '0.8rem 1rem', 
                  borderRadius: msg.role === 'user' ? '1rem 0.2rem 1rem 1rem' : '0.2rem 1rem 1rem 1rem',
                  fontSize: '0.9rem',
                  lineHeight: '1.5',
                  border: '1px solid var(--glass-border)',
                  color: 'var(--text-main)'
                }}>
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </div>
              </div>
            ))}
            
            {loading && (
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Loader2 size={16} color="white" className="animate-spin" />
                </div>
                <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.8rem 1rem', borderRadius: '0.2rem 1rem 1rem 1rem', border: '1px solid var(--glass-border)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  Typing...
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div style={{ padding: '1.25rem', borderTop: '1px solid var(--glass-border)', background: 'rgba(15, 23, 42, 0.5)' }}>
            <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '0.5rem', position: 'relative' }}>
              <input 
                type="text" 
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ask about schemes..."
                disabled={loading}
                style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '0.75rem',
                  padding: '0.8rem 1rem',
                  paddingRight: '3rem',
                  color: 'white',
                  outline: 'none',
                  fontSize: '0.9rem'
                }}
              />
              <button 
                type="submit" 
                disabled={loading || !userInput.trim()}
                style={{
                  position: 'absolute',
                  right: '5px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'var(--primary)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.6rem',
                  width: '35px',
                  height: '35px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  opacity: loading || !userInput.trim() ? 0.5 : 1
                }}
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;