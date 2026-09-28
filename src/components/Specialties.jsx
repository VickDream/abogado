import '../styles/Specialties.css';

export default function Specialties({ items }) {
  return (
    <div className="specialties">
      {items.map((item) => (
        <span key={item} className="tag">{item}</span>
      ))}
    </div>
  );
}