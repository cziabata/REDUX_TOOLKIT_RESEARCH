import { useAppDispatch, useAppSelector } from "./hooks/redux";
import {userSlice} from "./store/reducers/userSlice";

function App() {
  const {count} = useAppSelector(state => state.userReducer);
  const {increment} = userSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div>
      {count}
      <button onClick={()=>dispatch(increment(10))}>Increase</button>
    </div>
  );
}

export default App;
