'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { AuthForm } from '@/components/auth/AuthForm';
import { NoteList } from '@/components/notes/NoteList';
import { Session } from '@supabase/supabase-js';

export default function Home() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <AuthForm />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NoteList />
    </div>
  );
}
