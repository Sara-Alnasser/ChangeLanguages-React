import i18n from 'i18next'
import languageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).use(languageDetector).init(
{
    resources:{
        en:{
            translation:{
                Welcome:"Hi",
                do:"What do you want to do?"
            }
        },
        ar:{
            translation:{
                Welcome:"مرحبا",
                do:"ماذا تريد أن تفعل؟"
            }
        },
            gr:{
                translation:{
                    Welcome:"γεια",
                    do:"Τι θέλετε να κάνετε?"
                }
            },
            sp:{
                translation:{
                    Welcome:"Hola",
                    do:"¿Qué quieres hacer?"
                }
            }
        }
    }
)
export default i18n