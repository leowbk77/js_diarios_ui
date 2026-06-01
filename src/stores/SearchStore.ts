import { create } from 'zustand';

interface SearchFilters {
  terms: string;
  committedTerms: string;
  edicao: string;
  dtInicial: string;
  dtFinal: string;
  cidade: string;
}

interface SearchStore extends SearchFilters {
  // paginação
  cursors: number[];
  currentPage: number;
  lastDocId: number;


  // setters de filtro — resetam o cursor ao mudar
  setTerms:     (v: string) => void;
  setEdicao:    (v: string) => void;
  setDtInicial: (v: string) => void;
  setDtFinal:   (v: string) => void;
  setCidade:    (v: string) => void;

  commitSearch: () => void;

  // paginação
  nextPage: (lastDocId: number) => void;
  prevPage: () => void;
  resetCursors: () => void;
}

export const useSearchStore = create<SearchStore>((set) => ({
  terms: '',
  committedTerms: '',
  edicao: '',
  dtInicial: '',
  dtFinal: '',
  cidade: '',

  cursors: [0],
  currentPage: 0,
  lastDocId: 0,

  setTerms:     (terms)     => set({ terms,     cursors: [0], currentPage: 0, lastDocId: 0 }),
  setEdicao:    (edicao)    => set({ edicao,    cursors: [0], currentPage: 0, lastDocId: 0 }),
  setDtInicial: (dtInicial) => set({ dtInicial, cursors: [0], currentPage: 0, lastDocId: 0 }),
  setDtFinal:   (dtFinal)   => set({ dtFinal,   cursors: [0], currentPage: 0, lastDocId: 0 }),
  setCidade:    (cidade)    => set({ cidade }),

  commitSearch: () => set((state) => ({ 
    committedTerms: state.terms, 
    cursors: [0], 
    currentPage: 0, 
    lastDocId: 0 })),

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