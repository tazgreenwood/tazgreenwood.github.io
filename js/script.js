var stack = ['main'];

function hideDiv(name) {
    var p = stack[stack.length-1];
    while (p != name) {
        div = document.getElementById(p);
        div.classList.remove('showdiv');
        div.classList.add('hidediv');
        div.style.top = '100vh';
        setTimeout(function () {
            div.classList.remove('hidediv');
        }, 250);
        stack.pop();
        p = stack[stack.length-1];
    }
}

function showDiv(name) {
    div = document.getElementById(name);
    div.classList.add('showdiv');
    div.style.top = 0;
}

function goTo(name) {
    if (stack.indexOf(name) === -1) {
        showDiv(name);
        stack.push(name);
    } else {
        hideDiv(name);
    }
}