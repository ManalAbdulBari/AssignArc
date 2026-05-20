import {

doc,

setDoc,

getDoc,

updateDoc

} from "firebase/firestore";

import {

db

} from "../firebase/firebase";

export const createProfile = async (

uid,

data

) => {

try {

await setDoc(

doc(

db,

"users",

uid

),

data

);

}

catch (error) {

throw error;

}

};

export const getProfile = async (

uid

) => {

try {

const profileRef = doc(

db,

"users",

uid

);

const profile = await getDoc(

profileRef

);

if (

profile.exists()

) {

return profile.data();

}

return null;

}

catch (error) {

throw error;

}

};

export const updateProfile = async (

uid,

data

) => {

try {

const profileRef = doc(

db,

"users",

uid

);

await updateDoc(

profileRef,

data

);

}

catch (error) {

throw error;

}

};