import Link from "next/link";

const Logo =({src, label}) => {
  return (
    <Link href={src}>
      {label}
    </Link>
  );
};

export default Logo;
