import { Font } from 'expo';

const loadAllFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));

export const loadFonts = loadAllFonts([]);
