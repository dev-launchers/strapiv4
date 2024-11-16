/*
 *
 * HomePage
 *
 */

import React, { useState, useEffect } from 'react';
import { useNotification } from '@strapi/helper-plugin';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import getWel from '../../api/getWel';

const HomePage = () => {
  const [welcome, setWelcome] = useState(null);
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
  return (
    <div>
      <h1>{pluginId}&apos;s HomePage</h1>
      <p>Happy coding</p>
      {welcome ? <p>{welcome}</p> : <p>Loading...</p>}
    </div>
  );
};

export default HomePage;
