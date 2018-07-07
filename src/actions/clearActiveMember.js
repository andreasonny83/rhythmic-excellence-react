export const CLEAR_MEMBER = '@@CLEAR_MEMBER';

export const clearActiveMember = () => dispatch =>
  dispatch({
      type: CLEAR_MEMBER,
      payload: null,
    });
