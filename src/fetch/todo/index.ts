import {api} from '../../config/api';

export const getTodos = async () => {
    const response = await fetch(api.todo);
    return await response.json();
}