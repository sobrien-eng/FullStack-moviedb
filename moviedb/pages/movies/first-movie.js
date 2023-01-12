import Link from 'next/link';

export default function FirstMovie() {
  return (
    <>
      <h1>First movie</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}