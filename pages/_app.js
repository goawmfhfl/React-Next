import React from 'react';
import propTypes from 'prop-types';
import Head from 'next/head'
import 'antd/dist/antd.css';

const NodeBird = ({ Component }) => {
  
  return (
    <>
    <Head>
      <meta charSet="utf-8" />
      <title>NodeBird</title> 
    </Head>
    <div>공통메뉴</div>
    <Component />
    </>
    )
};

NodeBird.propTypes = {
  Component: propTypes.elementType.isRequired,
};
/*prototype 점검해주면 서버가 안정적으로 동작한다. */

export default NodeBird;
