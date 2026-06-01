import styles from './MainDocPreview.module.css';
import VisualizarBtn from './VisualizarBtn/VisualizarBtn';
import docSvg from './../../assets/img/doc.svg';

const MainDocPreview = () => {
    return (
        <div className={styles.MainDocPreview}>
            <div className={styles.ContentDiv}>
                <div className={styles.IconFrame}>
                    <img src={docSvg} alt="" />
                </div>
                <div className={styles.InfoFrame}>
                    <div className={styles.Infos}>
                        <div className={styles.InfosLabels}>
                            <p className={styles.Plabel}><b>Edição:</b></p>
                            <p className={styles.Plabel}><b>Data:</b></p>
                            <p className={styles.Plabel}><b>Acesso:</b></p>
                        </div>
                        <div className={styles.InfosTxt}>
                            <p className={styles.InfosTxtEdicao}>Lorem ipsum dolor sit</p>
                            <p className={styles.InfosTxtData}>.../.../...</p>
                            <p className={styles.InfosTxtCaminho}>https://.....</p>
                        </div>
                    </div>
                    <div className={styles.BtnDiv}>
                        <VisualizarBtn/>
                    </div>
                </div>
            </div>
            <div className={styles.HrDiv}>
            </div>
        </div>
    );
};

export default MainDocPreview;