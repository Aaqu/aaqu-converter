import { useDropzone } from 'react-dropzone';
import { useCallback, useMemo } from 'react';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
};

const focusedStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
  backgroundColor: 'lightgreen',
};

const rejectStyle = {
  borderColor: '#ff1744',
  backgroundColor: '#FF5B5B',
};

function nameLengthValidator(file) {
  console.log(file);
  // const nameArray = file.name.split('.');
  // const extension = nameArray[nameArray.length-1];
  // if (extension !== '.dav') {
  //   return {
  //     code: "extension-other-than-dav",
  //     message: `Extension ${extension} is other than .dav`,
  //   };
  // }

  return null;
}

// eslint-disable-next-line import/prefer-default-export
export const DropArea = () => {
  // const onDrop = useCallback((getFilesFromEvent) => {
  //   console.log(getFilesFromEvent);
  // }, [])

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    isDragActive,
    acceptedFiles,
  } = useDropzone({
    validator: nameLengthValidator,
  });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  // const files = acceptedFiles.map(file => (
  //   file.name.split(".")
  //     console.log()[])
  // ));

  return (
    <div className="container">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <div {...getRootProps({ style })}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          // eslint-disable-next-line react/no-unescaped-entities
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </div>
  );
};
