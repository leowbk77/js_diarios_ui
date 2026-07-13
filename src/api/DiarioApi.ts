import type { DiarioResult, SearchResponse } from "../types/Diario";

const BASE_URL = import.meta.env.DEV ? 'https://localhost:44346' : '';

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

  const res = await fetch(`${BASE_URL}/api/diarios/search?${query.toString()}`);

  if (!res.ok) throw new Error(`Erro na busca: ${res.status}`);

  return res.json();
}

export async function getLatestDiario(cidade: string): Promise<DiarioResult> {
    const res = await fetch(`${BASE_URL}/api/diarios/get-latest?from=${cidade}`);

    if (!res.ok) throw new Error(`Erro ao buscar diário mais recente: ${res.status}`);

    return res.json();
}