import { geist } from "./google/geist";
import { krylon } from "./local/krylon";
import { neutralSans } from "./local/neutral-sans";

const fonts = [geist, krylon, neutralSans];
const fontsVariable = fonts.map((font) => font.variable).join(" ");

export { fontsVariable, geist };
