import s from './PlayCell.module.css';

export default function PlayCell({id, content, handleTurn}) {

    return (
        <div className={s.cell} id={id} onClick={handleTurn} >
            {content}
        </div>
    )
}