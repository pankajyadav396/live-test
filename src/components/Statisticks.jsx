import vector from '../assets/images/png/statickvector.png'
import { statisticsList } from './common/Helper'
const Statisticks = () => {
    return (
        <>
            <div className=' py-5 bg-staticks overflow-hidden'>
                <div className=' mt-lg-5'>
                    <div className="container-lg max-w-container pt-3 position-relative z-1">
                        <img src={vector} alt="img-vector" className=' position-absolute img-static d-none d-md-block w-100 start-0 top-0 z-n1' />
                        <h1 className=" color-blue fs-lg ff-sans mb-md-5 pb-5 text-capitalize fw-bold text-center lh-57">Statisticks For <span className=" color-skyblue">Today</span></h1>
                        <div className=' max-w-921 px-sm-3 pt-2 mx-auto'>
                            <div className=' row m-0 mx-sm-12'>
                                {statisticsList.map((obj, index) => {
                                    return (
                                        <div className='col-sm-6 col-md-4' key={index}>
                                            <h2 className={`${index == 2 ? "mt-3 mt-md-0 pt-md-2" : ""} && ${index == 1 ? "mt-3 mt-sm-0 pt-md-2" : ""} pt-1 color-blue fs-xl mt-1 fw-bold ff-sans mb-1 lh-76 text-center`}>{obj.title}</h2>
                                            <p className=' color-lightblue text-center mt-md-4 pt-3 fs-sm ff-inter'> {obj.description}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Statisticks
