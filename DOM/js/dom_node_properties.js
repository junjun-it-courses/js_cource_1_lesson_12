let body = document.body;
let startNode = body.firstElementChild // document.body.firstElementChild

// Свойство nodeType позволяет узнать тип DOM-узла.
// Его значение – числовое: 1 для элементов,3 для текстовых узлов,
// и т.д. Только для чтения.
console.log('nodeType', startNode.nodeType)

//nodeName/tagName озвращает название тега в ВЕРХНЕМ РЕГИСТРЕ
console.log('nodeName', startNode.nodeName)


//innerHTML - Внутреннее HTML-содержимое узла-элемента. Можно изменять.
console.log('innerHTML', startNode.innerHTML)

// outerHTML - Полный HTML узла-элемента. Запись в elem.outerHTML не меняет elem.
// Вместо этого она заменяет его во внешнем контексте.
console.log('outerHTML', startNode.outerHTML)

// nodeValue/data - Содержимое узла-неэлемента (текст, комментарий). Эти свойства практически одинаковые,
// обычно мы используем data. Можно изменять.
console.log('data', startNode.data)


// textContent - Текст внутри элемента: HTML за вычетом всех <тегов>
console.log('textContent', startNode.textContent)


// hidden - Когда значение установлено в true, делает то же самое,
// что и CSS display:none.
console.log('hidden', startNode.hidden)