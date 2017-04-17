var simon = document.getElementById('simon');
var bruce = document.getElementById('bruce');
var ben = document.getElementById('ben');


simon.addEventListener('click',picLink);
bruce.addEventListener('click',picLink);
ben.addEventListener('click',picLink);
function picLink() {
    var picId = this.attributes['data-img'].value;
    var pic = document.getElementById(picId);
    if(pic.className === 'hide'){
        pic.className = '';
    }
    else{
        pic.className='hide';
    }
}