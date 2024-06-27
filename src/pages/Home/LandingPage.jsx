import React from 'react'
import './LandingPage.css'
import BodSlider from '../../components/BodSlider/BodSlider'
import MHighlights from '../../components/Highlights/Highlights'
import Quote from '../../components/Quote/Quote'
import Financial from '../../components/Financial/Financial'
import ReadMoreButton from '../../components/ReadMore/ReadMoreButton'
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
export default function LandingPage() {
    
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: false });

    useEffect(() => {
        if (inView) {
            controls.start('hidden'); // Start with hidden state
        } else {
            controls.start('visible'); // Start with visible state
        }
    }, [controls, inView]);
    
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };
    


    const controlsVision = useAnimation();
    const controlsMission = useAnimation();
    const [refVision, inViewVision] = useInView({ triggerOnce: false });
    const [refMission, inViewMission] = useInView({ triggerOnce: false }); 
    // const controls = useAnimation();


    useEffect(() => {
        if (inViewVision) {
            controlsVision.start('visible');
        } else {
            controlsVision.start('hidden');
        }
    }, [controlsVision, inViewVision]);

    useEffect(() => {
        if (inViewMission) {
            controlsMission.start('visible');
        } else {
            controlsMission.start('hidden');
        }
    }, [controlsMission, inViewMission]);

    const visionVariants = {
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, x: -100 },
    };

    const missionVariants = {
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, x: 100 },
    };

   

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    const containerVariants = {
        visible: {
            transition: {
                staggerChildren: 0.2
            }
        },
        hidden: {}
    };

    const itemVariants = {
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, y: 20 }
    };
    return (
        <>
            <div className='grid lg:grid-cols-2 gap-4 sm:grid-cols-1 sm:text-center bg-[#d9eef2]  p-4 w-full '>
                <div className='relative flex justify-center items-center lg:w-[39vw] m-auto '>
                    <img src="./LandingPage-img/landing_img-1.svg" alt="" className='animate-rotate' />
                    <div className='absolute flex justify-center items-center lg:w-[34vw]'>
                        <img src="./LandingPage-img/landing_img-2.svg" alt="" className='animate-counterRotate' />
                        <div className='absolute flex justify-center items-center lg:w-[14vw]'>
                            <img src="./LandingPage-img/landing_img-3.svg" alt="" className='animate-rotate' />
                        </div>
                    </div>
                    <div className='absolute z-10 main-img lg:w-[27vw] ]'>
                        <img src="./LandingPage-img/landing_img-4.svg" alt="" />
                    </div>
                </div>
                <div className='flex justify-center items-center lg:text-6xl sm:text-2xl m-auto'>
                    <div className='flex flex-col items-start landing-page-hero-container'>
                        <h1 class='font-bebas font-bold  gradient-border'>EMPOWERING <span class='text-[#0098B3]'> PEOPLE</span></h1>
                        <br />
                        <h1 class='font-bebas font-bold  gradient-border'><span class='text-[#0098B3]'>ENHANCING </span>GROWTH</h1>
                        <br />
                        <h1 class='font-bebas font-bold '>ENSURING <span class='text-[#C82D91]'>AFFORDABILITY</span></h1>
                    </div>
                </div>
            </div>

            {/* <div className='grid grid-cols-1 bg-gradient-to-r from-[#026E89] to-[#005067]  w-full text-[#ffff] h-auto '>
                <h4 className='text-center font-900 lg:text-2xl py-4 mt-8'>Major Highlights of FY24</h4>
                <div className='grid lg:grid-cols-5  sm:grid-cols-1 sm:justify-center sm:items-center text-center gap-4 py-8'>
                    <div className='relative  px-6 '>
                        <span className='major-data'>13+</span>
                        <br />
                        <span className='major-categ font-500'>Years in existence</span>
                    </div>
                    <div className='relative px-6 '>
                        <span className='major-data '>155</span>
                        <br />
                        <span className='major-categ font-500'>Branches</span>
                    </div>
                    <div className='relative  px-6 '>
                        <span className='major-data'>16</span>
                        <br />
                        <span className='major-categ font-500'>States</span>
                    </div>
                    <div className='relative '>
                        <span className='major-data'>AA+/stable</span>
                        <br />
                        <span className='major-categ font-500'>Credit Rating</span>
                    </div>
                    <div className='relative  mx-10 px-12'>
                        <span className='major-data'>3,23</span>
                        <br />
                        <span className='major-categ font-500'>Personal</span>
                    </div>
                </div>
            </div> */}
            <MHighlights />

            <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className="grid lg:grid-cols-2 sm:grid-cols-1 mt-8 container-margin"
        >
            <motion.div
                className="head relative flex justify-start mt-10 mb-10"
                variants={variants}
            >
                <img src="./Highlights-img/Emp_img.svg" alt="" className="w-full" />
                <p className="absolute lg:text-3xl sm:text-2xl inset-0 top-[45%] left-[50%] font-bold">
                    Empowering <span className="text-[#0098B3]">People Enhancing</span> Growth Ensuring <span className="text-[#67236e]">Affordability</span>
                </p>
            </motion.div>
            <motion.div
                className="lg:text-2xl pt-16 text-[#0098B3] font-600"
                variants={variants}
            >
                <p>
                    For us at Shriram Housing Finance Limited (SHFL),
                    empowerment is an endeavour that begins with
                    a better understanding of what our customers
                    need and culminates with the fulfilment of their
                    aspirations of owning their own homes. This is
                    what we mean by saying that empowerment for us
                    has more than one connotation.
                </p>
            </motion.div>
        </motion.div>

{/* **************************************************************************************** */}

<div className=''>
            <div className='disc-section'>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 container-margin'>
                    <motion.div
                        ref={refVision}
                        initial="hidden"
                        animate={controlsVision}
                        variants={visionVariants}
                        className='flex flex-col'
                    >
                        <p className='val-heading text-[#006b95]'>Vision</p>
                        <div className='flex items-center gap-2'>
                            <img src="./Highlights-img/housing_img.svg" alt="" className='image-icon' />
                            <p className='text-4xl text-[#67236e]'>Housing for All</p>
                        </div>
                    </motion.div>
                    <motion.div
                        ref={refMission}
                        initial="hidden"
                        animate={controlsMission}
                        variants={missionVariants}
                        className='flex flex-col'
                    >
                        <p className='val-heading text-[#006b95]'>Mission</p>
                        <div className='flex items-center'>
                            <img src="./Highlights-img/fund_img.svg" alt="" className='image-icon' />
                            <p className='text-4xl text-[#67236e]'>Finding Ways to Funding Homes</p>
                        </div>
                    </motion.div>
                </div>
              
            </div>
            <div className='mt-6 mb-8'>
                    <a href="Empowering"><ReadMoreButton/></a>
            </div>
            
        </div>

   {/* *******************************************************************************************            */}

   <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className='disc-section mt-8'
        >
            <div className='container-margin'>
                <h1 className='marginal val-heading w-full text-[#006b95]'>Our Values</h1>
                <motion.div
                    className='grid lg:grid-cols-6 sm:grid-cols-1 gap-4 items-center sm:justify-start mt-2'
                    variants={containerVariants}
                >
                    <motion.div className='flex flex-col justify-center relative' variants={itemVariants}>
                        <img src="./Highlights-img/diamond_img.svg" alt="" className='image-icon ' />
                    </motion.div>
                    <motion.div className='relative flex justify-center' variants={itemVariants}>
                        <img src="./Highlights-img/water_bubble.svg" alt="" className='water-bubble' />
                        <span className='absolute inset-0 top-[25%] left-[52%] text-3xl'>Integrity</span>
                    </motion.div>
                    <motion.div className='relative flex justify-center' variants={itemVariants}>
                        <img src="./Highlights-img/water_bubble.svg" alt="" className='water-bubble' />
                        <span className='absolute inset-0 top-[25%] left-[52%] text-3xl'>Trust</span>
                    </motion.div>
                    <motion.div className='relative flex justify-center' variants={itemVariants}>
                        <img src="./Highlights-img/water_bubble.svg" alt="" className='water-bubble' />
                        <span className='absolute inset-0 top-[25%] left-[52%] text-3xl'>Passion</span>
                    </motion.div>
                    <motion.div className='relative flex justify-center' variants={itemVariants}>
                        <img src="./Highlights-img/water_bubble.svg" alt="" className='water-bubble' />
                        <span className='absolute inset-0 top-[25%] left-[52%] text-3xl'>Agility</span>
                    </motion.div>
                    <motion.div className='relative flex justify-center' variants={itemVariants}>
                        <img src="./Highlights-img/water_bubble.svg" alt="" className='water-bubble' />
                        <span className='absolute inset-0 top-[25%] left-[52%] text-3xl'>Empathy</span>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>

   {/* *******************************************************************************************            */}

              <div>
                    <div className='bg-slate-50 mt-8 mb-8 p-6'>
                            <div className='container-margin'>
                                <p className='text-5xl text-[#008cca] font-bold'>Empowering the Growth of
                                our Communities</p>
                                <div className='grid lg:grid-cols-2 sm:grid-cols-1 mt-8 gap-4 items-center '>
                                    <div className=''>
                                            <p className='text-2xl text-[#0098b6] font-600'>Industry Ready Program:
                                            Apprenticeship Program to
                                            Support Graduates</p>
                                            <p className='text-xl pt-4'>SHFL’s apprenticeship program,
                                            authorized by the Ministry of
                                            Corporate Affairs under their CSR
                                            initiative, provides graduates with a
                                            comprehensive training experience.
                                            The program combines theoretical
                                            instruction with practical on-the-job
                                            training, ensuring participants gain both
                                            knowledge and practical skills. Each
                                            participant receives a monthly stipend
                                            for the program’s duration of one year
                                            , and successful completion leads to
                                            a joint certificate from SHFL and the
                                            relevant Sector Skill Council.</p>
                                    </div>
                                    <div className='flex justify-end'>
                                        <img src="./Page-image/EC1.webp" alt="" className='w-[85%] '/>
                                    </div>
                                </div>
                        </div>
                       
                     </div>
                     <div>
                            <a href="EmpoweringCommunities"><ReadMoreButton/></a>
                     </div>
              </div>
            <BodSlider />
            <Financial/>
            <Quote />


        </>
    )
}
