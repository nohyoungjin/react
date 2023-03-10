// pages/api/data.js

const data = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Bob', age: 40 },
]
  
export default (req, res) => {
  res.status(200).json(data);
}