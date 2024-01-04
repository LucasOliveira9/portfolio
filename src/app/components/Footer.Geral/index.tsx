import Link from "next/link";

const Footer = () => {
  return (
    <main
      style={{
        padding: "0 6rem 0 6rem",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <nav>
          <ul
            style={{
              display: "flex",
              gap: "1em",
              listStyle: "none",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/projects"}>Projects</Link>
            </li>
            <li>
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
};

export default Footer;
