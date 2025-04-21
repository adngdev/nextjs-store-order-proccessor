import { delay } from '@/utils/delay';
import { Boxes } from '../../data/boxes';

export async function getBoxes() {
    await delay(2000);
    return Boxes;
}