<template>
  <BasicLayout>
    <div class="ui grid">
      <div class="ui raised very padded text container segment">
        <h2 class="ui header">Sala de espera</h2>
        <h3 class="ui header sub header">Pongase cómodo...</h3>
        <h4 class="ui horizontal divider header">
          <i class="info icon"></i>
        </h4>
        <p>
          Aqui podrá visualizar el horario estimado de atención para su próximo
          turno. Podrá adelantar, cancelar o confirmar el mismo según sea el
          esado.
        </p>
        <h4 class="ui horizontal divider header">
          <i class="calendar outline icon"></i>
          Su turno
        </h4>
        <table class="ui definition table" v-if="myAppointment">
          <tbody>
            <tr>
              <td class="two wide column">Doctor</td>
              <td>{{ myAppointment.appointment.medicalDoctor }}</td>
            </tr>
            <tr>
              <td>Especialidad</td>
              <td>{{ myAppointment.appointment.specialism }}</td>
            </tr>
            <tr>
              <td>Horario</td>
              <td>{{ myAppointment.appointment.time }}</td>
            </tr>
          </tbody>
        </table>
        <div class="ui mini steps fluid">
          <div class="disabled step">
            <i class="clock icon"></i>
            <div class="content" v-if="prevAppointments">
              <div class="title">{{ prevAppointments[0].startETA }}</div>
              <div class="description">
                {{ prevAppointments[0].status }}
              </div>
            </div>
          </div>
          <div class="step">
            <i class="clock icon"></i>
            <div class="content" v-if="prevAppointments">
              <div class="title">{{ prevAppointments[1].startETA }}</div>
              <div class="description">
                {{ prevAppointments[1].status }}
              </div>
            </div>
          </div>
          <div class="active step">
            <i class="clock outline icon"></i>
            <div class="content" v-if="myAppointment">
              <div class="title">
                Horario estimado
              </div>
              <div class="title">
                {{ myAppointment.appointmentETA.startETA }}
              </div>
              <div class="description">
                {{ myAppointment.appointmentETA.status }}
              </div>
            </div>
          </div>
        </div>
        <div class="ui two column centered grid">
          <div class="four column centered row">
            <div class="column">
              <button class="fluid ui button">One</button>
            </div>
            <div class="column">
              <button class="fluid ui button">Two</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BasicLayout>
</template>

<script>
import { ref, onMounted } from "vue";
import BasicLayout from "../layouts/BasicLayout";
import { getWaitingRoom } from "../api/appointments.js";

export default {
  name: "WaitingRoom",
  components: {
    BasicLayout,
  },
  setup() {
    let prevAppointments = ref(null);
    let myAppointment = ref(null);

    onMounted(async () => {
      const response = await getWaitingRoom();
      prevAppointments.value = response.prevAppointments;
      myAppointment.value = response.userAppointment;
      console.log(myAppointment);
    });
    return {
      prevAppointments,
      myAppointment,
    };
  },
};
</script>

<style lang="scss" scoped>
.ui.grid {
  margin-top: 10px;
}
</style>
