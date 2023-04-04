import React from 'react'

const PasswordModal = ({deactivateModal}) => {

  const deactivateModalHandler = () => {
    deactivateModal();
  }

  return (
    <div>
        <div>
            <form>
                <label htmlFor="">Current Password</label>
                <input type="password" name="" id="" />
                <label htmlFor="">New Password</label>
                <input type="password" name="" id="" />
                <label htmlFor="">Confirm Password</label>
                <input type="password" name="" id="" />
            </form>
        </div>

        <div>
            <button onClick={deactivateModalHandler}>Cancel</button>
            <button>Save</button>
        </div>
    </div>
  )
}

export default PasswordModal