import React from 'react'
import WebModal from './WebModal'
import ProfessionalModal from './ProfessionalModal'
import PasswordModal from './PasswordModal'
import InterestModal from './InterestModal'

const Modal = ({ showWeb, showInterest, showProfessional, showPassword, deactivateModal }) => {

    const deactivateModalHandler = () => {
        deactivateModal();
    }

    return (
        <>
            <div onClick={deactivateModalHandler} className='backDrop' />
            <div className='Modal'>
                {showWeb && <WebModal deactivateModal={deactivateModal}/>}
                {showProfessional && <ProfessionalModal deactivateModal={deactivateModal}/>}
                {showInterest && <InterestModal deactivateModal={deactivateModal}/>}
                {showPassword && <PasswordModal deactivateModal={deactivateModal}/>}
            </div>
        </>
    )
}

export default Modal