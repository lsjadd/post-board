import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { toggleMemo, removeMemo } from '../modules/memos';

export default function useMemoActions(id: number) {
  const dispatch = useDispatch();
  const onToggle = useCallback(() => dispatch(toggleMemo(id)), [dispatch, id]);
  const onRemove = useCallback(() => dispatch(removeMemo(id)), [dispatch, id]);

  return { onToggle, onRemove };
}
