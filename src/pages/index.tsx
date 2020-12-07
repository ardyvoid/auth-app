import React, { Fragment, useState } from 'react';
import { withTranslation } from '../../i18n';
import { useIndexStyles } from './_styles/index.styles';
import Head from 'next/head';

const Index = ({ t }: any) => {
  const classes = useIndexStyles();

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <div>Hello World</div>
    </div>
  )
}

Index.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(Index);
