import { toggleDropdown } from "./toggle";
import { enterKey } from "./enterKey";
import { accessApi } from "./accessApi";

import "@styles/main.scss";

const App = () => {
  accessApi();
  toggleDropdown();
  enterKey();
};

App();
