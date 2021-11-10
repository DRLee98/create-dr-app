import React from 'react';
import { Helmet } from 'react-helmet-async';

interface ITitle {
  title: string;
}

function Title({ title }: ITitle) {
  const siteName = 'DR React App';
  return (
    <Helmet>
      <title>
        {title} | {siteName}
      </title>
    </Helmet>
  );
}

export default Title;
