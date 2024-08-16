import { useEffect, useState } from "react";
import { isReadable } from "stream";

export default function Answ(props: {
  value: string;
  onChosed: Function;
  crrAnswer: string;
  canClick: Boolean;
  reveal: Function;
  isReveal: Boolean;
}) {
  const [chs, setChs] = useState(0);
  useEffect(() => {
    setChs(0);
  }, [props.crrAnswer]);
  useEffect(() => {
    if (props.isReveal && props.value === props.crrAnswer) {
      setChs(2);
    }
  }, [props.isReveal]);
  const onAnswClick = () => {
    if (props.canClick) {
      if (props.value === props.crrAnswer) {
        setChs(2);
      } else {
        setChs(1);
        props.reveal();
      }
      props.onChosed(props.value === props.crrAnswer);
    }
  };
  return (
    <div
      className={`border-solid border-2 border-indigo-600 rounded p-4 m-2 cursor-pointer bg${chs}`}
      onClick={onAnswClick}
    >
      {props.value}
    </div>
  );
}
