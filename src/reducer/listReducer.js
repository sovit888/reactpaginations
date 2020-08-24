export const list = [
  {
    id: 1,
    name: "sovit thapa",
    age: 21,
    address: "Jamune",
    contact: 9826184961,
  },
  {
    id: 2,
    name: "sangam ale",
    age: 20,
    address: "Rasuwa",
    contact: 9822384961,
  },
  {
    id: 3,
    name: "sunil magar",
    age: 22,
    address: "Tanahun",
    contact: 9854384961,
  },
  {
    id: 4,
    name: "sumit koirala",
    age: 23,
    address: "Gangate",
    contact: 9826198761,
  },
  {
    id: 5,
    name: "anil chhantyal",
    age: 19,
    address: "Dhapasi",
    contact: 9826567961,
  },
  {
    id: 6,
    name: "sushma tamang",
    age: 18,
    address: "Beni",
    contact: 9826184123,
  },
  {
    id: 7,
    name: "anshu lamichhane",
    age: 20,
    address: "Pokhara",
    contact: 9826184304,
  },
];
export const reducer = (state, action) => {
  if (action.type === "increase") {
    const obj = [...state, action.payload];
    return obj;
  } else {
    return state;
  }
};
