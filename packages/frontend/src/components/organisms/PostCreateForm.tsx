import React, { useMemo, useState } from 'react';
import { TextArea } from '@/components/atoms/TextArea';
import { createFlavMd } from 'flav-md';
import styled from '@emotion/styled';
import { markdownStyle } from '@/const/markdown';
import SelectableButton from '@/components/atoms/SelectableButton';
import { candidates, PublishStatus } from '@/const/post';
import { PostInputType } from '@/types/post';
import TextForm from '@/components/atoms/TextForm';

const Container = styled.div`
  display: flex;
  max-height: 700px;
  margin-bottom: 24px;
`;

const BottomContainer = styled.div`
  float: right;
`;

const DisplayedText = styled.div`
  overflow-x: scroll;
  margin: 0 12px;
  width: 100%;
`;

type Props = {
  initTitle?: string;
  initContent?: string;
  submit: (param: PostInputType) => void;
};

export const PostCreateForm: React.VFC<Props> = ({ submit, initTitle, initContent }) => {
  const [title, setTitle] = useState(initTitle || '');
  const [content, setContent] = useState(initContent || '');
  const flavMd = createFlavMd();
  const updateText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const updateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const renderedText = useMemo(() => {
    return flavMd.readMdText(content).readCssText(markdownStyle).build();
  }, [content, flavMd]);

  const onSubmit = (value: PublishStatus) => {
    submit({
      content,
      title,
      status: value,
    });
  };

  return (
    <div>
      <TextForm value={title} onChange={updateTitle} testId="title-text" />
      <Container>
        <TextArea
          value={content}
          onChange={updateText}
          rows={40}
          testId="post-create-form-textarea"
        />
        <DisplayedText dangerouslySetInnerHTML={{ __html: renderedText }} />
      </Container>
      <BottomContainer>
        <SelectableButton<PublishStatus>
          onSubmit={onSubmit}
          candidates={candidates}
          initValue={PublishStatus.UNPUBLISHED}
        />
      </BottomContainer>
    </div>
  );
};
