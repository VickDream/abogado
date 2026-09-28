import Specialties from './Specialties';
import Actions from './Actions';
import Socials from './Socials';
import '../styles/CardBody.css';

export default function CardBody({ data }) {
  return (
    <div className="card-body">
      <h1 className="name">{data.nombre}</h1>
      <p className="title">{data.titulo}</p>
      <div className="divider"></div>
      <p className="bio">{data.bio}</p>

      <Specialties items={data.especialidades} />
      <Actions contacto={data.contacto} />
      <Socials redes={data.redes} />
    </div>
  );
}