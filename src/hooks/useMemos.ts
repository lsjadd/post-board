import { useSelector } from 'react-redux';
import { RootState } from '../modules';

export default function useMemos() {
  const memos = useSelector((state: RootState) => state.memos);
  return memos;
}
