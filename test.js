import test from 'ava'
import fn from './'
import isPromise from 'is-promise'

test('returns json objects', t => {
    t.deepEqual((typeof fn('Miami, FL')), (typeof {}))
    t.deepEqual((typeof fn(22.7, -80.1)), (typeof {}))


});
test('returns promise object', t => {
    t.true(isPromise(fn('Miami, FL')))
    t.true(isPromise(fn(22.7, -80.1)))
})
