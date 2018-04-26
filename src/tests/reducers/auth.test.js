import authReducer from './../../reducers/auth';

test('it should set uid for log in', () => {
  const action = { type: 'LOGIN', uid: 5 };
  const state = authReducer({}, action);
  expect(state).toEqual({ uid: 5 });
});

test('it should clear uid for log out', () => {
  const action = { type: 'LOGOUT' };
  const state = authReducer({ uid: 5 }, action);
  expect(state).toEqual({});
});
