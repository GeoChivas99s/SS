import firebase from "./config";

/**
 * @returns {boolean}
 */
export const isLogged = () => !!firebase.auth().currentUser;

/**
 * @param {string} email
 * @param {string} password
 * @param {string} name
 * @returns {Promise<void>}
 */

/**
 * @param {string} email
 * @param {string} password
 * @returns {Promise<void>}
 */
export const signIn = (email, password) =>
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log("ok");
    })
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
 * @returns {Promise<void>}
 */

export const signUp = (email, password, name) =>
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      firebase
        .firestore()
        .collection("user")
        .add({ name, email })
        .then(() => alert("success"))
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
