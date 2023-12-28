import Head from 'next/head';
import Layout from '@/components/layout/MainLayout';
import Link from 'next/link';
import Navbar from '@/components/navbar';

import { useState } from 'react';
import MapCard from '@/components/MapCard';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    selectedOption: '',
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid email is required';
    }

    // Validate phone
    const phoneRegex = /^\d{10}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Valid phone number is required';
    }

    // Validate selectedOption
    if (!formData.selectedOption) {
      newErrors.selectedOption = 'Please select an option';
    }

    // Validate message
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (validateForm()) {
      // Add logic to handle form submission
      alert('Form submitted successfully');
      console.log('Form submitted:', formData);
    } else {
      console.log('Form validation failed:', errors);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="sr-only" htmlFor="name">
          Name
        </label>
        <input
          className={`w-full rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-200'} p-3 text-base`}
          placeholder="Name"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            className="w-full rounded-lg border-gray-200 p-3 text-base"
            placeholder="Email address"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="sr-only" htmlFor="phone">
            Phone Number
          </label>
          <input
            className="w-full rounded-lg border-gray-200 p-3 text-base"
            placeholder="Phone Number"
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-4 text-base">
        {['Regular', 'Deep', 'Post Renovation', 'After Party'].map((option, index) => (
          <div key={index}>
            <input
              className="peer sr-only"
              id={`option${index + 1}`}
              type="radio"
              tabIndex="-1"
              name="option"
              onChange={() => handleInputChange({ target: { name: 'selectedOption', value: option } })}
              checked={formData.selectedOption === option}
            />

            <label
              htmlFor={`option${index + 1}`}
              className={`block w-full rounded-lg border ${
                errors.selectedOption ? 'border-red-500' : 'border-gray-200'
              } p-3 text-gray-600 hover:bg-fuchsia-100 hover:border-fuchsia-100 peer-checked:border-fuchsia-100 peer-checked:bg-fuchsia-800 peer-checked:text-white`}
              tabIndex="0"
            >
              <span className="text-sm cursor-pointer">{option}</span>
            </label>
          </div>
        ))}
        {errors.selectedOption && <p className="text-red-500 text-sm mt-1">{errors.selectedOption}</p>}
      </div>

      <div>
        <label className="sr-only" htmlFor="message">
          Message
        </label>

        <textarea
          className="w-full rounded-lg border-gray-200 p-3 text-base"
          placeholder="Message"
          rows="8"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        />

        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>

      <div className="flex">
        <div className="mt-4 mr-4">
          <button
            type="submit"
            className="inline-block w-full rounded-lg bg-fuchsia-800 hover:bg-fuchsia-700 py-3 px-10 font-medium text-white sm:w-auto"
          >
            Send Enquiry
            <span className="inline-flex px-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 512 512">
                <path
                  fill="currentColor"
                  d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                />
              </svg>
            </span>
          </button>
        </div>

        <div className="mt-4">
          <Link
            href="https://wa.me/16465780645"
            className="inline-block w-full rounded-lg bg-green-700 hover:bg-green-500 py-3 px-10 font-medium text-white sm:w-auto"
          >
            Whatsapp
            <span className="inline-flex px-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 448 512">
                <path
                  fill="currentColor"
                  d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </form>
  );
};

const ContactSection = () => {
  return (
    <section className="bg-inherit mt-20 mb-0">
      <h1 className="text-3xl font-bold text-fuchsia-700 text-center mt-8 px-20">
        Quick Contact
        <span className="inline-flex px-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 640 512">
            <path
              fill="currentColor"
              d="M320 0c17.7 0 32 14.3 32 32V240c0 8.8 7.2 16 16 16s16-7.2 16-16V64c0-17.7 14.3-32 32-32s32 14.3 32 32V240c0 8.8 7.2 16 16 16s16-7.2 16-16V128c0-17.7 14.3-32 32-32s32 14.3 32 32V323.1c-11.9 4.8-21.3 14.9-25 27.8l-8.9 31.2L478.9 391C460.6 396.3 448 413 448 432c0 18.9 12.5 35.6 30.6 40.9C448.4 497.4 409.9 512 368 512H348.8c-59.6 0-116.9-22.9-160-64L76.4 341c-16-15.2-16.6-40.6-1.4-56.6s40.6-16.6 56.6-1.4l60.5 57.6c0-1.5-.1-3.1-.1-4.6V64c0-17.7 14.3-32 32-32s32 14.3 32 32V240c0 8.8 7.2 16 16 16s16-7.2 16-16V32c0-17.7 14.3-32 32-32zm-7.3 326.6c-1.1-3.9-4.7-6.6-8.7-6.6s-7.6 2.7-8.7 6.6L288 352l-25.4 7.3c-3.9 1.1-6.6 4.7-6.6 8.7s2.7 7.6 6.6 8.7L288 384l7.3 25.4c1.1 3.9 4.7 6.6 8.7 6.6s7.6-2.7 8.7-6.6L320 384l25.4-7.3c3.9-1.1 6.6-4.7 6.6-8.7s-2.7-7.6-6.6-8.7L320 352l-7.3-25.4zM104 120l48.3 13.8c4.6 1.3 7.7 5.5 7.7 10.2s-3.1 8.9-7.7 10.2L104 168 90.2 216.3c-1.3 4.6-5.5 7.7-10.2 7.7s-8.9-3.1-10.2-7.7L56 168 7.7 154.2C3.1 152.9 0 148.7 0 144s3.1-8.9 7.7-10.2L56 120 69.8 71.7C71.1 67.1 75.3 64 80 64s8.9 3.1 10.2 7.7L104 120zM584 408l48.3 13.8c4.6 1.3 7.7 5.5 7.7 10.2s-3.1 8.9-7.7 10.2L584 456l-13.8 48.3c-1.3 4.6-5.5 7.7-10.2 7.7s-8.9-3.1-10.2-7.7L536 456l-48.3-13.8c-4.6-1.3-7.7-5.5-7.7-10.2s3.1-8.9 7.7-10.2L536 408l13.8-48.3c1.3-4.6 5.5-7.7 10.2-7.7s8.9 3.1 10.2 7.7L584 408z"
            />
          </svg>
        </span>
      </h1>

      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <p className="max-w-xl text-lg">
              Contact <strong>Esthete Cleaning</strong> for <em>Superior Cleaning Services</em>. <br /> We prioritize
              excellence in cleaning services tailored to meet your specific needs. <br />
              Whether it&apos;s residential, commercial, or specialized cleaning requirements, our dedicated team is
              here to assist you. Get in touch with us today to schedule an appointment or request a quote. Our customer
              support representatives are available to address your inquiries and discuss how we can customize our
              services to accommodate your preferences.
              <br /> You can reach us via phone at{' '}
              <Link href="" className="text-base font-bold text-fuchsia-600">
                {' '}
                +1 (646)578-0645{' '}
              </Link>{' '}
              or drop us an email at <br />
              <Link
                href="mailto:esthete.cleaning@gmail.com"
                className="bg-fuchsia-300 hover:underline hover:text-fuchsia-900"
              >
                esthete.cleaning@gmail.com
                <span className="w-4 h-4 inline-flex hover:text-fuchsia-800 ">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 " viewBox="0 0 512 512">
                    <path
                      fill="currentColor"
                      d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"
                    />
                  </svg>
                </span>
              </Link>{' '}
              <br />
              Alternatively, fill out the contact form below, and we&apos;ll promptly get back to you. Experience the
              pristine cleanliness and professionalism that defines Esthete Cleaning. Contact us now!&quot;.
            </p>
          </div>

          <div className="rounded-lg bg-fuchsia-50 p-8 shadow-lg lg:col-span-3 lg:p-12">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <main className="bg-white w-full h-full">
      <ContactSection />
      <MapCard />
    </main>
  );
};

export default Contact;
