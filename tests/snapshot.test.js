import initDoczPluginSnapshots from 'docz-plugin-snapshots';

jest.mock('../src/components/Modal/Modal');
jest.mock('../src/components/Modal/HistoryModal');
jest.mock('../src/components/Modal/ModalBase');

initDoczPluginSnapshots('../src');
