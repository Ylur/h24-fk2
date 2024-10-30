const Footer = () => {
  return (
    <div className="bg-footer text-white pt-5 pb-5 text-center text-sm">
      <p>© 2024 Shrek Fan App. All Rights Reserved.</p>
      <p>&quot;This app smells like onions!&quot;</p>
      <nav>
        <a
          href="https://www.imdb.com/title/tt0126029/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shrek on IMDb
        </a>{" "}
        |
        <a
          href="https://www.dreamworks.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          DreamWorks
        </a>
      </nav>
    </div>
  );
};

export default Footer;
