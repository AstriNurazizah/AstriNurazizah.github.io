import Input from "./input";
import style from "../styles/header.module.css";
import img from "./img/logo.png";

const Header = ({ search, updateQuery }) => {
  return (
    <header className={style.container}>
      <img src={img} alt="" width={100} height={50}/>
      <Input
        value={search}
        onChange={updateQuery}
        type='search'
        id='search_note'
        name='search_note'
        placeholder='Cari Catatan ...'
      />
    </header>
  );
};

export default Header;
