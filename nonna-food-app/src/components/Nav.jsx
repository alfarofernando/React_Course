import styles from './Nav.module.css';

export default function Nav(){
    return(
        <div className={styles.nav}>
            <img className={styles.img} src="../../public/assets/images/nonna-logo.svg" alt="Nonna logo" />
            <h1 className={styles.h1}>Nonna's Recipes</h1>
        </div>
    );
}