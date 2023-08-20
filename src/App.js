import {useState} from 'react'
import './App.css';
import {
  AppBar,
  Toolbar,
  Typography,Container,TextField,Fab,List,ListItem,ListItemText,ListItemSecondaryAction,IconButton}
   from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import AddTaskIcon from '@mui/icons-material/Add';



function App() {
  
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);
  

  
  
  function handleAddTask (){
    const newId = Date.now(); 
    const newTaskObject = { id: newId, content: newTask, isCompleted:false} //* content => task text, isCompleted => changes the property style
    setTasks([...tasks, newTaskObject]);
    setNewTask('');
  }

  function handleDeleteTask(id){
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }
  
  //* changes isCompleted attribute
  function handleCompleteTask(id){
    const updatedTasks = tasks.map((task)=>{
      if(task.id===id){
        return {...task, isCompleted: !task.isCompleted }
      }
      return task
    })
    setTasks(updatedTasks)
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

      {/** BUTTON ADD handleAddTask */}
      
        <Fab onClick={handleAddTask} variant="contained" color="primary" size="small" >
          <AddTaskIcon />
        </Fab>
      
      {/** LIST OF TASKS */}
        <List sx={{ marginTop: '20px' }}>
          {tasks.map((task) => (
            <ListItem
             display={'flex'}
             key={task.id}
             sx={{
              backgroundColor: task.isCompleted ? 'rgba(33, 150, 243, 0.8)' : 'white' ,
              marginTop: '0.5em',
              p: '1em',
              borderRadius: '20px',
              color: task.isCompleted ? 'white' : 'black',
              border: task.isCompleted ? 'none' : 'solid rgba(33, 150, 243, 0.8)' 
            }}
          >
            
              {/** TASK TEXT */}
              <ListItemText primary={task.content} />

              
              <ListItemSecondaryAction>
               
              {/** BUTTON FOR COMPLEATED TASK */} 
                <IconButton
                  edge="end"
                  aria-label="completed"
                  onClick={() => handleCompleteTask(task.id)}
                  sx={{color: task.isCompleted ? 'white' : 'rgba(33, 150, 243, 0.8)'}} 
                >
                  <CheckIcon />
                </IconButton>
              
              {/**BUTTON FOR DELETE TASK */}
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDeleteTask(task.id)}
                  sx={{color: task.isCompleted ? 'white' : 'rgba(33, 150, 243, 0.8)'}}
                  pl="5em"
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>

      
      




      </Container>
      



    </div>
  );
}

export default App;
