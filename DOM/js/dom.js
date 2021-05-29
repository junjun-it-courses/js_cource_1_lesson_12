// Объект document – основная «входная точка».
// С его помощью мы можем что-то создавать или менять на странице

// заменим цвет фона на красный,
document.body.style.background = "red";

// а через секунду вернём как было
setTimeout(() => document.body.style.background = "", 1000)