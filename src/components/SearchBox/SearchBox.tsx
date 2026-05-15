import styles from './SearchBox.module.css';

const SearchBox = () => {
    return (
        <div className={styles.SearchBox}>
            <input className={styles.Temporary} type="search" />
            
        </div>
    );
};

export default SearchBox;