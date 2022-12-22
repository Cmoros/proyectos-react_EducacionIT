interface IProps {
  post: {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
}

const sizes = "h-48 w-80"

const TarjetaPost = ({ post }: IProps) => {
  return (
    <div className=" rounded bg-blue-300 p-4">
      <h2 className="text-center text-lg font-semibold">Post</h2>
      <dl>
        <dt className="bg-gray-300 pl-2">User id</dt>
        <dd className="bg-gray-200 pl-4">{post.userId}</dd>
        <dt className="bg-gray-300 pl-2">Id</dt>
        <dd className="bg-gray-200 pl-4">{post.id}</dd>
        <dt className="bg-gray-300 pl-2">Title</dt>
        <dd className="bg-gray-200 pl-4">{post.title}</dd>
        <dt className="bg-gray-300 pl-2">Body</dt>
        <dd className="bg-gray-200 pl-4">{post.body}</dd>
      </dl>
    </div>
  );
};

export default TarjetaPost;
