import { getSession } from '@/lib/session';
import { redirect } from 'next/navigation';
import AdminSidebar from '@/components/AdminSidebar';

export default async function DashboardLayout({ children }) {
  const session = await getSession();
  if (!session.user) redirect('/admin/login');

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-brand-offwhite text-brand-navy font-sans relative overflow-hidden select-none">
      <AdminSidebar user={session.user} />
      
      <main className="flex-1 p-6 md:p-10 lg:p-12 overflow-y-auto relative z-10 animate-[fadeSlideUp_0.6s_cubic-bezier(0.16,1,0.3,1)_forwards] hide-scrollbar">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes fadeSlideUp {
            from { opacity: 0; transform: translateY(16px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .hide-scrollbar::-webkit-scrollbar { display: none; }
          .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}} />
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
