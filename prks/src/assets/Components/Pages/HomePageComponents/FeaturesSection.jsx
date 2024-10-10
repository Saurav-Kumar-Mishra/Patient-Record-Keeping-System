import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-blue-600 mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Blockchain */}
          <div className="p-6 bg-gray-100 rounded-lg text-black">
            <h3 className="text-2xl font-bold mb-4">Blockchain</h3>
            <p>Secure and immutable data storage, ensuring patient data is tamper-proof.</p>
          </div>
          {/* IoT */}
          <div className="p-6 bg-gray-100 rounded-lg text-black ">
            <h3 className="text-2xl font-bold mb-4">IoT Integration</h3>
            <p>Real-time health monitoring with IoT-enabled devices for seamless data collection.</p>
          </div>
          {/* Security */}
          <div className="p-6 bg-gray-100 rounded-lg text-black">
            <h3 className="text-2xl font-bold mb-4">Top Security</h3>
            <p>Advanced encryption and authentication to protect patient records.</p>
          </div>
          {/* Data Privacy */}
          <div className="p-6 bg-gray-100 rounded-lg text-black">
            <h3 className="text-2xl font-bold mb-4">Data Privacy</h3>
            <p>Only authorized personnel can access sensitive medical information.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
