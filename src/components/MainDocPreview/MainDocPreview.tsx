import styles from './MainDocPreview.module.css';
import VisualizarBtn from './VisualizarBtn/VisualizarBtn';
import docSvg from './../../assets/img/doc.svg';

import { useLatestDiario } from '../../hooks/useLatestDiario';
import { useSearchStore } from '../../stores/SearchStore';

const MainDocPreview = () => {

    const { cidade } = useSearchStore();
    const { data: diario, isLoading, isError } = useLatestDiario();

    const dataFormatada = diario
        ? new Date(diario.data).toLocaleDateString('pt-BR', {
        timeZone: 'UTC'
    }) : null;

    const nomeEdicao = diario?.nmEdicao.replace(/\.pdf$/i, '');

    return (
        <div className={styles.MainDocPreview}>
            <div className={styles.ContentDiv}>
                <div className={styles.IconFrame}>
                    <img src={docSvg} alt="" />
                </div>
                <div className={styles.InfoFrame}>

                    {!cidade && (
                        <p className={styles.StatusMsg}>Selecione uma cidade.</p>
                    )}

                    {cidade && isLoading && (
                        <p className={styles.StatusMsg}>Carregando...</p>
                    )}

                    {cidade && isError && (
                        <p className={styles.StatusMsg}>Erro ao carregar o diário mais recente.</p>
                    )}

                    {diario && (
                        <>
                            <div className={styles.Infos}>
                                <div className={styles.InfosLabels}>
                                    <p className={styles.Plabel}><b>Edição:</b></p>
                                    <p className={styles.Plabel}><b>Data:</b></p>
                                    <p className={styles.Plabel}><b>Acesso:</b></p>
                                </div>
                                <div className={styles.InfosTxt}>
                                    <p className={styles.InfosTxtEdicao}>{nomeEdicao}</p>
                                    <p className={styles.InfosTxtData}>{dataFormatada}</p>
                                    <p className={styles.InfosTxtCaminho}>{diario.caminho}</p>
                                </div>
                            </div>
                            <div className={styles.BtnDiv}>
                                <VisualizarBtn url={diario.caminho} />
                            </div>
                        </>
                    )}
                    
                </div>
            </div>
            <div className={styles.HrDiv}>
            </div>
        </div>
    );
};

export default MainDocPreview;