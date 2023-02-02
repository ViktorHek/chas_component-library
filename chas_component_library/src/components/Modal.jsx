import Card from "./Card";

function Modal({ show, onClose, size }) {
  const images = [
    {
      href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.typkanske.se%2Fsynonym%2Fhej&psig=AOvVaw0nemyZA-kX0YjX271TQvFQ&ust=1675415335547000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLDjnNG-9vwCFQAAAAAdAAAAABAE",
      src: "https://www.typkanske.se/images/typkanske/og/33/hej.png",
      imgAlt: "hej",
    },
    {
      href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.typkanske.se%2Fsynonym%2Ftjo&psig=AOvVaw1YrpxeYrDQf6N2JTpKvrqO&ust=1675415474172000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJDTy5O_9vwCFQAAAAAdAAAAABAE",
      src: "https://www.typkanske.se/images/typkanske/og/99/tjo.png",
      imgAlt: "tjo",
    },

    {
      href: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.typkanske.se%2Fsynonym%2Ftja&psig=AOvVaw2AcYhrdDZvN3oTD8maisLb&ust=1675415605558000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCbqNK_9vwCFQAAAAAdAAAAABAE",
      src: "https://www.typkanske.se/images/typkanske/og/99/tja.png",
      imgAlt: "tja",
    },
  ];

  const displayCards = images.map((el) => {
    return (
      <Card key={el.imgAlt} href={el.href} src={el.src} imgAlt={el.imgAlt} />
    );
  });
  return (
    <div
      className="Modal"
      style={{
        width: size === "big" ? "90%" : "300px",
        display: show ? "flex" : "none",
      }}>
      <div className="modal-header center">
        <h1>Modal</h1>
        <span onClick={onClose}>X</span>
      </div>
      <div className="center" style={{ flexDirection: "row", width: "100%" }}>
        {displayCards && displayCards}
      </div>
      <div className="modal-footer center">nice greatings for everybody</div>
    </div>
  );
}

export default Modal;
