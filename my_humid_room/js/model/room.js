var Room = Backbone.Model.extend({
    defaults: {
        humidity: 50
    },

    humidify: function () {
        if (this.get('humidity') != 100) {
            this.set('humidity', this.get('humidity') + 1);
        }
    },

    time_lapse: function () {
        if (this.get('humidity') != 0) {
            this.set('humidity', this.get('humidity') - 1);
        }
    }
});