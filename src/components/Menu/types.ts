import { RoutePath } from "types/routes";

export interface NavItem { // defines how it behave, it has to have an icon and a path
  icon: JSX.Element; // this is bringing an icon with the jsx element witch is a javascript with html
  path: RoutePath; // the route
}
