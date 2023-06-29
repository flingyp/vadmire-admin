export type ContentTheme = 'ant-design' | 'light' | 'dark' |'wechat'
export type CodeTheme =
'abap' | 'algol' | 'algol_nu' |'arduino' | 'autumn' |
'borland' | 'bw' | 'colorful' | 'dracula' | 'emacs' |
'friendly' | 'fruity' | 'github' | 'igor' | 'lovelace' |
'manni' | 'monokai' | 'monokailight' | 'murphy' | 'native' |
'paraiso-dark' | 'paraiso-light' | 'pastie' | 'perldoc' | 'pygments' |
'rainbow_dash' | 'rrt' | 'solarized-dark' | 'solarized-dark256' | 'solarized-light' |
'swapoff' | 'tango' | 'trac' | 'vim' | 'vs' | 'xcode' | 'ant-design'

export interface VditorProps {
  contentTheme?: ContentTheme
  codeTheme?: CodeTheme
  content: string
}
