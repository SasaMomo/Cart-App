import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Header = () => {
  return (
    <header className="border-b border-gray-200 hidden sm:block">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1">
            <div className="header_icon_wrapper">
              <BsFacebook />
            </div>
            <div className="header_icon_wrapper">
              <BsTwitter />
            </div>
            <div className="header_icon_wrapper">
              <BsInstagram />
            </div>
            <div className="header_icon_wrapper">
              <BsLinkedin />
            </div>
          </div>
          <div className="text-gray-500 text-[14px]">
            <b>Entrega Grátis</b> para compras acima de R$ 50,00!
          </div>
          <div className="flex gap-4">
            <select
              className="text-gray-500 text-[12px] w-[70px]"
              name="moeda"
              id="moeda"
            >
              <option value="BRL">BRL (R$)</option>
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
            </select>
            <select
              className="text-gray-500 text-[12px] w-[80px]"
              name="idioma"
              id="idioma"
            >
              <option value="Português">Português</option>
              <option value="Inglês">English</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
