import { useState } from 'react';
import axios from 'axios';

function App() {
  const [email, setEmail] = useState('');
  const [photo, setPhoto] = useState('');

  const handleForm = async (e) => {
    e.preventDefault();
    console.log(email, photo);

    const formData = new FormData();
    formData.append('email', email);
    formData.append('photo', photo);

    const res = await axios.post('http://localhost:5000/', formData);
    console.log(res.data);
  }

  return (
    <div className="App">
      <form onSubmit={handleForm}>
        <div>
          <label>Email:</label>
          <input type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label>Photo:</label>
          <input type="file" name="photo" onChange={(e) => setPhoto(e.target.files[0])} />
        </div>

        <button>Add User</button>  
      </form>
    </div>
  );
}

export default App;
