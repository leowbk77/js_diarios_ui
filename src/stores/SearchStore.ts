import { create } from 'zustand';

interface SearchFilters {
  terms: string;
  committedTerms: string;
  edicao: string;
  committedEdicao: string;
  dtInicial: string;
  committedDtInicial: string;
  dtFinal: string;
  committedDtFinal: string;
  cidade: string;
}

interface SearchStore extends SearchFilters {
  cursors: number[];
  currentPage: number;
  lastDocId: number;

  setTerms:     (v: string) => void;
  setEdicao:    (v: string) => void;
  setDtInicial: (v: string) => void;
  setDtFinal:   (v: string) => void;
  setCidade:    (v: string) => void;

  // confirma a busca — copia terms → committedTerms e reseta paginação
  commitSearch: () => void;

  nextPage: (lastDocId: number) => void;
  prevPage: () => void;
  resetCursors: () => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  terms: '',
  committedTerms: '',
  edicao: '',
  committedEdicao: '',
  dtInicial: '',
  committedDtInicial: '',
  dtFinal: '',
  committedDtFinal: '',
  cidade: 'udi',

  cursors: [0],
  currentPage: 0,
  lastDocId: 0,

  // setters de filtro — não disparam query, só atualizam o valor digitado
  setTerms:     (terms)     => set({ terms }),
  setEdicao:    (edicao)    => set({ edicao }),
  setDtInicial: (dtInicial) => set({ dtInicial }),
  setDtFinal:   (dtFinal)   => set({ dtFinal }),
  setCidade:    (cidade)    => set({ cidade }),

  commitSearch: () => set((state) => ({
    committedTerms:     state.terms,
    committedEdicao:    state.edicao,
    committedDtInicial: state.dtInicial,
    committedDtFinal:   state.dtFinal,
    currentPage: 0,
    lastDocId: 0,
  })),

  nextPage: (lastDocId) => set((state) => ({
    cursors: [...state.cursors, lastDocId],
    currentPage: state.currentPage + 1,
    lastDocId,
  })),

  prevPage: () => set((state) => {
    const prevPage = Math.max(0, state.currentPage - 1);
    return {
      currentPage: prevPage,
      lastDocId: state.cursors[prevPage],
    };
  }),

  resetCursors: () => set({ cursors: [0], currentPage: 0, lastDocId: 0 }),
}));