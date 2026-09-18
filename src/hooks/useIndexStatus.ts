import { useQuery } from '@tanstack/react-query';
import { getIndexStatus } from '../api/DiarioApi';
import { useSearchStore } from '../stores/SearchStore';
import type { IndexStatus } from '../types/Diario';

export function useIndexStatus() {
  const { cidade } = useSearchStore();

  return useQuery<IndexStatus>({
    queryKey: ['index-status', cidade],
    queryFn: () => getIndexStatus(cidade),
    enabled: !!cidade,
  });
}