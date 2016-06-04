import './body.html';

Template.body.onCreated(function bodyOnCreated() {
    Meteor.subscribe('madCount');
    Meteor.subscribe('sadCount');
    Meteor.subscribe('gladCount');
});

Template.body.helpers({
    backgroundColor() {
        var mads = Counts.get('madCount');
        var sads = Counts.get('sadCount');
        var glads = Counts.get('gladCount');

        var total = mads+sads+glads;
        console.log(total);

        var madWeight = mads / total;
        var sadWeight = sads / total;
        var gladWeight = glads / total;

        console.log(madWeight);
        console.log(sadWeight);
        console.log(gladWeight);

        var max = Math.max(madWeight, sadWeight, gladWeight);

        if (max === madWeight) {
            return 'red';
        }
        if (max === sadWeight) {
            return 'yellow';
        }
        if (max === gladWeight) {
            return 'green';
        }
    },
});

Template.body.events({
    'click #sad'(event) {
        Meteor.call('moods.insertSad');
    },
    'click #mad'(event) {
        Meteor.call('moods.insertMad');
    },
    'click #glad'(event) {
        Meteor.call('moods.insertGlad');
    },
});