import '../styles/CardHeader.css';

export default function CardHeader({ data }) {
  return (
    <div className="card-header">
      <div className="photo-wrapper">
        <img src={data.foto} alt={data.nombre} />
        {data.disponible && <span className="badge" title="Disponible"></span>}
      </div>
    </div>
  );
}