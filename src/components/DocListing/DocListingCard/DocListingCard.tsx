import { extractWindow } from '../../../utils/excerpt';
import styles from './DocListingCard.module.css';

import VisualizarBtn from '../../MainDocPreview/VisualizarBtn/VisualizarBtn';
import docSvg from './../../../assets/img/doc.svg';
import type { DiarioResult } from '../../../types/Diario';
import { useState } from 'react';

interface DocListingCardProps {
    diario: DiarioResult;
    searchTerm?: string;
}

const MAX_PAGINAS = 3;

function PreviewText({ text, term }: { text: string; term?: string }) {
  const { excerpt, clippedStart, clippedEnd } = extractWindow(text, term ?? '');

  if (!term?.trim()) return <span>{excerpt}{clippedEnd && <Ellipsis />}</span>;

  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = excerpt.split(new RegExp(`(${escaped})`, 'gi'));

  return (
    <>
      {clippedStart && <Ellipsis />}
      {parts.map((part, i) =>
        part.toLowerCase() === term.toLowerCase()
          ? <mark key={i} className={styles.Highlight}>{part}</mark>
          : <span key={i}>{part}</span>
      )}
      {clippedEnd && <Ellipsis />}
    </>
  );
}

const Ellipsis = () => (
  <span className={styles.Ellipsis}>…</span>
);


const DocListingCard = ({ diario, searchTerm }: DocListingCardProps) => {
    const paginasVisiveis = diario.paginas.slice(0, MAX_PAGINAS);
    const [paginaSelecionada, setPaginaSelecionada] = useState(0);
    
    const paginaAtual = paginasVisiveis[paginaSelecionada];

    const dataFormatada = new Date(diario.ano, diario.mes - 1, diario.dia)
    .toLocaleDateString('pt-BR');

    const nomeEdicao = diario.nmEdicao.replace(/\.pdf$/i, '');

    return (
        <article className={styles.DocCardMain}>
            <div className={styles.DocIconSvg}>
                <img src={docSvg} alt="" />
            </div>
            <div className={styles.CardInnerContent} >

                <div className={styles.InnerContentHeader}>
                    <div className={styles.DocInfos}>
                        <h4>Edição {nomeEdicao}</h4>
                        <h4>{dataFormatada}</h4>
                    </div>
                    <div className={styles.VisualizarBtn}>
                        <VisualizarBtn url={diario.caminho}/>
                    </div>
                </div>

                <div className={styles.PreviaCorrespondencias}>
                    <div className={styles.PreviewTextBox}>

                        <span className={styles.PageBadge}> pág. {paginaAtual.numero}</span>
                        <PreviewText text={paginaAtual.conteudo} term={searchTerm}/>
                        
                    </div>

                    {paginasVisiveis.length > 1 && (
                        <div className={styles.PreviewPageSelector}>
                        {paginasVisiveis.map((pagina, index) => (
                            <button
                            key={pagina.numero}
                            className={`${styles.PageBtn} ${index === paginaSelecionada ? styles.PageBtnActive : ''}`}
                            onClick={() => setPaginaSelecionada(index)}
                            aria-label={`Ver prévia da página ${pagina.numero}`}
                            >
                            {pagina.numero}
                            </button>
                        ))}
                        {/* indica que há mais páginas além das 3 exibidas */}
                        {diario.paginas.length > MAX_PAGINAS && (
                            <span className={styles.MorePages} title={`+${diario.paginas.length - MAX_PAGINAS} pagina(s) com resultados`}>
                            +{diario.paginas.length - MAX_PAGINAS}
                            </span>
                        )}
                        </div>
                    )}

                </div>
            </div>
        </article>
    );
};

export default DocListingCard;