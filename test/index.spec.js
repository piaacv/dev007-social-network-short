import { signInWithPopup, signOut } from 'firebase/auth';
import { addDoc, query } from '@firebase/firestore';
import { loginUser } from '../src/firebase';
import {
  LogOut, getAllPost, deletePost, createNewPost,
} from '../src/lib';

jest.mock('firebase/auth');
jest.mock('@firebase/firestore');
// jest.mock('../src/lib');
// jest.mock('../src/firebase', () => ({
//   signInWithPopup: jest.fn(),
//   signOut: jest.fn(),
//   loginUser: jest.fn(),
// }));

// beforeEach(() => {
//   jest.clearAllMocks();
// });

describe('loginUser', () => {
  it('should be a function', () => {
    expect(typeof loginUser).toBe('function');
  });
  it('should call signInWithPopup', async () => {
    await loginUser();
    expect(signInWithPopup).toHaveBeenCalled();
  });
});

describe('LogOut', () => {
  it('should be a function', () => {
    expect(typeof LogOut).toBe('function');
  });
  it('should call signOut', async () => {
    await LogOut();
    expect(signOut).toHaveBeenCalled();
  });
});

describe('createNewPost', () => {
  it('should be a function', () => {
    expect(typeof createNewPost).toBe('function');
  });
  // revisar error TypeError: Cannot read properties of undefined (reading 'currentUser')
  it('should call addDoc', async () => {
    await createNewPost('my post content', 'pia@mail.com');
    expect(addDoc).toHaveBeenCalled();
  });
});

describe('deletePost', () => {
  test('should be a function', () => {
    expect(typeof deletePost).toBe('function');
  });
  // ver error: The error below may be caused by using the wrong test environment
  // test('should call deleteDoc', async () => {
  //   await deletePost('1234');
  //   expect(deleteDoc).toHaveBeenCalled();
  // });
});

describe('getAllPost', () => {
  test('should be a function', () => {
    expect(typeof getAllPost).toBe('function');
  });
  test('should call query', async () => {
    await getAllPost();
    expect(query).toHaveBeenCalled();
  });
});
