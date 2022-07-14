import { FiFilm } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FileInfo, removeFile } from '../../store';

import styles from './FileElement.module.css';

export const FileElement = (props: FileInfo) => {
  const { id, name, path, size } = props;
  const dispatch = useDispatch();
  const [btnConvert, setBtnConvert] = useState(true);

  const convert = () => {
    window.electron.ipcRenderer.sendMessage('converter', {
      type: 'fileInfo',
      id,
      path,
    });
  };

  const remove = () => {
    dispatch(removeFile(id));
  };

  useEffect(() => {
    window.electron.ipcRenderer.on(`converter`, (arg) => {
      if (arg.id !== id) {
        return null;
      }

      if (arg.codec !== 'hevc') {
        toast.error(`File ${name} have wrong codec`, {
          theme: 'colored',
        });
        setBtnConvert(false);
        return null;
      }

      console.log('start-convert');
      console.log(arg);

      // TODO: replace to convert function
      return null;
    });
  }, [id, name]);

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
        {btnConvert ? (
          <button
            type="button"
            className={[styles.btn, styles.btnPrimary].join(' ')}
            onClick={convert}
          >
            convert
          </button>
        ) : null}
      </div>
    </div>
  );
};
