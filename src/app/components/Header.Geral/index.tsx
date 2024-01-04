import Link from "next/link";

const Header = () => {
  return (
    <main style={{ padding: "2rem 6rem 0 6rem" }}>
      <div>
        <h1>
          <Link href="/">LO</Link>
        </h1>
      </div>
    </main>
  );
};

export default Header;
