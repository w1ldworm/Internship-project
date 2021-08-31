export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string
    avatar: string;
  }
  
  export interface Support {
    user: string;
    text: string;
  }
  
  export interface UserList {
    page: number;
    per_page: number;
    total: number,
    total_page: number,
    data: User[],
    support: Support
  }