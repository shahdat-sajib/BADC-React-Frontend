import React from 'react'
import Phonelist from '../Components/phonelist';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { query, onSnapshot, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { Table } from '@mui/material';

const SkimManager = () => {

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


    return (
        // <div>SkimManager</div>
        <div>

            {todos.map((todo) => (
                <Phonelist
                    key={todo.id}
                    todo={todo}
                />
            ))}

        </div>
    )
}

export default SkimManager;