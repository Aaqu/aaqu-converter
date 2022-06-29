import { useSelector } from 'react-redux';
import { FileElement } from '../FileElement/FileElement';

import styles from './ConvertArea.module.css';

export const ConvertArea = () => {
  const files = useSelector((store) => store.files);

  const fileList = [...files].reverse().map((file) => {
    return <FileElement key={file.id} {...file} />;
  });

  return <div className={styles.convertArea}>{fileList}</div>;
};
