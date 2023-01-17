import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { AxiosResponse } from 'axios';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>(
    'http://localhost:1234/users'
  );

  constructor(private data: UserProps) {}
}
