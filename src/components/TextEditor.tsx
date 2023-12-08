import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
type TextEditorProps = {
  onTextEditorChange: (value: string) => void;
  value: string;
};
const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
    ["clean"],
  ],
};

export default function TextEditor({
  onTextEditorChange,
  value,
}: TextEditorProps) {
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onTextEditorChange}
      modules={modules}
    />
  );
}
