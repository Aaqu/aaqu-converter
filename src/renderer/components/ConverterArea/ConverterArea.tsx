import { useSelector } from 'react-redux';

export const ConverterArea = () => {
  const files = useSelector((store) => store.files);

  // rewrite
  // ts-ignore
  const fileList = files.map((file) => {
    return (
      <div key={file.id}>
        {file.id}, {file.name}, {file.size}
      </div>
    );
  });

  return <>{fileList}</>;
};
