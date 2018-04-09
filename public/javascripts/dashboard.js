$(() => {
    $('#join-existing').click(() => {
        $('#error').addClass('hidden');
        var room = prompt('What\'s the room number?');
        $.ajax({
            url: '../checkRoom',
            method: 'POST',
            data: 'room=' + room
        }).then(url => {
            window.location = url;
        }).catch(err => {
            console.log(err);
            $('#error p').text(err.responseText);
            $('#error').removeClass('hidden');
        });
    });
});