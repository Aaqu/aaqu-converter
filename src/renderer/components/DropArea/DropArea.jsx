import { useCallback, useEffect, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import { addFile, store } from '../../store';

import styles from './DropArea.module.css';

const extensionValidator = (file) => {
  if ('name' in file) {
    const nameArray = file.name.split('.');
    const extension = nameArray[nameArray.length - 1];
    if (extension !== 'dav') {
      return {
        code: 'wrong-extension',
        message: "Extension must be a '.dav'",
      };
    }
  }

  return null;
};

export const DropArea = () => {
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      acceptedFiles.forEach((file) => {
        store.dispatch(
          addFile({
            path: file.path,
            name: file.name,
            size: file.size,
          })
        );
      });
    }
  }, []);

  const {
    fileRejections,
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
  } = useDropzone({
    validator: extensionValidator,
    onDrop,
  });

  const border = useMemo(
    () => ({
      ...(isFocused ? { borderColor: '#2196f3' } : {}),
      ...(isDragAccept ? { borderColor: '#2196f3' } : {}),
    }),
    [isFocused, isDragAccept]
  );

  // TODO: replace on popup
  // const fileRejectionItems = fileRejections.map(({ file, errors }) => (
  //   <li key={file.path}>
  //     {file.path} - {file.size} bytes
  //     <ul>
  //       {errors.map((e) => (
  //         <li key={e.code}>{e.message}</li>
  //       ))}
  //     </ul>
  //   </li>
  // ));

  // TODO: move to other component
  // useEffect(() => {
  //   store.subscribe(() => console.log('second', store.getState().files));
  // }, []);

  return (
    <div {...getRootProps({ className: styles.dropzone, style: border })}>
      <input {...getInputProps()} />
      <p>Drop all files to convert</p>
      <em>(Only .dav file)</em>
    </div>
  );
};
