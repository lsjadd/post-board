import React from 'react';
import { Memo } from '../modules/memos';
import useMemoActions from '../hooks/useMemoActions';
export type MemoItemProps = {
  memo: Memo;
};
const MemoItem: React.FC<MemoItemProps> = ({ memo }) => {
  const { onRemove } = useMemoActions(memo.id);
  return (
    <div className="app-sidebar-note">
      <div className="sidebar-note-title">
        <strong> {memo.text}</strong>
        <span className="remove" onClick={onRemove}>
          X
        </span>
      </div>
    </div>
  );
};
export default MemoItem;
