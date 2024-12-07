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
import { Button, Box, BaseHeaderLayout } from '@strapi/design-system';
import axiosInstance from '../../utils/axiosInst';

const HomePage = () => {
  const [welcome, setWelcome] = useState(null);
  const [delDel, setDelDel] = useState();
  const [selectedFile, setSelectedFile] = useState([]);
  const [uploadedFile, setUploadedFile] = useState([]);

  function handleFileSelect(e) {
    setSelectedFile((prevState) => [...prevState, e.target.files[0]]);
  }
  const toggleNotification = useNotification();
  useEffect(() => {
    const getData = async () => {
      try {
        const myOutput = await getWel();
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
      const myDelete = await delDelete(infileId);
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
      const uploadFormData = new FormData();
      uploadFormData.append('files', selectedFile[0]);
      await postUpdate(uploadFormData).then(async (postResonse) => {
        setUploadedFile((prevuploadedFile) => [
          ...prevuploadedFile,
          postResonse.data,
        ]);
        return uploadedFile; //updated lastly
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
      {/*<p>Happy coding</p>
      {welcome ? <p>{welcome}</p> : <p>Loading...</p>}
*/}
      <Box background="neutral100">
        <BaseHeaderLayout
          title="GoogleDrive Plugin"
          subtitle="Plugin Actions"
          as="h2"
        />
      </Box>

      <Box background="neutral90">
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
        <div>
          <button onClick={postupd}>Upload</button>
        </div>
      </Box>
      <Box background="neutral100">
        {uploadedFile.length > 0 ? (
          <ul>
            <li>{uploadedFile[0].id}</li>
            <Button onClick={DelDele(uploadedFile[0].id)}>Delete</Button>
          </ul>
        ) : (
          <p>No files uploaded</p>
        )}
      </Box>
    </div>
  );
};

export default HomePage;
