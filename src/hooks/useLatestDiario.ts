import { useQuery } from '@tanstack/react-query';
import { getLatestDiario } from '../api/DiarioApi';
import { useSearchStore } from '../stores/SearchStore';

export function useLatestDiario() {
    const { cidade } = useSearchStore();

    return useQuery({
        queryKey: ['diarios', 'latest', cidade],
        queryFn: () => getLatestDiario(cidade),
        enabled: !!cidade,
    });
}