import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-navbar text-white pr-20 pl-20 flex justify-between pt-5 pb-5">
      <Link href="/">Home</Link>
      <Link href="/quotes">Shrek Quotes</Link>
      <Link href="/donkey">Donkey</Link>
      <Link href="/gallery">Gallery</Link>
    </div>
  );
};

export default Navbar;
