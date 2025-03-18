import React from 'react';

const Faqs = () => {
    return (
        <div className=''>
            <div className='text-center w-full'>
                <h2 className='text-4xl font-semibold '>Inquired <span className=' text-transparent bg-clip-text bg-gradient-to-r from-[#20c997] to-[#198754]  '>Queries</span></h2>
                <p className='w-2/5 mx-auto'>After reading the instructions, I had a few inquired queries about the process and decided to reach out to customer support for clarification.</p>
            </div>

            <div className='w-1/2'>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300 ">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title font-semibold">How do I create an account?</div>
                    <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">I forgot my password. What should I do?</div>
                    <div className="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title font-semibold">How do I update my profile information?</div>
                    <div className="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
                </div>
            </div>
        </div>
    );
};

export default Faqs;