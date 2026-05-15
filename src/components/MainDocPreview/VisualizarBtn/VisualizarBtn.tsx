import styles from './VisualizarBtn.module.css';
import docPdf from './../../../assets/img/doc-pdf.svg';

const VisualizarBtn = () => {
    return (
        <div className={styles.VisualizarBtn}>
            <a className={styles.BaseAnchor} href="">
                <img className={styles.Icon} src={docPdf} alt="" />
                <p className={styles.Text}>Visualizar</p>
            </a>
        </div>
    );
};

export default VisualizarBtn;