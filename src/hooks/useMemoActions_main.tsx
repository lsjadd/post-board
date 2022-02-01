import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { removeMemo_main } from '../modules/memos_main';

export default function useMemoActions_main(cid: number) {
  const dispatch = useDispatch();
  const onRemove_main = useCallback(() => dispatch(removeMemo_main(cid)), [dispatch, cid]);
  return { onRemove_main };
}
