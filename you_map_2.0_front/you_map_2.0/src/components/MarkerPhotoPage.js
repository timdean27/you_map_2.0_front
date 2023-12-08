// MarkerPhotoPage.js
import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';

const MarkerPhotoPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [downloadURL, setDownloadURL] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const uploadPhoto = async () => {
    if (!selectedFile) {
      console.error('No file selected');
      return;
    }

    const storageRef = ref(storage, 'photos/' + selectedFile.name);
    await uploadBytes(storageRef, selectedFile);
    const url = await getDownloadURL(storageRef);

    console.log('Photo uploaded:', selectedFile.name);
    setDownloadURL(url);
  };

  return (
    <div>
      <h2>Marker Photo Page</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadPhoto}>Upload Photo</button>

      {downloadURL && (
        <div>
          <p>Uploaded Photo:</p>
          <img src={downloadURL} alt="Uploaded" style={{ maxWidth: '100%' }} />
        </div>
      )}
    </div>
  );
};

export default MarkerPhotoPage;
