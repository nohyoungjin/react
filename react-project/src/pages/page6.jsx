import Script from 'next/script'
import Layout from "components/Layout/Layout"

import { useState } from 'react'

function MyMenu() {
  const [menuClicked, setMenuClicked] = useState(false);

  const handleMenuClick = () => {
    setMenuClicked(true);
    console.log('Menu clicked!');
  };

  return (
    <>
    <Layout>
    <div>
      <button onClick={handleMenuClick}>Click me</button>
      {menuClicked && <p>Menu clicked!</p>}
    </div>
    </Layout>
    </>
  );
}

export default MyMenu