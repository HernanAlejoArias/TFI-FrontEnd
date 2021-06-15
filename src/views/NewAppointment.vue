<template>
  <BasicLayout>
    <div class="register-appointment">
      <h2>Nuevo Turno</h2>
      <form class="ui form" @submit.prevent="registerAppointment">
        <div class="field">
          <input
            type="text"
            placeholder="Médico"
            v-model="formData.md"
            :class="{ error: formError.md }"
          />
        </div>
        <div class="field">
          <input
            type="text"
            placeholder="Fecha"
            v-model="formData.date"
            :class="{ error: formError.date }"
          />
        </div>
        <div class="field">
          <input
            type="text"
            placeholder="Hora"
            v-model="formData.time"
            :class="{ error: formError.time }"
          />
        </div>
        <div class="field">
          <label>Día</label>
          <select name="day" class="ui dropdown">
            <option value="">Elija el día</option>
            <option value="Lunes">Lunes</option>
            <option value="Martes">Martes</option>
            <option value="Miércoles">Miércoles</option>
            <option value="Jueves">Jueves</option>
            <option value="Viernes">Viernes</option>
          </select>
        </div>
        <div class="time">
          <label>Horario</label>
          <select class="ui dropdown">
            <option value="">Elija el horario</option>
            <option value="Mañana">Mañana</option>
            <option value="Tarde">Tarde</option>
          </select>
        </div>
        <button
          type="submit"
          class="ui button fluid primary"
          :class="{ loading }"
        >
          Guardar
        </button>
      </form>
    </div>
  </BasicLayout>
</template>

<script>
import BasicLayout from "../layouts/BasicLayout";
import { ref } from "vue";
import * as Yup from "yup";

export default {
  name: "NewAppointment",
  components: {
    BasicLayout,
  },
  setup() {
    let formData = ref({});
    let formError = ref({});
    let loading = false;

    const schemaForm = Yup.object().shape({
      md: Yup.string().required(),
      date: Yup.string().required(),
      time: Yup.string().required(),
    });

    const registerAppointment = async () => {
      formError.value = {};
      try {
        await schemaForm.validate(formData.value, { abortEarly: false });
        console.log(formData);
        try {
          const response = await registerAppointmentApi(formData.value);
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      } catch (error) {
        error.inner.forEach((err) => {
          formError.value[err.path] = err.message;
        });
      }
    };

    return {
      registerAppointment,
      formData,
      formError,
      loading,
    };
  },
};
</script>

<style></style>
