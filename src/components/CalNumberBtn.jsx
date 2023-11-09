const CalNumberBtn = ({ result, setResult, number }) => {
  const onClickNumber = () => {
    if (result == "0") {
      setResult(number);
    } else {
      setResult(result + number);
    }
  };
  // result == "0" ? setResult(number) : setResult(result + number); 삼항연산자로 표현

  return (
    <button onClick={onClickNumber} className="btn-style active:bg-gray-800">
      {number}
    </button>
  );
};

export default CalNumberBtn;
