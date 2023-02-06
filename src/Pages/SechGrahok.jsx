import React from 'react';
import Appbar from '../Components/Appbar';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { query, onSnapshot, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Phonelist from '../Components/phonelist';

const SechGrahok = () => {
  const [title, setTitle] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [type, setType] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (title !== "" && phone !== "" && type !== "") {
      await addDoc(collection(db, "todos"), {
        title,
        phone,
        type,
      });
      setTitle("");
      setPhone("");
      setType("");
    }
  }

  const [todos, setTodos] = React.useState([]);

  React.useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let todosArray = [];
      querySnapshot.forEach((doc) => {
        todosArray.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArray);
    });
    return () => unsub();
  }, []);

  const handleEdit = async (todo, title) => {
    await updateDoc(doc(db, "todos", todo.id), { title: title });
  };
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };


  return (
    <div style={{ backgroundColor: "white" }}>
      <div>
        <Appbar />
        <Form onSubmit={handleSubmit}>
          <TextField className='mb-2 mt-3' size='small' id="title" label="Name" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)} />
          <TextField className='mb-2' id="phone" size='small' label="Phone" variant="outlined" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <FormControl className='mb-2' style={{ width: "220px" }}>
            <InputLabel size='small' id="dropdown">Type</InputLabel>
            <Select size='small'
              labelId="dropdown-label"
              id="dropdownid-select"
              value={type}
              label="Type"
              onChange={(e) => setType(e.target.value)}
            >
              <MenuItem value={1}>General Member</MenuItem>
              <MenuItem value={2}>Skim Manager</MenuItem>
            </Select>
          </FormControl>
          <div>
            <Button style={{ backgroundColor: "green" }} className='px-5 py-1' type='submit'>Add</Button>
          </div>


          <div>
            {todos.map((todo) => (
              <Phonelist
                key={todo.id}
                todo={todo}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              />
            ))}
          </div>
        </Form>
      </div>
    </div>

  )
}

export default SechGrahok;