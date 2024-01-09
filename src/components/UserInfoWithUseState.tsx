/* user = {
    name = 'something',
    age = 67,
    hobbies = ["football","gaming"]
}
 */
import { useState } from "react";

const UserInfoWithUseState = () => {
  const [user, setUser] = useState({ name: "", age: '', hobbies: [] });
  console.log(user)
  return (
    <form>
      <input onChange={(e) => setUser({...user,name: e.target.value})}
        className="border-2 border-purple-300 m-10 p-3"
        type="text"
        name="name"
        id="name"
        placeholder="name"
      />
      <input onChange={(e) => setUser({...user,age: e.target.value})}
        className="border-2 border-purple-300 m-10 p-3"
        type="number"
        name="age"
        id="age"
        placeholder="age"
      />
      <input onBlur={(e) => setUser({...user,hobbies: [...user.hobbies, e.target.value]})}
        className="border-2 border-purple-300 m-10 p-3"
        type="text"
        name="hobbies"
        id="hobbies"
        placeholder="hobbies"
      />
      <button className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900" type="submit">Submit</button>
    </form>
  );
};

export default UserInfoWithUseState;
