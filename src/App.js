import { useState, useEffect } from 'react';
import Student from './components/Student';
import Search from './components/Search/Search';
import './App.css';

function App() {
  const [searchTerm, setSearch] = useState('');
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);

  useEffect(() => {
    async function fetchStudents() {
      let response = await fetch('https://api.hatchways.io/assessment/students', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      
      let data = await response.json();
      setStudents(data.students);
      setFilteredStudents(data.students);
    }

    fetchStudents();
  }, []);

  useEffect(() => {
    setFilteredStudents(students.filter((v) => {
      return (v.firstName.toLowerCase() + ' ' + v.lastName.toLowerCase()).includes(searchTerm)
    }));
  }, [searchTerm, students]);

  return (
    <div className="app bg-gray-200 pt-6 min-h-[500px]">
      <div className="max-w-[900px] bg-gray-50 mx-auto rounded-lg">
        <Search setSearch={setSearch} />
        <div>
          {filteredStudents.map(student => {
            return (
              <Student {...student} key={student.id} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
