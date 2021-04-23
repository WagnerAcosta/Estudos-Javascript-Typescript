type VerifyUserFn = (user: User, sentValeu: User) => boolean;
type User = { username: string; password: string };

const verifyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username === sentValue.username && user.password === sentValue.password
  );
};

const bdUser = { username: "wagner", password: "1234" };
const sentUser = { username: "wagner", password: "1234" };

const loggedIn = verifyUser(bdUser, sentUser);
console.log(loggedIn);
