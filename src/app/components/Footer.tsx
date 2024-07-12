export default function Footer() {
  return (
    <footer className=" bg-pri mt-4">
      <div className="flex gap-2 justify-around px-10 py-2 container font-bold">
        <p>Baixe Nosso APP</p>
        <p>Anuncie</p>
        <p>Entre no Clube</p>
        <p>Blog</p>
        <a href="#" className="text-blue-400 underline underline-offset-2">
          Voltar ao Topo
        </a>
      </div>
      <div className="h-12 lg:h-auto">{""}</div>
    </footer>
  );
}
