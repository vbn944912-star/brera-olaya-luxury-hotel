import { useState, useEffect, useRef } from 'react';
import { Language, ChatMessage } from '../types';
import { TRANSLATIONS } from '../data';
import { MessageSquare, X, Send, Sparkles, AlertCircle, Phone } from 'lucide-react';

interface VirtualConciergeProps {
  language: Language;
  onSelectPromoCode: () => void;
}

export default function VirtualConcierge({ language, onSelectPromoCode }: VirtualConciergeProps) {
  const t = TRANSLATIONS[language];
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [history, setHistory] = useState<ChatMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [errorText, setErrorText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Suggested questions to guide guest interaction
  const suggestions = language === 'ar' ? [
    { text: "ما هي مميزات الحجز المباشر؟", msg: "ما هي عروض ومميزات الحجز المباشر الموثقة لديكم؟" },
    { text: "أين يقع الفندق؟", msg: "أريد معرفة الموقع الجغرافي الدقيق والمعالم المقابلة للفندق." },
    { text: "ما هي أنواع الغرف؟", msg: "تفضل بعرض أنواع الغرف والأجنحة المتاحة ومساحاتها." },
    { text: "هل يوجد مواقف سيارات؟", msg: "هل يتوفر لديكم مواقف سيارات مجانية للنزلاء؟" }
  ] : [
    { text: "Direct booking perks?", msg: "What are the direct booking perks and special offers?" },
    { text: "Where is the hotel?", msg: "Give me the exact geographic coordinates and neighboring landmarks." },
    { text: "What room types exist?", msg: "Show me the list of premium room classifications." },
    { text: "Free private parking?", msg: "Is there secure private parking available for guests?" }
  ];

  // System greeting on first load
  useEffect(() => {
    setHistory([
      {
        id: 'welcome',
        role: 'model',
        text: t.conciergeWelcome,
        timestamp: new Date()
      }
    ]);
  }, [language, t.conciergeWelcome]);

  // Scroll downwards when history modifies
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, isOpen]);

  const handleSendMessage = async (userMsgText: string) => {
    if (!userMsgText.trim() || loading) return;

    const userMessage: ChatMessage = {
      id: Math.random().toString(),
      role: 'user',
      text: userMsgText,
      timestamp: new Date()
    };

    setHistory(prev => [...prev, userMessage]);
    setMessage('');
    setLoading(true);
    setErrorText('');

    try {
      // Map history for API
      const apiHistory = history.map(h => ({
        role: h.role,
        text: h.text
      }));

      const res = await fetch('/api/concierge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: userMsgText,
          history: apiHistory,
          language
        })
      });

      if (!res.ok) {
        throw new Error('Connection failed to Concierge Gateway');
      }

      const data = await res.json();
      
      const modelMessage: ChatMessage = {
        id: Math.random().toString(),
        role: 'model',
        text: data.response,
        timestamp: new Date()
      };

      setHistory(prev => [...prev, modelMessage]);
    } catch (err: any) {
      console.error(err);
      setErrorText(language === 'ar' ? 'فشل في الاتصال بمكتب استقبال الذكاء الاصطناعي.' : 'Unable to connect to Virtual Desk.');
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionClick = (msg: string) => {
    handleSendMessage(msg);
  };

  return (
    <>
      {/* Floating Triggers (Bottom-Right/Left depending on text direction) */}
      <div 
        className={`fixed bottom-6 ${language === 'ar' ? 'left-6' : 'right-6'} z-45 flex flex-col gap-3 items-end`}
        style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
      >
        {/* Urgent Floating WhatsApp Button */}
        <a 
          href="https://wa.me/966920000555?text=Hello%20Brera%20Olaya"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-2.5 rounded-full shadow-2xl transition-all transform hover:scale-105 active:scale-95 text-xs font-bold font-arabic border border-emerald-400/20"
        >
          <Phone size={14} className="fill-white" />
          <span>{t.whatsappBtn}</span>
        </a>

        {/* AI Virtual Concierge Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2.5 bg-deep-charcoal hover:bg-royal-gold text-royal-gold hover:text-deep-charcoal px-5 py-3 rounded-full shadow-2xl transition-all transform hover:scale-105 active:scale-95 border border-royal-gold/40 cursor-pointer"
        >
          {isOpen ? <X size={18} /> : <MessageSquare size={18} />}
          <span className="font-arabic font-bold text-xs">
            {isOpen ? (language === 'ar' ? 'إغلاق الكونسيرج' : 'Close Assistant') : t.conciergeTitle}
          </span>
          <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
        </button>
      </div>

      {/* Expandable Chat Panel */}
      {isOpen && (
        <div 
          className={`fixed bottom-24 ${language === 'ar' ? 'left-6' : 'right-6'} w-[340px] sm:w-[400px] h-[520px] bg-white rounded-2xl shadow-2xl border border-royal-gold/30 flex flex-col overflow-hidden z-45 animate-fade-in`}
          style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
        >
          {/* Header Banner */}
          <div className="bg-deep-charcoal text-white p-4 flex items-center justify-between border-b border-royal-gold/30">
            <div className="flex items-center gap-2">
              <div className="bg-royal-gold/20 p-1.5 rounded-full border border-royal-gold/30">
                <Sparkles size={16} className="text-royal-gold animate-pulse" />
              </div>
              <div>
                <h4 className="font-serif text-sm font-bold text-royal-gold uppercase tracking-wider">
                  {language === 'ar' ? 'الكونسيرج الذكي' : 'Brera Smart Concierge'}
                </h4>
                <p className="text-[10px] text-gray-400 font-arabic flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                  <span>{language === 'ar' ? 'نشط الآن لخدمتكم' : 'Online to assist you'}</span>
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-royal-gold p-1 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Micro Banner for special voucher promo code */}
          <div className="bg-luxury-ivory p-2 border-b border-royal-gold/10 flex items-center justify-between text-[11px] text-deep-charcoal font-arabic px-3">
            <span className="font-medium text-[10px] truncate max-w-[240px] text-gray-700">
              {t.specialOfferBanner}
            </span>
            <button
              onClick={onSelectPromoCode}
              className="text-royal-gold font-bold hover:underline shrink-0 text-[10px]"
            >
              {language === 'ar' ? 'نسخ الكود' : 'Copy Code'}
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-luxury-ivory/30">
            {history.map((msg) => (
              <div 
                key={msg.id}
                className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div 
                  className={`max-w-[85%] rounded-xl p-3 text-xs leading-relaxed font-arabic ${
                    msg.role === 'user' 
                      ? 'bg-deep-charcoal text-luxury-ivory rounded-br-none' 
                      : 'bg-white text-deep-charcoal border border-royal-gold/20 rounded-bl-none shadow'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[9px] text-gray-500 mt-1 font-mono px-1">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            ))}

            {loading && (
              <div className="flex flex-col items-start">
                <div className="bg-white border border-royal-gold/15 rounded-xl p-3 rounded-bl-none shadow flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-royal-gold animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-royal-gold animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-1.5 h-1.5 rounded-full bg-royal-gold animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            )}

            {errorText && (
              <div className="bg-red-50 text-red-700 border border-red-200 rounded-lg p-3 text-xs flex items-center gap-2 font-arabic select-none">
                <AlertCircle size={14} className="shrink-0" />
                <span>{errorText}</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions panel when input is empty */}
          <div className="p-2 border-t border-gray-100 bg-white">
            <div className="flex flex-wrap gap-1.5 overflow-x-auto py-1">
              {suggestions.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSuggestionClick(s.msg)}
                  className="bg-luxury-ivory hover:bg-royal-gold/10 border border-royal-gold/20 hover:border-royal-gold text-deep-charcoal text-[10px] font-bold py-1 px-2.5 rounded-full transition-all shrink-0 cursor-pointer text-right font-arabic"
                >
                  {s.text}
                </button>
              ))}
            </div>
          </div>

          {/* Input Panel */}
          <div className="p-3 bg-white border-t border-royal-gold/20">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(message)}
                placeholder={t.conciergePlaceholder}
                className="flex-1 border border-royal-gold/20 focus:border-royal-gold rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-royal-gold font-arabic"
              />
              <button
                onClick={() => handleSendMessage(message)}
                disabled={!message.trim() || loading}
                className="bg-deep-charcoal hover:bg-royal-gold text-royal-gold hover:text-deep-charcoal px-3.5 py-2 rounded-lg transition-all shrink-0 cursor-pointer disabled:opacity-50 flex items-center justify-center"
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
