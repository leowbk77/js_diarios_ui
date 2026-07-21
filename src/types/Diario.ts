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

export interface SearchResponse {
  searchDiariosResults: DiarioResult[];
  hasMore: boolean;
}