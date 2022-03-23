import { MenuItem } from "../../models";

export interface MenuState {
  menuItems: MenuItem[];
}

export const initialState: MenuState = {
  menuItems: [],
};
