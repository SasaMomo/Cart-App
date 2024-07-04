import Link from "next/link";

export default function Navbar() {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-sec">
          <Link className="navbar__link relative" href="#">
            Home
          </Link>
          <Link className="navbar__link relative" href="#">
            Feminino
          </Link>
          <Link className="navbar__link relative" href="#">
            Masculino
          </Link>
          <Link className="navbar__link relative" href="#">
            Infantil
          </Link>
          <Link className="navbar__link relative" href="#">
            Jewelry
          </Link>
          <Link className="navbar__link relative" href="#">
            Acessórios
          </Link>
          <Link className="navbar__link relative" href="#">
            Promos
          </Link>
          <Link className="navbar__link relative" href="#">
            Makeup
          </Link>
        </div>
      </div>
    </div>
  );
}
