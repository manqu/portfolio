var fetch_ment = function () {
        $.ajax({
            type : 'GET',
            url : 'http://office.learnyware.com:10001/',
            data : {
                'fetch_ment_pk' : window.fetch_ment_pk
            },
            success : function (response_data) {
                //asuccess:jax 성공 후 실행
                append_ments(response_data['ments']);
                window.fetch_ment_pk= response_data['fetch_ment_pk'];
            }
        });
    };

var submit_ment = function () {
        $.ajax({
            type : 'POST',
            url : 'http://office.learnyware.com:10001/',
            data : {
                'username' : $('#chat_name').val(),
                'ment' : $('#chat_ment').val(),
                'fetch_ment_pk' : window.fetch_ment_pk
            },
            success : function (response_data) {
                append_ments(response_data['ments']);
                window.fetch_ment_pk= response_data['fetch_ment_pk'];
               if (response_data['posted']) {
                $('#chat_ment').val('');
                //기타 에러 처리 진행 
            }
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