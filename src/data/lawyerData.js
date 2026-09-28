// src/data/lawyerData.js
// import foto from '../assets/abogada.jpg';
import foto from '/abogado.jfif';

export const lawyerData = {
  nombre: 'Lic. Luis Martínez',
  titulo: 'Abogado & Consultor Legal',
  disponible: true,
  foto: foto,
  bio: 'Especialista en derecho corporativo y civil con más de 12 años de experiencia. Comprometido con brindar soluciones legales efectivas y personalizadas.',
  especialidades: [
    'Derecho Civil',
    'Corporativo',
    'Laboral',
    'Familia',
  ],
  contacto: {
    whatsapp: '521234567890', // sin + ni espacios
    telefono: '+521234567890',
    email: 'contacto@luismartinez.com',
  },
  redes: {
    linkedin: 'https://linkedin.com/in/tu-perfil',
    instagram: 'https://instagram.com/tu-perfil',
    facebook: 'https://facebook.com/tu-perfil',
  },
};