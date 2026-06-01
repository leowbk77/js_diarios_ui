import styles from './SearchBtn.module.css'
import searchIcon from './../../../assets/img/search.svg'

interface SearchBtnProps {
  onClick: () => void;
}

const SearchBtn = ({ onClick }: SearchBtnProps) => {
    return (
        <div className={styles.SearchBtn} onClick={onClick} role='button'>
            <img src={searchIcon} alt="" />
            <p className={styles.Text}>BUSCAR</p>
        </div>
    );
};

export default SearchBtn;