import s from './PlayTable.module.css';
import PlayCell from '../PlayCell';

export default function PlayTable({playCells, handleTurn}) {

    return (
        <section className={s.playTable}>
            {playCells.map((cellContent, idx) => (<PlayCell key={idx} id={idx} content={cellContent} handleTurn={handleTurn}/>))}
        </section>
    )
}