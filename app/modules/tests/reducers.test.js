import test from 'ava';
import Reducers from '../reducers';

test('Should have exact structure', t => {
    t.plan(7);

    t.is('Loader' in Reducers, true);
    t.is('Alert' in Reducers, true);
    t.is('Routs' in Reducers, true);
    t.is('Header' in Reducers, true);
    t.is('Sidebar' in Reducers, true);
    t.is('Lot' in Reducers, true);

    t.is(Object.keys(Reducers).length, 6);
});
