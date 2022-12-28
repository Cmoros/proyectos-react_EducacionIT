interface IProps {
  lista: {
    nombre: string;
  }[];
}

const ListaDeNombres = ({ lista }: IProps) => {
  return (
    <div>
      <h3>Nombres</h3>
      <ul className="list-disc">
        {lista.map((item, i) => (
          <li key={`${i}-${item.nombre}`}> {item.nombre} </li>
        ))}
      </ul>
    </div>
  );
};
export default ListaDeNombres;
