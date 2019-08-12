import React from 'react'
import Select from './components/Select'

const cars = [
  { name: 'Nexia', value: '1'},
  { name: 'Matiz', value: '2'},
  { name: 'Corvette', value: '3'},
]

const cars2 = [
  { title: 'Mustang', id: '1'},
  { title: 'Camaro', id: '2'},
  { title: 'BMW', id: '3'},
]

function App() {
  return (
    <Select
      list={cars2}
      keyProp='id'
      displayProp='title'
      placeholder='Mashinalar'
      onSelect={selected => console.log(selected.title)}
    />
  );
}

export default App;
