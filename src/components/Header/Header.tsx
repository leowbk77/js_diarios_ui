import styles from './Header.module.css'
import logo from '../../assets/img/ufulogo.svg';

import HeaderCitySelector from './HeaderCitySelector/HeaderCitySelector';

const Header = () => {
    return (
        <header className={styles.Header}>
            <div className={styles.HeaderLeftContent}>
                <img src={logo} alt="LOGO" className={styles.LogoImg}/>
                <h3>BuscaDiarios</h3>
            </div>
            <div className={styles.HeaderRightContent}>
                
                <HeaderCitySelector/>
            </div>
        </header>
    );
};

export default Header;