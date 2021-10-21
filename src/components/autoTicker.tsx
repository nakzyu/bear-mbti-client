import { useEffect, useState } from "react";

type Props = {
  text: string;
  duration: number;
};

// 텍스트 1234가 들어오면
// 1 => 12 => 123 => 1234 => 1 ... 을 순환하여 표시해줌

export default function AutoTicker({ text, duration }: Props): JSX.Element {
  const strings = text && text.length ? text.split("") : [];

  const [count, setCount] = useState<number>(1);
  const [visibleString, setVisibleString] = useState<string>(strings.join(""));

  useEffect(() => {
    const intv = setInterval(() => {
      setCount((prev) => {
        if (prev >= strings.length) {
          return 1;
        }
        return prev + 1;
      });
    }, duration);

    return () => clearInterval(intv);
  }, []);

  useEffect(() => {
    setVisibleString(strings.slice(0, count).join(""));
  }, [count]);

  return <p>{visibleString}</p>;
}
