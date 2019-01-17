$('button').click(function() {
    $('.output').empty();
    
    for (var a = [0, 1, 2, 3, 4], i = a.length; i--; ) {
        var random = a.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
        $('.output').append('<span>' + random + '</span>');
    }
    
}).click();