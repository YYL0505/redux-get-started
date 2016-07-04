import expect from 'expect'
import todo from '../reducers/todos'


describe('reducer test', () => {
    it('should return ADD_TODO', () => {
        var actual = todo('', {type: 'ADD_TODO', id: 1, text: 'test1'});
        var expected = [
            {
                id: 1,
                text: 'test1',
                completed: false
            }
        ];
        expect(actual).toEqual(expected);
    });

    it('should toggle', () => {
        var actual = todo([{completed: true, id: 1}, {completed: true, id: 2}], {type: 'TOGGLE_TODO', id: 1});
        var expected = [
            {
                id: 1,
                completed: false
            },
            {
                id: 2,
                completed: true
            }
        ];
        expect(actual).toEqual(expected);
    });
});