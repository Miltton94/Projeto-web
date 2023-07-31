import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="flex flex-col items-center justify-center gap-4 border-t border-slate-500 py-8">
      <div className="flex gap-4">
        <a
          href="https://www.facebook.com/milton.ferreira.395"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsFacebook size={24} className="" />
        </a>

        <a
          href="https://www.facebook.com/milton.ferreira.395"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsInstagram size={24} className="" />
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=5543996379257"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsWhatsapp size={24} className="" />
        </a>
      </div>

      <span>&copy; {year} Milton. All rights reserved.</span>
    </footer>
  )
}

export default Footer
