import Table from "react-bootstrap/Table";

const ContactInfo = () => {
  return (
    <div className="contactInfo">
      <h2 className="heading-2 text-capitalize">contact info</h2>
      <p className="text-secondary">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, quis.
      </p>

      <Table borderless={true} responsive>
        <tbody>
          <ContactAddress
            title="address"
            ans="sorab(tq),shimoga(dist),karnataka,India"
          />
          <ContactAddress title="phone" ans="8618174796" />
          <ContactAddress title="email" ans="sumukhakb210@gmail.com" />
          <ContactAddress title="fax" ans="+(12) 345 67890" />
        </tbody>
      </Table>
    </div>
  );
};

export default ContactInfo;

interface IAddress {
  title: string;
  ans: string;
}

const ContactAddress: React.FC<IAddress> = ({ title, ans }) => {
  return (
    <tr className="">
      <td className="text-secondary text-capitalize">{title}</td>
      <td className=" ml-4 font-weight-bold">{ans}</td>
    </tr>
  );
};
