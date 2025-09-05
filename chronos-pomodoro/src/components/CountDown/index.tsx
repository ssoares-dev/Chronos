import { useTaskContext } from '../../Contexts/TaskContext';
import styles from './CountDown.module.css';

export function CountDown() {
    const taskContext = useTaskContext();
    console.log(taskContext);

    return(<div className={styles.container}>{taskContext.state.formattedSecondsRemaining}</div>);
}
