import { faker as faker } from '@faker-js/faker';

import { addProduct, products, updateProduct, findProducts } from './products/product.service';

for (let i = 0; i < 50; i++) {
  faker.seed(i); // semilla para obtener datos consistentes

  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    color: faker.color.human(),
    size: faker.helpers.arrayElement(['S', 'M', 'L', 'XL']),
    price: parseInt(faker.commerce.price({ min: 0, max: 150 }), 10),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.multiple(faker.commerce.productAdjective, {
      count: { min: 1, max: 5 },
    }),
    title: faker.commerce.productName(),
    stock: faker.number.int({ min: 0, max: 100 }),
    categoryId: faker.datatype.uuid()
  });
}

console.log(products);

const product = products[0];
// updateProduct(product.id, {
//   title: 'New title',
//   stock: 80,
// });


findProducts({
  stock: 10,
  color: 'red',
  createdAt: new Date(),
  isNew: true,
})
