const Category = ({ categories }) => {
    return React.createElement(
      'div',
      { className: 'grid grid-cols-6 gap-4 p-4' },
      categories.map((category, index) =>
        React.createElement(
          'div',
          { key: index, className: 'flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow' },
          React.createElement('img', { src: category.image, alt: category.name, className: 'w-12 h-12' }),
          React.createElement('span', { className: 'mt-2 text-sm font-medium' }, category.name)
        )
      )
    );
  };
  
  const Card = ({ products }) => {
    return React.createElement(
      'div',
      { className: 'grid grid-cols-4 gap-6 p-4 rounded-lg' },
      products.map((product, index) =>
        React.createElement(
          'div',
          { key: index, className: 'rounded-lg p-5 shadow-md bg-gray-100' },
          React.createElement('img', { src: product.image, alt: product.name, className: 'w-full h-55 object-cover rounded-md' }),
          React.createElement('h3', { className: 'mt-4 font-semibold' }, product.name),
          React.createElement('p', {}, `Состояние: ${product.condition}`),
          React.createElement('p', {}, `Память: ${product.memory}`),
          React.createElement('p', { className: 'text-blue-600 font-bold' }, `${product.price} UZS`)
        )
      )
    );
  };
  
  document.addEventListener('DOMContentLoaded', function () {
    const categories = [
      { name: 'Apple', image: './image/apple.png' },
      { name: 'Huawei', image: './image/huawei.png' },
      { name: 'Xiaomi', image: './image/xiaomi.png' },
      { name: 'Samsung', image: './image/samsung.png' },
      { name: 'Apple', image: './image/apple.png' },
      { name: 'Samsung', image:  './image/samsung.png' },
      { name: 'Xiaomi', image: './image/xiaomi.png' },
      { name: 'Apple', image: './image/apple.png' },
      { name: 'Samsung', image:  './image/samsung.png' },
      { name: 'Xiaomi', image: './image/xiaomi.png' },
      { name: 'Huawei', image: './image/huawei.png' },
      { name: 'Смотреть все', image: './image/ph_plus-bold.png' }
    ];
  
    const products = [
      { name: 'Xiaomi Redmi Note 12', condition: 'Новый', memory: '64 GB', price: '1 680 000', image: './image/redmi.png' },
      { name: 'Samsung Galaxy S22 Ultra', condition: 'Новый', memory: '64 GB', price: '1 680 000', image: './image/samsung22-ultra.png' },
      { name: 'Samsung Galaxy S22 Ultra', condition: 'Новый', memory: '64 GB', price: '1 680 000', image: './image/samsung22-ultra2.png' },
      { name: 'Apple iPhone SE', condition: 'Новый', memory: '64 GB', price: '1 680 000', image: './image/iphone-se.png' },
      { name: 'Samsung Galaxy S22 Ultra', condition: 'Новый', memory: '64 GB', price: '1 680 000', image: './image/samsung22-ultra.png' },
      { name: 'Xiaomi Redmi Note 12', condition: 'Новый', memory: '64 GB', price: '1 680 000', image: './image/redmi.png' },
      { name: 'Apple iPhone SE', condition: 'Новый', memory: '64 GB', price: '1 680 000', image: './image/iphone-se.png' },
      { name: 'Samsung Galaxy S22 Ultra', condition: 'Новый', memory: '64 GB', price: '1 680 000', image: './image/samsung22-ultra2.png' },
    ];
  
    ReactDOM.render(
      React.createElement('div', { className: 'container mx-auto p-6' },
        React.createElement('h2', { className: 'text-2xl font-bold mb-4 text-center' }, 'Категории'),
        React.createElement(Category, { categories }),
        React.createElement('h2', { className: 'text-2xl font-bold mt-8 mb-4 text-center' }, 'Объявления'),
        React.createElement(Card, { products })
      ),
      document.getElementById('root')
    );
  });