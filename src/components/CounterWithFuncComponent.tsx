import ChildComponent from "./ChildComponent";

type TProps = {
  count: number;
  setCount:  React.Dispatch<React.SetStateAction<number>>
}



const  CounterWithFuncComponent = ({count, setCount} : TProps) =>{
  return (
    <div className=" border-2 border-orange-900 p-6 m-6 text-center">
      <button className="font-bold text-white p-2 rounded-sm bg-purple-950" onClick={() => setCount(prev => prev + 1)}>{count}</button>
      <ChildComponent count = {count}></ChildComponent>
    </div>
  )
}

export default CounterWithFuncComponent;
