export interface Pagina {
  numero: number;
  conteudo: string;
}

export interface DiarioResult {
  id: number;
  nmEdicao: string;
  caminho: string;
  data: string;
  paginas: Pagina[];
}

export interface Paginacao {
  lastDiarioId: number;
  lastDiarioData: string;
}

export interface SearchResponse {
  searchDiariosResults: DiarioResult[];
  paginacao: Paginacao;
  hasMore: boolean;
}

export interface IndexStatus {
  diariosIndexados: number;
  dataMaisRecenteIndexada: string;
  dataMaisAntigaIndexada: string;
}