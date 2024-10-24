import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          step1: "Step 1: Personal Information",
          step2: "Step 2: Address",
          step3: "Step 3: Age Information",
          firstName: "First Name",
          lastName: "Last Name",
          passportNumber: "Passport Number",
          phoneNumber: "Phone Number",
          title: "Title",
          nationality: "Nationality",
          email: "Email",
          dateOfBirth: "Date of Birth",
          password: "Password",
          areYouResident: "Are you a resident of any other country?",
          yes: "Yes",
          no: "No",
          selectCountry: "Select Country",
          next: "Next",
          previous: "Previous",
          submit: "Submit",
        },
      },
      es: {
        translation: {
          step1: "Paso 1: Información personal",
          step2: "Paso 2: Dirección",
          step3: "Paso 3: Información de edad",
          firstName: "Nombre",
          lastName: "Apellido",
          passportNumber: "Número de pasaporte",
          phoneNumber: "Número de teléfono",
          title: "Título",
          nationality: "Nacionalidad",
          email: "Correo electrónico",
          dateOfBirth: "Fecha de nacimiento",
          password: "Contraseña",
          areYouResident: "¿Es residente de algún otro país?",
          yes: "Sí",
          no: "No",
          selectCountry: "Seleccionar país",
          next: "Siguiente",
          previous: "Anterior",
          submit: "Enviar",
        },
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
