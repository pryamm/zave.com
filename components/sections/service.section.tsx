import {
  FaDesktop,
  FaHammer,
  FaRegBuilding,
  FaCog,
  FaCouch,
  FaTools,
} from "react-icons/fa";

export default function ServiceSection() {
  const services = [
    {
      title: "Desain",
      icon: <FaDesktop className='w-1/2 h-1/2 text-white' />,
      desc: "Desain arsitektur, interior, eksterior, dan rendering 3D.",
      bgImage: "https://picsum.photos/600/400", // Example image
    },
    {
      title: "Konstruksi",
      icon: <FaHammer className='w-1/2 h-1/2 text-white' />,
      desc: "Pembangunan rumah tinggal, gedung, dan infrastruktur.",
      bgImage: "https://picsum.photos/600/400", // Example image
    },
    {
      title: "Renovasi",
      icon: <FaRegBuilding className='w-1/2 h-1/2 text-white' />,
      desc: "Renovasi rumah, kantor, ruang usaha, hingga fasilitas publik.",
      bgImage: "https://picsum.photos/600/400", // Example image
    },
    {
      title: "MEP",
      icon: <FaCog className='w-1/2 h-1/2 text-white' />,
      desc: "Instalasi kelistrikan, HVAC, dan saluran drainase.",
      bgImage: "https://picsum.photos/600/400", // Example image
    },
    {
      title: "Interior",
      icon: <FaCouch className='w-1/2 h-1/2 text-white' />,
      desc: "Dekorasi ruangan sesuai anggaran dengan hasil estetis.",
      bgImage: "https://picsum.photos/600/400", // Example image
    },
    {
      title: "Custom Furniture",
      icon: <FaTools className='w-1/2 h-1/2 text-white' />,
      desc: "Kitchen set, furniture custom sesuai kebutuhan.",
      bgImage: "https://picsum.photos/600/400", // Example image
    },
  ];

  return (
    <section className='py-16 px-4'>
      <div className='container mx-auto'>
        <h2 className='text-4xl font-bold text-blue-600 text-center mb-12'>
          Layanan Kami
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <div
              key={index}
              className='group relative flex flex-col items-center justify-center p-6 transform hover:scale-105 transition-transform duration-300'
              style={{ height: "300px", width: "300px" }} // Square size
            >
              {/* Icon container with sunburst effect */}
              <div className='flex justify-center items-center bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 p-4 rounded-full shadow-lg z-10'>
                <div className='w-20 h-20 flex justify-center items-center bg-gold-500 rounded-full'>
                  {service.icon}
                </div>
              </div>

              {/* Card background image on hover with darkness effect */}
              <div
                className='absolute inset-0 bg-cover bg-center rounded-xl transition-opacity duration-500 opacity-0 group-hover:opacity-100'
                style={{
                  backgroundImage: `url(${service.bgImage})`,
                }}
              >
                {/* Dark overlay on hover */}
                <div className='absolute inset-0 bg-black opacity-40 transition-opacity duration-500 group-hover:opacity-60 rounded-xl'></div>
              </div>

              {/* Text content */}
              <div className='text-center mt-4 relative z-10 group-hover:text-white'>
                <h3 className='text-4xl font-extrabold mb-2'>
                  {service.title}
                </h3>
                <p className='text-gray-700 group-hover:text-white'>
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
