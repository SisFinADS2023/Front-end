import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav>
        <li>Menu</li>
        <li>Sobre</li>
        <li>Quem Somos</li>
      </nav>
      <Link href="/login">Entrar</Link>
      <Link href="/cadastro">Cadastrar-se</Link>
      
    </div>
  )
}
