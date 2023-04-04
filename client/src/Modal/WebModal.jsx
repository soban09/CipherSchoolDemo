import React from 'react'

const WebModal = ({ deactivateModal }) => {

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
            <label htmlFor="linkedin">Linkedin</label>
            <input type="url" name="" id="linkedin" />
            <label htmlFor="github">Github</label>
            <input type="url" name="" id="github" />
            <label htmlFor="facebook">Facebook</label>
            <input type="url" name="" id="facebook" />
            <label htmlFor="twitter">Twitter</label>
            <input type="url" name="" id="twitter" />
            <label htmlFor="instagram">Instagram</label>
            <input type="url" name="" id="instagram" />
            <label htmlFor="website">Website</label>
            <input type="url" name="" id="website" />
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

export default WebModal