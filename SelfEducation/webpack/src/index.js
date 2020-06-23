// 3 ways to import files
// 1 - you import something that exports default
import AppService from './modules/app.service'
// 2 - you import some object and use {} you can destructurization and get something from object
// for example you can write config.key and you get all your data
import { config } from './modules/config'
// 3 - you can import from component all data
import './modules/header.component'
import './css/index.css'
import './less/index.less'
import './scss/index.scss'
console.log('config key: ', config.key);

const service = new AppService('Hello webpack!!!');
service.log();
// you can check your code:
// npm run dev || build
// node dist/bundle.js
