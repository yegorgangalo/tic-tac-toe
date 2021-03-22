// import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import s from './Modal.module.css';

function Modal ({children}) {

    return createPortal(
        <div className={s.backdrop}>
            <div className={s.content}>{children}</div>
        </div>
    , document.querySelector('#modal-root'))
}

// Modal.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   children: PropTypes.node.isRequired,
// };

export default Modal;