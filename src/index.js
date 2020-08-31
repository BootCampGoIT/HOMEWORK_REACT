
import './styles.css';
import { navigationModule} from './Components/header/navigation/navigation';

import {info, getProps} from './helpers';

const array = ["Home", "Library", "New", "About"];

navigationModule(array);

// localStorage.setItem("watched", JSON.stringify([2345,444334]))

getProps();
console.log('info', info);

// const fragment = document.createDocumentFragment()






// localStorage.getItem("")






























// console.log('getDeviceProps()', getDeviceProps())



// axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`)
//   // .then(response => console.log(response.data.results))
//   .then(response => movieList(response.data.results))
//   .then(data => console.log(data))







