const ChildComponent = ({count}: {count: number}) => {
  return (
    <div className="border-4 border-blue-400 p-10 m-10">{count}</div>
  )
}

export default ChildComponent;