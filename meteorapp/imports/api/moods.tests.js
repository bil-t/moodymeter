/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';

import { Moods } from './moods.js';

if (Meteor.isServer) {

    function call_method(methodCall) {
        const method = Meteor.server.method_handlers[methodCall];
        method.apply();
    }

    function test_mood_insertion(methodCall, expectedMood) {
        call_method(methodCall);
        var moods = Moods.find();
        assert.equal(moods.count(), 1);
        var mood = moods.fetch()[0];
        assert.equal(mood['mood'], expectedMood);
    }

    describe('Moods', () => {
        describe('methods', () => {

            beforeEach(() => {
                Moods.remove({});

            });
            it('can publish a glad mood', () => {
                test_mood_insertion('moods.insertGlad', 'g');
            });
            it('can publish a sad mood', () => {
                test_mood_insertion('moods.insertSad', 's');
            });
            it('can publish a mad mood', () => {
                test_mood_insertion('moods.insertMad', 'm');
            });
        });
    });
}