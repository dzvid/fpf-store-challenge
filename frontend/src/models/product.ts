import { Category } from './category';

interface Product {
  id?: string;
  name: string;
  image?: string;
  price: number;
  quantity: number;
  categoryId: string;
  category: Category;
}

export { Product };
