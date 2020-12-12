import { createUseStyles } from 'react-jss';
import { Theme } from 'theme-library';

export const useIndexStyles = createUseStyles((theme: Theme) => ({
  paper: {
    marginTop: `${theme.sizing.marginM}em`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: `${theme.sizing.marginS}em`,
    backgroundColor: '#888888',
  },
  form: {
    width: '100%',
    marginTop: `${theme.sizing.marginS}em`,
  },
  submit: {
    margin: `${theme.sizing.marginM}em`,
  },
  link: {
    color: '#222222',
  }
}));
