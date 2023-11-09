const CalOperatorBtn = ({
  temp,
  result,
  setResult,
  setTemp,
  setOperator,
  inputOperator,
  bgcolor,
}) => {
  const onClickOperator = () => {
    if (isNaN(result)) {
      alert("숫자를 입력하세요");
    } else {
      setTemp(result);
      setResult("0");
      setOperator(inputOperator);
    }
  };

  return (
    <button
      onClick={onClickOperator}
      className={`btn-style ${bgcolor}  font-bold `}
    >
      {inputOperator}
    </button>
  );
};

export default CalOperatorBtn;
