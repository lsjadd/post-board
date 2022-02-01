import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { addMemo_main } from '../modules/memos_main';

export default function useAddMemo_main() {
  const dispatch1 = useDispatch();
  return useCallback((pid) => dispatch1(addMemo_main(pid)), [dispatch1]);
}
