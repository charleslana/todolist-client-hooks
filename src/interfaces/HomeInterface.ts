export interface HomeProps {
    todo: {
        items: [{
            id: string;
            title: string;
            completed: boolean;
        }]
    },
    todoActions: any;
}

export interface HomeInterface {
    id: string;
    title: string;
    completed: boolean;
}