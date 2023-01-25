import Navbar from '../components/Navbar';
import List from '../components/List';
import Form from '../components/AddBook';

export default function Book() {
  return (
    <div className="h-screen">
      <Navbar />
      <List />
      <Form />
    </div>
  );
}
