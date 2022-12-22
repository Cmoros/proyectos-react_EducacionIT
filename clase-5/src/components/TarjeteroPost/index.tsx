import TarjetaPost from "components/TarjetaPost";
import { useEffect, useState } from "react";
import axios from "axios";

// const json = [
//   {
//     userId: 1,
//     id: 1,
//     title:
//       "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//   },
//   {
//     userId: 1,
//     id: 1,
//     title:
//       "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//   },
//   {
//     userId: 1,
//     id: 1,
//     title:
//       "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//   },
//   {
//     userId: 1,
//     id: 1,
//     title:
//       "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
//   },
// ];

const TarjeteroPost = () => {
  const [reload, setReload] = useState(false);
  const [json, setJson] = useState<
    {
      userId: number;
      id: number;
      title: string;
      body: string;
    }[]
  >([]);

  useEffect(() => {
    if (reload) return;
    axios({
      url: "https://jsonplaceholder.typicode.com/posts",
    }).then((res) => {
      setJson(res.data.slice(0, 10));
      setReload(true);
    });
  }, [reload]);

  return (
    <div className="w-3/4">
      <button onClick={() => setReload(false)}>Recargar</button>
      {!reload ? (
        <p>Cargando</p>
      ) : (
        json.map((post, i) => (
          <TarjetaPost post={post} key={`${post.id}-${i}`} />
        ))
      )}
    </div>
  );
};

export default TarjeteroPost;
