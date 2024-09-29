
    //рисование по клеткам
    function activ2(){
        startPaint();
        doTransparent('transparent_img');
        doTransparent('transparent_text');
    }
    
    function doTransparent(id) {
        let element = document.getElementById(id);
        element.style.display = 'none';
    }

    let paint = false;

    function changeBackGroundCell(cell){
        if (paint){
            if (cell.style.backgroundColor === "black"){
                cell.style.backgroundColor = "";
            } else{
                cell.style.backgroundColor = "black";
            }
        }
    }

    function draw(cell){
        if (paint){
            changeBackGroundCell(cell);
        }
    }

    function startPaint(){
        paint = true;
    }

    function endPaint(){
        paint = false;
        let cells = document.querySelectorAll(".paint td");
        cells.forEach(function(cell)   {
            cell.style.backgroundColor = "";
});
    }
    
    //переключение квартир
    function showImage() {
    var blockRoom = document.querySelectorAll('.roomBlock');
    var numberRoom = document.querySelectorAll('.numberRoom');
    numberRoom.forEach((number, index) => {
        number.addEventListener('mouseover', function() {
            blockRoom.forEach(image => image.style.display = 'none');
            blockRoom[index].style.display = 'block';
        });
    });
};


// четвертый блок
document.addEventListener('DOMContentLoaded', function() {
    let blocks = document.querySelectorAll('.iron, .concrete, .glass, .brick, .sand');

    blocks.forEach(function(block) {
        block.addEventListener('mouseover', function() {
            block.style.backgroundColor = '#111111';
            block.querySelectorAll('p').forEach(function(p) {
                p.style.color = '#F9F9F9';
            }); block.querySelectorAll('img').forEach(function(img) {
                img.style.opacity = '1'; });
        });

        block.addEventListener('mouseout', function() {
            block.style.backgroundColor = 'transparent';
            block.querySelectorAll('p').forEach(function(p) {
                p.style.color = '#111111';
            }); block.querySelectorAll('img').forEach(function(img) {
                img.style.opacity = '0'; });
        });
    });
});