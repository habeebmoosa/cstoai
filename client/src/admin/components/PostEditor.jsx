import ReactQuill from 'react-quill';

export const PostEditor = ({value,onChange}) => {
    const modules = {
        toolbar: [
          [{ header: [1, 2, false] }],
          ['bold', 'italic', 'underline', 'strike', 'blockquote'],
          [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
          ],
          ['link', 'image'],
          ['clean'],
        ],
      };

      const editorStyles = {
        height: '400px',
        marginBottom: '50px',
      };

      return (
        <div className="content">
        <ReactQuill
          value={value}
          theme='snow'
          onChange={onChange}
          modules={modules}
          style={editorStyles}
          />
        </div>
      );
};