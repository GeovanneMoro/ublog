export default function useValidations() {
  const validations = {
    isEmpty(msgErro: string) {
      return function (valor: any) {
        if (!valor.trim()) {
          return msgErro;
        }

        return '';
      };
    },

    isEmail(msgErro: string, required = true) {
      return function (valor: any) {
        const validadorEmail =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if ((required || valor) && !validadorEmail.test(valor)) {
          return msgErro;
        }

        return '';
      };
    },

    isTelefoneOuCelular(msgErro: string, required = true) {
      return function (valor: any) {
        const validadorTelCel =
          /^\s*(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s*$/;
        if ((required || valor) && !validadorTelCel.test(valor)) {
          return msgErro;
        }

        return '';
      };
    },
  };

  return validations;
}
