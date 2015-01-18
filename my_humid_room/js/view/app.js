var AppView = Backbone.View.extend({
    events: {
        "click .add_humidifier_btn": "add_humidifier",
        "click .time_lapse_btn": "time_lapse",
    },

    initialize: function () {
        this.room = new Room();
    },

    render: function () {
        var $room = $('<div>'),
            $hum_span = $('<span>').addClass('humidity'),
            $humidifiers = $('<div>').addClass('humidifiers'),
            $add_hum_btn = $('<button>').addClass('add_humidifier_btn').html('Add humidifier'),
            $time_lapse_btn = $('<button>').addClass('time_lapse_btn').html('Time lapse');

        this.$el.append($room)
            .append($humidifiers)
            .append($add_hum_btn)
            .append($time_lapse_btn);
        $room.append('Humidity : ').append($hum_span);

        new RoomView({
            model : this.room,
            el : $room
        }).render();

        this.on('time_lapse', function () {
            this.room.time_lapse();
        });
    },

    add_humidifier: function () {
        var $new_el = $('<div>'),
            new_humidifier = new Humidifier,
            room = this.room;

        this.$('.humidifiers').append($new_el);

        new HumidifierView({
            model : new_humidifier,
            el : $new_el
        }).render();

        this.on('time_lapse', function () {
            new_humidifier.time_lapse();
        });

        new_humidifier.on('humidify', function () {
            room.humidify();
        });
    },

    time_lapse: function () {
        this.trigger('time_lapse');
    }
});