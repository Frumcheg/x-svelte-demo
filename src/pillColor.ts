const lightYellow = "#fff793";
const lightGreen = "#eeffde";
const brown = "#983924";
const gray = "#e6e6e6";
const black = "#000";
const white = "#fff";

const variants = [lightYellow, lightGreen, brown, gray];

export function getColor(index: number): { primary: string; secondary: string } {
  const secondary = (p: string) => p === brown ? white : black

  if (index < variants.length) {
    const primary = variants[index]
    return {
      primary,
      secondary: secondary(primary),
    }
  }
  const primary = variants[index % variants.length]
  return {
    primary,
    secondary: secondary(primary),
  }
}
