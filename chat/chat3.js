var fetch_ment = function () {
        $.ajax({
            type : 'GET',
            url : 'http://office.learnyware.com:10001/',
            data : {
                'fetch_ment_pk' : window.fetch_ment_pk
            },
            success : function (response_data) {
                append_ments(response_data['ments']);
                window.fetch_ment_pk= response_data['fetch_ment_pk'];
            }
        });
    };

var append_ments = function (ments) {
        var $new_ment, i;
        for (i=0; i<ments.length; i++) {
            $new_ment = $('<div>').css('color', '#' + ments[i]['color']);
            $new_ment.append('[' + ments[i]['written_time'] + ' '
                + ments[i]['username'] + '] ' + ments[i]['text']);
            $('#chat_box').append($new_ment);
        }
    };

$(function() {
    window.fetch_ment_pk = 1;
    $('#chat_fetch').on('click', fetch_ment);
});