import { FiFilm } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { FileInfo, removeFile } from '../../store';

import styles from './FileElement.module.css';

export const FileElement = (props: FileInfo) => {
  const { id, name, path, size } = props;
  const dispatch = useDispatch();

  const convert = () => {
    console.log(path);
  };

  const remove = () => {
    dispatch(removeFile(id));
  };

  useEffect(() => {
    window.electron.ipcRenderer.sendMessage('converter', {
      type: 'fileInfo',
      path,
    });
  }, [path]);

  return (
    <div className={styles.fileElement}>
      <div className={styles.icon}>
        <FiFilm size={38} color="white" />
      </div>

      <div className={styles.info}>
        <div className="name">{name}</div>
        <div className="size">{(size / 1048576).toFixed(1)}MB</div>
      </div>

      <div className={styles.buttons}>
        <button
          type="button"
          className={[styles.btn, styles.btnDanger].join(' ')}
          onClick={remove}
        >
          remove
        </button>
        <button
          type="button"
          className={[styles.btn, styles.btnPrimary].join(' ')}
          onClick={convert}
        >
          convert
        </button>
      </div>
    </div>
  );
};
