export const createProduct = (
  id: string | number,
  stock: number = 10,
  isNew: boolean = true
) => {
  return {
    id,
    stock,
    isNew
  }
};

// 0 === false
// '' === false
// false === false

const p1 = createProduct(1, 12, true);
console.log(p1);

const p2 = createProduct(2);
console.log(p2);

const p3 = createProduct(3, 0, false);
console.log(p3);

const p4 = createProduct(4, 100, false);
console.log(p4);


