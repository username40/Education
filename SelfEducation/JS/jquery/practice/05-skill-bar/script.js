﻿/*Skill-bar.*/

$('.skillbar').each(function () {
    $(this).find('.skillbar-bar').animate({
        width: $(this).attr('data-percent')
    }, 2000);
})

