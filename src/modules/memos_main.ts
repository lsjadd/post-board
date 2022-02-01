const ADD_MEMO_MAIN = 'memos_main/ADD_MEMO_MAIN' as const;
const REMOVE_MEMO_MAIN = 'memos_main/REMOVE_MEMO_MAIN' as const;

/*localStorage.clear();*/

export const addMemo_main = (pid: number) => ({
  type: ADD_MEMO_MAIN,
  payload: pid,
});

export const removeMemo_main = (cid: number) => ({
  type: REMOVE_MEMO_MAIN,
  payload: cid,
});

type MemosAction = ReturnType<typeof addMemo_main> | ReturnType<typeof removeMemo_main>;

export type Memo = {
  pid: number;
  cid: number;
  ctext: string;
  cbody: string;
};

type MemosState = Memo[];

const storedMemoState1 = localStorage.getItem('memomain');
let storedMemoList1 = JSON.parse(storedMemoState1!);

if (storedMemoList1 == null || storedMemoList1.length === 0) {
  storedMemoList1 = [{ pid: 1, cid: 1, ctext: 'Untitled_main_first', cbody: 'content' }];
  localStorage.setItem('memomain', JSON.stringify(storedMemoList1));
}

function memos_main(state: MemosState = storedMemoList1, action: MemosAction): MemosState {
  switch (action.type) {
    case ADD_MEMO_MAIN: {
      const nextcId = Math.max(...state.map((memo) => memo.cid)) + 1;
      const add_store = state.concat({
        pid: action.payload,
        cid: nextcId,
        ctext: 'Untitled Note',
        cbody: 'content',
      });
      localStorage.setItem('memomain', JSON.stringify(add_store));
      return add_store;
    }
    case REMOVE_MEMO_MAIN: {
      // eslint-disable-next-line no-restricted-globals
      const confirmDelete = confirm('삭제하시겠습니까?');
      let store = state;
      if (confirmDelete) {
        store = state.filter((memo) => memo.cid !== action.payload);
        localStorage.setItem('memoState', JSON.stringify(store));
      }
      return store;
    }
    default:
      return state;
  }
}
export default memos_main;
