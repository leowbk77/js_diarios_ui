import styles from './Home.module.css';

import Header from '../../components/Header/Header';
import MainDocPreview from '../../components/MainDocPreview/MainDocPreview';
import CalendarBox from '../../components/CalendarBox/CalendarBox';
import SearchBox from '../../components/SearchBox/SearchBox';

const Home = () => {
    return (
        <>
            <Header/>
            <section className={styles.UpperSection}>
                <div className={styles.UpperSectionUpper}>
                    <MainDocPreview/>
                    <CalendarBox/>
                </div>
                <div className={styles.UpperSectionLower}>
                    <SearchBox/>
                </div>
            </section>
        </>
    );
}

export default Home;