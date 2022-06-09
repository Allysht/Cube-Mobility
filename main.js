class createObject {
    constructor() {
        const xUI = document.getElementById('x');
        const yUI = document.getElementById('y');
        let borderStatus;

        var mousePosition;
        var offset = [0,0];
        var div;
        var isDown = false;

        div = document.createElement("div");
        div.style.position = "absolute";
        div.style.left = "0px";
        div.style.top = "0px";
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.background = "red";
        div.style.color = "blue";

        document.body.appendChild(div)

        div.classList.add('object')

        div.addEventListener('mousedown', function(e) {
            isDown = true;
            offset = [
                div.offsetLeft - e.clientX,
                div.offsetTop - e.clientY
            ];
        }, true);

        document.addEventListener('mouseup', function() {
            isDown = false;
            div.style.border = '2px solid #ccc'
        }, true);

        document.addEventListener('mousemove', function(event) {
            event.preventDefault();
            if (isDown) {
                mousePosition = {

                    x : event.clientX,
                    y : event.clientY

                };
                div.style.left = (mousePosition.x + offset[0]) + 'px';
                div.style.top  = (mousePosition.y + offset[1]) + 'px';

                xUI.innerHTML = `X: ${mousePosition.x}`
                yUI.innerHTML = `Y: ${mousePosition.y}`
    
                div.style.border = '2px solid green'
            }
    }, true);
    }
}

document.addEventListener('keypress', (e) => {
    if (e.keyCode === 13) {
        document.body.appendChild(new createObject())
        console.log(e)
    }
})

