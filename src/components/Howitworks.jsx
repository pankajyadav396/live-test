import React from 'react'
import { Somesteps } from '../common/Helper'
import timeline from '../assets/images/png/timeline-img.png'
const Howitworks = () => {
    return (
        <>
            <div className=' py-5 transform-sec'>
                <h2 className=' mt-4 pt-3 color-blue fs-lg lh-57 fw-bold text-center'>How It Works</h2>
                <p className='mx-auto max-w-989 text-center fs-sm color-lightblue lh-32'>If you've used ChatGPT, the OpenAI chatbot that has wowed users by writing code and instantly answering complex questions, you've gotten a glimpse into the next frontier in artificial intelligence, as big tech companies are racing to develop the leading AI chatbot.</p>
                <p className='mx-auto max-w-989 text-center fs-sm color-lightblue lh-32'>If you want to get portfolio exposure to AI companies but don’t want to identify individual AI stocks, you can invest in an AI-focused exchange-traded fund(ETF). AI ETFs provide exposure to a board range of the best AI companies, eliminating the need to research and choose individual stocks on your own.</p>
                <h3 className=' mt-5 pt-4 color-blue fs-lg lh-57 fw-bold text-center text-capitalize'>You have to follow some steps </h3>
                <div className="container-lg max-w-container mt-5 pb-4 mb-3 pt-4">
                    <div className=' row pt-2 pb-md-5 mb-lg-5 position-relative z-1 justify-content-center'>
                        <img src={timeline} alt="" className=' position-absolute d-none d-lg-block timeline-img' />
                        {Somesteps.map((e, index) => {
                            return (
                                <div className={`${index == 2 ? "mt-5 mt-lg-0" : ""} && ${index == 1 ? "mt-5 mt-sm-0" : ""} col-lg-4 col-sm-6 position-relative timeline-box`}>
                                    <div className=' blue-circle mx-auto d-flex align-items-center justify-content-center'>
                                        <p className=' text-white fs-lg fw-bold ff-sans m-0'>{e.title}</p>
                                    </div>
                                    <p className='text-center mt-4 pt-3 text-black lh-24 fw-bold ff-inter fs-md mb-2 pb-1'>{e.title2}</p>
                                    <p className={`${index == 2 ? "max-w-190" : ""} mx-auto text-center color-grey fw-normal fs-xsm lh-25 ff-inter `}>{e.para}</p>
                                    <div className='position-absolute bottom-0 pt-3 mx-auto w-100 d-flex align-items-center justify-content-center'>{e.btnCommon}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Howitworks