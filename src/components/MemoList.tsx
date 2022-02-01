import React from 'react';
import '../App.css';
import useMemos from '../hooks/useMemos';
import useMemos_main from '../hooks/useMemos_main';
import MemoItem from './MemoItem';
import MemoItem_main from './MemoItem_main';
import useAddMemo from '../hooks/useAddMemo';
import useAddMemo_main from '../hooks/useAddMemo_main';
import { FormEvent, useState } from 'react';

const MemoList: React.FC = () => {
  const [value] = useState('');
  const addMemo = useAddMemo();
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    addMemo(value);
  };
  const memos = useMemos();
  const memos_main = useMemos_main();

  const [clickedMemo, setClickedMemo] = useState('');
  const addMemo_main = useAddMemo_main();

  const memoHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button1: HTMLButtonElement = event.currentTarget;
    setClickedMemo(button1.name);
  };
  const memoHandler1 = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const button1: HTMLButtonElement = event.currentTarget;
    setClickedMemo(button1.name);
  };

  const onSubmit_main = (e: FormEvent) => {
    const value1 = clickedMemo;
    if (value1 === null || value1 === '') {
      return false;
    }
    e.preventDefault();
    addMemo_main(value1);
  };

  return (
    <div className="App">
      <div className="app-sidebar">
        <div className="app-sidebar-notes">
          {memos.map((memo) => (
            <button onClick={memoHandler} key={memo.id} name={JSON.stringify(memo.id)}>
              <MemoItem memo={memo} />
            </button>
          ))}
          <div className="app-sidebar-header">
            <form onSubmit={onSubmit}>
              <button type="submit">+</button>
            </form>
          </div>
        </div>
      </div>
      <div className="app-main">
        <div className="app-main-note-edit">
          <form onSubmit={onSubmit_main}>
            <button type="submit">add</button>
          </form>
          {/*{memos_main.map((memo_main) => (
            <MemoItem_main pid={clickedMemo} memo_main={memo_main} key={memo_main.cid} />
          ))}*/}
          {memos_main.map((memo1) => (
            <button onClick={memoHandler1} key={memo1.cid} name={JSON.stringify(memo1.cid)}>
              <MemoItem_main pid={clickedMemo} memo1={memo1} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default MemoList;
