import { toggleDropdown } from "./toggle";
import { enterKey } from "./enterKey";
import { accessApi } from "./accessApi";

const App = () => {
  accessApi();
  toggleDropdown();
  enterKey();
};

App();
