import React from 'react';
import { SparklesCore } from '../../UI/SparklesCore';

const HeroSection = () => {
  return (
    <section className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      {/* Sparkles Background */}
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      
      {/* Main Content */}
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Revolutionizing Healthcare with Blockchain & IoT
      </h1>
      <p className="mt-4 text-xl text-gray-300 relative z-20 text-center max-w-2xl">
        Secure, real-time patient record management that ensures privacy and access control with next-gen technology.
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 relative z-20">
        Learn More
      </button>
    </section>
  );
};

export default HeroSection;
