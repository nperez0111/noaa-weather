import test from 'ava';
import fn from './';

test('returns json objects', t => {
    t.deepEqual((typeof fn('Miami, FL')), (typeof {}))
    t.deepEqual((typeof fn(22.7, -80.1)), (typeof {}))


});
test('returns promise object', t => {
    t.true((fn('Miami, FL') instanceof Promise))
    t.true((fn(22.7, -80.1) instanceof Promise))
})
