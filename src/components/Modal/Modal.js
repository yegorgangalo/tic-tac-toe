import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

function Modal ({children}) {

    return createPortal(
        <div className={styles.backdrop}>
            <div className={styles.content}>{children}</div>
        </div>
    , document.querySelector('#modal-root'))
}

export default Modal;