import { useState } from "react";
import Alert from "./Alerts";

function Badges({ color, size, icon }) {
  const [showAlert, setShowAlert] = useState(false);
  let img =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAADJCAMAAADSHrQyAAAAh1BMVEX////iGVDhAELhAEjhAETiFU7hAEbhAEHyorXvj6biE03wlaryn7PypLbwk6jvjaT51N3+9vj98PPmRGv50tv1t8X3wc786u/3ytT74+jxm6/shZnrgJb2vMnzrL3qbYjkJlvlNWTsepL62+LqZIP63+XnUHXjH1bte5bkMV3pW3/scpDgADqG74DcAAADjElEQVR4nO3b6VbiMACG4TZp2rHisNhFcUAUBBy8/+ubhmUEadoGGrL0e35nzuE1SROW8TwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAb8PndNx/+fPS72X5sMn4fNLbjZ88NxlvrNH0dRaRkHIhid7eJ9U5o3TzGQX78UE026SjG73Stg02jFDmf4spmb18CMfP16vT8YwS/31+w1fclvkiOAnZ54TxOi8d/7GhZeNp+Cr+a5lp2Kf0LGRfv3oo+QdjVlK+Rdn9zV/+NeaPoaCE15PFz22cL4OK8cHyWUvFRTI/FpZsp3J2uo4TX7BIDuNXT5pKpKUVk7gT08HR+Cyo/lPx8Zm2GilpVJfOd/13fEYajA+smPmkQfpxfJN0Hm/BYZeLntdn8cl2fLP0Ytn75l/zltWPraN4yuOz2mfDAV3oTqszjRqmFDMZJ17WcJVwXxPdcdWGFef6efxqHEsMZ77uumr9sHkL3/MS6b4f9HTnVRlJLGF5Zk/8g9S0SwtS3YEV3uouaNeJl7oDxeZNz7cLsbj8/a8JpoHadj8w95hbKJ53n651Jwp9qnzKc/Gj7kSR3FfdzmamXuoHap/yvN039ROcRPV2Lxb9oP5laPGk9mbDUWPbVR9xRXuiO1IgUT/vxq75gfL9bu6z7gZn3MrUM67Ldxvvr+oDnm50Jwo9KH8vY+4beNUPO0YN/k72U/FnF+Zud88bK/7Maqo7sEKudMMzauwJx61V7vjwTndepVHzr2WksdDoafe8e6KsPTJ5t28p+5iaGvwB9d6Hoq9mTP58+r9Uyaq35IcXPQXxjBi/2Xfaf96xoOw3eUZqO96i9LbjrUpvN54Rq9I973d78eSX7hhZd23dbiPr0ov4Vmae2TfrXBvxlqa3Em/jgt+5ds9bO+vcdTNvdfp1R53l6ddcciy7zZW5NN6B9EvjnUi/LN6R9EvirXv7Iib7tLf+CX9M8pJj722ujFR8ZPT/EZAnccMjjqVLxLs261zDZe9ierOZZ+4t+J36eKcOt1N15zwLnE2vu+E5c5EtVxXv9Kxz4njHZ50T7fkOpIviHX7CHys96lw913/qn9/w3LzNlTmb+e6kFzNPOpv+Y9l3K/145p19+yJ22PMdTD+c885fZMvx+I6m8/jOphfxX51N9zwrfiMLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhvgHBe8uaFXNrEIAAAAASUVORK5CYII=";
  let id = "alert_button_love";
  let width = "40px";
  if (size === "big") {
    width = "60px";
  }

  if (icon === "like") {
    id = "alert_button_like";
    img =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8UFBQAAAAMDAyIiIg2Nja6urpoaGju7u4QEBDz8/MKCgr29vYFBQWdnZ2AgIDf39/V1dXBwcGQkJCtra1vb29MTExXV1e0tLQtLS3n5+d5eXlEREQ/Pz8kJCRfX1+hoaHMzMwaGho6OjooKCjR0dGNjY0DjS+EAAAFD0lEQVR4nO2d2XbiMAxAa4UCJixlL0uBQun/f+KwD6R2gEhBso/uyzxMOegeJ94l3t4URVEURVEURVEURVEURVEURVEURVEURVGiZVptVzqd/uC7yR1JWfThzKZd5w6mFAZgTqQAwyl3OCVQvRjuAFhxx0PP97WhsbDkDoicjxvDXTOOuCOiZpoxNDDmDomYRtbQwC93TLT8NTTwzR0UKQ2wWcP0nTsoUhyGBgbcUVHiMkwW3FFR4jI00OMOixCnYSumEcPRl+4bMaKVhsfwkzsuOupuwyF3XHRk56VHrOGOi45vp6GBeFaKVY9hPOPFwGPY5g6MjL7HMJ6uZug2jGjMH6VOwySe9cUkcRrahDswKuquaenhRYxl3uYe8PeGDe7QiPAMFhEN+RWv4Qd3aER8ubvSeAybqaejicaw63tIozFc+Q0j6WnGLa9hJKOFb7yPZsT3LH/N/pgtDsOO33DNHRsN/oc0krXF1tuEsawP/Q+pgRp3cCT4H1IDHe7gKPBssx0NV9zRUeAf7iPZTfQufg+GW+7wCJjlGkYwafPu0OyxwB0eAd7V/Z50zh0entwmNDDjjg9Pzmhvoji2mOY2YQyDRS23CSNY4efMuY+G3AGi8ZxWnEm/uAPE4jk0/N+EFe4IkeTO1w6GoV9s2/g2ui+GzrVTs9ls7Nj98+qAnyV3NnNS7B7+slnv9j4H/U5tPJpvJj+LtbG7QWa9mGzmo+WsP6h2GxJte/cFd/PSYaU2+rnkYrRaaZLYC0mStk7/sx7NBl1upVvujPUXRYA0eeAv7UF13BZ0CDDJWfcWZa+5kJJyM37gGS1EAlCT0JD5E24kADP2jufeUI92NMz3/P2HaVQkvDdTyxfcd8KMC6+yH9GzIlufWmoncwXbgcCdNS+lInL5XH+I7HZnff4yQeSJQPsdHqI1unnht+vXCRpMlmbjC7wXYG7ZzaOuNgTbkL+mpyXdFDccPdMS0D99qv7Ux/Agzo/zjsP+cu62V1DCXDsPxC7P8rm2OO5FPPkhAhDDxftzb9NxP+l1o8Tle4tvmIdiWHzNH4YhJj8zDEPMZmsghohJWxCGqIl3GIaYzZoQDHEJUwEYWtwljgAMkWc68g2x2bXyDRPk0ap8Q+zlafmGqPV9GIbIWgUhGNo0dkPcdaogDFF5DEEYom6MBWKIuNcYhiHmQlUYhnZdfNQPxLBVfHkRiGH0bZgiakuGYXg5L4nV0Ma/14ZowiAMcRVeAzAEXCqKeMMUm7Yo3NDCHJvxJtvQQhXpJ92QIpNIuCHBZWjhhgQXL4UbEqR/yzakKMMg25Aid1i6If5FlG6IvwAt3RCzqgjDEN+ZqmH2G19tiM/LlG64it4Qn2kh3RCfaCHbELNPGoYhRcaTaMN0ghcUbWhJimUKNmzRpKyJNUxgQ5MgK9UQfqjSKoUaJhR9jGhDwsRYqYZ02c1qmP3mVxnS1cWQakhXVEqqIZmgUEPK36GTaUhZn0+oIWFRKaGGhDVbRBoSztmEGpIWkSxkWHKmM22hj0KG202p5QZoy2LfrSSX+fLTTxd/Lh4q71UIZK5aFs8viPn4v6ppp2U5EpcU8v9Yg4vrHKRGBUp5HclLSD7VL96OxNMaffEIW0Jt+iWAfYgE/vTi3Tltl2OhlBKZvaV9qD7NYuaYafR+7n/wCSoSq5r3qhS0K51faeUgFUVRFEVRFEVRFEVRFEVRFEVRFEVRFEVRHPwD8Opit7p1eroAAAAASUVORK5CYII=";
  }

  function handleLike() {
    console.log("handleLike");
    setTimeout(closeAlert, 2000);
  }
  function handleLove() {
    console.log("handleLove");
  }

  function handleDismiss() {
    console.log("handle dismiss");
  }
  function closeAlert() {
    console.log("fgfgfggfgfgf");
  }
  return (
    <div className="Badges" style={{ backgrondColor: color, width: width }}>
      {showAlert && (
        <Alert color={"green"} icon={"like"} onDismiss={handleDismiss} />
      )}
      <div className="icon-container">
        <img src={img} alt="icon" />
      </div>

      {icon === "like" ? (
        <span onClick={handleLike}>like</span>
      ) : (
        <span onClick={handleLove}>love</span>
      )}
    </div>
  );
}

export default Badges;
