import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
const resources = {
  it: {
    translation: {
      lang: 'b-&+(2',
      mainTitle: '`4!!(3=s 4+3',
      adver:
        '^#5 -"$#=.-+(-$=%(+$=$-"18/3(.-= -#=#$"18/3(.-K=p$"41$= -8=%(+$=38/$= -#=, (-3 (-=8.41=/1(5 "8>',
      choose: "`'..2$=%(+$>",
      quote:
        "q'$=6'.+$=(2=-$5$1=3'$=24,=.%=3'$=/ 132=J=(3=(2=&1$ 3$1=.1=+$22$1I=#$/$-#(-&=.-='.6=6$++=3'$=(-#(5(#4 +2=6.1*=3.&$3'$1"
    }
  },
  en: {
    translation: {
      lang: 'English',
      mainTitle: 'Cubbit Vult!',
      adver:
        'Advnced online file encryption and decryption.Secure any file type and maintain your privcy!',
      choose: 'Choose file!',
      quote:
        'The whole is never the sum of the parts - it is greater or lesser, depending on how well the individuls work together'
    }
  }
}

i18next.use(initReactI18next).init({
  resources,
  lng: 'it',
  interpolation: { escapeValue: false }
})

export { i18next }
