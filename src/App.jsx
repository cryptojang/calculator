import CalInput from "./components/CalInput";
import { useState } from "react";
import CalNumberBtn from "./components/CalNumberBtn";
import CalDelBtn from "./components/CalDelBtn";
import CalOperatorBtn from "./components/CalOperatorBtn";
import CalEnterBtn from "./components/CalEnterBtn";

const App = () => {
  const [result, setResult] = useState("0"); // callinput의 변수이지만, 결국  다른  컴포넌트에서  사용해야  하니까, 앱으로  옮겨주고 프롭스로  보내준다. 더 나아가면 리덕스로  관리
  const [temp, setTemp] = useState(); //초기값 안 넣어도 괜츈
  const [operator, setOperator] = useState();

  return (
    <main className="bg-green-200 flex justify-center items-center min-h-screen">
      <div className="bg-gray-300 px-8 py-12 rounded-lg shadow-md">
        <CalInput result={result} setResult={setResult} />
        <div className="grid grid-cols-4 gap-4 mt-8">
          <CalNumberBtn number={"1"} result={result} setResult={setResult} />
          <CalNumberBtn number={"2"} result={result} setResult={setResult} />
          <CalNumberBtn number={"3"} result={result} setResult={setResult} />
          <CalOperatorBtn
            bgcolor="bg-red-600 active:bg-red-700"
            inputOperator="+"
            result={result}
            setResult={setResult}
            temp={temp}
            setTemp={setTemp}
            setOperator={setOperator}
          />
          <CalNumberBtn number={"4"} result={result} setResult={setResult} />
          <CalNumberBtn number={"5"} result={result} setResult={setResult} />
          <CalNumberBtn number={"6"} result={result} setResult={setResult} />
          <CalOperatorBtn
            bgcolor="bg-green-600 active:bg-green-700"
            inputOperator="-"
            result={result}
            setResult={setResult}
            temp={temp}
            setTemp={setTemp}
            setOperator={setOperator}
          />

          <CalNumberBtn number={"7"} result={result} setResult={setResult} />
          <CalNumberBtn number={"8"} result={result} setResult={setResult} />
          <CalNumberBtn number={"9"} result={result} setResult={setResult} />
          <CalOperatorBtn
            bgcolor="bg-red-300 active:bg-red-400"
            inputOperator="*"
            result={result}
            setResult={setResult}
            temp={temp}
            setTemp={setTemp}
            setOperator={setOperator}
          />

          <CalEnterBtn
            result={result}
            setResult={setResult}
            temp={temp}
            setTemp={setTemp}
            operator={operator}
            setOperator={setOperator}
          />
          <CalNumberBtn number={"0"} result={result} setResult={setResult} />
          <CalDelBtn result={result} setResult={setResult} />
          <CalOperatorBtn
            bgcolor="bg-green-800 active:bg-green-900"
            inputOperator="/"
            result={result}
            setResult={setResult}
            temp={temp}
            setTemp={setTemp}
            setOperator={setOperator}
          />
        </div>
      </div>
    </main>
  );
};

export default App;
