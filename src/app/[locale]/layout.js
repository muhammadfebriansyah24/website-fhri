import "../globals.css";

export default function MaintenanceLayout({ params }) {
  const locale = params?.locale || "en";

  return (
    // Tag html dan body dikembalikan agar Next.js tidak error
    <html lang={locale}>
      <body className="m-0 p-0 overflow-hidden bg-[#00263C]">
        
        {/* Tag main ini bertindak sebagai "tirai" penutup fullscreen yang ada di atas body */}
        <main className="fixed inset-0 z-[9999] w-screen h-screen overflow-hidden flex items-center justify-center bg-[#00263C] text-white m-0 p-0">
          
          {/* --- BACKGROUND ORNAMENTS --- */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Dot Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#FFFFFF 2px, transparent 2px)', backgroundSize: '35px 35px' }}></div>
            {/* Red Accent Glow */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#DC2626]/20 rounded-full blur-3xl"></div>
            {/* Gold Accent Glow */}
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#C9A227]/10 rounded-full blur-3xl"></div>
          </div>

          {/* --- MAIN CONTENT --- */}
          <div className="relative z-10 w-full max-w-2xl mx-auto text-center flex flex-col items-center px-6">
            
            {/* Eyebrow Label with Blinking Status Indicator */}
            <span className="text-sm font-bold uppercase tracking-[0.3em] text-[#DC2626] mb-6 inline-flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DC2626] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#DC2626]"></span>
              </span>
              System Under Maintenance
            </span>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Scheduled Maintenance <br className="hidden md:block" /> in Progress
            </h1>

            {/* Paragraph */}
            <p className="text-lg text-slate-300 mb-10 max-w-lg mx-auto leading-relaxed">
              We are currently upgrading our infrastructure to deliver a better HR learning experience and platform performance. We will be back online shortly.
            </p>

            {/* Simple Animation Indicator */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 md:w-16 h-[2px] bg-slate-700 rounded-full overflow-hidden">
                <div className="w-full h-full bg-[#DC2626] animate-pulse"></div>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Please Wait</span>
              <div className="w-12 md:w-16 h-[2px] bg-slate-700 rounded-full overflow-hidden">
                <div className="w-full h-full bg-[#DC2626] animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              </div>
            </div>

          </div>
        </main>

      </body>
    </html>
  );
}