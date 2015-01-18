var fetch_ment = function () {
        $.ajax({
            type : 'GET',
            url : 'http://office.learnyware.com:10001/',
            data : {
                'fetch_ment_pk' : window.fetch_ment_pk
            },
            success : function (response_data) {
                console.log(response_data);
            }
        });
    };

$(function() {
    window.fetch_ment_pk = 1;
    $('#chat_fetch').on('click', fetch_ment);
});