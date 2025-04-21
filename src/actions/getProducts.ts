import { Products } from '../../data/products';
import { delay } from '@/utils/delay';

export default async function getProduct() {
    await delay(2000);
    return Products;
}