import React from 'react';
import Header from '../Components/Header'; // Adjust the path as necessary
import Footer from '../Components/Footer'; // Adjust the path as necessary

const Page = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Page;
