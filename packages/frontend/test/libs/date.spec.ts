import { formatDate } from '@/libs/date';

describe('@/libs/date', () => {
  describe('formatDate', () => {
    test('correctly convert', () => {
      const date = new Date('2020/12/11 10:00');
      expect(formatDate(date)).toBe('2020/12/11 10:00');
    });
  });
});
