import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import book from '../assets/book-solid.png';
import { FaBook } from 'react-icons/fa';
import book2 from '../assets/book2.png';
import headphone from '../assets/headphone.png';
import headphone2 from '../assets/hphn.png'


const Faqs = () => {
    return (
        <div className='bg-[#202335] pb-10'>
            <div className='w-4/5 mx-auto '>
                <div className='text-center w-full  py-14'>
                    <h2 className='md:text-3xl lg:text-4xl font-bold text-white '>Inquired <span className=' text-transparent bg-clip-text bg-[#8c76f0] '>Queries</span></h2>
                    <p className='w-1/2 mx-auto text-[#d7d0c8] my-4 md:text-sm lg:text-base font-medium'>After reading the instructions, I had a few inquired queries about the <br /> process and decided to reach out to customer support for <br /> clarification.</p>
                </div>

                <div className='flex  text-white'>
                    <div className='text-center md:mr-5 lg:mr-10'>
                        <div className='md:px-5 lg:px-13 md:py-8 lg:py-12 md:mb-6 lg:mb-8 rounded-2xl border border-[#64646466]'>
                            <img className='h-7 lg:h-10 mx-auto' src={book2} alt="" />
                            <h3 className='text-[#D7D0C8] font-semibold md:text-lg lg:text-xl mt-3 mb-2'>Digitize Your Documents</h3>
                            <p className='text-[#d7d0c8bf] font-medium md:text-xs lg:text-sm mb-3'>Efficiently Arranged and Current</p>
                            <button className='mt-3 lg:py-2 md:py-2 md:px-4 lg:px-6 cursor-pointer rounded-lg bg-[#8c76f0]'>Check Document</button>
                        </div>
                        <div className='md:px-5 lg:px-13 md:py-8 lg:py-12 md:mb-6 lg:mb-8 rounded-2xl border border-[#64646466]'>
                            <img className='h-7 lg:h-10 mx-auto' src={headphone2} alt="" />
                            <h3 className='text-[#D7D0C8] font-semibold md:text-lg lg:text-xl mt-3 mb-2'>Committed Assistance</h3>
                            <p className='text-[#d7d0c8bf] font-medium md:text-xs lg:text-sm mb-3'>Require assistance? Send us a ticket. We're <br /> here to help!</p>
                            <button className='mt-3 lg:py-2 md:py-2 md:px-4 lg:px-6 cursor-pointer rounded-lg bg-[#8c76f0]'>Get Support</button>
                        </div>
                    </div>



                    {/* FAQ QUESTIONS */}
                    <div className='flex-1 '>
                        <div className="collapse collapse-plus border border-base-300 ">
                            <input type="radio" name="my-accordion-3" defaultChecked />
                            <div className="collapse-title font-bold md:text-sm lg:text-base text-[#D7D0C8]">What is Online Group Study?</div>
                            <div className="collapse-content md:text-xs lg:text-sm font-semibold text-[#d7d0c8bf] md:leading-4 lg:leading-6">Online Group Study is a collaborative platform where students can connect, discuss, and study together in virtual study rooms. Our goal is to make learning interactive, engaging, and effective.</div>
                        </div>
                        <div className="collapse collapse-plus border border-base-300 my-4">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title font-bold md:text-sm lg:text-base text-[#D7D0C8]">How can I join a study group?</div>
                            <div className="collapse-content md:text-xs lg:text-sm font-semibold text-[#d7d0c8bf] md:leading-4 lg:leading-6">You can join a study group by signing up on our platform, searching for your subject or topic of interest, and requesting to join an existing group. You can also create your own study group and invite others.</div>
                        </div>
                        <div className="collapse collapse-plus border border-base-300">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title font-bold md:text-sm lg:text-base text-[#D7D0C8]">Is Online Group Study free to use?</div>
                            <div className="collapse-content md:text-xs lg:text-sm font-semibold text-[#d7d0c8bf] md:leading-4 lg:leading-6">Yes! Our basic features, such as joining public study groups and accessing shared study materials, are completely free. We also offer premium features for an enhanced learning experience.</div>
                        </div>
                        <div className="collapse collapse-plus border border-base-300 my-4">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title font-bold md:text-sm lg:text-base text-[#D7D0C8]">Can I create my own study group?</div>
                            <div className="collapse-content md:text-xs lg:text-sm font-semibold text-[#d7d0c8bf] md:leading-4 lg:leading-6">Absolutely! You can create a study group based on any subject or topic. You can make it public (open to everyone) or private (invite-only) depending on your preference.</div>
                        </div>
                        <div className="collapse collapse-plus border border-base-300">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title font-bold md:text-sm lg:text-base text-[#D7D0C8]">What features are available in a study session?</div>
                            <div className="collapse-content md:text-xs lg:text-sm font-semibold text-[#d7d0c8bf] md:leading-4 lg:leading-6">Live chat & video calls
                                , File and note sharing
                                , Collaborative whiteboard
                                , Task and reminder system
                                , Quiz and flashcards</div>
                        </div>
                        <div className="collapse collapse-plus border border-base-300 my-4">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title font-bold md:text-sm lg:text-base text-[#D7D0C8]">How can I ensure a productive group study session?</div>
                            <div className="collapse-content md:text-xs lg:text-sm font-semibold text-[#d7d0c8bf] md:leading-4 lg:leading-6">Set clear goals before starting,
                                Assign tasks among group members,
                                Stay focused and minimize distractions,
                                Use our built-in study tools to collaborate effectively</div>
                        </div>
                        <div className="collapse collapse-plus border border-base-300 ">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title font-bold md:text-sm lg:text-base text-[#D7D0C8]">How do I report inappropriate behavior in a study group?</div>
                            <div className="collapse-content md:text-xs lg:text-sm font-semibold text-[#d7d0c8bf] md:leading-4 lg:leading-6">If you experience any inappropriate behavior, you can report it using the "Report" button inside the study group. Our team will review the issue and take appropriate action to maintain a safe learning environment.</div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faqs;