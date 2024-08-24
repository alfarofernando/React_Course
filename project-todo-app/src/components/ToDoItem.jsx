import styles from './ToDoItem.module.css';

export default function ToDoItem({item}) {
    
    return (
        <div className={styles.item}>
            <div className={styles.itemname}>
                {item}
            </div>
            <hr  className={styles.line} />
        </div>
    );
}