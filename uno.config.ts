// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss"

export default defineConfig({
  shortcuts: [
    // ...
  ],
  theme: {
    colors: {
      primary: "#1CD760",
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Roboto",
        mono: ["Fira Code", "Fira Mono:400,700"],
      },
    }),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
})
