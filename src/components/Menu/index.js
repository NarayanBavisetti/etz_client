import "./menu.css";
import Item from "./Item/index";

const Menu = () => {
  return (
    <>
      <main className="menu-container">
        <div className="info">
          <h1 className="name">Cad M Cad B</h1>
          <div className="location">Gurudwara Road, Durg</div>
        </div>
        <div className="menu">
          <div className="category">
            <h2 className="title">Wafflez(3)</h2>
            <div className="item-list">
              <Item name="Dark Chocolate Waffle" price="149" />
              <Item name="Milk Chocolate Waffle" price="149" />
            </div>
          </div>
          <div className="category">
            <h2 className="title">Pizza(3)</h2>
            <div className="item-list">
              <Item name="Farm House Pizza" price="149" />
              <Item name="Margherita" price="149" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Menu;
