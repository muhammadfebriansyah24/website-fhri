'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const ACTIONS_BY_STATUS = {
  pending: [
    { label: 'Approve', status: 'active', style: 'hover:border-emerald-500/35 hover:text-emerald-600' },
    { label: 'Tolak', status: 'rejected', style: 'hover:border-red-500/35 hover:text-red-600' },
  ],
  active: [
    { label: 'Nonaktifkan', status: 'inactive', style: 'hover:border-amber-500/35 hover:text-amber-600' },
  ],
  inactive: [
    { label: 'Aktifkan', status: 'active', style: 'hover:border-emerald-500/35 hover:text-emerald-600' },
  ],
  rejected: [
    { label: 'Approve', status: 'active', style: 'hover:border-emerald-500/35 hover:text-emerald-600' },
    { label: 'Hapus Permanen', status: '__delete__', style: 'hover:border-red-500/35 hover:text-red-600' },
  ],
};

export default function UserActions({ user, currentUserId }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  if (user.id === currentUserId) {
    return <span className="text-slate-400 text-[9px] font-bold uppercase tracking-wider">Anda</span>;
  }

  async function handleAction(action) {
    setLoading(true);

    if (action.status === '__delete__') {
      const confirmed = confirm(`Hapus permanen ${user.name}? Tindakan ini tidak bisa dibatalkan.`);
      if (!confirmed) {
        setLoading(false);
        return;
      }
      await fetch(`/api/admin/users/${user.id}`, { method: 'DELETE' });
    } else {
      await fetch('/api/admin/users', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: user.id, status: action.status }),
      });
    }

    router.refresh();
    setLoading(false);
  }

  const actions = ACTIONS_BY_STATUS[user.status] || [];

  return (
    <div className="flex gap-2 justify-end whitespace-nowrap">
      {actions.map((action) => (
        <button
          key={action.label}
          onClick={() => handleAction(action)}
          disabled={loading}
          className={`rounded-lg border border-slate-200 bg-white text-slate-500 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider transition-all duration-300 disabled:opacity-50 cursor-pointer ${action.style}`}
        >
          {action.label}
        </button>
      ))}
    </div>
  );
}
