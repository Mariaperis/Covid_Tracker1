import "./floatingActions.css";

import { Headphones, ShoppingCart } from "lucide-react";

function FloatingActions() {
  return (
    <div className="floating-actions">

      <button className="floating-btn support-btn">

        <Headphones size={22} />

        <span>SUPPORT</span>

      </button>

      <button className="floating-btn buy-btn">

        <ShoppingCart width={22} height={22}/>

        <span>BUY NOW</span>

      </button>

    </div>
  );
}

export default FloatingActions;