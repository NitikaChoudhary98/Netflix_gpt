export const checkValidData = (email, password, name = null) => {
  if (name !== null) {
    const isValidName = /^[a-zA-Z]+(?:[-' ][a-zA-Z]+)*$/.test(name);
    if (!isValidName) return "Name not valid";
  }

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email not valid";
  if (!isPasswordValid) return "Password not valid";

  return null;
};
