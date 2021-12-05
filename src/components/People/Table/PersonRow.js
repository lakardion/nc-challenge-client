const PersonRow = ({ person: { firstName, lastName, address, ssn } }) => {
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{address}</td>
      <td>{ssn}</td>
    </tr>
  );
};
export default PersonRow;
