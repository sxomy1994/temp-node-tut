//CommonJs, every file is module(by default)
//Modules - encapsulated conde (only share minimum)
const names = require('./4-names_firstModule');
const sayHi = require('./5-utils_secondModule');
const data6 = require('./6-alternative-flavor');
require('./7-mind-grenade')

// sayHi('Susan');
// sayHi(names.john);
// sayHi(names.peter);