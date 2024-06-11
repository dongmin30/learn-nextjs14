import styles from "../../styles/home.module.css";
import Movie from "../../components/movie";

export const metadata = {
  title: "Home",
};

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
  // URL을 통해 fetch된 내용을 nextjs에서 캐싱해준다.
  // but 실시간 데이터를 가져오는데에는 변경점이 생길 수 있다.
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          id={movie.id}
          poster_path={movie.poster_path}
        />
      ))}
    </div>
  );
}
