import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

function ContactPage() {
  return (
    <>
      <Header />
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed text-center mb-8">
          Have any questions or inquiries? Feel free to get in touch with us by filling out the form below!
        </p>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;
