import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Moods = new Mongo.Collection('moods');

if (Meteor.isServer) {
    Meteor.publish('madCount', function() {
        Counts.publish(this, 'madCount', Moods.find({mood: 'm'}));
    });
    Meteor.publish('sadCount', function() {
        Counts.publish(this, 'sadCount', Moods.find({mood: 's'}));
    });
    Meteor.publish('gladCount', function() {
        Counts.publish(this, 'gladCount', Moods.find({mood: 'g'}));
    });

}

Meteor.methods({
    'moods.insertSad'() {
        Moods.insert({
            mood: 's',
            createdAt: new Date(),
        });
    },
    'moods.insertGlad'() {
        Moods.insert({
            mood: 'g',
            createdAt: new Date(),
        });
    },
    'moods.insertMad'() {
        Moods.insert({
            mood: 'm',
            createdAt: new Date(),
        });
    },
});