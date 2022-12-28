interface IProps {
  lista: {
    apellido: string;
  }[];
}
const ListaDeApellidos = ({ lista }: IProps) => {
  return (
    <div>
      <h3>Apellidos</h3>
      <ul className="list-disc">
        {lista.map((item, i) => (
          <li key={`${i}-${item.apellido}`}> {item.apellido} </li>
        ))}
      </ul>
    </div>
  );
};
export default ListaDeApellidos;
