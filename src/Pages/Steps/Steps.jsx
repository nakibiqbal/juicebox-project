import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './steps.css';
import vector4x from "/Images/vector4x.png";
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function Steps({ onBackToHome }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const stepsData = [
        { textContent: "Professionals around the world shared how they feel about technology and I've listened. Now it's your turn." },
        { textContent: "I'll ask you a handful of meaningful questions and compare your responses with people in your industry." },
        { textContent: "You'll get insights into current industry sentiments and a reality check about technology in a few minutes. Deal? Great!" }
    ];

    return (
        <motion.section
            key="steps-section"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 1, ease: [0.83, 0, 0.17, 1] }}
            id="steps">
            <div className="stepsContainer">

                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    pagination={{
                        clickable: false,
                    }}
                    modules={[EffectFade, Navigation, Pagination]}
                    className="mySwiper"
                    onSlideChange={swiper => setActiveIndex(swiper.activeIndex)}
                >

                    {/* Show Back button only on first slide */}
                    {activeIndex === 0 && (
                        <div className="swiper-button-prev" onClick={onBackToHome} />
                    )}

                    {
                        stepsData.map(({ textContent }, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="steps">
                                        <img src={vector4x} />
                                        <h3>
                                            {
                                                textContent.split("").map((char, i) => {
                                                    return (
                                                        <motion.span
                                                            key={i}
                                                            initial={{ opacity: 0.3 }}
                                                            whileInView={{
                                                                opacity: 1
                                                            }}
                                                            transition={{ duration: 0.05, delay: (i + 20) * 0.03 }}
                                                        >
                                                            {char}
                                                        </motion.span>
                                                    )
                                                })
                                            }
                                        </h3>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }

                </Swiper>

            </div>
        </motion.section>
    );
}