import { auth } from './Config';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from 'firebase/auth';

export const signupfn = async (email, password) => {
    // console.log(auth)
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        // await emailVerification();
        const user = userCredential.user;
        console.log("user Registered", user);
        return user;
    } catch (error) {
        throw error;
    }
};

export const login = async (email, password) => {
    console.log(auth)
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // await emailVerification();
        const user = userCredential.user;
        console.log("user Sign in", user);
        return user;
    } catch (error) {
        console.log(error.message)
        throw error;
    }
};
