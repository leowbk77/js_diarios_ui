import { useQuery } from '@tanstack/react-query';
import { searchDiarios } from '../api/DiarioApi';
import { useSearchStore } from '../stores/SearchStore';
import type { SearchResponse } from '../types/Diario';

export function useSearchDiarios() {
  const { 
    committedTerms,
    committedEdicao,
    committedDtInicial,
    committedDtFinal,
    cidade,
    lastDocId,
    lastDocDtEdicao,
  } = useSearchStore();

  return useQuery<SearchResponse>({
    queryKey: ['diarios', {
      committedTerms,
      committedEdicao,
      committedDtInicial,
      committedDtFinal,
      cidade,
      lastDocId,
      lastDocDtEdicao
    }],
    queryFn: () => searchDiarios({
      terms:     committedTerms,
      edicao:    committedEdicao,
      dtInicial: committedDtInicial,
      dtFinal:   committedDtFinal,
      cidade,
      lastDocId,
      lastDocDtEdicao
    }),

    // só executa se houver pelo menos um termo ou edição preenchidos
    enabled: !!(committedTerms.trim() || committedEdicao.trim() || committedDtInicial) && !!cidade,

    // mantém resultado anterior visível enquanto carrega a próxima página
    placeholderData: (prev) => prev,
  });
}