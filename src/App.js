import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [cList, setCList] = useState([]);

  const submitData = (e, data, setData) => {
    e.preventDefault();
    const newArr = [...cList, data].sort((a, b) =>
      a.firstName.localeCompare(b.firstName)
    );
    setCList(newArr);
    setData({ firstName: '', lastName: '', phone: '' });
  };

  return (
    <div className='App'>
      <h3>Save a contact to List</h3>
      <InputForm submitData={submitData} />
      <List cList={cList} />
    </div>
  );
}

function InputForm({ submitData }) {
  const [data, setData] = useState({
    firstName: 'Coder',
    lastName: 'Byte',
    phone: '888558345',
  });
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <form onSubmit={(e) => submitData(e, data, setData)}>
      <label htmlFor='firstName'>First Name:{'  '} </label>
      <input
        type='text'
        name='firstName'
        value={data.firstName}
        onChange={handleChange}
        required
      />
      <label htmlFor='lastName'>Last Name:{'  '} </label>
      <input
        type='text'
        name='lastName'
        value={data.lastName}
        onChange={handleChange}
        required
      />
      <label htmlFor='Phone'>Phone:{'  '} </label>
      <input
        type='phone'
        name='phone'
        value={data.phone}
        onChange={handleChange}
        required
      />
      <input id='submit' type='submit' value='Submit' />
    </form>
  );
}

function List({ cList }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {cList.map((contact) => (
          <tr key={uuidv4()}>
            <td>{contact.firstName}</td>
            <td>{contact.lastName}</td>
            <td>{contact.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
