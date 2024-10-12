import React from 'react';

const HowItWorksSection = () => {
  return (
    <section className=" py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold text-blue-600 mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="p-6 bg-black rounded-lg">
            <h3 className="text-xl font-bold">Step 1: Data Collection</h3>
            <p>IoT devices gather real-time patient data and upload it to the blockchain.</p>
          </div>
          {/* Step 2 */}
          <div className="p-6 bg-black rounded-lg">
            <h3 className="text-xl font-bold">Step 2: Secure Storage</h3>
            <p>Data is encrypted and stored securely on a decentralized blockchain network.</p>
          </div>
          {/* Step 3 */}
          <div className="p-6 bg-black rounded-lg">
            <h3 className="text-xl font-bold">Step 3: Access Control</h3>
            <p>Healthcare providers can securely access data with authorized permissions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
