// Дочерние элементы (или дети) – элементы, которые лежат непосредственно
// внутри данного. Например, внутри <HTML> обычно лежат <HEAD> и <BODY>.

// Потомки – все элементы, которые лежат внутри данного, вместе с их детьми,
// детьми их детей и так далее. То есть, всё поддерево DOM.

let bodyEl = document.body;

// childNodes,
let bodyChilds = bodyEl.childNodes;
// console.log(bodyChilds)

// firstChild
// console.log(bodyEl.firstChild)
// console.log(bodyEl.firstElementChild)

// lastChild
// console.log(bodyEl.lastChild)
// console.log(bodyEl.lastElementChild)


// siblings
let ul = bodyChilds[3];

// previousElementSibling
// console.log(ul.previousElementSibling)

// nextElementSibling
// console.log(ul.nextElementSibling)

// parentElement
// console.log(ul.parentElement)


// Для перебора подходят как обычные циклы так и for..of

// for (let i = 0; i < bodyChilds.length; i++) {
//     console.log( bodyChilds[i] ); // Text, DIV, Text, UL, ..., SCRIPT
// }

// for..of
// for (let node of bodyChilds) {
//     console.log(node);
// }


// Массивы из коллекций - для работы с коллекцией элементов как с массивом данных

// console.log( Array.from(document.body.childNodes).filter );


