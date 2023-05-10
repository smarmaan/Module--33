const a = { name: "James", roll: 3 };
// console.log(a);
const stuInfo = JSON.stringify(a);
// console.log(stuInfo);

let instructor = {
  name: "Jhankar Mahbub",
  entrepreneur: true,

  additionalData: {
    writer: true,
    favoriteHobbies: ["travelling", "Coding"],
    books: ["programming er bolod to bos", "programming er coddogosti"],

    moreDetails: {
      favoriteBasketballTeam: "XYZ",
      isYoungest: true,
      hometown: {
        city: "ABC",
        state: "VW",
      },
      countriesLivedIn: ["Bangladesh", "New York"],
    },
  },
};

console.log(instructor);

const stringifyInstructor = JSON.stringify(instructor);
console.log(stringifyInstructor);

const x = JSON.parse(stringifyInstructor);
console.log(x);