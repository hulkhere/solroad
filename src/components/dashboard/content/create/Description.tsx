import { useEffect, useRef } from "react";

const Description = ({
  description,
  setDescription,
}: {
  description?: string;
  setDescription: (value: string) => void;
}) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [description]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  return (
    <textarea
      ref={textareaRef}
      placeholder="Write a description..."
      value={description}
      onChange={handleChange}
      rows={1}
      style={{ resize: "none" }}
      className="bg-black outline-none mt-3 max-w-lg"
    />
  );
};

export default Description;
