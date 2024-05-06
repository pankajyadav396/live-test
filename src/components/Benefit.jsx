import imgbene from '../assets/images/png/benefit-img.png'
import imgbene2 from '../assets/images/png/benefitboxes.png'

const Benefit = () => {
    return (
        <>
            <div className='bg-benefit pb-5 position-relative'>
                <span className='glow position-absolute top-0 end-0'></span>
                <div className="container">
                    <h1 className=" color-white2 pt-248 fs-lg ff-sans text-capitalize fw-bold text-center lh-57">How to benefit by investing <span className=' d-block'>in AI ETFs for
                        <span className=" color-skyblue "> high returns</span>  </span> </h1>
                    <p className=' color-white2 text-center fs-md pt-2 ff-inter max-w-806 mx-auto'>Artificial Intelligence Exchange Traded Funds are those funds that focus only on the companies that have evolved in the development of new products or services and technological improvements related to AI.</p>
                </div>
                <div className=' position-relative pb_135'>
                    <img src={imgbene2} alt="img" className=' position-absolute bottom-0 h-100 w-100' />
                    <div className="container position-relative z-3">
                        <div className="row pt-5 mt-4 align-items-center justify-content-center">
                            <div className='col-lg-5 col-9'>
                                <img src={imgbene} alt="img" className=' w-100' />
                            </div>
                            <div className='col-lg-7 mt-4 mt-md-0'>
                                <p className=' color-white1 fs-sm ff-inter '>Artificial intelligence has been significantly advancing in various industries, from healthcare and finance to manufacturing and entertainment. This growth has piqued investor interest in companies at the forefront of AI innovation.</p>
                                <p className=' color-white1 fs-sm ff-inter '>What are you waiting for? AI is revolutionizing everything, and investors got fantastic returns in AI ETFs during these years.</p>
                                <p className=' color-white1 fs-sm ff-inter '>From all such technological advancements and the boom in the IT industry, the price of AI ETFs has been increasing tremendously.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Benefit