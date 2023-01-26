import { User, UserProps } from './models/User';
import axios, { AxiosResponse } from 'axios';
import { Collection } from './models/Collection';
import { UserForm } from './views/UserForm';

const userForm = new UserForm(document.getElementById('root'));

userForm.render();
