import React from "react";
import INPUT_KEYS from "../constants/InputKeys";
import { toTitleCase } from "../formatters";

const getInstructionForSide = (currentBlockIndex, target, category, isLeft) => {
  const onlyTarget = !!target && !category;
  const onlyCategory = !target && !!category;

  const inputKey = isLeft ? INPUT_KEYS.LEFT : INPUT_KEYS.RIGHT;
  const side = isLeft ? "left" : "right";

  if (onlyTarget || onlyCategory) {
    const categoryOrTargetClass = onlyTarget ? "target" : "category";
    const value = onlyTarget ? target : category;
    const styledValue = <span className={categoryOrTargetClass}>{value}</span>;
    return currentBlockIndex < 2 ? (
      <p className="my-4">
        <strong> </strong> Put a {side} finger on the{" "}
        <a class="btn disabled">
          <strong>{inputKey}</strong>
        </a>{" "}
        key for items that belong to the category {styledValue}.
      </p>
    ) : (
      <p>
        Use the{" "}
        <a class="btn disabled">
          <strong>{inputKey}</strong>{" "}
        </a>
        key for {styledValue}
      </p>
    );
  }
  return (
    <p>
      Use the
      <a class="btn disabled">
        {" "}
        <strong>{inputKey}</strong>{" "}
      </a>
      key for <span className="target">{target}</span> and for{" "}
      <span className="category">{category}</span>.
    </p>
  );
};

const getExtraInstruction = (currentBlockIndex, hasTargetAndCategory) => {
  if (currentBlockIndex === 0) return <p className="my-4">Items will appear one at a time.</p>;
  if (hasTargetAndCategory)
    return <p>'Each item belongs to only one category.</p>;
  return null;
};

export default function Instructions({
  currentBlockIndex,
  leftTarget,
  leftCategory,
  rightTarget,
  rightCategory,
}) {
  const leftInstruction = getInstructionForSide(
    currentBlockIndex,
    toTitleCase(leftTarget),
    toTitleCase(leftCategory),
    true
  );
  const rightInstruction = getInstructionForSide(
    currentBlockIndex,
    toTitleCase(rightTarget),
    toTitleCase(rightCategory),
    false
  );
  const extraInstruction = getExtraInstruction(
    currentBlockIndex,
    leftTarget && leftCategory
  );

  return (
    <div className="mx-2 ">
  {leftInstruction}
  {rightInstruction}
  {!!extraInstruction && extraInstruction}

  <p className="my-4">
    If you make a mistake, a red <span className="bold red-text">X</span> will
    appear. Press the other key to continue.
  </p>
  <p className="mb-7">Go as fast as you can while being accurate.</p>

  <div className="divider"></div>

  <h4 className="header center red-text text-darken-4">Ready?</h4>

  <div className="row center">
    <h5>
      
      <p>
      <p className="container xl:hidden">Click "Open the Keyboard" and</p>
        Press the{" "}
        <a className="btn disabled">
          <strong>{INPUT_KEYS.START_KEY}</strong>
        </a>{" "}
        when you are ready to start.
      </p>
      
    </h5>
  </div>
</div>

  );
}
