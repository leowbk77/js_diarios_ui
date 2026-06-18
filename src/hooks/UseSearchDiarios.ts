import { useQuery } from '@tanstack/react-query';
import { searchDiarios } from '../api/DiarioApi';
import { useSearchStore } from '../stores/SearchStore';
import type { DiarioResult } from '../types/Diario';

export function useSearchDiarios() {
  const { committedTerms, edicao, dtInicial, dtFinal, cidade, lastDocId } = useSearchStore();

  return useQuery<DiarioResult[]>({
    queryKey: ['diarios', { committedTerms, edicao, dtInicial, dtFinal, cidade, lastDocId }],
    queryFn: () => searchDiarios({ terms: committedTerms, edicao, dtInicial, dtFinal, cidade, lastDocId }),

    // só executa se houver pelo menos um termo ou edição preenchidos
    enabled: !!(committedTerms.trim() || edicao.trim()) && !!cidade,

    // mantém resultado anterior visível enquanto carrega a próxima página
    placeholderData: (prev) => prev,
  });
}