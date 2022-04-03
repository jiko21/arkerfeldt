import { app } from './app';

app.listen(5000, () => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log('server read at http://localhost:5000');
  }
});
