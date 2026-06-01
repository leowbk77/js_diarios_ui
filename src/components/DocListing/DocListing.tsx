import styles from './DocListing.module.css';
import { useSearchDiarios } from '../../hooks/UseSearchDiarios';
import { useSearchStore } from '../../stores/SearchStore';
import DocListingCard from './DocListingCard/DocListingCard';
import type { DiarioResult } from '../../types/Diario';

const teste: DiarioResult = {
    "id": 24,
    "nmEdicao": "7268.pdf",
    "caminho": "https://docs.uberlandia.mg.gov.br/wp-content/uploads/2026/01/7268.pdf",
    "ano": 2026,
    "mes": 1,
    "dia": 8,
    "paginas": [
        {
        "numero": 62,
        "conteudo": "UBERLÂNDIA\nQuinta-feira, 8 de janeiro de 2026\n62\nDIÁRIO OFICIAL “O Município” Nº 7268\nSMGAS\nEXTRATO DO SEGUNDO TERMO ADITIVO AO CONVÊNIO DE \nCOOPERAÇÃO TÉCNICA Nº 02.00001.2025-000\nPARTES: MUNICÍPIO DE UBERLÂNDIA, POR INTERMÉDIO \nDA SECRETARIA MUNICIPAL DE GESTÃO AMBIENTAL \nE SUSTENTABILIDADE, A UNIVERSIDADE FEDERAL DE \nUBERLÂNDIA E A FUNDAÇÃO DE DESENVOLVIMENTO \nAGROPECUÁRIO COMO INTERVENIENTE.\nFUNDAMENTAÇÃO: FUNDAMENTA-SE NA CLÁUSULA DÉCIMA \nDO CONVÊNIO DE COOPERAÇÃO MÚTUA Nº 02.00001.2025-\n000, QUE TEM POR OBJETO, A MANUTENÇÃO DO PROGRAMA \nDE ASSISTÊNCIA MÉDICO VETERINÁRIA PARA O MUNICÍPIO \nDE UBERLÂNDIA.\nOBJETO: O PRESENTE TERMO ADITIVO TEM POR OBJETO  A \nALTERAÇÃO DO ITEM 7.1. DA CLÁUSULA 7 DO CONVÊNIO Nº \n02.00001.2025-000, QUE INFORMA INICIALMENTE A PREVISÃO \nDE RECURSOS NO VALOR DE R$1.368.416,00 (UM MILHÃO, \nTREZENTOS E SESSENTA E OITO MIL QUATROCENTOS \nE DEZESSEIS REAIS), E PASSA A SER O IMPORTE DE \nR$1.482.416,00 (UM MILHÃO, QUATROCENTOS E OITENTA \nE DOIS MIL QUATROCENTOS E DEZESSEIS REAIS), UMA \nVEZ QUE O PRESENTE ADITAMENTO AMPLIA O MONTANTE \nDO RECURSO EM R$ 114.000,00 (CENTO E QUATORZE MIL \nREAIS).\nVALOR GLOBAL: R$1.482.416,00 (UM MILHÃO, \nQUATROCENTOS E OITENTA E DOIS MIL QUATROCENTOS E \nDEZESSEIS REAIS).\nDATA DE ASSINATURA: 03/12/2025.\nEXTRATO DO PRIMEIRO TERMO ADITIVO AO CONVÊNIO DE \nCOOPERAÇÃO TÉCNICA Nº 02.00087.2024-000\nPARTES: MUNICÍPIO DE UBERLÂNDIA, POR INTERMÉDIO \nDA SECRETARIA MUNICIPAL DE GESTÃO AMBIENTAL E \nSUSTENTABILIDADE, A FUNDAÇÃO DE DESENVOLVIMENTO \nAGROPECUÁRIO E A UNIVERSIDADE FEDERAL DE \nUBERLÂNDIA COMO INTERVENIENTE.\nFUNDAMENTAÇÃO: FUNDAMENTA-SE NA CLÁUSULA DÉCIMA \nDO TERMO DE CONVÊNIO Nº 02.00087.2024-000, QUE TEM POR \nOBJETO A DESTINAÇÃO DE RECURSOS FINANCEIROS PARA \nA AQUISIÇÃO DOS EQUIPAMENTOS LISTADOS NA TABELA \n1, ITEM 4 DO PLANO DE TRABALHO E PARA A PRESTAÇÃO \nDE ATENDIMENTO GRATUITO À ANIMAIS QUE NECESSITAM \nDE TRATAMENTO ONCOLÓGICO, ENCAMINHADOS PELA \nPOPULAÇÃO, ONGS OU PELOS ÓRGÃOS DE SALVAMENTO.\nOBJETO: O PRESENTE TERMO ADITIVO TEM POR OBJETO \nA ALTERAÇÃO ITEM 5.1. DA CLÁUSULA 5 DO CONVÊNIO Nº \n02.00087.2024-000, QUE INFORMA INICIALMENTE A VIGÊNCIA \nDE 12 (DOZE) MESES CONTADOS A PARTIR DA ASSINATURA, \nE PASSA A TER A VIGÊNCIA ATÉ 19/11/2026.\nVALOR GLOBAL: R$ 578.540,27 (QUINHENTOS E SETENTA E \nOITO MIL QUINHENTOS E QUARENTA REAIS E VINTE E SETE \nCENTAVOS).\nDOTAÇÃO: PARA ATENDER ÀS DESPESAS, SERÃO \nUTILIZADOS RECURSOS PROVENIENTES DA SEGUINTE \nDOTAÇÃO ORÇAMENTÁRIA 03-01.18.541.5003.3.037-33.20.41, \nFICHA: 16189 E 03 01-18.541.5003.3.037-44.20.42, FICHA: \n16190, FONTE 1.500.000.\nDATA DE ASSINATURA: 17/11/2025.\nEXTRATO DO SEGUNDO TERMO ADITIVO AO CONVÊNIO DE \nCOOPERAÇÃO TÉCNICA Nº 02.00087.2024-000\nPARTES: MUNICÍPIO DE UBERLÂNDIA, POR INTERMÉDIO \nDA SECRETARIA MUNICIPAL DE GESTÃO AMBIENTAL E \nSUSTENTABILIDADE, A FUNDAÇÃO DE DESENVOLVIMENTO \nAGROPECUÁRIO E A UNIVERSIDADE FEDERAL DE \nUBERLÂNDIA COMO INTERVENIENTE.\nFUNDAMENTAÇÃO: FUNDAMENTA-SE NA CLÁUSULA DÉCIMA \nDO TERMO DE CONVÊNIO Nº 02.00087.2024-000, QUE TEM POR \nOBJETO A DESTINAÇÃO DE RECURSOS FINANCEIROS PARA \nA AQUISIÇÃO DOS EQUIPAMENTOS LISTADOS NA TABELA \n1, ITEM 4 DO PLANO DE TRABALHO E PARA A PRESTAÇÃO \nDE ATENDIMENTO GRATUITO À ANIMAIS QUE NECESSITAM \nDE TRATAMENTO ONCOLÓGICO, ENCAMINHADOS PELA \nPOPULAÇÃO, ONGS OU PELOS ÓRGÃOS DE SALVAMENTO.\nOBJETO: O PRESENTE TERMO ADITIVO TEM POR OBJETO \nA SUBSTITUIÇÃO DA TABELA DE PREÇOS CONSTANTE \nNO ANEXO II PELA TABELA DE PREÇOS ANEXADA AO \nADITAMENTO, ATUALMENTE VIGENTE E UTILIZADA PELO \nHOSPITAL VETERINÁRIO DA UNIVERSIDADE FEDERAL DE \nUBERLÂNDIA - UFU, CONFORME DISPOSTO NA CLÁUSULA \nSÉTIMA – PREÇOS E PAGAMENTOS DO REFERIDO \nCONVÊNIO.\nVALOR GLOBAL: R$ 578.540,27 (QUINHENTOS E SETENTA E \nOITO MIL QUINHENTOS E QUARENTA REAIS E VINTE E SETE \nCENTAVOS).\nDOTAÇÃO: PARA ATENDER ÀS DESPESAS, SERÃO \nUTILIZADOS RECURSOS PROVENIENTES DA SEGUINTE \nDOTAÇÃO ORÇAMENTÁRIA 03-01.18.541.5003.3.037-33.20.41, \nFICHA: 16189 E 03 01-18.541.5003.3.037-44.20.42, FICHA: \n16190, FONTE 1.500.000.\nDATA DE ASSINATURA: 19/12/2025.\nSSEG\nEXTRATO DO CONVÊNIO Nº 097/2025\nCONCEDENTE: MUNICÍPIO DE UBERLÂNDIA.\nCONVENENTE: POLICIA MILITAR DO ESTADO DE MINAS \nGERAIS.\nOBJETO: O PRESENTE CONVÊNIO TEM POR OBJETO \nPROMOVER O REPASSE DE RECURSOS FINANCEIROS, POR \nMEIO DE EMENDAS PARLAMENTARES E LEI AUTORIZATIVA À \nPMMG, A FIM DE MODERNIZAR E ESTRUTURAR A LOGÍSTICA, \nOS SERVIÇOS E UNIDADES DA INSTITUIÇÃO, COM \nPROPÓSITO DE OTIMIZAR O SERVIÇO PÚBLICO OFERTADO \nEM ÂMBITO MUNICIPAL.\nFUNDAMENTAÇÃO: O PRESENTE CONVÊNIO FUNDAMENTA-\nSE NO ART. 144 DA CONSTITUIÇÃO FEDERAL, NA LEI \nFEDERAL N° 14.133, DE 01 DE ABRIL DE 2021 E SUAS \nALTERAÇÕES, NO ART. 62 DA LEI COMPLEMENTAR FEDERAL \nN° 101, DE 04 DE MAIO DE 2000, NO DECRETO ESTADUAL \nNO 48.745, DE 29/12/2023, NO ART. 1O, INCISOS IV E VII \nDO DECRETO MUNICIPAL NO 16.926/2017, NA A LEI DE \nDIRETRIZES ORÇAMENTÁRIA NO 14.221 DE 01/08/2024, \nNA LEI ORÇAMENTÁRIA ANUAL NO 14.318 DE 18/12/2024, \nNOS ART. 46 E ART. 110-A DA LEI ORGÂNICA DO MUNICÍPIO \nDE UBERLÂNDIA, NAS EMENDAS PARLAMENTARES NO: \n082/2024, 093/2024, 110/2024, 140/2024, 177/2024, 178/2024/ \n230/2024, 270/2024, 300/2024, 348/2024, 353/2024, 360/2024, \n366/2024, 369/2024, 410/2024, 421/2024, 464/2024, 485/2024, \n494/2024, 513/2024, 661/2024, 676/2024, NA LEI AUTORIZATIVA \nNO 14.316 DE 13/12/2024, NA LEI AUTORIZATIVA NO 14.570, \nDE 15/10/2025 E NAS LEGISLAÇÕES FUTURAS.\nVALOR: R$ 1.270.000,00 (UM MILHÃO DUZENTOS E SETENTA \nMIL REAIS)\nVIGENCIA : 31/12/2025 A 31/12/2027\nASSINATURA: 30/12/2025"
        },
        {
        "numero": 63,
        "conteudo": "UBERLÂNDIA\nDIÁRIO OFICIAL “O Município” Nº 7268Quarta-feira, 8 de janeiro de 2026\n63\nEXTRATO DO TERMO DE COOPERAÇÃO TÉCNICA 01/2025\nCONCEDENTE: MUNICÍPIO DE UBERLÂNDIA.\nCONVENENTE: POLICIA MILITAR DO ESTADO DE MINAS \nGERAIS.\nO PRESENTE INSTRUMENTO TEM POR OBJETO \nESTABELECER A COOPERAÇÃO TÉCNICA E OPERACIONAL, \nO INTERCÂMBIO DE CONHECIMENTOS, INFORMAÇÕES, \nDADOS, IMAGENS E TECNOLOGIAS E SOLUÇÕES BASEADAS \nEM INTELIGÊNCIA ARTIFICIAL ENTRE OS PARTÍCIPES, \nPOR MEIO DE MECANISMOS DE COMPARTILHAMENTO \nAPROPRIADO À CONSECUÇÃO DAS ATIVIDADES \nFINALÍSTICAS VOLTADAS A ASSEGURAR A EFETIVIDADE DAS \nPOLÍTICAS PÚBLICAS PROMOVIDA PELOS PARTÍCIPES.\nFUNDAMENTAÇÃO: FUNDAMENTO NA LEI FEDERAL Nº \n14.133, DE 1º DE ABRIL DE 2021 E SUAS ALTERAÇÕES.\nVALOR: NÃO HÁ REPASSE\nVIGENCIA: DE 15/12/2025 A 14/12/2030.\nADMINISTRAÇÃO INDIRETA\nDMAE\nAUTORIZAÇÃO DE CONTRATAÇÃO\nDISPENSA ELETRÔNICA N° 324/2025\nProcesso Administrativo: 665/2025\nRequisição n°: 5214/2025.\nDiretoria Requisitante: Diretoria-Geral Adjunta\n1 - Trata-se de procedimento administrativo para a contratação \ndos fornecedores BRUNA JOARA DURAND PINTO DE FARIAS \n- ME, inscrito no CNPJ sob n° 47.738.061/0001-14, optante pelo \nSimples Nacional, e BARACUI COMERCIAL LTDA - ME, inscrito \nno CNPJ sob n° 12.929.043/0001-35, optante pelo Simples \nNacional, em consonância com o disposto no art. 75, II, da Lei \nFederal n° 14.133, de 2021, por meio de dispensa eletrônica, nos \ntermos do art. 96-A do Decreto Municipal n° 20.154, de 2023, \nvisando a contratação exclusiva de Microempresa – ME, Empresa \nde Pequeno Porte – EPP ou equiparadas para aquisição de cabo \nde rede e tomada, conforme condições e exigências estabelecidas \nno termo de referência, em atendimento à Diretoria-Geral Adjunta.\n2. A instrução processual foi formalizada pela Diretoria de \nSuprimentos, tendo sido dispensados de análise os documentos \nde regularidade fiscal e trabalhista, conforme art. 70, inciso III da \nLei Federal nº 14.133, de 2021 (item 9.7 do termo de referência).\n3. Constam dos autos as requisição n° 5214/2025, que apresenta \na autorização para abertura do processo, o Termo de Referência \ne a identificação da disponibilidade orçamentária, previstos \nnas dotações orçamentárias: 17.01.17.122.0018.4.007.3.3.90.\n30 – Material de Consumo – Diretoria-Geral Adjunta, recursos \nsuficientes para custear as despesas decorrentes da pretendida \ncontratação no valor total de R$ 6.783,20 (seis mil setecentos e \noitenta e três reais e vinte centavos) para o item 01 e R$ 3.996,00 \n(três mil novecentos e noventa e seis reais) para  o item 02,  nos \ntermos do art. 25 do Decreto n° 20.154, de 2023.\n4. Ante o exposto, verificada a presença dos elementos necessários \ne a regularidade do feito, AUTORIZO a contratação direta, nos \ntermos do art. 72, parágrafo único, da Lei n° 14.133, de 2021, \nconforme delegação de competência conferida pelos artigos 40 \ne 41 da Lei Complementar n° 751, de 15 de março de 2023, c/c \nartigo 24, inciso IV do Decreto n° 20.154, de 2023.\n5 – Assim sendo, restituo os autos à Diretoria de Suprimentos para \ndivulgação da contratação direta na forma da Lei e efetivação dos \ndemais atos necessários à contratação.\nUberlândia, data da publicação.\nRODRIGO SÁVIO COUTO DE LACERDA\nDiretor-Geral do DMAE\nLUCAS JOSÉ DE OLIVEIRA\nDiretor-Geral Adjunto do DMAE\n1º APOSTILAMENTO AO CONTRATO ADMINISTRATIVO Nº \n205.2024\nPREGÃO ELETRÔNICO Nº 266/2024\nCONTRATANTE: DEPARTAMENTO MUNICIPAL DE ÁGUA E \nESGOTO – DMAE, por meio da Diretoria de Drenagem Pluvial.\nCONTRATADA: DRESTE CONSTRUTORA LTDA, CNPJ: \n23.138.373/0001-29.\nREPRESENTANTES: Luiz Fernando Violatti, qualificação \nconforme atos constitutivos da empresa apresentados nos autos \ndo processo de contratação.\nFUNDAMENTAÇÃO: O presente apostilamento fundamenta-\nse na cláusula sétima do contrato original; artigo 136, inciso I, \nda Lei Federal 14.133/2021, c/c artigo 117 do Decreto Municipal \nn° 20.154/2023; na requisição nº 6173/2025 e 6174/2025; no \nComunicado Interno nº 21845/2025/GDP/DDP; Requerimento da \nContratada de 10/11/2025; no Parecer da Comissão Permanente \npara Análise, Avaliação Jurídica, Revisão Técnica, Econômica \ne Financeira de Contratos Administrativos do DMAE e demais \ndocumentos, que ficam fazendo parte integrante do presente \napostilamento.\nOBJETO: Constitui objeto do presente apostilamento o reajuste \nde preços no percentual de 4,490240% ao Contrato nº 205.2024, \na partir de 10/11/2025 do contrato, em atendimento à Diretoria do \nDrenagem Pluvial, permanecendo as demais cláusulas inalteradas.\nTABELA: A tabela desse aditamento consta em anexo\nVALOR TOTAL DO APOSTILAMENTO: R$ 51.422,46 (cinquenta \ne um mil e quatrocentos e vinte e dois reais e quarenta e seis \ncentavos).\nFicam ratificadas e inalteradas as demais cláusulas e condições \ndo instrumento original e suas eventuais alterações, do(s) \nqual(is) o presente instrumento passa a fazer parte integrante e \ncomplementar.\nUberlândia/MG, 26 de dezembro de 2025.\nCLEYTON SILAS MARTINS\nDiretor da Diretoria de Drenagem Pluvial\nRODRIGO SÁVIO COUTO DE LACERDA\nDiretor Geral DMAE\n1º APOSTILAMENTO AO CONTRATO ADMINISTRATIVO Nº \n229/2025\nProcesso Inexigível à Licitação nº 341/2025\nContratante: Departamento Municipal de Água e Esgoto – DMAE.\nContratada: Digitro Tecnologia S.A., CNPJ: 83.472.803/0001-76.\nFundamentação: O presente apostilamento fundamenta-se no \nitem 17.3 da Cláusula Décima Sétima do Contrato original e no art. \n136, caput, da Lei Federal n° 14.133/2024.\nObjeto: Correção de erro material constante na Cláusula Terceira, \nitem 3.1 do Contrato n° 229/2025, passando a constar o ano \ncorreto da vigência como “junho de 2026”, em substituição ao \nanteriormente indicado como “junho de 2025”.\nFicam ratificadas e inalteradas as demais cláusulas e condições \ndo instrumento original e suas eventuais alterações, do(s) \nqual(is) o presente instrumento passa a fazer parte integrante e \ncomplementar.\nUberlândia, (data da publicação).\nRODRIGO SÁVIO COUTO DE LACERDA\nDiretor-Geral do DMAE\nSIMONE PACHECO RIBEIRO\nDiretora Financeira do DMAE"
        }
    ]
}

const DocListing = () => {
    const { data, isLoading, isError, isFetching } = useSearchDiarios();
    const { terms, currentPage, nextPage, prevPage } = useSearchStore();


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

    
    if (!data || data.results.length === 0) return (
        <div className={styles.DocListing}>
            <p className={styles.StatusMsg}>Nenhum documento encontrado.</p>
        </div>
    );

    function handleNextPage() {
        const lastId = data!.results.at(-1)?.id;
        if (lastId) nextPage(lastId);
    }

    return (
        <div className={styles.DocListingMain}>
            <div className={styles.DocListingHeader}>
                <h3>Lista de documentos</h3>
                <div className={styles.DocListingCount}>
                    <p>{data.results.length} itens</p>
                </div>
            </div>
            <div className={styles.DocListingCardBox}>
                
                <div className={styles.DocListing}>

                    {/* opacidade reduzida durante refetch de paginação para não sumir com os resultados */}
                    <div className={isFetching ? styles.Fetching : ''}>
                        {data.results.map((diario) => (
                            <DocListingCard
                                key={diario.id}
                                diario={diario}
                                searchTerm={terms}
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