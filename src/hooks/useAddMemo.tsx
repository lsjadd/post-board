import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { addMemo } from '../modules/memos';

export default function useAddMemo() {
  const dispatch = useDispatch();
  return useCallback((text) => dispatch(addMemo(text)), [dispatch]);
}
