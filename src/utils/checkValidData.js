export const checkValidData = (email, password, name) => {
    const isEmailValid = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password);
    const isNameValid = name ? /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name) : true; // Only validate name if it exists

    if (!isEmailValid) return "Email Id is not valid!!";
    if (!isPasswordValid) return "Password is not valid!!";
    if (!isNameValid) return "Name is not valid!!";

    return null;
};
