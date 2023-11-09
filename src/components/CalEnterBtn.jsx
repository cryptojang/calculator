const CalEnterBtn = ({
  result,
  setResult,
  temp,
  setTemp,
  operator,
  setOperator,
}) => {
  const onClickEnter = () => {
    switch (operator) {
      case "+":
        setResult(String(Number(temp) + Number(result)));
        break;
      case "-":
        setResult(String(Number(temp) + Number(result)));
        break;
      case "*":
        setResult(String(Number(temp) * Number(result)));
        break;
      case "/":
        setResult(String(parseInt(Number(temp) / Number(result), 10)));
        break;
    }

    setTemp();
    setOperator();
  };

  return (
    <button
      onClick={onClickEnter}
      className="btn-style font-bold bg-green-300 text-green-800 "
    >
      Enter
    </button>
  );
};

export default CalEnterBtn;
