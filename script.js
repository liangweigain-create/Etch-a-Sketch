const container = document.querySelector('.container');
const fragment = document.createDocumentFragment();
//先获取用户输入的数字，生成对应n*n的网格
const btn = document.querySelector('.grid-num');
//得到按钮元素后，添加监听事件，点击后弹出用户输入请求
let userInput;
btn.addEventListener('click', () => {
    userInput = parseInt(prompt('Please Enter a num * num grid'));
    if (userInput <= 0 || userInput > 100 || typeof userInput !== 'number') {
        alert('wrong number')
        return;
    }
    container.innerHTML = '';
    const gridSize = userInput * userInput;
    const tiniGridSize = (960 - 2 - 1*(userInput-1)) / userInput;
/**
 * 960 = (1 * 2) + (x * userInput) + (gap * (userinput - 1 ))
 * (960 - 2 - 1*(n-1)) / n
 */

    for (let i = 1; i <= gridSize; i++) {
    const tiniGrid = document.createElement('div');
    tiniGrid.classList.add('grid');
    tiniGrid.style.width = tiniGridSize + 'px';
    tiniGrid.style.height = tiniGridSize + 'px';
    fragment.appendChild(tiniGrid);
}
container.appendChild(fragment);
})


container.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('grid')) {e.target.classList.add('highlight')}
})