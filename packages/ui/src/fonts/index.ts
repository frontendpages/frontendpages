import { geist } from "./google/geist";
import { neutralSans } from "./local/neutral-sans";

const fonts = [geist, neutralSans];
const fontsVariable = fonts.map((font) => font.variable).join(" ");

export { fontsVariable, geist, neutralSans };
