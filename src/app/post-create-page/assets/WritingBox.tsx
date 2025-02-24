import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useMemo } from 'react';
import styled from 'styled-components';

const Quill = styled(ReactQuill)`
  .ql-toolbar {
    border: none;
    border-bottom: 1px solid #d4d4d4;
  }

  .ql-container {
    border: none;
  }

  .ql-editor {
    padding: 16px 0;
    min-height: 40vh;
  }

  .ql-editor img {
    max-height: 600px;
  }
`;

export default function WritingBox({ setContent }) {
  const modules = useMemo(() => {
    return {
      toolbar: [
        [{ size: ['small', false, 'large', 'huge'] }],
        ['bold', 'italic', 'underline', 'strike'],
        [
          { color: [] },
          { background: [] },
        ],
        ['link', 'image'],
      ],
    };
  }, []);
  
  return (
    <Quill
      theme='snow'
      modules={modules}
      onChange={setContent}
    />
  );
}