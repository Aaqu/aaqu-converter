import { FiFilm } from 'react-icons/fi';

import styles from './FileElement.module.css';

export const FileElement = (props: { name: string; size: number }) => {
  const { name, size } = props;

  return (
    <div className={styles.fileElement}>
      <div>
        <FiFilm size={38} color="white" />
      </div>

      <div className={styles.info}>
        <div className="name">{name}</div>
        {/* <div className="path">{props.path}</div> */}
        <div className="size">{Math.round((size / 1048576) * 10) / 10}MB</div>
        {/* <div className="id">{props.id}</div> */}
      </div>

      <div className={styles.buttons}>
        <button
          type="button"
          className={[styles.btn, styles.btnDanger].join(' ')}
        >
          remove
        </button>
        <button
          type="button"
          className={[styles.btn, styles.btnPrimary].join(' ')}
        >
          convert
        </button>
      </div>
    </div>
  );
};
