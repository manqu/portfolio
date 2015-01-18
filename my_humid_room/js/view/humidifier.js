var HumidifierView = Backbone.View.extend({
    events: {
        "click .power": "toggle_power",
        "click .refill": "refill",
        "click .delete": "_remove",
    },

    initialize: function () {
        this.listenTo(this.model, "change", this.update_render);
    },

    render: function () {
        var $waterbox = $('<div>').addClass('waterbox'),
            $air = $('<div>').addClass('air'),
            $controlbox = $('<div>').addClass('controlbox'),
            $power = $('<div>').addClass('power'),
            $refill = $('<div>').addClass('refill'),
            $delete = $('<div>').addClass('delete');

        this.$el.addClass('humidifier');

        this.$el.append($waterbox);
        this.$el.append($controlbox);
        $waterbox.append($air);
        $controlbox.append($refill);
        $controlbox.append($delete);
        $controlbox.append($power);
        $air.css('height', this.model.get_air());

        if (this.model.get('power_on')) {
            $power.addClass('on');
        }

        return this;
    },

    update_render: function () {
        this.$('.air').animate({
            'height': this.model.get_air()
        }, 100);
    },

    toggle_power: function () {
        if (this.model.toggle_power()) { // turn on : true
            this.$('.power').addClass('on');
        } else {
            this.$('.power').removeClass('on');
        }
    },

    refill: function () {
        this.model.refill();
    },

    _remove: function () {
        var _this = this;
        this.$el.animate({
            opacity : 0
        }, function () {
            _this.model.set('power_on', false);
            _this.remove();
        });
    }
});