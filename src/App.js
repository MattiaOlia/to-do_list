import {useState} from 'react'
import './App.css';
import {
  AppBar,
  Toolbar,
  Typography,Container,TextField,Button,List} from '@mui/material';

function App() {
  
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  function handleAddTask (){
    setTasks([...tasks, newTask]);
    setNewTask('');
  }

  return (
    <div className="App">


      {/** NAVBAR */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">To-Do List Basic test</Typography>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="sm" sx={{ marginTop: '3em' }}>
      
      {/** TEXTFIELD */}
      <TextField 
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter a new task"
        fullWidth
        variant="outlined"
      />
      <Button onClick={handleAddTask} variant="contained" color="primary" size="small" >
          Add
        </Button>
      
      <List>
        {tasks.map((task)=>(
          <p>{task}</p>
        ))}
      </List>
      




      </Container>
      



    </div>
  );
}

export default App;
