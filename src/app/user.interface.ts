export interface User {
    _id?: string; // Optional if you're using MongoDB ObjectID
    email: string;
    firstName: string;
    lastName: string;
    password?: string; // Optional if you're not fetching password from backend
    role?: string;
  }
  