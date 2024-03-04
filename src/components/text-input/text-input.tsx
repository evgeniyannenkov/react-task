import { FC, useState, useRef, useEffect, HTMLProps, ChangeEvent } from "react";

export interface TextInputProps extends HTMLProps<HTMLTextAreaElement> {
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextInput: FC<TextInputProps> = ({ onChange, ...props }) => {
  const [text, setText] = useState("");
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    onChange?.(e);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [text]);

  return <textarea {...props} ref={inputRef} value={text} onChange={handleChange} />;
};
