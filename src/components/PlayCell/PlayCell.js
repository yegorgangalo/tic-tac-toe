import styles from './PlayCell.module.css';

export default function PlayCell({id, content, handleTurn}) {
    return (
        <div className={styles.cell} id={id} onClick={handleTurn} >
            {content}
        </div>
    )
}