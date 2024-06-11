"use client";

import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/navigation";

interface MovieProps {
  title: string,
  id: string,
  poster_path: string,
}

export default function Movie({title, id, poster_path}: MovieProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/movies/${id}`);
  }
  return (
    <div className={styles.movie}>
      {/* 또 다른 navigation 방식이다. 
          특정 요구사항이 없는 한 Link를 통한 네비게이션을 권장한다.
      */}
      <img src={poster_path} onClick={onClick} />
      <Link href={`/movies/${id}`}>{title}</Link>
    </div>
  );
}
