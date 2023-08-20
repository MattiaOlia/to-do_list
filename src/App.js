import {useState} from 'react'
import './App.css';
import {
  AppBar,
  Toolbar,
  Typography,Container,TextField} from '@mui/material';

function App() {
  
  const [newTask, setNewTask] = useState('');

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

      




      </Container>
      



    </div>
  );
}

export default App;
