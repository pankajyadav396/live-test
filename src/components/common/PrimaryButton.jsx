import React from 'react'

const PrimaryButton = (props) => {
    return (
        <button className={`${props.className} btn-common fs-sm fw-bold ff-inter`}
        >{props.text}</button>
    )
}

export default PrimaryButton