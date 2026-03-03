import React, { useEffect, useRef, useState } from 'react';
import { Play, FileText, Smartphone, Printer, ShieldCheck, Check, Star, ArrowRight, Eye } from 'lucide-react';
import { motion } from 'motion/react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

export default function App() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [viewersCount, setViewersCount] = useState(143);

  useEffect(() => {
    const interval = setInterval(() => {
      setViewersCount(prev => {
        const change = Math.floor(Math.random() * 7) - 3; // -3 to +3
        const newCount = prev + change;
        if (newCount < 120) return 120 + Math.floor(Math.random() * 5);
        if (newCount > 180) return 180 - Math.floor(Math.random() * 5);
        return newCount;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const today = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollInterval = setInterval(() => {
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left: slider.clientWidth > 300 ? 340 : 290, behavior: 'smooth' });
      }
    }, 3500);

    return () => clearInterval(scrollInterval);
  }, []);

  const scrollToPlanos = (e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('planos')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-sky-100 selection:text-sky-900">
      {/* Top Scarcity Bar */}
      <div className="bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] text-white text-center py-2 px-4 text-xs md:text-sm font-bold tracking-wide">
        🔥 OFERTA VÁLIDA SOMENTE HOJE: {today} 🔥
      </div>

      {/* Hero Section */}
      <section className="bg-[#f4f9fc] pt-10 pb-16 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 text-center"
        >
          <h1 className="text-[26px] md:text-4xl font-bold text-slate-800 leading-snug mb-4">
            <span className="text-[#17a2b8]">+200</span> Dinâmicas de <span className="text-[#17a2b8]">Matemática</span><br /> para Professores que Querem<br /> <span className="text-[#17a2b8]">Começar o Ano na Frente.</span>
          </h1>
          <p className="text-[15px] md:text-lg text-slate-500 mb-8 max-w-md mx-auto font-light leading-relaxed">
            Enquanto algumas professoras ainda buscam<br /> atividades, você já entra em sala com<br /> dinâmicas prontas e aulas bem planejadas.
          </p>

          {/* VSL Video */}
          <div className="relative w-full max-w-[320px] mx-auto rounded-xl shadow-2xl overflow-hidden mb-6">
            {React.createElement('wistia-player', { 'media-id': '6s0hbnw4q7', aspect: '0.5625' })}
          </div>

          <div className="flex items-center justify-center gap-2 text-sm text-slate-500 mb-6">
            <Eye className="w-5 h-5 text-emerald-500" />
            <span className="font-bold text-emerald-500">{viewersCount}</span> pessoas estão vendo essa oferta!
          </div>

          <motion.div 
            role="button"
            tabIndex={0}
            onClick={scrollToPlanos}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              scale: [1, 1.02, 1],
              boxShadow: [
                "0 20px 25px -5px rgba(23, 162, 184, 0.1), 0 8px 10px -6px rgba(23, 162, 184, 0.1)",
                "0 20px 25px -5px rgba(23, 162, 184, 0.4), 0 8px 10px -6px rgba(23, 162, 184, 0.2)",
                "0 20px 25px -5px rgba(23, 162, 184, 0.1), 0 8px 10px -6px rgba(23, 162, 184, 0.1)"
              ]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="bg-[#17a2b8] hover:bg-[#138496] text-white text-lg md:text-xl font-bold py-4 px-8 rounded-xl shadow-xl shadow-[#17a2b8]/20 transition-colors flex items-center justify-center mx-auto w-fit cursor-pointer"
          >
            QUERO ACESSO IMEDIATO!
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="bg-[#f8fafc] py-16 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto px-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-slate-800">O Que Você Vai Receber</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start text-left">
              <div className="w-12 h-12 bg-[#17a2b8] rounded-xl flex items-center justify-center mb-6 text-white shadow-md">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Material Completo em PDF</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">+200 dinâmicas de matemática organizadas e prontas para usar em sala de aula.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start text-left">
              <div className="w-12 h-12 bg-[#17a2b8] rounded-xl flex items-center justify-center mb-6 text-white shadow-md">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Acesso Digital Completo</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">Acesse por celular, tablet ou computador a qualquer hora, em qualquer lugar.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-start text-left">
              <div className="w-12 h-12 bg-[#17a2b8] rounded-xl flex items-center justify-center mb-6 text-white shadow-md">
                <Printer className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">Pronto para Imprimir</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed">Material formatado para impressão em qualquer tamanho de papel.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#f4f9fc] overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto px-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2 text-slate-800">Mensagens Reais de Clientes</h2>
          <p className="text-center text-slate-500 mb-10 text-[15px]">Veja o que estão dizendo sobre o material</p>
          
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto pb-8 gap-4 md:gap-6 snap-x snap-mandatory hide-scrollbar px-4 items-center"
          >
            {[
              "https://i.ibb.co/N20WjzcB/social1.png",
              "https://i.ibb.co/h1D50SN2/soccial2.jpg",
              "https://i.ibb.co/KpcXvWzh/social3.png"
            ].map((imgUrl, index) => (
              <div key={index} className="w-[85vw] max-w-[320px] md:max-w-none md:w-[450px] flex-shrink-0 snap-center rounded-2xl overflow-hidden shadow-xl border border-slate-800 bg-[#111827]">
                <img 
                  src={imgUrl} 
                  alt={`Depoimento ${index + 1}`} 
                  className="w-full h-auto block"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-400 mt-2">
            ← Arraste para ver mais →
          </p>
        </motion.div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="bg-[#f8fafc] py-16 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto px-4"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-slate-800">Escolha Seu Plano</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Plan */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Plano Básico</h3>
                <p className="text-slate-400 line-through text-lg">R$97</p>
                <div className="flex items-baseline gap-1 text-[#17a2b8]">
                  <span className="text-xl font-bold">R$</span>
                  <span className="text-5xl font-black tracking-tight">10,00</span>
                </div>
                <p className="text-sm text-slate-500 mt-1">pagamento único</p>
                <p className="text-emerald-500 font-bold mt-4 text-[15px]">
                  Você economiza R$87,00
                </p>
              </div>
              
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-[15px]">+200 Dinâmicas de Matemática PDF</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-[15px]">Acesso digital vitalício</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-[15px]">Garantia de 7 dias</span>
                </li>
              </ul>
              
              <a 
                href="https://zuckpay.com.br/checkout/200-dinamicas-de-matematica-plano-basico"
                className="w-full py-4 px-6 rounded-xl border-2 border-[#17a2b8] text-[#17a2b8] font-bold text-lg hover:bg-sky-50 transition-colors block text-center"
              >
                ESCOLHER PLANO BÁSICO
              </a>
            </div>

            {/* Premium Plan */}
            <div className="bg-white rounded-3xl p-8 border-2 border-[#17a2b8] shadow-xl relative flex flex-col transform md:-translate-y-4">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#f97316] text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 uppercase tracking-wider shadow-md">
                <Star className="w-3 h-3 fill-current" /> MAIS POPULAR
              </div>
              
              <div className="mb-6 mt-2">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">Plano Premium</h3>
                <p className="text-slate-400 line-through text-lg">R$297</p>
                <div className="flex items-baseline gap-1 text-[#17a2b8]">
                  <span className="text-xl font-bold">R$</span>
                  <span className="text-5xl font-black tracking-tight">29,90</span>
                </div>
                <p className="text-sm text-slate-500 mt-1">pagamento único</p>
                <p className="text-emerald-500 font-bold mt-4 text-[15px]">
                  Você economiza R$267,10
                </p>
                <p className="text-xs text-slate-400 mt-3">
                  +1.736 pessoas escolheram essa oferta
                </p>
              </div>
              
              <ul className="space-y-3 mb-8 flex-1">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-[15px]">+200 Dinâmicas de Matemática PDF</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-[15px]">Acesso digital vitalício</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-[15px]">BÔNUS: Kit Primeiras Aulas de Matemática</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-[15px]">BÔNUS: Jogos Matemáticos</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-[15px]">BÔNUS: Atividades extras do 1º ao 9º ano do Fundamental</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-[15px]">BÔNUS: 15 Jogos para Recuperação de Aprendizagem</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-[15px]">Atualizações mensais</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-[15px]">Suporte prioritário</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-[15px]">Garantia de 7 dias</span>
                </li>
              </ul>
              
              <a 
                href="https://zuckpay.com.br/checkout/200-dinamicas-de-matematica-plano-premium"
                className="w-full py-4 px-6 rounded-xl bg-[#17a2b8] hover:bg-[#138496] text-white font-bold text-lg transition-colors shadow-md block text-center"
              >
                ESCOLHER PLANO PREMIUM
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 bg-[#f4f9fc] px-4 text-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 text-white shadow-lg">
            <ShieldCheck className="w-8 h-8" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-800">
            Garantia <span className="text-[#17a2b8]">Incondicional</span>
          </h2>
          <p className="text-[15px] md:text-base text-slate-500 mb-8 leading-relaxed">
            Você tem <strong>7 dias</strong> para testar as +200 Dinâmicas. Se por qualquer motivo você não ficar satisfeita, devolvemos <strong className="text-[#17a2b8]">100% do seu investimento</strong>, sem perguntas.
          </p>
          
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 mb-10 max-w-lg mx-auto">
            <p className="text-emerald-600 font-medium text-[15px] leading-relaxed">
              Isso significa que o risco é todo nosso! Você pode experimentar todas as dinâmicas, usar em suas aulas e se não valer a pena, basta nos avisar.
            </p>
          </div>

          <motion.div 
            role="button"
            tabIndex={0}
            onClick={scrollToPlanos}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              scale: [1, 1.02, 1],
              boxShadow: [
                "0 20px 25px -5px rgba(23, 162, 184, 0.1), 0 8px 10px -6px rgba(23, 162, 184, 0.1)",
                "0 20px 25px -5px rgba(23, 162, 184, 0.4), 0 8px 10px -6px rgba(23, 162, 184, 0.2)",
                "0 20px 25px -5px rgba(23, 162, 184, 0.1), 0 8px 10px -6px rgba(23, 162, 184, 0.1)"
              ]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="bg-[#17a2b8] hover:bg-[#138496] text-white text-lg md:text-xl font-bold py-4 px-8 rounded-xl shadow-xl shadow-[#17a2b8]/20 transition-colors mx-auto inline-block cursor-pointer"
          >
            Quero Minhas Dinâmicas! 🤩
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#475569] text-slate-300 py-8 text-center text-xs md:text-sm">
        <div className="max-w-5xl mx-auto px-4">
          <p>© 2026 Dinâmicas de Matemática. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
