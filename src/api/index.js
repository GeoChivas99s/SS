import firebase from "./config";

/**
 * @returns {boolean}
 */
export const isLogged = () => !!firebase.auth().currentUser;

/**
 * @param {string} email
 * @param {string} password
 * @param {(name, email) => void} onSuccess
 * @returns {Promise<void>}
 */
export const signIn = (email, password, onSuccess) =>
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => onSuccess(email, email))
    .catch((e) => {
      console.log("error :::: ", e);
    })
    .finally(() => {
      console.log("Email :::: ", email);
      console.log("Password :::: ", password);
    });

/**
 * @param {string} email
 * @param {string} password
 * @param {string} name
 * @param {(name, email) => void} onSuccess
 * @returns {Promise<void>}
 */

export const signUp = (email, password, name, onSuccess) =>
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      firebase
        .firestore()
        .collection("user")
        .add({ name, email })
        .then(() => onSuccess(name, email))
        .catch((e) => {
          alert("set data error");
          console.log("error :::: ", e);
        });
    })
    .catch((e) => {
      console.log("error :::: ", e);
    })
    .finally(() => {
      console.log("Email :::: ", email);
      console.log("Password :::: ", password);
    });

export const getUserByEmail = (email, onSuccess) => {
  firebase
    .firestore()
    .collection("users")
    .where("email", "==", email)
    .get()
    .then((doc) => {
      const data = doc.data();
      console.log('Data ::: ', data);
      onSuccess(data.name, email);
    })
    .catch(() => console.log("Error on get user from firestore"))
}