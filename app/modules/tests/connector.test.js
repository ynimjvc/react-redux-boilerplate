import test from 'ava';
import Connector from '../connector';
import RoutsDefaultState from 'Module/routs/routs.defaultState';

test('Should provide exact structure from store', t => {
    t.plan(1);

    const expected = RoutsDefaultState;
    const store = {
        Routs: RoutsDefaultState
    };

    t.deepEqual(Connector(store), expected);
});
