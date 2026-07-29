import { motion } from "framer-motion"; // Import animation library
import "../../App.css";
import PageHeader from "../common/PageHeader.js"; 
import GoToTopButton from "../common/GoToTopButton.js";

// Network content is maintained in src/data/networkData.js
import { networking, funders } from "../../data/networkData";

// Infinite Sliding Animation
const sliderAnimation = {
    animate: {
        x: ["0%", "-100%"], // Moves from left to right
        transition: {
            ease: "linear",
            duration: 80, // Speed of sliding (increase for slower effect)
            repeat: Infinity, // Loop forever
        },
    },
};

const Network = () => {
    return (
        <div className="min-h-screen bg-gray-50 w-full py-6 relative flex flex-col items-center">
            {/* Page Header */}
            <div className="relative networks-div mb-6">
                <PageHeader title="Our Network" />
            </div>

            {/* Collaborators Section */}
            <div className="w-full max-w-7xl px-4 overflow-hidden">
                <PageHeader title="Collaborations & Network" />
                <motion.div className="flex w-max" variants={sliderAnimation} animate="animate">
                    {networking.concat(networking).map((network, index) => (
                        <a
                            key={index}
                            href={network.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center items-center p-4"
                        >
                            <img
                                src={network.nlogo}
                                alt={network.ntitle}
                                className="w-64 h-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                                loading="lazy"
                            />
                        </a>
                    ))}
                </motion.div>
            </div>

            {/* Funders Section */}
            <div className="w-full max-w-7xl px-4 mt-12 overflow-hidden">
                <PageHeader title="Funding" />
                <motion.div className="flex w-max" variants={sliderAnimation} animate="animate">
                    {funders.concat(funders).map((funder, index) => (
                        <a
                            key={index}
                            href={funder.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center items-center p-4"
                        >
                            <img
                                src={funder.logo}
                                alt={funder.title}
                                className="w-64 h-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                                loading="lazy"
                            />
                        </a>
                    ))}
                </motion.div>
            </div>
            <GoToTopButton />
        </div>
    );
};

export default Network;
