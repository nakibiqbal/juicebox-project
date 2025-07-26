// Homepage.jsx
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./homepage.css"
import vector4x from "/Images/vector4x.png";
import Steps from "../Steps/Steps.jsx";
import InfoForm from "../InfoForm/InfoForm.jsx";

export default function Homepage() {

    const [currentView, setCurrentView] = useState('homepage'); // homepage, steps, infoForm
    const [fromInfoForm, setFromInfoForm] = useState(false);

    const handleBackToHome = () => {
        setCurrentView('homepage');
        setFromInfoForm(false);
    };

    const handleShowSteps = () => {
        setCurrentView('steps');
        setFromInfoForm(false);
    };

    const handleShowInfoForm = () => {
        setCurrentView('infoForm');
    };

    const handleBackToSteps = () => {
        setCurrentView('steps');
        setFromInfoForm(true);
    };

    const homepageData = [
        { txt: "Compare your thoughts on" },
        {
            txt: (
                <>
                    <span className="gradientText">technology</span> with current
                </>
            )
        },
        { txt: "industry opinions." }
    ]
    const spanTxts = [
        { txt: "WA businesses feel confident about future growth" },
        { txt: "AI can't replace creativity" },
        { txt: "Sales measure true success" },
        { txt: "Human connection drives WA business" },
        { txt: "The primary barrier to digital transformation is financial investment" }
    ]

    const durationEase = {
        duration: 2,
        ease: [0.83, 0, 0.17, 1]
    };

    return (
        <AnimatePresence mode="wait">
            {currentView === 'steps' ? (
                <Steps
                    key={fromInfoForm ? "steps-from-form" : "steps"}
                    onBackToHome={handleBackToHome}
                    onGetStarted={handleShowInfoForm}
                    startFromLast={fromInfoForm}
                />
            ) : currentView === 'infoForm' ? (
                <InfoForm
                    key="infoForm"
                    onBackToSteps={handleBackToSteps}
                />
            ) : (
                <motion.section
                    key="homepage"
                    id="homepage">

                    <div className="homepageContainer">

                        <div className="homepageContent">

                            <div className="textWrapper">

                                {homepageData.map(({ txt }, index) => (
                                    <h1 key={index}>
                                        <motion.span
                                            initial={{ y: 80, }}
                                            animate={{ y: 0, }}
                                            exit={{ y: 80, }}
                                            transition={{ ...durationEase, delay: index * 0.2 }}
                                        >
                                            {txt}
                                        </motion.span>
                                    </h1>
                                ))}

                            </div>

                            <div className="homepageBtn">
                                <motion.button
                                    initial={{ y: 80, }}
                                    animate={{ y: 0, }}
                                    exit={{ y: 80, }}
                                    transition={{ ...durationEase }}
                                    onClick={handleShowSteps}>
                                    Get a reality check
                                </motion.button>
                            </div>
                        </div>

                        <div className="homepageImage">

                            <motion.img
                                initial={{ filter: "blur(10px)", opacity: 0 }}
                                animate={{ filter: "blur(0px)", opacity: 1 }}
                                exit={{ filter: "blur(10px)", opacity: 0 }}
                                transition={{ ...durationEase }}
                                src={vector4x} alt="VectorImg" />

                            {
                                spanTxts.map(({ txt }, index) => {
                                    return (
                                        <span key={index} className="parentSpan">
                                            <motion.span
                                                initial={{ top: 50 }} animate={{ top: 0 }} exit={{ top: 50 }}
                                                transition={{ ...durationEase, delay: index * 0.2 }}
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