import { login, logout } from './../../actions/auth';

test('it should generate login action object', () => {
  const action = login(5);
  expect(action).toEqual({
    type: 'LOGIN',
    uid: 5,
  });
});

test('it should generate logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT',
  });
});
