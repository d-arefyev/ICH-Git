// task-1 ---- Union and intersection of types ------------------------------------------------

type Admin = {
  name: string;
  permissions: string[];
};

type User = {
  name: string;
  email: string;
};

type AdminUser = Admin & User;

const adminUser: AdminUser = {
  name: "Denis",
  permissions: ["read", "write", "delete"],
  email: "denis@example.com"
};

console.log(adminUser);
