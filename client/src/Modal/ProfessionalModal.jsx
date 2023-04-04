import React from 'react'

const ProfessionalModal = ({deactivateModal}) => {

    const deactivateModalHandler = () => {
        deactivateModal();
    }

    return (
        <div>
            <div>
                <h2>Profile update</h2>
            </div>

            <div>
                <div>
                    <img src="" alt="" />
                </div>

                <div>
                    <form>
                        <label htmlFor="">First Name</label>
                        <input type="text" name="" id="firstName" />
                        <label htmlFor="">Last Name</label>
                        <input type="text" name="" id="lastName" />
                        <label htmlFor="">Address</label>
                        <input type="text" name="" id="Address" />
                        <label htmlFor="">DOB</label>
                        <input type="text" name="" id="DOB" />
                    </form>
                </div>
            </div>

            <div>
                <button onClick={deactivateModalHandler}>Cancel</button>
                <button>Save</button>
            </div>
        </div>
    )
}

export default ProfessionalModal