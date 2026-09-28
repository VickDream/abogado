import CardHeader from './CardHeader';
import CardBody from './CardBody';
import '../styles/Card.css';

export default function Card({ data }) {
  return (
    <div className="card">
      <CardHeader data={data} />
      <CardBody data={data} />
    </div>
  );
}