import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Checkbox,
    CircularProgress,
    FormControl,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    MenuItem,
    Paper,
    Select,
    Typography
} from '@material-ui/core';
import {Add, Delete, Edit} from '@material-ui/icons';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {actions as todoActions} from '../reducers/todo';
import {HomeInterface, HomeProps} from '../interfaces/HomeInterface';
import {getTodos} from '../fetch/todo';

const Home = (props: HomeProps) => {

    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        getTodos()
            .then((response: any) => {
                props.todoActions.create(response.todoList);
                setLoading(false);
            })
            .catch((error: any) => {
                console.error(error);
            });
    }, [props.todoActions]);

    const handleFilter = (item: HomeInterface) => {
        if (filter === 'completed') {
            return item.completed;
        }
        if (filter === 'active') {
            return !item.completed;
        }
        return true;
    }

    console.log(props.todo);

    return (
        <Grid item xs={12} sm={6}>
            <Typography variant={'h4'} align={'center'}>Todos</Typography>
            <Box p={2}>
                <Paper>
                    <Box p={2}>
                        <Button variant={'contained'} color={'primary'}>
                            <Add/> Add new todo
                        </Button>
                    </Box>
                    <Box p={2}>
                        <FormControl fullWidth={true}>
                            <Select
                                value={filter}
                                fullWidth={true}
                                onChange={event => setFilter(String(event.target.value))}
                            >
                                <MenuItem value={'all'}>All</MenuItem>
                                <MenuItem value={'completed'}>Completed</MenuItem>
                                <MenuItem value={'active'}>Active</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box p={2}>
                        {loading ?
                            <Box display={'flex'} justifyContent={'center'}>
                                <CircularProgress/>
                            </Box>
                            :
                            <List>
                                {props.todo.items.filter(handleFilter)
                                    .map((value: HomeInterface, index: number) => (
                                        <ListItem
                                            key={index}
                                            dense={true}
                                            button={true}
                                        >
                                            <Checkbox
                                                checked={value.completed}
                                                tabIndex={-1}
                                                disableRipple={true}
                                            />
                                            <ListItemText primary={value.title}/>
                                            <ListItemSecondaryAction>
                                                <IconButton
                                                    aria-label={'Edit'}
                                                >
                                                    <Edit/>
                                                </IconButton>
                                                <IconButton
                                                    aria-label={'Delete'}
                                                >
                                                    <Delete/>
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    ))}
                            </List>
                        }
                    </Box>
                </Paper>
            </Box>
        </Grid>
    );
}

const mapStateToProps = ({todo}: any) => ({
    todo
});

const mapDispatchToProps = (dispatch: any) => ({
    todoActions: bindActionCreators(todoActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);