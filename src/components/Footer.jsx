function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {anoAtual} - Projeto desenvolvido em React</p>
    </footer>
  );
}

export default Footer;
