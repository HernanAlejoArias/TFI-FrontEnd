<template>
  <BasicLayout>
    <div class="ui three column grid">
      <div class="column" v-for="app in myAppointments" :key="app.id">
        <div class="ui fluid card">
          <div class="content">
            <div class="header">Especialidad: {{ app.specialism }}</div>
          </div>
          <div class="content">
            <h4 class="ui sub header">Informacion de su turno</h4>
            <div class="ui small feed">
              <table class="ui definition table">
                <tbody>
                  <tr>
                    <td class="two wide column">Doctor</td>
                    <td>{{ app.medicalDoctor }}</td>
                  </tr>
                  <tr>
                    <td>Día</td>
                    <td>{{ app.date }}</td>
                  </tr>
                  <tr>
                    <td>Hora</td>
                    <td>{{ app.time }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="content">
            Quiere ser candidato para Adelantar su turno?
            <span v-if="app.early">SI</span><span v-if="!app.early">NO</span>
          </div>
          <div class="extra content">
            <button
              class="ui negative basic button right floated"
              @click="cancelAppointment(app.id)"
            >
              Cancelar Turno
            </button>
          </div>
        </div>
      </div>
    </div>
  </BasicLayout>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import BasicLayout from "../layouts/BasicLayout";
import {
  getMyAppointments,
  cancelAppointmentApi,
} from "../api/appointments.js";

export default {
  name: "MyAppointments",
  components: {
    BasicLayout,
  },
  setup() {
    let myAppointments = ref(null);
    const router = useRouter();

    const cancelAppointment = (idApp) => {
      try {
        cancelAppointmentApi(idApp);
        router.push("/my-appointments");
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(async () => {
      const response = await getMyAppointments();
      myAppointments.value = response;
      console.log(response);
    });
    return {
      myAppointments,
      cancelAppointment,
    };
  },
};
</script>

<style></style>
