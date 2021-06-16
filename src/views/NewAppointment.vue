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
            type="date"
            v-model="formData.date"
            :class="{ error: formError.date }"
          />
        </div>
        <div class="field">
          <input
            type="time"
            v-model="formData.time"
            :class="{ error: formError.time }"
          />
        </div>
        <div class="ui divider"></div>
        <h3>Puede adelantarse su turno en el mismo día?</h3>
        <div class="grouped fields">
          <label>Cuanto tiempo de anticipación necesita?</label>
          <div class="field">
            <div class="ui radio checkbox">
              <input
                type="radio"
                name="EarlyDayAppointment"
                checked="checked"
                value="0"
                v-model="formData.EarlyDayAppointment"
              />
              <label>No Adelantar</label>
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input
                type="radio"
                name="EarlyDayAppointment"
                value="10"
                v-model="formData.EarlyDayAppointment"
              />
              <label>10 minutos</label>
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input
                type="radio"
                name="EarlyDayAppointment"
                value="30"
                v-model="formData.EarlyDayAppointment"
              />
              <label>30 minutos</label>
            </div>
          </div>
          <div class="field">
            <div class="ui radio checkbox">
              <input
                type="radio"
                name="EarlyDayAppointment"
                value="60"
                v-model="formData.EarlyDayAppointment"
              />
              <label>1 hora</label>
            </div>
          </div>
        </div>

        <div class="ui divider"></div>
        <h3>Desea adelantar su turno?</h3>
        <p>
          En el caso de presentarse la posibilidad de re-agendar su turno, desea
          que sea considerado?
        </p>
        <div class="ui six column grid">
          <div class="row">
            <div class="column">
              <p>Selecciones los días posibles</p>
            </div>
            <div class="column">
              <div class="ui toggle checkbox">
                <input
                  type="checkbox"
                  name="early_monday"
                  v-model="formData.EarlyMonday"
                />
                <label>Lunes</label>
              </div>
            </div>
            <div class="column">
              <div class="ui toggle checkbox">
                <input
                  type="checkbox"
                  name="early_tuesday"
                  v-model="formData.EarlyTuesday"
                />
                <label>Martes</label>
              </div>
            </div>
            <div class="column">
              <div class="ui toggle checkbox">
                <input
                  type="checkbox"
                  name="early_wednesday"
                  v-model="formData.EarlyWednesday"
                />
                <label>Miércoles</label>
              </div>
            </div>
            <div class="column">
              <div class="ui toggle checkbox">
                <input
                  type="checkbox"
                  name="early_thrusday"
                  v-model="formData.EarlyThrusday"
                />
                <label>Jueves</label>
              </div>
            </div>
            <div class="column">
              <div class="ui toggle checkbox">
                <input
                  type="checkbox"
                  name="early_friday"
                  v-model="formData.EarlyFriday"
                />
                <label>Viernes</label>
              </div>
            </div>
          </div>
        </div>
        <div class="inline fields">
          <label></label>
        </div>
        <div class="ui six column grid">
          <div class="row">
            <div class="column">
              <p>En que momento del día?</p>
            </div>
            <div class="column">
              <div class="ui toggle checkbox">
                <input type="checkbox" name="early_morning" />
                <label>Mañana</label>
              </div>
            </div>
            <div class="column">
              <div class="ui toggle checkbox">
                <input type="checkbox" name="early_afternoon" />
                <label>Tarde</label>
              </div>
            </div>
          </div>
        </div>
        <div class="ui divider"></div>
        <button type="submit" class="ui button primary" :class="{ loading }">
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
