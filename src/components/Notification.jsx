import { Wrapper } from "../wrappers/Notification";
class Toast {
  constructor(props) {}
  success = (msg) => {
    console.log(1);
    document
      .querySelector(".notification")
      .classList.add("show-success-notification");
    console.log(msg);

    document.querySelector(".notification p").textContent = msg;
    setTimeout(() => {
      document
        .querySelector(".notification")
        .classList.remove("show-success-notification");
    }, 3000);
  };
}
export const toast = new Toast();
const Notification = () => {
  return (
    <Wrapper className="notification">
      <p className="roboto-slab-regular"></p>
    </Wrapper>
  );
};
export default Notification;
