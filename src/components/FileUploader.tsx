import React, { useRef } from 'react';

const FileUploader = (props: any) => {
  const fileInput = useRef<any>(null);

  const handleFileInput = (e: any) => {
    // handle validations
    const file = e.target.files[0];
    if (file.size > 1000000)
      props.onFileSelectError({
        error: 'File size cannot exceed more than 1MB'
      });
    else props.onFileSelectSuccess(file);
  };

  return (
    <div className="file-uploader">
      <input type="file" onChange={handleFileInput} />
      {/* <button
        onClick={(e) => fileInput.current && fileInput?.current?.click()}
        className="button"
      /> */}
    </div>
  );
};

export default FileUploader;
