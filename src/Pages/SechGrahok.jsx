// import React from 'react'
// import Appbar from '../Components/Appbar';

// const SechGrahok = () => {
//   return (
//     <div>
//       <Appbar />
//       <div>
//         Sech Grahok
//       </div>
//     </div>
//   )
// }

// export default SechGrahok;

import React from 'react';
import Appbar from '../Components/Appbar';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Phonelist from '../Components/phonelist';

const SechGrahok = () => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [type, setType] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name !== "" && phone !== "" && type !== "") {
      await addDoc(collection(db, "todos"), {
        name,
        phone,
        type,
      });
      setName("");
      setPhone("");
      setType("");
    }
  }

  return (
    <div style={{ backgroundColor: "white" }}>
      <div>
        <Appbar />
        <Form onSubmit={handleSubmit}>
          <TextField className='mb-2 mt-3' size='small' id="name" label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
          <TextField className='mb-2' id="phone" size='small' label="Phone" variant="outlined" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <FormControl className='mb-2' style={{width: "220px"}}>
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
            <Phonelist/>
          </div>
        </Form>
      </div>
    </div>

  )
}

export default SechGrahok;