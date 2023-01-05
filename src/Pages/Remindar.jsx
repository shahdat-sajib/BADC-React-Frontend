import React from 'react'
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const Remindar = () => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name !== "" && phone !=="") {
      await addDoc(collection(db, "todos"), {
        name,
        phone,
      });
      setName("");
      setPhone("");
    }
  }

  return (
    <div>
      <div>Remindar</div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <div>
          <button>
            Add
          </button>
        </div>
      </form>
    </div>

  )
}

export default Remindar;