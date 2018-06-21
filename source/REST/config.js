// Core
import { getFullApiUrl } from 'instruments';

const GROUP_ID = '';
const TOKEN = '';

const ROOT_URL = 'https://lab.lectrum.io/react/api';
const MAIN_URL = getFullApiUrl(ROOT_URL, GROUP_ID);

export { GROUP_ID, TOKEN, MAIN_URL };
