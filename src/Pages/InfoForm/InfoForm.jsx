// InfoForm.jsx
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./infoForm.css";
import { IoIosArrowRoundUp } from "react-icons/io";
import vector2 from "/Images/vector2.png";

export default function InfoForm({ onBackToSteps }) {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    });

    const handleNext = () => {
        if (currentStep < 2) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        } else {
            onBackToSteps();
        }
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleContinue = () => {
        console.log('Form submitted:', formData);
    };

    const animation = {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: 20, opacity: 0 },
        transition: { duration: 1, ease: [0.83, 0, 0.17, 1] }
    };

    return (
        <motion.section
            key="info-form-section"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
            id="infoForm">

            <div className="infoFormContainer">

                <div className="swiper-button-prev" onClick={handleBack} />

                {/* Purple Circle Icon */}
                <div className="purpleCircle">
                    <img src={vector2} />
                </div>

                {/* Step Content */}
                <div className="infoFormWrapper">
                    <AnimatePresence mode="wait">
                        {currentStep === 0 && (
                            <motion.div
                                key="step-0"
                                {...animation}
                                className="formStep">
                                <h3>Let's start with the basics. Type in your first name.</h3>
                                <div className="inputContainer">
                                    <input
                                        type="text"
                                        placeholder="First name"
                                        value={formData.name}
                                        onChange={(e) => handleInputChange('name', e.target.value)}
                                    />
                                    <button
                                        className="nextButton"
                                        onClick={handleNext}
                                        disabled={!formData.name.trim()}>
                                        <IoIosArrowRoundUp />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {currentStep === 1 && (
                            <motion.div
                                key="step-1"
                                {...animation}
                                className="formStep">
                                <h3>How should we contact you? Type in your email address.</h3>
                                <div className="inputContainer">
                                    <input
                                        type="email"
                                        placeholder="Email address"
                                        value={formData.email}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                    />
                                    <button
                                        className="nextButton"
                                        onClick={handleNext}
                                        disabled={!formData.email.trim()}>
                                        <IoIosArrowRoundUp />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {currentStep === 2 && (
                            <motion.div
                                key="step-2"
                                {...animation}
                                className="resultStep">
                                <div className="resultContent">
                                    <h3>Thanks, {formData.name}! Now, it's time to get a reality check.</h3>
                                    <h3>This will take 2-3 minutes.</h3>
                                </div>
                                <button className="continueButton inputContainer" onClick={handleContinue}>
                                    Continue
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </motion.section>
    );
}