// api/products.js

const products = [  
    { id: 1, name: 'Product 1' },  
    { id: 2, name: 'Product 2' },  
    { id: 3, name: 'Product 3' },
];

export default function handler(req, res) {
  res.status(200).json(products);
}