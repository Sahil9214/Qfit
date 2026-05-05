import React from 'react'
import Stepper from '../components/stepper'
import { Outlet } from 'react-router-dom'

const FormLayout = () => {
    return (
        <>
            <Stepper />
            <div className='md:mt-[60px] mt-[16px]'>
                <Outlet />
            </div>
        </>
    )
}

export default FormLayout