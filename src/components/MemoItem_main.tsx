import useMemoActions_main from '../hooks/useMemoActions_main';
import { Memo } from '../modules/memos_main';
import Draggable from 'react-draggable';

export type MemoItemProps1 = {
  memo1: Memo;
  pid: string;
};
const MemoItem_main: React.FC<MemoItemProps1> = ({ memo1, pid }) => {
  let new_memo_main;
  if (Number(memo1.pid) === Number(pid)) {
    new_memo_main = memo1;
  }
  const { onRemove_main } = useMemoActions_main(memo1.cid);
  return (
    <div className={`MemoItem_main ${new_memo_main ? 'show' : 'hidden'}`}>
      <Draggable>
        <div className="text_box">
          <div className="text_title">
            {memo1.ctext} {memo1.cbody}
            <span className="remove" onClick={onRemove_main}>
              X
            </span>
          </div>
          <div className="text_body">{memo1.cbody}</div>
        </div>
      </Draggable>
    </div>
  );
};
export default MemoItem_main;
