// src/data/lawyerData.js
// import foto from '../assets/abogada.jpg';
import foto from '/abogado.jfif';

export const lawyerData = {
  nombre: 'Lic. Ana Martínez',
  titulo: 'Abogada & Consultora Legal',
  disponible: true,
  foto: foto,
  bio: 'Especialista en derecho corporativo y civil con más de 12 años de experiencia. Comprometida con brindar soluciones legales efectivas y personalizadas.',
  especialidades: [
    'Derecho Civil',
    'Corporativo',
    'Laboral',
    'Familia',
  ],
  contacto: {
    whatsapp: '521234567890', // sin + ni espacios
    telefono: '+521234567890',
    email: 'contacto@anamartinez.com',
  },
  redes: {
    linkedin: 'https://linkedin.com/in/tu-perfil',
    instagram: 'https://instagram.com/tu-perfil',
    facebook: 'https://facebook.com/tu-perfil',
  },
};