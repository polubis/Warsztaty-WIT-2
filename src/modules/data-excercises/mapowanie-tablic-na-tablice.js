// 1. Mapowanie tablicy na inna tablice

const USERS = [
  { id: 0, name: "Piotr", email: "siema@wp.pl" },
  { id: 1, name: "Piotr", email: "siema@wp.pl" },
  { id: 2, name: "Piotr", email: "siema@wp.pl" },
  { id: 3, name: "Piotr", email: "siema@wp.pl" },
  { id: 4, name: "Piotr", email: "siema@wp.pl" }
];

const ids = USERS.map((user) => user.id); // [0,1,2,3,4,5];
// const ids = USERS.map(({ id }) => id); // [0,1,2,3,4,5];

const fullNames = USERS.map(({ id, name, email }) => `${id} ${name} ${email}`);

const emailPrefixes = USERS.map(({ email }) => {
  const emailSymbolIdx = email.indexOf("@");

  if (emailSymbolIdx < -1) {
    throw new Error("Email is in invalid format. Where is @ symbol");
  }

  return email.slice(0, emailSymbolIdx);
});
