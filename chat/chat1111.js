var fetch_ment = function () {
        $.ajax({
            type : 'GET',
            url : 'http://office.learnyware.com:10001/',
            data : {
                'fetch_ment_pk' : window.fetch_ment_pk
            },
            success : function (response_data) {
                var $new_ment = $('<div>');

                $('#chat_box').append($new_ment);

                for (i = 0; i< response_data['ments'].length; i++) {
                    $new_ment.css('color' + '#' + response_data['ments'][i]['color'])
                    console.log(response_data['ments'][i]);
                };
                
                
                window.fetch_ment_pk = response_data['fetch_ment_pk'];

            }
        });
    };

$(function() {
    window.fetch_ment_pk = 1;
    $('#chat_fetch').on('click', fetch_ment);
});