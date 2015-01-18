var Humidifier = Backbone.Model.extend({
    defaults: {
        power_on: false,
        water: 50
    },

    get_air: function () {
        return 100 - this.get('water');
    },

    toggle_power: function () {
        this.set('power_on', !(this.get('power_on')));
        return this.get('power_on');
    },

    refill: function () {
        this.set('water', 100);
    },

    time_lapse: function () {
        if (this.get('power_on') && (this.get('water') > 0)) {
            this.trigger('humidify');
            this.set('water', this.get('water') - 2);
        }
    }
});