import type { SearchResponse } from "../types/Diario";

const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:5000';

export interface SearchParams {
  terms?: string;
  edicao?: string;
  dtInicial?: string;
  dtFinal?: string;
  lastDocId?: number;
  limit?: number;
  cidade: string;
}

export async function searchDiarios(params: SearchParams): Promise<SearchResponse> {
  const query = new URLSearchParams();

  if (params.terms)     query.set('terms', params.terms);
  if (params.edicao)    query.set('edicao', params.edicao);
  if (params.dtInicial) query.set('dtInicial', params.dtInicial);
  if (params.dtFinal)   query.set('dtFinal', params.dtFinal);
  if (params.lastDocId) query.set('lastDocId', String(params.lastDocId));

  query.set('limit', String(params.limit ?? 10));
  query.set('cidade', params.cidade);

  const res = await fetch(`${BASE_URL}/diarios/search?${query.toString()}`);

  if (!res.ok) throw new Error(`Erro na busca: ${res.status}`);

  return res.json();
}