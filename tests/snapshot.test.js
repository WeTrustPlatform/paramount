import { convertDoczToSnapshots } from './convertDoczToSnapshots';

jest.mock('../src/components/Modal/Modal');
jest.mock('../src/components/Modal/HistoryModal');
jest.mock('../src/components/Modal/ModalBase');

convertDoczToSnapshots('../src');
