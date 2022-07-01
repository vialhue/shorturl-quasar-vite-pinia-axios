import { boot } from "quasar/wrappers";
import axios from "axios";

// Tenga cuidado al usar SSR para la contaminación de estado de solicitud cruzada
// debido a la creación de una instancia de Singleton aquí;
// Si algún cliente cambia esta instancia (global), podría ser un
// buena idea mover la creación de esta instancia dentro del
// "export default () => {}" a continuación (que se ejecuta individualmente
// para cada cliente)
const api = axios.create({ baseURL: "https://api.example.com" });

export default boot(({ app }) => {
  // para usar dentro de archivos Vue (API de opciones) a través de this.$axios y this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ esto le permitirá usar this.$axios (para el formulario API de opciones de Vue)
  // por lo que no necesariamente tendrá que importar axios en cada archivo vue

  app.config.globalProperties.$api = api;
  // ^ ^ ^ esto le permitirá usar this.$api (para el formulario API de opciones de Vue)
  // para que pueda realizar fácilmente solicitudes contra la API de su aplicación
});

export { api };
