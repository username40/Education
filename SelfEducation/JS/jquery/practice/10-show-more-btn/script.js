/*Show more button.*/


$(function () {
    $('.doc').slice(0, 4).show();
    $('#loadMore').on('click', function (e) {
        e.preventDefault();
        $('.doc:hidden').slice(0, 4).slideDown();
    })
})
