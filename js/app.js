
let counter = 0;
document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('click', event => {
        if (item.classList.contains('btn-left')) {
            counter--;
        }
        else {
            counter++;
        }
        if (counter < 0) {
            counter = 4;
        }
        if (counter > 4) {
            counter = 0;
        }
        console.log(counter);
        document.querySelector('.img-container').setAttribute('style', 'background-image: url("../img/contBcg-'+counter+'.jpeg")');
    })
});