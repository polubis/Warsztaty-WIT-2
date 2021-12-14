// 2. Filtrowanie danych w tablicy

const USERS = [
  { id: 0, name: "Piotr", email: "siema@wp.pl" },
  { id: 1, name: "Piotr", email: "siema@wp.pl" },
  { id: 2, name: "Piotr", email: "siema@wp.pl" },
  { id: 3, name: "Piotr", email: "siema@wp.pl" },
  { id: 4, name: "Piotr", email: "siema@wp.pl" }
];

// const isUserWithId4 = !!USERS.find(user => user.id === 4); // user
const isUserWithId4 = USERS.some((user) => user.id === 4);

const everyUserHasId = USERS.every((user) => user.id !== undefined); // true

const filteredUSersById = USERS.filter((user) => user.id > 2);

const sortedUsers = USERS.sort((prev, curr) => {
  if (prev.id > curr.id) {
    return 1;
  }

  if (prev.id <= curr.id) {
    return -1;
  }

  return 0;
});
