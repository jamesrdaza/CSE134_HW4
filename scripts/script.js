const canvas = document.querySelector('canvas');
console.log(canvas)
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'red';
ctx.fillRect(10, 10, 100, 100);