interface User {
  name: string;
  address?: {
    street: string;
    zipCode: string;
  };
}

const user1: User = {
  name: "Miru",
  address: {
    street: "Main Street",
    zipCode: "V1V 1V1",
  },
};

console.log(user1.address?.zipCode);