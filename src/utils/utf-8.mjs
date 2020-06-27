export const charset = {
  BACKSPACE: 0x8,                // "\b"
  FORM_FEED: 0xc,                // "\f"
  NEWLINE: 0xa,                  // "\n"
  CARRIAGE_RETURN: 0xd,          // "\r"
  TAB: 0x9,                      // "\t"
  SPACE: 0x20,                   // 	
  EXCLAMATION_MARK: 0x21,        // !
  QUOTATION_MARK: 0x22,          // "
  NUMBER_SIGN: 0x23,             // #
  DOLLAR_SIGN: 0x24,             // $
  PERCENT_SIGN: 0x25,            // %
  AMPERSAND: 0x26,               // &
  APOSTROPHE: 0x27,              // '
  LEFT_PARENTHESIS: 0x28,        // (
  RIGHT_PARENTHESIS: 0x29,       // )
  ASTERISK: 0x2a,                // *
  PLUS_SIGN: 0x2b,               // +
  COMMA: 0x2c,                   // ,
  HYPHEN_MINUS: 0x2d,            // -
  FULL_STOP: 0x2e,               // .
  SOLIDUS: 0x2f,                 // /
  DIGIT_ZERO: 0x30,              // 0
  DIGIT_ONE: 0x31,               // 1
  DIGIT_TWO: 0x32,               // 2
  DIGIT_THREE: 0x33,             // 3
  DIGIT_FOUR: 0x34,              // 4
  DIGIT_FIVE: 0x35,              // 5
  DIGIT_SIX: 0x36,               // 6
  DIGIT_SEVEN: 0x37,             // 7
  DIGIT_EIGHT: 0x38,             // 8
  DIGIT_NINE: 0x39,              // 9
  COLON: 0x3a,                   // :
  SEMICOLON: 0x3b,               // ;
  LESS_THAN_SIGN: 0x3c,          // <
  EQUALS_SIGN: 0x3d,             // =
  GREATER_THAN_SIGN: 0x3e,       // >
  QUESTION_MARK: 0x3f,           // ?
  COMMERCIAL_AT: 0x40,           // @
  LATIN_CAPITAL_LETTER_A: 0x41,  // A
  LATIN_CAPITAL_LETTER_B: 0x42,  // B
  LATIN_CAPITAL_LETTER_C: 0x43,  // C
  LATIN_CAPITAL_LETTER_D: 0x44,  // D
  LATIN_CAPITAL_LETTER_E: 0x45,  // E
  LATIN_CAPITAL_LETTER_F: 0x46,  // F
  LATIN_CAPITAL_LETTER_G: 0x47,  // G
  LATIN_CAPITAL_LETTER_H: 0x48,  // H
  LATIN_CAPITAL_LETTER_I: 0x49,  // I
  LATIN_CAPITAL_LETTER_J: 0x4a,  // J
  LATIN_CAPITAL_LETTER_K: 0x4b,  // K
  LATIN_CAPITAL_LETTER_L: 0x4c,  // L
  LATIN_CAPITAL_LETTER_M: 0x4d,  // M
  LATIN_CAPITAL_LETTER_N: 0x4e,  // N
  LATIN_CAPITAL_LETTER_O: 0x4f,  // O
  LATIN_CAPITAL_LETTER_P: 0x50,  // P
  LATIN_CAPITAL_LETTER_Q: 0x51,  // Q
  LATIN_CAPITAL_LETTER_R: 0x52,  // R
  LATIN_CAPITAL_LETTER_S: 0x53,  // S
  LATIN_CAPITAL_LETTER_T: 0x54,  // T
  LATIN_CAPITAL_LETTER_U: 0x55,  // U
  LATIN_CAPITAL_LETTER_V: 0x56,  // V
  LATIN_CAPITAL_LETTER_W: 0x57,  // W
  LATIN_CAPITAL_LETTER_X: 0x58,  // X
  LATIN_CAPITAL_LETTER_Y: 0x59,  // Y
  LATIN_CAPITAL_LETTER_Z: 0x5a,  // Z
  LEFT_SQUARE_BRACKET: 0x5b,     // [
  REVERSE_SOLIDUS: 0x5c,         // \
  RIGHT_SQUARE_BRACKET: 0x5d,    // ]
  CIRCUMFLEX_ACCENT: 0x5e,       // ^
  LOW_LINE: 0x5f,                // _
  GRAVE_ACCENT: 0x60,            // `
  LATIN_SMALL_LETTER_A: 0x61,    // a
  LATIN_SMALL_LETTER_B: 0x62,    // b
  LATIN_SMALL_LETTER_C: 0x63,    // c
  LATIN_SMALL_LETTER_D: 0x64,    // d
  LATIN_SMALL_LETTER_E: 0x65,    // e
  LATIN_SMALL_LETTER_F: 0x66,    // f
  LATIN_SMALL_LETTER_G: 0x67,    // g
  LATIN_SMALL_LETTER_H: 0x68,    // h
  LATIN_SMALL_LETTER_I: 0x69,    // i
  LATIN_SMALL_LETTER_J: 0x6a,    // j
  LATIN_SMALL_LETTER_K: 0x6b,    // k
  LATIN_SMALL_LETTER_L: 0x6c,    // l
  LATIN_SMALL_LETTER_M: 0x6d,    // m
  LATIN_SMALL_LETTER_N: 0x6e,    // n
  LATIN_SMALL_LETTER_O: 0x6f,    // o
  LATIN_SMALL_LETTER_P: 0x70,    // p
  LATIN_SMALL_LETTER_Q: 0x71,    // q
  LATIN_SMALL_LETTER_R: 0x72,    // r
  LATIN_SMALL_LETTER_S: 0x73,    // s
  LATIN_SMALL_LETTER_T: 0x74,    // t
  LATIN_SMALL_LETTER_U: 0x75,    // u
  LATIN_SMALL_LETTER_V: 0x76,    // v
  LATIN_SMALL_LETTER_W: 0x77,    // w
  LATIN_SMALL_LETTER_X: 0x78,    // x
  LATIN_SMALL_LETTER_Y: 0x79,    // y
  LATIN_SMALL_LETTER_Z: 0x7a,    // z
  LEFT_CURLY_BRACKET: 0x7b,      // {
  VERTICAL_LINE: 0x7c,           // |
  RIGHT_CURLY_BRACKET: 0x7d,     // }
  TILDE: 0x7e,                   // ~
};

export const escapedSequences = {
  [charset.QUOTATION_MARK]: charset.QUOTATION_MARK,
  [charset.REVERSE_SOLIDUS]: charset.REVERSE_SOLIDUS,
  [charset.SOLIDUS]: charset.SOLIDUS,
  [charset.LATIN_SMALL_LETTER_B]: charset.BACKSPACE,
  [charset.LATIN_SMALL_LETTER_F]: charset.FORM_FEED,
  [charset.LATIN_SMALL_LETTER_N]: charset.NEWLINE,
  [charset.LATIN_SMALL_LETTER_R]: charset.CARRIAGE_RETURN,
  [charset.LATIN_SMALL_LETTER_T]: charset.TAB,
};