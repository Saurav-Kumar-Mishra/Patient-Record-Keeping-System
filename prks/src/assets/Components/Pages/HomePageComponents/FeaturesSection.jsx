// import { CardSpotlightf } from "/components/ui/card-spotlight";
import { CardSpotlight } from "../../UI/CardSpotlight";
export default function FeaturesSection() {
  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-6xl font-bold text-center mb-8">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <CardSpotlight className="h-96 w-full">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Blockchain 
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            Secure and immutable data storage, ensuring patient data is tamper-proof.
            <ul className="list-none  mt-2">    
              <Step title="Tamper-proof data storage" />
              <Step title="Immutable record of transactions" />
              <Step title="Decentralized access" />
              <Step title="Increased transparency" />
            </ul>
          </div>
        </CardSpotlight>

        <CardSpotlight className="h-96 w-full">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            IoT Integration
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            Real-time health monitoring with IoT-enabled devices for seamless data collection.
            <ul className="list-none  mt-2">
              <Step title="Real-time health monitoring" />
              <Step title="Seamless data collection" />
              <Step title="Device interoperability" />
              <Step title="Remote diagnostics" />
            </ul>
          </div>
        </CardSpotlight>

        <CardSpotlight className="h-96 w-full">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Top Security
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            Advanced encryption and authentication to protect patient records.
            <ul className="list-none  mt-2">
              <Step title="Advanced encryption methods" />
              <Step title="Multi-layer authentication" />
              <Step title="Protection against breaches" />
              <Step title="End-to-end encryption" />
            </ul>
          </div>
        </CardSpotlight>

        <CardSpotlight className="h-96 w-full">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Data Privacy
          </p>
          <div className=" mt-4 relative z-20">
            Only authorized personnel can access sensitive medical information.
            <ul className="list-none  mt-2">
              <Step title="Role-based access control" />
              <Step title="Auditing and monitoring" />
              <Step title="Encrypted data at rest" />
              <Step title="Data masking for sensitive info" />
            </ul>
          </div>
        </CardSpotlight>
      </div>
    </section>
  );
}

const Step = ({ title }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0-.432.002-.642.005l-.616.017-.299.013-.579.034-.553.046c-4.785.464-6.732 2.411-7.196 7.196l-.046.553-.034.579c-.005.098-.01.198-.013.299l-.017.616-.004.318-.001.324c0 .218.002.432.005.642l.017.616.013.299.034.579.046.553c.464 4.785 2.411 6.732 7.196 7.196l.553.046.579.034c.098.005.198.01.299.013l.616.017.642.005.642-.005.616-.017.299-.013.579-.034.553-.046c4.785-.464 6.732-2.411 7.196-7.196l.046-.553.034-.579c.005-.098.01-.198.013-.299l.017-.616.005-.642l-.005-.642l-.017-.616l-.013-.299-.034-.579-.046-.553c-.464-4.785-2.411-6.732-7.196-7.196l-.553-.046-.579-.034a28.058 28.058 0 0 0-.299-.013l-.616-.017l-.318-.004l-.324-.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083.094l-4 4a1 1 0 0 1-1.32.083l-.094-.083l-2-2a1 1 0 0 1 1.32-1.497l.094.083l1.293 1.292l3.293-3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};
