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
  cursors: {docId: number; dtEdicao: string}[];
  currentPage: number;
  lastDocId: number;
  lastDocDt: string;

  setTerms:     (v: string) => void;
  setEdicao:    (v: string) => void;
  setDtInicial: (v: string) => void;
  setDtFinal:   (v: string) => void;
  setCidade:    (v: string) => void;

  // confirma a busca — copia terms → committedTerms e reseta paginação
  commitSearch: () => void;

  nextPage: (paginacao: { lastDiarioId: number; lastDiarioData: string }) => void;
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

  cursors: [{ docId: 0, dtEdicao: ''}],
  currentPage: 0,
  lastDocId: 0,
  lastDocDt: '',

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
    lastDocDt: '',
  })),

  nextPage: (paginacao) => set((state) => ({
    cursors: [...state.cursors, {docId: paginacao.lastDiarioId, dtEdicao: paginacao.lastDiarioData}],
    currentPage: state.currentPage + 1,
    lastDocId: paginacao.lastDiarioId,
    lastDocDt: paginacao.lastDiarioData,
  })),

  prevPage: () => set((state) => {
    const prevPage = Math.max(0, state.currentPage - 1);
    const cursor = state.cursors[prevPage]
    return {
      currentPage: prevPage,
      lastDocId: cursor.docId,
      lastDocDt: cursor.dtEdicao,
    };
  }),

  resetCursors: () => set({ cursors: [{docId: 0, dtEdicao: ''}], currentPage: 0, lastDocId: 0, lastDocDt: '' }),
}));