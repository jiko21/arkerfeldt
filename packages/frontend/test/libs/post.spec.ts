import { PublishStatus } from '@/const/post';
import { convertStatusToString, convertStatusToText } from '@/libs/post';

describe('post.ts', () => {
  describe('convertStatusToString', () => {
    it.each`
      status                       | output
      ${PublishStatus.PUBLISHED}   | ${'公開中'}
      ${PublishStatus.UNPUBLISHED} | ${'未公開'}
    `('convertStatusToString($status) => $output', ({ status, output }) => {
      expect(convertStatusToString(status)).toEqual(output);
    });
  });

  describe('convertStatusToText', () => {
    it.each`
      status                       | output
      ${PublishStatus.PUBLISHED}   | ${'公開する'}
      ${PublishStatus.UNPUBLISHED} | ${'未公開のまま保存'}
    `('convertStatusToText($status) => $output', ({ status, output }) => {
      expect(convertStatusToText(status)).toEqual(output);
    });
  });
});
