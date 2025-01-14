import {
  FaEnvelope,
  FaWhatsapp,
  FaPhoneAlt,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='bg-blue-600 text-white py-8'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
          {/* Kontak Kami */}
          <div className='space-y-6'>
            <h2 className='text-2xl font-bold text-white border-b-2 border-yellow-400 pb-2 mb-4'>
              Hubungi Kami
            </h2>
            <ul>
              <li className='flex items-center mb-4'>
                <FaEnvelope className='text-yellow-400 mr-4' />
                <a
                  href='mailto:zave.engineering@gmail.com'
                  className='text-yellow-400 hover:text-yellow-500'
                >
                  zave.engineering@gmail.com
                </a>
              </li>
              <li className='flex items-center mb-4'>
                <FaWhatsapp className='text-yellow-400 mr-4' />
                <a
                  href='https://wa.me/6282130115667'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-yellow-400 hover:text-yellow-500'
                >
                  +62 821 3011 5667
                </a>
              </li>
              <li className='flex items-center mb-4'>
                <FaPhoneAlt className='text-yellow-400 mr-4' />
                <a
                  href='tel:+6282130115667'
                  className='text-yellow-400 hover:text-yellow-500'
                >
                  +62 821 3011 5667
                </a>
              </li>
              <li className='flex items-center mb-4'>
                <FaInstagram className='text-yellow-400 mr-4' />
                <a
                  href='https://instagram.com/zave.engineering'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-yellow-400 hover:text-yellow-500'
                >
                  @zave.engineering
                </a>
              </li>
            </ul>
          </div>

          {/* Alamat (Head Office) */}
          <div className='space-y-6'>
            <h2 className='text-2xl font-bold text-white border-b-2 border-yellow-400 pb-2 mb-4'>
              Head Office
            </h2>
            <p>
              Komplek Nusa Hijau No.GV 35, Citeureup, Kec. Cimahi Utara, Kota
              Cimahi, Jawa Barat 40512
            </p>
            <a
              href='https://maps.app.goo.gl/19YzEKSnwGJoUWDb6'
              target='_blank'
              rel='noopener noreferrer'
              className='text-yellow-400 hover:text-yellow-500'
            >
              Lihat di Google Maps
            </a>
          </div>

          {/* Peta Google Maps */}
          <div className='space-y-6'>
            <div className='aspect-w-16 aspect-h-9'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.188296376851!2d107.54688557505492!3d-6.868026593130602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e59cfffff523%3A0x48e1417ef573c735!2sCV.%20ZAVE%20ENGINEERING!5e0!3m2!1sid!2sid!4v1736844556388!5m2!1sid!2sid'
                width='600'
                height='450'
                style={{ border: "0" }}
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Lokasi Kantor'
                className='w-full h-full border-0'
              ></iframe>
            </div>
          </div>
        </div>

        <div className='mt-8 text-center'>
          <p>
            &copy; {new Date().getFullYear()} ZAVE ENGINEERING. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
