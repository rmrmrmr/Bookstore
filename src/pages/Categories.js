import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';
import Navbar from '../components/Navbar';

export default function Categories() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);

  return (
    <div className="h-screen flex flex-wrap justify-center">
      <Navbar />
      <div className="flex flex-col w-full items-center">
        <input
          type="button"
          value="Check Status"
          className="bg-blue-500 text-white px-10 py-2 text-sm w-1/6 h-9"
          onClick={() => dispatch(checkStatus('Under construction'))}
        />
        <div className="text-lg py-10">{categories}</div>
      </div>
    </div>
  );
}
