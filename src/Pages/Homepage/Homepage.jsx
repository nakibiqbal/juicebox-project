import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./homepage.css"
import vector4x from "/Images/vector4x.png";
import Steps from "../Steps/Steps.jsx";

export default function Homepage() {

    const [showSteps, setShowSteps] = useState(false);

    const handleBackToHome = () => {
        setShowSteps(false);
    };

    const handleShowSteps = () => {
        setShowSteps(true); // Remove setTimeout to allow proper exit animation
    };

    const spanTxts = [
        { txt: "WA businesses feel confident about future growth" },
        { txt: "AI can't replace creativity" },
        { txt: "Sales measure true success" },
        { txt: "Human connection drives WA business" },
        { txt: "The primary barrier to digital transformation is financial investment" }
    ]

    return (
        <AnimatePresence mode="wait">
            {showSteps ? (
                <Steps
                    key="steps" // Add key for AnimatePresence
                    onBackToHome={handleBackToHome}
                    show={showSteps}
                />
            ) : (
                <motion.section
                    key="homepage" // Add key for AnimatePresence
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 50, opacity: 0 }}
                    transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
                    id="homepage">

                    <div className="homepageContainer">

                        <div className="homepageContent">

                            <div className="textWrapper">
                                <h1>
                                    <motion.span
                                        initial={{ y: 80, }}
                                        animate={{ y: 0, }}
                                        transition={{ duration: 2, ease: [0.83, 0, 0.17, 1], delay: 0.2 }}
                                    >
                                        Compare your thoughts on
                                    </motion.span>
                                </h1>
                                <h1>
                                    <motion.span
                                        initial={{ y: 80, }}
                                        animate={{ y: 0, }}
                                        transition={{ duration: 2, ease: [0.83, 0, 0.17, 1], delay: 0.4 }}
                                    >
                                        <span className="gradientText">technology</span> with current
                                    </motion.span>
                                </h1>
                                <h1>
                                    <motion.span
                                        initial={{ y: 80, }}
                                        animate={{ y: 0, }}
                                        transition={{ duration: 2, ease: [0.83, 0, 0.17, 1], delay: 0.6 }}
                                    >
                                        industry opinions.
                                    </motion.span>
                                </h1>
                            </div>

                            <div className="homepageBtn">
                                <motion.button
                                    initial={{ y: 80, }}
                                    animate={{ y: 0, }}
                                    transition={{ duration: 2, ease: [0.83, 0, 0.17, 1] }}
                                    onClick={handleShowSteps}>
                                    Get a reality check
                                </motion.button>
                            </div>
                        </div>

                        <div className="homepageImage">
                            <motion.img
                                initial={{ filter: "blur(10px)" }} animate={{ filter: "blur(0px)" }}
                                transition={{ duration: 2, ease: [0.83, 0, 0.17, 1] }}
                                src={vector4x} alt="VectorImg" />

                            {
                                spanTxts.map(({ txt }, index) => {
                                    return (
                                        <span key={index} className="parentSpan">
                                            <motion.span
                                                initial={{ top: 50 }} animate={{ top: 0 }}
                                                transition={{ duration: 2, delay: index * 0.2, ease: [0.83, 0, 0.17, 1] }}
                                                className="childSpan">
                                                {txt}
                                            </motion.span>
                                        </span>
                                    )
                                })
                            }

                        </div>

                    </div>

                </motion.section>
            )}
        </AnimatePresence>
    )
}