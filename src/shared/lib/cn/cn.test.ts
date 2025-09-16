import { cn } from './cn';

describe('cn', () => {
    it('joins classnames by space', () => {
        expect(cn('btn', 'btn-primary')).toBe('btn btn-primary');
    });

    it('ignores falsy', () => {
        expect(cn('btn', undefined, null, false, 'active')).toBe('btn active');
    });

    it('supports conditional objects and arrays', () => {
        expect(cn(['btn', { 'is-open': true, hidden: false }])).toBe('btn is-open');
        expect(cn(['a', ['b', { c: true }]])).toBe('a b c');
    });

    it('twMerge: deletes duplicates', () => {
        expect(cn('p-2', 'p-2')).toBe('p-2');
    });

    it('resolves conflicts: last one wins', () => {
        expect(cn('p-2', 'p-4')).toBe('p-4');
        expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500');
    });

    it('different groups classes', () => {
        expect(cn('p-4', 'bg-red-500')).toBe('p-4 bg-red-500');
    });

    it('supports responsive variants', () => {
        // base + md
        expect(cn('p-2', 'md:p-4')).toBe('p-2 md:p-4');
        // md + md
        expect(cn('md:p-2', 'md:p-4')).toBe('md:p-4');
        // 2x base + 2x md
        expect(cn('p-2', 'p-4', 'md:p-2', 'md:p-4')).toBe('p-4 md:p-4');
    });

    it('работает с arbitrary values', () => {
        // последний в группе ширины должен победить
        expect(cn('w-4', 'w-[10px]')).toBe('w-[10px]');
        expect(cn('w-[10px]', 'w-4')).toBe('w-4');
    });

    it('не трогает незнакомые классы/библиотечные токены', () => {
        expect(cn('btn', 'antd-btn', 'p-2')).toBe('btn antd-btn p-2');
    });
});
