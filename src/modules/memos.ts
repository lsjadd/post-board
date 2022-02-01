// 액션 type
const ADD_MEMO = 'memos/ADD_MEMO' as const;
const TOGGLE_MEMO = 'memos/TOGGLE_MEMO' as const;
const REMOVE_MEMO = 'memos/REMOVE_MEMO' as const;

const storedMemoState = localStorage.getItem('memoState');
let storedMemoList = JSON.parse(storedMemoState!);

/*localStorage.clear()*/

export const addMemo = (text: string) => ({
  type: ADD_MEMO,
  payload: text,
});

export const toggleMemo = (id: number) => ({
  type: TOGGLE_MEMO,
  payload: id,
});

export const removeMemo = (id: number) => ({
  type: REMOVE_MEMO,
  payload: id,
});

// 액션들의 타입스크립트 타입 준비
type MemosAction = ReturnType<typeof addMemo> | ReturnType<typeof toggleMemo> | ReturnType<typeof removeMemo>;

// 상태를 위한 타입 선언
export type Memo = {
  id: number;
  text: string;
};
// 상태를 위한 타입 선언
export type Dialog = {
  type: 'alter' | 'confirm';
  text: string;
};
type MemosState = Memo[];
if (storedMemoList == null || storedMemoList.length === 0) {
  storedMemoList = [{ id: 1, text: 'Untitled_first' }];
  localStorage.setItem('memoState', JSON.stringify(storedMemoList));
}
function memos(state: MemosState = storedMemoList, action: MemosAction): MemosState {
  switch (action.type) {
    case ADD_MEMO: {
      const nextId = Math.max(...state.map((memo) => memo.id)) + 1;
      const add_store = state.concat({
        id: nextId,
        text: 'Untitled',
      });
      localStorage.setItem('memoState', JSON.stringify(add_store));
      return add_store;
    }
    case REMOVE_MEMO: {
      // eslint-disable-next-line no-restricted-globals
      const confirmDelete = confirm('삭제하시겠습니까?');
      let store = state;
      if (confirmDelete) {
        store = state.filter((memo) => memo.id !== action.payload);
        localStorage.setItem('memoState', JSON.stringify(store));
      }
      return store;
    }
    default:
      return state;
  }
}
export default memos;
