import React from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <nav className="fixed top-0 left-0 right-0 bg-[var(--nav-bg)] backdrop-blur-md bg-opacity-80 z-50">
        <div className="mx-auto max-w-7xl px-4 h-16 flex items-center">
          <Link href="/" className="text-2xl font-bold text-[var(--foreground)] hover:text-blue-400 transition-colors">
            EduTube
          </Link>
        </div>
      </nav>
      <main className="pt-24 pb-10">
        <div className="mx-auto max-w-7xl px-4">
          {children}
        </div>
      </main>
    </div>
  );
}
