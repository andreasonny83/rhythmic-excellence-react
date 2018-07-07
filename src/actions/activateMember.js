export const ACTIVATE_MEMBER = '@@ACTIVAE_MEMBER';

export const activateMember = (id) => dispatch =>
  dispatch({
      type: ACTIVATE_MEMBER,
      payload: id,
    });
