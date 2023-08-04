$(document).ready(() => {

    $('#article').hide('fast');
    $('#first').hide('fast');
    $('#second').hide('fast');
    $('#third').hide('fast');
    $('#fourth').hide('fast');
    $('#fifth').hide('fast');
    $('#sixth').hide('fast');

    let btn = document.getElementById('btn');
    let header = document.getElementById('jumbo-head');

    setInterval(() => {
        if (btn.innerHTML == 'Reveal') {
            header.style.color = 'crimson';
        } else {
            header.style.color = 'black';
        }
    });

    $('#btn').on('click', () => {

        if (btn.innerHTML == 'Reveal') {
            btn.innerHTML = 'Conceal';
        } else {
            btn.innerHTML = 'Reveal';
        }


        $('#article').slideToggle('slow');
        $('#first').slideToggle(2000);
        $('#second').slideToggle(6000);
        $('#third').slideToggle(10000);
        $('#fourth').slideToggle(14000);
        $('#fifth').slideToggle(18000);
        $('#sixth').slideToggle(22000);
    });

});