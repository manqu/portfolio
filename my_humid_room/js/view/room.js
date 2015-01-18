var RoomView = Backbone.View.extend({
    initialize: function () {
        this.listenTo(this.model, "change", this.render);
    },

    render : function () {
        this.$('.humidity').html(this.model.get('humidity'));
        return this;
    }
});