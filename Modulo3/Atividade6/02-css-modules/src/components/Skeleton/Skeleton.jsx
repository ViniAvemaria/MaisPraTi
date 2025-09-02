import styles from "./Skeleton.module.css";

function Skeleton() {
    return (
        <div className={styles.skeletonCard}>
            <div className={styles.skeletonImage}></div>
            <div className={`${styles.skeletonText} ${styles.rating} ${styles.startAlign}`}></div>
            <div className={`${styles.skeletonText} ${styles.startAlign}`}></div>
            <div className={`${styles.skeletonText} ${styles.short} ${styles.startAlign}`}></div>
            <div className={`${styles.skeletonText} ${styles.button}`}></div>
        </div>
    );
}

export default Skeleton;
