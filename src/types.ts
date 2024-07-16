export type User = {
  id: number;
  email: string;
  username: string;
  password: string;
  phone: string;
  name: {
    firstname: string;
    lastname: string;
  };
  avatar: string;
};
