import React from 'react';
import '../globals.css'; // inherit styles
import Header from '@/app/components/Header'; // adjust path if different

export default function PrivacyLayout({
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
