import styles from './VisualizarBtn.module.css';
import docPdf from './../../../assets/img/doc-pdf.svg';


interface VisualizarBtnProps {
  url: string;
}

const VisualizarBtn = ({url}: VisualizarBtnProps) => {
    return (
        <div className={styles.VisualizarBtn}>
            <a className={styles.BaseAnchor} href={url}>
                <img className={styles.Icon} src={docPdf} alt="" />
                <p className={styles.Text}>Visualizar</p>
            </a>
        </div>
    );
};

export default VisualizarBtn;