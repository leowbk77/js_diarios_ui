export interface Pagina {
  numero: number;
  conteudo: string;
}

export interface DiarioResult {
  id: number;
  nmEdicao: string;
  caminho: string;
  ano: number;
  mes: number;
  dia: number;
  data: Date;
  paginas: Pagina[];
}

export interface SearchResponse {
  searchDiariosResults: DiarioResult[];
  hasMore: boolean;
}