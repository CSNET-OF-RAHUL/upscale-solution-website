import React from 'react';
import '../globals.css';
import Header from '@/app/components/Header'; // adjust path if needed

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
