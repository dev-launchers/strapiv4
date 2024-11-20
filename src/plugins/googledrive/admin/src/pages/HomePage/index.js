/*
 *
 * HomePage
 *
 */

import React, { useState, useEffect } from 'react';
import { useNotification } from '@strapi/helper-plugin';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import { getWel } from '../../api/getWel';
import { delDelete, postUpdate } from '../../api/delDelete';
import { Button } from '@strapi/design-system';
import axiosInstance from '../../utils/axiosInst';

const HomePage = () => {
  const [welcome, setWelcome] = useState(null);
  const [delDel, setDelDel] = useState();
  const [selectedFile, setSelectedFile] = useState([]);
  const [uploadedFile, setUploadedFile] = useState([]);

  function handleFileSelect(e) {
    console.log('handleFileSelect');
    console.log(e.target.files[0]);
    //setSelectedFile(e.target.files[0]);
    setSelectedFile((prevState) => [...prevState, e.target.files[0]]);
    console.log(selectedFile);
  }
  const toggleNotification = useNotification();
  useEffect(() => {
    const getData = async () => {
      try {
        const myOutput = await getWel();
        console.log(myOutput);
        setWelcome(myOutput);
      } catch (err) {
        toggleNotification({
          type: 'warning',
          message: 'Failed to fetch data.',
        });
      }
    };
    getData();
  }, []);

  const DelDele = async (infileId) => {
    try {
      console.log('DelDele');
      console.log(`infileId is ${infileId}`);
      const myDelete = await delDelete(infileId);
      console.log(myDelete);
      setDelDel(myDelete);
    } catch (err) {
      toggleNotification({
        type: 'warning',
        message: 'Failed to Delete data.' || err,
      });
    }
  };

  const postupd = async () => {
    try {
      console.log('postupd');
      //  console.log(`infileId is ${infileId}`);
      const uploadFormData = new FormData();
      console.log(selectedFile[0].name);
      //selectedFile.forEach((file) => uploadFormData.append('files', file));
      uploadFormData.append('files', selectedFile[0]);
      console.log(uploadFormData.length);
      console.log(uploadFormData);
      //const myPost =
      await postUpdate(uploadFormData).then(async (postResonse) => {
        console.log(postResonse.data);
        //if (!myPost.data)
        setUploadedFile((prevuploadedFile) => [
          ...prevuploadedFile,
          postResonse.data,
        ]);

        // setUploadedFile(await postResonse.data);
        console.log(uploadedFile);
        return postResonse.data;
      });
      /* working code
      const postMessage = await axiosInstance.post(
        '/googledrive/upload',
        uploadFormData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
          
      );
      
      console.log(postMessage.data);
      alert(postMessage.data);

      return postMessage.data;
      */
    } catch (err) {
      toggleNotification({
        type: 'warning',
        message: 'Failed to Update data.' || err,
      });
    }
  };

  return (
    <div>
      <h1>{pluginId}&apos;s HomePage</h1>
      <p>Happy coding</p>
      {welcome ? <p>{welcome}</p> : <p>Loading...</p>}
      <label for="selFile"> Select a file </label>
      <input
        type="file"
        id="selFile"
        name="selFile"
        onChange={handleFileSelect}
      />
      {selectedFile.length > 0 ? (
        <p>{selectedFile[0].name}</p>
      ) : (
        <p>No files selected</p>
      )}

      {uploadedFile.length > 0 ? (
        <ul>
          <li>{uploadedFile[0].id}</li>
          <Button onClick={DelDele(uploadedFile[0].id)}>Delete</Button>
        </ul>
      ) : (
        <p>No files uploaded</p>
      )}

      <div>
        <button onClick={postupd}>Submit</button>
      </div>
    </div>
  );
};

export default HomePage;
