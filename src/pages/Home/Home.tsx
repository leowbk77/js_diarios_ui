import styles from './Home.module.css';

import Header from '../../components/Header/Header';
import MainDocPreview from '../../components/MainDocPreview/MainDocPreview';
import SearchBox from '../../components/SearchBox/SearchBox';
import DocListing from '../../components/DocListing/DocListing';

const Home = () => {
    return (
        <>
            <Header/>
            <main className={styles.Main}>
                <div className={styles.UpperSection}>
                    <MainDocPreview/>
                </div>
                <div className={styles.LowerSection}>
                    <SearchBox/>
                    {<DocListing />}
                </div>
            </main>
        </>
    );
}

export default Home;