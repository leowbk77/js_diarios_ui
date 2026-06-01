import { useQuery } from '@tanstack/react-query';
import { searchDiarios } from '../api/DiarioApi';
import { useSearchStore } from '../stores/SearchStore';

export function useSearchDiarios() {
  const { terms, committedTerms, edicao, dtInicial, dtFinal, cidade, lastDocId } = useSearchStore();

  return useQuery({
    queryKey: ['diarios', { committedTerms, edicao, dtInicial, dtFinal, cidade, lastDocId }],
    queryFn: () => searchDiarios({ terms: committedTerms, edicao, dtInicial, dtFinal, cidade, lastDocId }),

    // só executa se houver pelo menos um termo ou edição preenchidos
    enabled: !!(terms.trim() || edicao.trim()) && !!cidade,

    // mantém resultado anterior visível enquanto carrega a próxima página
    placeholderData: (prev) => prev,
  });
}