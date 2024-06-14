import Link from "next/link";

const Home = () => {
  return (
    <div className="m-6">
      <Link href="/posts">ポスト</Link>
    </div>
  );
};

export default Home;
