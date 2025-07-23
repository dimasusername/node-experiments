import { filterMap } from './filterMap.js';

const activeUserNames = filterMap(users, u => u.active ? u.name : undefined);

