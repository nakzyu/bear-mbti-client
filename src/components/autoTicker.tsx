import { useEffect, useMemo, useState } from "react";

type AutoTickerProps = {
  text: string;
  duration: number;
};

// when text 1234 comes
// return 1 => 12 => 123 => 1234 => 1 ... recursively

export default function AutoTicker({
  text,
  duration,
}: AutoTickerProps): JSX.Element {
  const strings = useMemo(
    () => (text && text.length ? text.split("") : []),
    [text]
  );

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
  }, [duration, strings.length]);

  useEffect(() => {
    setVisibleString(strings.slice(0, count).join(""));
  }, [count, strings]);

  return <p>{visibleString}</p>;
}
