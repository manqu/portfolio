var fetch_ment = function () {
        $('#chat_fetch').off();
        //중복게재 방지 
        $.ajax({
            type : 'GET',
            url : 'http://office.learnyware.com:10001/',
            data : {
                'fetch_ment_pk' : window.fetch_ment_pk
            },
            success : function (response_data) {
                append_ments(response_data['ments']);
                window.fetch_ment_pk= response_data['fetch_ment_pk'];
                $('#chat_fetch').on('click', fetch_ment);
            }
        });
    };

var submit_ment = function () {
        $('#chat_submit').off();
        $('#chat_ment').off();
        $.ajax({
            type : 'POST',
            url : 'http://192.168.231.227:1428',
            data : {
                'username' : $('#chat_name').val(),
                'ment' : $('#chat_ment').val(),
                'fetch_ment_pk' : window.fetch_ment_pk
            },
            success : function (response_data) {
                append_ments(response_data['ments']);
                window.fetch_ment_pk= response_data['fetch_ment_pk'];
                $('#chat_ment').val('');
                $('#chat_submit').on('click', submit_ment);
                $('#chat_ment').on('keyup', function (e) {
                    if (e.keyCode == 13) {
                        submit_ment();
                    }
                });
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
    $('#chat_submit').on('click', submit_ment);
    $('#chat_ment').on('keyup', function (e) {
        if (e.keyCode == 13) {
            submit_ment();
        }
    });
});