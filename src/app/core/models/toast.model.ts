import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { AlertColor } from "../enum";

export interface Toast {
  color: AlertColor;
  message: string;
  icon: IconDefinition;
}
