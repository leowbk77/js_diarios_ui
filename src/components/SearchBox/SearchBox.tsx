import styles from './SearchBox.module.css';
import SearchBtn from './SearchBtn/SearchBtn';
import { useSearchStore } from '../../stores/SearchStore';

const SearchBox = () => {
    const {
        terms, setTerms,
        edicao, setEdicao,
        dtInicial, setDtInicial,
        dtFinal, setDtFinal,
        commitSearch,
    } = useSearchStore();

    function handleSearch() {
        commitSearch();
    }

    return (
        <div className={styles.SearchBox}>
            <div className={styles.SearchBoxHeader}>
                <h3>BUSCA</h3>
                <hr />
            </div>
            <div className={styles.Inputs}>

                <div className={styles.KeyWords}>
                    <label htmlFor="keyword-input">Palavras-chave: </label>
                    <input 
                        id="keyword-input"
                        className={styles.KeyWordInput} 
                        type="search" 
                        value={terms}
                        onChange={(e) => setTerms(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()} />
                </div>

                <div className={styles.Edicao}>
                    <label htmlFor="edicao-input">Edição: </label>
                    <input
                        id="edicao-input"
                        className={styles.EdicaoInput} 
                        type="text" 
                        value={edicao}
                        onChange={(e) => setEdicao(e.target.value)} />
                </div>

                <div className={styles.DtInicial}>
                    <label htmlFor="dt-inicial-input">Data Inicial: </label>
                    <input 
                        id="dt-inicial-input" 
                        className={styles.DtInicialInput} 
                        type="date"
                        value={dtInicial}
                        onChange={(e) => setDtInicial(e.target.value)} />
                </div>

                <div className={styles.DtFinal}>
                    <label htmlFor="dt-final-input">Data Final: </label>
                    <input 
                        id="dt-final-input"
                        className={styles.DtFinalInput} 
                        type="date" 
                        value={dtFinal}
                        onChange={(e) => setDtFinal(e.target.value)} />
                </div>

            </div>
            
            <div className={styles.SearchBtnDiv}>
                <SearchBtn onClick={handleSearch}  />
            </div>
                
            
        </div>
    );
};

export default SearchBox;