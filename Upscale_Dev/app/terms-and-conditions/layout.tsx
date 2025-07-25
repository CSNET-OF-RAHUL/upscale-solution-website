import React from 'react';
import '../globals.css';
import Header from '@/app/components/Header'; 
import ScrollToTop from '../components/ScrollToTop';


export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
  <ScrollToTop />
  {children}
    </>
  );
}
