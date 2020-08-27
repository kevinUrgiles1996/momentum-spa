enum Role {
  'user', 'admin'
}

enum Gender {
  'male', 'female'
}

export interface User {
  name: string;
  about?: string;
  email: string;
  password: string;
  role ?: Role;
  profileUrl ?: string;
  gender ?: Gender;
  resetPasswordToken ?: string;
  resetPasswordExpire ?: Date;
  createdAt ?: Date;
}
