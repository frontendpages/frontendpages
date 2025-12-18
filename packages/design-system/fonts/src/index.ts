import { geist } from "./google/geist";
import { krylon } from "./local/krylon";

const fonts = [geist, krylon];
const fontsVariable = fonts.map((font) => font.variable).join(" ");

export { fontsVariable, geist };
