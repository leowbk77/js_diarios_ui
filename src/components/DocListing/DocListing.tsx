import styles from './DocListing.module.css';
import { useSearchDiarios } from '../../hooks/UseSearchDiarios';
import { useSearchStore } from '../../stores/SearchStore';
import DocListingCard from './DocListingCard/DocListingCard';

const DocListing = () => {
    const { data, isLoading, isError, isFetching } = useSearchDiarios();
    const { committedTerms, currentPage, nextPage, prevPage } = useSearchStore();

    if (isLoading) return (
        <div className={styles.DocListing}>
            <p className={styles.StatusMsg}>Buscando documentos...</p>
        </div>
    );

    if (isError) return (
        <div className={styles.DocListing}>
            <p className={styles.StatusMsg}>Erro ao buscar documentos. Verifique sua conexão e tente novamente.</p>
        </div>
    );
    
    if (!data || data.searchDiariosResults.length === 0) return (
        <div className={styles.DocListing}>
            <p className={styles.StatusMsg}>Nenhum documento encontrado.</p>
        </div>
    );

    function handleNextPage() {
        const lastId = data!.searchDiariosResults.at(-1)?.id;
        if (lastId) nextPage(lastId);
    }

    return (
        <div className={styles.DocListingMain}>
            <div className={styles.DocListingHeader}>
                <h3>Lista de documentos</h3>
                <div className={styles.DocListingCount}>
                    <p>{data.searchDiariosResults.length} itens</p>
                </div>
            </div>
            <div className={styles.DocListingCardBox}>
                
                <div className={styles.DocListing}>

                    {/* opacidade reduzida durante refetch de paginação para não sumir com os resultados */}
                    <div className={isFetching ? styles.Fetching : ''}>
                        {data.searchDiariosResults.map((diario) => (
                            <DocListingCard
                                key={diario.id}
                                diario={diario}
                                searchTerm={committedTerms}
                            />
                        ))}
                        
                    </div>

                    <div className={styles.Pagination}>
                        <button
                            className={styles.PageBtn}
                            onClick={prevPage}
                            disabled={currentPage === 0} >
                            Anterior
                        </button>

                        <span className={styles.PageIndicator}>
                            Página {currentPage + 1}
                        </span>

                        <button
                            className={styles.PageBtn}
                            onClick={handleNextPage}
                            disabled={!data.hasMore || isFetching} >
                            Próxima
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DocListing;