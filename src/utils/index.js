import { format } from 'date-fns';

export function dateToString(date) {
  if (!date) { return ''; }
  return format(date, 'yyyy年M月d日 HH時mm分');
}

export function translateErrors(code) {
  const error = { title: 'error', description: 'Please try after a while.' };
  switch (code) {
    case 'auth/invalid-email':
      error.description = 'Invalid email address.';
      break;
    case 'auth/user-disabled':
      error.description = 'Your account is invalid.';
      break;
    case 'auth/user-not-found':
      error.description = 'The user was not found.';
      break;
    case 'auth/wrong-password':
      error.description = 'The password is wrong.';
      break;
    case 'auth/email-already-in-use':
      error.description = 'Your email address is already in use.';
      break;
    case 'auth/operation-not-allowed':
      error.description = 'Please contact the developer.';
      break;
    case 'auth/weak-password':
      error.description = 'The password is not strong enough.';
      break;
    default:
  }
  return error;
}
