import React from 'react'

var interest = ['App Development', 'Web Development', 'Game Development', 'Data Structures', 'Programming', 'Machine Learning', 'Data SCience', 'Others']

const InterestModal = ({ deactivateModal }) => {

    const deactivateModalHandler = () => {
        deactivateModal();
    }

    const activateInterest = (idx) => {

    }

    return (
        <div>
            <div>
                {interest.map((interestName, idx) => {
                    return <div onClick={activateInterest}>{interestName}</div>
                })}
            </div>

            <div>
                <button onClick={deactivateModalHandler}>Cancel</button>
                <button>Save</button>
            </div>
        </div>
    )
}

export default InterestModal