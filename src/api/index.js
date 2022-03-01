import firebase from "./config";

/**
 * @returns {boolean}
 */
export const isLogged = () => !!firebase.auth().currentUser;

/**
 * @param {string} email
 * @param {string} password
 * @param {(name, email, type) => void} onSuccess
 * @returns {Promise<void>}
 */
export const signIn = (email, password, onSuccess) =>
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() =>
      firebase
        .firestore()
        .collection("user")
        .where("email", "==", email)
        .get()
        .then((snapshot) => onSuccess(snapshot.docs[0].data()))
        .catch((e) => {
          alert("get data error");
          console.log("error :::: ", e);
        })
    )
    .catch((e) => {
      console.log("error :::: ", e);
    });

/**
 * @param {string} email
 * @param {string} password
 * @param {string} name
 * @param {(name, email) => void} onSuccess
 * @returns {Promise<void>}
 */

export const signUp = (email, password, name, type, onSuccess) =>
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      firebase
        .firestore()
        .collection("user")
        .add({ name, email, type })
        .then(() => onSuccess(name, email))
        .catch((e) => {
          alert("set data error");
          console.log("error :::: ", e);
        });
    })
    .catch((e) => {
      console.log("error :::: ", e);
    });

export const getUserByEmail = (email, onSuccess) => {
  firebase
    .firestore()
    .collection("users")
    .where("email", "==", email)
    .get()
    .then((doc) => {
      const data = doc.data();
      console.log("Data ::: ", data);
      onSuccess(data.name, email);
    })
    .catch(() => console.log("Error on get user from firestore"));
};

export const addProject = (name, devEmail, imageLink, link, onSuccess) =>
  firebase
    .firestore()
    .collection("project")
    .add({ name, devEmail, imageLink, link, state: 2 })
    .then(onSuccess)
    .catch((e) => {
      alert("set data error");
      console.log("error :::: ", e);
    });

export const getProjects = () =>
  firebase
    .firestore()
    .collection("project")
    .where("state", "==", 1)
    .get()
    .then((snapshot) => {
      let data = [];
      snapshot.forEach((docs) => data.push(docs.data()));
      return data;
    })
    .catch((e) => {
      alert("get projects error");
      console.log("error :::: ", e);
    });

export const getProjectsByDevEmail = (email) =>
  firebase
    .firestore()
    .collection("project")
    .where("devEmail", "==", email)
    .get()
    .then((snapshot) => {
      let data = [];
      snapshot.forEach((docs) => data.push(docs.data()));
      return data;
    })
    .catch((e) => {
      alert("get project by email error");
      console.log("error :::: ", e);
    });
