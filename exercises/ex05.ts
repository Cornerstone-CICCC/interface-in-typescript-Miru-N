type Admin = {
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type AdminEmployee = Admin & Employee;

const adminEmployee: AdminEmployee = {
  privileges: ["create-server"],
  name: "Miru",
  startDate: new Date(),
};

console.log(adminEmployee);