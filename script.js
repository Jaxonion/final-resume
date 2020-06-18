function myFunction() {
    $('.dropdown_content').toggleClass('show');
}

function link_one() {
    console.log('link1')
    document.getElementById('personal_info').scrollIntoView();
    $('.dropdown_content').removeClass('show');
}

function link_two() {
    console.log('link2')
    document.getElementById('contact_info').scrollIntoView();
    $('.dropdown_content').removeClass('show');
}

function link_three() {
    console.log('link3')
    document.getElementById('first_item').scrollIntoView();
    $('.dropdown_content').removeClass('show');
}