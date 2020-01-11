import { userConstants } from '../_constants/user.constants';

export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true,
      };
    case userConstants.GETALL_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.services,
      };
    case userConstants.GETALL_FAILURE:
      return {
        loading: false,
        error: action.error,
      };
    case userConstants.DELETE_REQUEST:
      // add 'deleting:true' property to user being deleted
      return {
        loading: true,
      };
    case userConstants.DELETE_SUCCESS:
      // remove deleted user from state
      return {
        ...state,
        loading: false,
        items: action.services,
      };
    case userConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to user
      return {
        ...state,
        loading: false,
        error: action.error,
        // items: state.items.map(user => {
        //   if (user.id === action.id) {
        //     // make copy of user without 'deleting:true' property
        //     const { deleting, ...userCopy } = user;
        //     // return copy of user with 'deleteError:[error]' property
        //     return { ...userCopy, deleteError: action.error };
        //   }

        //   return user;
        // })
      };
    case userConstants.CREATE_VIRTUAL_MACHINE_REQUEST:
      // add 'deleting:true' property to user being deleted
      return {
        loading: true,
      };
    case userConstants.CREATE_VIRTUAL_MACHINE_SUCCESS:
      // remove deleted user from state
      return {
        ...state,
        loading: false,
        items: action.services,
      };
    case userConstants.CREATE_VIRTUAL_MACHINE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case userConstants.CREATE_VIRTUAL_NETWORK_REQUEST:
      // add 'deleting:true' property to user being deleted
      return {
        loading: true,
      };
    case userConstants.CREATE_VIRTUAL_NETWORK_SUCCESS:
      // remove deleted user from state
      return {
        ...state,
        loading: false,
        items: action.services,
      };
    case userConstants.CREATE_VIRTUAL_NETWORK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case userConstants.CREATE_DATABASE_REQUEST:
      // add 'deleting:true' property to user being deleted
      return {
        loading: true,
      };
    case userConstants.CREATE_DATABASE_SUCCESS:
      // remove deleted user from state
      return {
        ...state,
        loading: false,
        items: action.services,
      };
    case userConstants.CREATE_DATABASE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case userConstants.CREATE_SECURITY_REQUEST:
      // add 'deleting:true' property to user being deleted
      return {
        loading: true,
      };
    case userConstants.CREATE_SECURITY_SUCCESS:
      // remove deleted user from state
      return {
        ...state,
        loading: false,
        items: action.services,
      };
    case userConstants.CREATE_SECURITY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
