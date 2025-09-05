import { useTaskContext } from '../../Contexts/TaskContext/useTaskContext';
import styles from './CountDown.module.css';

export function CountDown() {
    const {state} = useTaskContext();
    console.log(state);

    return(<div className={styles.container}>{state.formattedSecondsRemaining}</div>);
}
