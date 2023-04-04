import React, { useState } from 'react'
import Modal from '../Modal/Modal';


const Details = ({user, updateUser}) => {

    const [showWeb, setShowWeb] = useState(false);
    const [showProfessional, setShowProfessional] = useState(false);
    const [showInterest, setShowInterest] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const showWebModalHandler = () => {
        setShowWeb(true);
        setShowProfessional(false);
        setShowInterest(false);
        setShowPassword(false);
    }

    const showProfessionalModalHander = () => {
        setShowWeb(false);
        setShowProfessional(true);
        setShowInterest(false);
        setShowPassword(false);
    }
    
    const showInterestModalHandler = () => {
        setShowWeb(false);
        setShowProfessional(false);
        setShowInterest(true);
        setShowPassword(false);
    }
    
    const showPasswordModalHandler = () => {
        setShowWeb(false);
        setShowProfessional(false);
        setShowInterest(false);
        setShowPassword(true);
    }

    const deactivateModal = () => {
        setShowWeb(false);
        setShowProfessional(false);
        setShowInterest(false);
        setShowPassword(false);
    }


    return (
        <div>

            <div className='detail_section'>
                <div className='detail_header'>
                    <h2>ON THE WEB</h2>
                    <button onClick={showWebModalHandler}>EDIT</button>
                </div>

                <div className='detail_body web'>
                    <div className='info_section'>
                        <h3>Linkedin</h3>
                        <div className='info_section_bar'>
                            <p>something</p>
                        </div>
                    </div>


                    <div className='info_section'>
                        <h3>Github</h3>
                        <div className='info_section_bar'>
                            <p>something</p>
                        </div>
                    </div>


                    <div className='info_section'>
                        <h3>Twitter</h3>
                        <div className='info_section_bar'>
                            <p>something</p>
                        </div>
                    </div>

                    <div className='info_section'>
                        <h3>Instagram</h3>
                        <div className='info_section_bar'>
                            <p>something</p>
                        </div>
                    </div>

                    <div className='info_section'>
                        <h3>Website</h3>
                        <div className='info_section_bar'>
                            <p>something</p>
                        </div>
                    </div>

                    <div className='info_section'>
                        <h3>Facebook</h3>
                        <div className='info_section_bar'>
                            <p>something</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='detail_section'>
                <div className='detail_header'>
                    <h2>PROFESSIONAL INFORMATION</h2>
                    <button onClick={showProfessionalModalHander}>EDIT</button>
                </div>

                <div className='detail_body professional'>
                    <div className='info_section'>
                        <h3>Linkedin</h3>
                        <div className='info_section_bar'>
                            <p>something</p>
                        </div>
                    </div>


                    <div className='info_section'>
                        <h3>Github</h3>
                        <div className='info_section_bar'>
                            <p>something</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='detail_section'>
                <div className='detail_header'>
                    <h2>PASSWORD & SECURITY</h2>
                    <button onClick={showPasswordModalHandler}>EDIT</button>
                </div>

                <div className='detail_body password'>
                    <div className='info_section'>
                        <h3>Linkedin</h3>
                        <div className='info_section_bar'>
                            <p>something</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='detail_section'>
                <div className='detail_header'>
                    <h2>INTEREST</h2>
                    <button onClick={showInterestModalHandler}>EDIT</button>
                </div>

                <div>

                </div>
            </div>

            {(showWeb || showInterest || showProfessional || showPassword) && <Modal
                showWeb={showWeb}
                showInterest={showInterest}
                showProfessional={showProfessional}
                showPassword={showPassword}
                deactivateModal={deactivateModal}
            />}
        </div>
    )
}

export default Details