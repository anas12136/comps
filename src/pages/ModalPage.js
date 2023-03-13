import Modal from "../components/Modal"
import { useState } from 'react'
import Button from "../components/Button"
function ModalPage() {

    

    const [showModal, setShowModal] = useState(false);
    const handleClick = () => {
        setShowModal(true);
    }
    const handleClose = () => {
        setShowModal(false)
    }
    const actionBar = <div>
        <Button primary onClick={handleClose}>I Accept</Button>
    </div>
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p> Here is an important agreement for you to accept </p>
    </Modal>
    return <div className="relative">
         <Button primary onClick={handleClick}>Open Modal!</Button>
        {showModal && modal}
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis enim vel sapien sodales vestibulum. Etiam ac sodales tellus. Morbi ligula odio, suscipit id mollis quis, porta eget elit. Quisque ligula diam, bibendum sed lectus eu, porta ultrices dui. Maecenas ante quam, maximus in sapien vel, rhoncus tempus felis. Donec pretium iaculis magna, sed rutrum libero scelerisque volutpat. Etiam finibus sapien nec velit pulvinar, eu ultrices massa bibendum.
        </p>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis enim vel sapien sodales vestibulum. Etiam ac sodales tellus. Morbi ligula odio, suscipit id mollis quis, porta eget elit. Quisque ligula diam, bibendum sed lectus eu, porta ultrices dui. Maecenas ante quam, maximus in sapien vel, rhoncus tempus felis. Donec pretium iaculis magna, sed rutrum libero scelerisque volutpat. Etiam finibus sapien nec velit pulvinar, eu ultrices massa bibendum.
        </p>
       
       
       
    </div>
}
export default ModalPage