import Card from './components/Card'
import { lawyerData } from './data/lawyerData'
import './App.css';

export default function App() {
  return (
    <>
      <Card data={lawyerData} />
    </>
  );
}