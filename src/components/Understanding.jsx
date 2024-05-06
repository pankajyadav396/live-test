import { Understandingarr } from '../common/Helper'
import Ellipsemap1 from '../common/Icons'
import Commonbtn from './Commonbtn'
const Understanding = () => {
    return (
        <>
            <div className=" py-5">
                <div className=" container-lg max-w-container pt-5 mt-1">
                    <h1 className=" color-blue fs-lg ff-sans text-capitalize fw-bold text-center lh-57">Understanding leveraged <span className="d-block"> accounts and <span className=" color-skyblue">buying power</span> </span></h1>
                    <p className=" color-grey fs-md fw-normal max-w-806 mb-5 text-center mx-auto ff-inter lh-32">Trading with leveraged accounts in CFDs provides traders with increased buying power, enabling them to attain superior results across various markets. By amplifying potential returns and accessing additional capital, traders can capitalize on market opportunities more effectively, enhancing their overall trading performance.</p>
                    <div className="row">
                        {Understandingarr.map((e, index) => {
                            return (
                                <div className={`${index == 2 ? "mt-4 mt-lg-0" : ""} && ${index == 1 ? "mt-4 mt-md-0" : ""} col_xlg_4 col-md-6`}>
                                    <div className="box-understd position-relative  z-1 overflow-hidden d-flex flex-column h-100 ">
                                        <div className=' img-box1 mx-auto d-flex align-items-center justify-content-center'>
                                            <img src={e.img} alt="img" className=' mx-auto' />
                                        </div>
                                        <p className='fs-md fw-bold color-blue ff-inter lh-24 text-center mt-4 pt-2'>{e.title}</p>
                                        <p className=' text-center ff-inter color-grey fw-normal fs-sm lh-25 pt-3 text-balance'>{e.para}</p>
                                        <span className=' z-n1 position-absolute bottom-0 ellipse1'> </span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className=' pt-5 pb-4 text-center'>
                        <Commonbtn text="SIGN UP" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Understanding