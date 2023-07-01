import { useEffect, useRef } from "react";

const Title = ({
  title,
  setTitle,
}: {
  title?: string;
  setTitle: (value: string) => void;
}) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <input
      ref={inputRef}
      type="text"
      className="text-6xl bg-black outline-none font-bold"
      value={title}
      placeholder="Title"
      onChange={handleChange}
    />
  );
};

export default Title;
