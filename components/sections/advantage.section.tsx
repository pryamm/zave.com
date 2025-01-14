export default function AdvantageSection() {
  return (
    <section className='py-16 px-4'>
      <div className='container mx-auto'>
        <h2 className='text-4xl font-bold text-blue-600 text-center mb-12'>
          Keunggulan Kami
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {[
            {
              title: "Pengalaman Beragam",
              desc: "Proyek komersial, rumah tinggal, dan ruang multifungsi.",
            },
            {
              title: "One Stop Solution",
              desc: "Desain interior, eksterior, visualisasi 3D, hingga pembangunan.",
            },
            {
              title: "Renovasi Efisien",
              desc: "Renovasi cepat dengan penyelesaian tepat waktu.",
            },
            {
              title: "Workshop Terintegrasi",
              desc: "Material berkualitas tinggi untuk hasil maksimal.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className='p-6 bg-gray-50 rounded-lg shadow-md hover:bg-blue-50 transition-colors duration-300'
            >
              <h3 className='text-xl font-bold text-blue-600 mb-2'>
                {feature.title}
              </h3>
              <p className='text-gray-700'>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
