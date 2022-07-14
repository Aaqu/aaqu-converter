import { useCallback, useEffect, useMemo } from 'react';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-toastify';
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
      ...(isFocused ? { borderColor: 'yellow' } : {}),
      ...(isDragAccept ? { borderColor: 'yellow' } : {}),
    }),
    [isFocused, isDragAccept]
  );

  useEffect(() => {
    fileRejections.map(({ file }) => {
      return toast.error(`File ${file.name} have wrong extension`, {
        theme: 'colored',
      });
    });
  }, [fileRejections]);

  return (
    <div {...getRootProps({ className: styles.dropzone, style: border })}>
      <input {...getInputProps()} />
      <div>Drop all files to convert</div>
      <div> (Only .dav file)</div>
    </div>
  );
};
