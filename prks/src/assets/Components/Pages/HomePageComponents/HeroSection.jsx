import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gray-100 h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-600">Welcome to HealthBlock</h1>
        <p className="mt-4 text-xl text-gray-700">
          Revolutionizing Patient Record Keeping with Blockchain and IoT Technology.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
