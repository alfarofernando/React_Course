import styles from './ToDoItem.module.css';

export default function ToDoItem({item}) {
    
    return (
        <div className={styles.item}>
            
            <div className={styles.itemname}>
                {item}

                <span>
                    <button className={styles.itembutton}> X </button>
                </span>
            </div>

            

            <hr  className={styles.line} />
        </div>
    );
}