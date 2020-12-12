import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withTranslation } from '../../i18n';
import { useIndexStyles } from './_styles/index.styles';
import { useIndexForm } from './_forms/index.form';
import Head from 'next/head';
import {
  AuthEmailElement,
  AuthPasswordElement,
  AuthSubmitElement
} from 'component-library/lib';

const Index = ({ t }: any) => {
  const classes = useIndexStyles();
  const loginForm = useIndexForm();

  const { emailMember, passwordMember } = loginForm.members;

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        {(loginForm.isCompleted && !loginForm.isSubmitted) && 
          <Typography color="error">Invalid Credentials</Typography>
        }
        <form className={classes.form} noValidate>
          <AuthEmailElement
            change={emailMember.change}
            validate={emailMember.validate}
            submitted={loginForm.isSubmitted}
          />
          <AuthPasswordElement
            change={passwordMember.change}
            validate={passwordMember.validate}
            submitted={loginForm.isSubmitted}
          />
          <AuthSubmitElement
            valid={loginForm.isValid}
            submit={loginForm.submit}
            submitted={loginForm.isSubmitted}
            className={'submit'}
          />
        </form>
      </div>
    </div>
  )
}

Index.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

Index.propTypes = {
  t: PropTypes.func.isRequired,
}

export default withTranslation('common')(Index);
