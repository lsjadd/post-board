import { useSelector } from 'react-redux';
import { RootState } from '../modules';

export default function useMemos_main() {
  const memos_main = useSelector((state: RootState) => state.memos_main);
  return memos_main;
}
