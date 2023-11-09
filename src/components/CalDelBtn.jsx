const CalDelBtn = ({ result, setResult }) => {
  const onClickDel = () => {
    if (result.length === 1) {
      setResult("0");
    } else {
      setResult(result.substring(0, result.length - 1));
    }
  };

  return (
    <button
      onClick={onClickDel}
      className="btn-style bg-yellow-400 text-yellow-950 font-bold  "
    >
      Del
    </button>
  );
};

export default CalDelBtn;
