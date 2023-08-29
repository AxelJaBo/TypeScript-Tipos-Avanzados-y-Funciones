export const createProduct = (
  id: string | number,
  stock?: number,
  isNew?: boolean
) => {
  return {
    id,
    stock: stock ?? 10,
    isNew: isNew ?? true
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
