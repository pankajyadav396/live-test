import React from 'react'
import { Somesteps } from './common/Helper'
import timeline from '../assets/images/png/timeline-img.png'
import PrimaryButton from './common/PrimaryButton'
const Howitworks = () => {
    return (
        <section className='py-5 overflow-hidden'>
            <div className='container'>
                <h2 className='mt-4 pt-3 color-blue fs-lg lh-57 fw-bold text-center'>How It Works</h2>
                <p className='mx-auto max-w-989 text-center fs-md color-lightblue lh-32'>
                    If you've used ChatGPT, the OpenAI chatbot that has wowed users by writing code and instantly answering complex questions, you've gotten a glimpse into the next frontier in artificial intelligence, as big tech companies are racing to develop the leading AI chatbot.</p>
                <p className='mx-auto max-w-989 text-center fs-md color-lightblue lh-32'>
                    If you want to get portfolio exposure to AI companies but don’t want to identify individual AI stocks, you can invest in an AI-focused exchange-traded fund(ETF). AI ETFs provide exposure to a board range of the best AI companies, eliminating the need to research and choose individual stocks on your own.</p>
                <h3 className=' mt-5 pt-4 color-blue fs-lg lh-57 fw-bold text-center text-capitalize'>You have to follow some steps </h3>
                <div className="container-lg max-w-container mt-5 pb-4 mb-3 pt-4">
                    <div className='row pt-2 pb-md-5 mb-lg-5 position-relative z-1 justify-content-center'>
                        <img src={timeline} alt="img" className='position-absolute d-none d-lg-block timeline-img' />
                        {Somesteps.map((obj, index) => {
                            return (
                                <div className={`${index == 2 ? "mt-5 mt-lg-0 pt-4 pt-lg-0" : index == 1 ? "mt-5 pt-sm-0 pt-4 mt-sm-0" : ""} col-lg-4 col-sm-6 position-relative timeline-box d-flex flex-column justify-content-between`}>
                                    <div className='d-flex flex-column justify-content-between'>
                                        <div className='blue-circle mx-auto d-flex align-items-center justify-content-center'>
                                            <p className='text-white fs-lg fw-bold ff-sans m-0'>{obj.SrNO}</p>
                                        </div>
                                        <p className='text-center mt-lg-4 pt-3 text-black lh-24 fw-bold ff-inter fs-md mb-2 pb-1'>{obj.title}</p>
                                        <p className={`${index == 2 ? "max-w-190" : ""} mx-auto text-center color-grey fw-normal fs-xsm lh-25 ff-inter max_w_324`}>{obj.description}</p>
                                    </div>
                                    <PrimaryButton className="mx-auto d-flex align-items-center justify-content-center" text={obj.btnText} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Howitworks