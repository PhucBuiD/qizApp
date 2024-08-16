import { useEffect, useState } from "react";
import Answ from "./AnswerItem";

export default function AnswerPart(props: {
  answers: string[];
  chosedAnsw: Function;
  crrAnswer: string;
}) {
  const [canClick, setCanClick] = useState(true);
  const [isReveal, setIsReveal] = useState(false);
  useEffect(() => {
    setCanClick(true);
    setIsReveal(false);
  }, [props.answers]);
  const onChoseItem = (e: Boolean) => {
    setCanClick(false);
    props.chosedAnsw && props.chosedAnsw(e);
  };

  return (
    <div className="">
      <div className="grid grid-cols-2 gap-4">
        {props.answers.length > 0 &&
          props.answers.map((answer) => {
            return (
              <Answ
                value={answer}
                crrAnswer={props.crrAnswer}
                onChosed={(e: Boolean) => onChoseItem(e)}
                canClick={canClick}
                reveal={() => setIsReveal(true)}
                isReveal={isReveal}
              />
            );
          })}
      </div>
    </div>
  );
}
