import React from 'react';
import {
    Box,
    Button,
    Checkbox,
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
import './index.css';

const Home = () => {

    return (
        <Grid item xs={12} sm={6} className="grid-todos">
            <Typography variant={'h4'} align={'center'}>Todos</Typography>
            <Box p={2}>
                <Paper>
                    <Box p={2}>
                        <Button variant={'contained'} color={'primary'}>
                            <Add/> Add new todo
                        </Button>
                    </Box>
                    <Box p={2}>
                        <FormControl fullWidth>
                            <Select
                                value={'all'}
                                name={'filter'}
                                fullWidth
                            >
                                <MenuItem value={'all'}>All</MenuItem>
                                <MenuItem value={'completed'}>Completed</MenuItem>
                                <MenuItem value={'active'}>Active</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box p={2}>
                        <List>
                            {[1, 2, 3, 4, 5].map((value: any, index) => (
                                <ListItem
                                    key={index}
                                    dense
                                    button
                                >
                                    <Checkbox
                                        checked={value.completed}
                                        tabIndex={-1}
                                        disableRipple
                                    />
                                    <ListItemText primary={'Name todo'}/>
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
                    </Box>
                </Paper>
            </Box>
        </Grid>
    );
}

export default Home;