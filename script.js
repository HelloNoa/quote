function adjustHeight() {
    var textEle = document.querySelector('.txt');
    textEle.style.height = 'auto';
    var textEleHeight = textEle.scrollHeight;
    textEle.style.height = `${textEleHeight}px`;
  };
  
window.onload = ()=>{
    document.querySelector('.txt').onkeydown = ()=>{
        adjustHeight(); 
    }
    document.querySelector('.txt').onkeyup = ()=>{
        adjustHeight(); 
    }
    document.getElementById('download').addEventListener('click', ()=>{
        html2canvas(document.querySelector(".bg")).then(canvas => {
            document.body.appendChild(canvas);

            var dataURL = canvas.toDataURL('image/png');
            dataURL = dataURL.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
            dataURL = dataURL.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png');
            var aTag = document.createElement('a');
            aTag.download = 'from_canvas.png';
            aTag.href = dataURL;
            aTag.click();
        });
    });
}
  