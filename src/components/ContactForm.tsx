import { useState, FormEvent } from 'react';
import { Send, Mail, Phone as PhoneIcon, Building2, User, CheckCircle2, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('lead_requests')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company
          }
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage('Произошла ошибка. Попробуйте еще раз.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact-form" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative scroll-mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#00e676] mb-6 px-5 py-2.5 glass rounded-full glow-effect">
                <div className="w-2 h-2 rounded-full bg-[#00e676] animate-pulse"></div>
                Контакты
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
                Запросите демонстрацию 24SHELF
                <span className="gradient-text block mt-2">сегодня!</span>
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-light mb-8">
                Оставьте заявку, и наш эксперт свяжется с вами.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:hello@24ttl.net"
                className="glass-card px-6 py-5 rounded-2xl flex items-center gap-4 hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00e676]/20 to-[#00e676]/5 flex items-center justify-center group-hover:from-[#00e676]/30 group-hover:to-[#00e676]/10 transition-all duration-300 shimmer">
                  <Mail className="w-6 h-6 text-[#00e676]" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Email</div>
                  <div className="text-lg font-semibold text-white">hello@24ttl.net</div>
                </div>
              </a>

              <a
                href="tel:+74951460098"
                className="glass-card px-6 py-5 rounded-2xl flex items-center gap-4 hover:scale-[1.02] transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00e676]/20 to-[#00e676]/5 flex items-center justify-center group-hover:from-[#00e676]/30 group-hover:to-[#00e676]/10 transition-all duration-300 shimmer">
                  <PhoneIcon className="w-6 h-6 text-[#00e676]" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Телефон</div>
                  <div className="text-lg font-semibold text-white">+7 (495) 146-00-98</div>
                </div>
              </a>
            </div>
          </div>

          <div className="glass-card p-6 sm:p-8 lg:p-10 rounded-3xl depth-shadow">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-200">
                  Имя <span className="text-[#00e676]">*</span>
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none transition-colors">
                    <User className="w-5 h-5 text-gray-400 group-focus-within:text-[#00e676] transition-colors" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Иван Иванов"
                    className="w-full pl-12 pr-4 py-3.5 glass-input rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-200">
                  Email <span className="text-[#00e676]">*</span>
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-gray-400 group-focus-within:text-[#00e676] transition-colors" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="ivan@company.ru"
                    className="w-full pl-12 pr-4 py-3.5 glass-input rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-200">
                  Телефон
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <PhoneIcon className="w-5 h-5 text-gray-400 group-focus-within:text-[#00e676] transition-colors" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (999) 123-45-67"
                    className="w-full pl-12 pr-4 py-3.5 glass-input rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="block text-sm font-semibold text-gray-200">
                  Компания
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Building2 className="w-5 h-5 text-gray-400 group-focus-within:text-[#00e676] transition-colors" />
                  </div>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder='ООО "Название компании"'
                    className="w-full pl-12 pr-4 py-3.5 glass-input rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-3 p-4 glass-card border border-[#00e676]/50 rounded-xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#00e676]/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-[#00e676]" />
                  </div>
                  <p className="text-sm text-[#00e676] font-medium leading-relaxed">
                    Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.
                  </p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center gap-3 p-4 glass-card border border-red-500/50 rounded-xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                    <AlertCircle className="w-5 h-5 text-red-400" />
                  </div>
                  <p className="text-sm text-red-400 font-medium">{errorMessage}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary text-black px-8 py-4 rounded-xl font-bold text-lg inline-flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed relative z-10"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                    Отправка...
                  </>
                ) : (
                  <>
                    Отправить заявку
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <p className="text-xs text-center text-gray-500 leading-relaxed">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
