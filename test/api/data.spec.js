'use strict';

describe('API - Data', function() {
    before(function() {
        var div = document.createElement('div');
        document.body.appendChild(div);
    });

    var tree;

    it('returns data api', function() {
        tree = new InspireTree({
            target: 'div',
            data: []
        });

        expect(tree.data).to.be.an('object');
    });
});
