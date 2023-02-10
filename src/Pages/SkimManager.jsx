import React from 'react'
import Phonelist from '../Components/phonelist';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { query, onSnapshot, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { Table } from '@mui/material';
import underConsLogo from '../Assets/Others/underCons.jpg';
import Appbar from '../Components/Appbar';

const SkimManager = () => {

    // const [todos, setTodos] = React.useState([]);

    // React.useEffect(() => {
    //     const q = query(collection(db, "todos"));
    //     const unsub = onSnapshot(q, (querySnapshot) => {
    //         let todosArray = [];
    //         querySnapshot.forEach((doc) => {
    //             todosArray.push({ ...doc.data(), id: doc.id });
    //         });
    //         setTodos(todosArray);
    //     });
    //     return () => unsub();
    // }, []);


    return (
        // <div>SkimManager</div>
        // <div>

        //     {todos.map((todo) => (
        //         <Phonelist
        //             key={todo.id}
        //             todo={todo}
        //         />
        //     ))}

        // </div>

        <div>
            <Appbar/>
            <div className='pt-5'>
                <img className='w-75 justify-content-center pt-5' src={underConsLogo} />
                <p className='p-3'>This page is under construction</p>
            </div>
        </div>
    )
}

export default SkimManager;