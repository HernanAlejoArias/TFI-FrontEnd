<template>
  <BasicLayout>
    <div class="ui raised very padded text container segment">
      <h2 class="ui header">Sala de espera</h2>
      <h3 class="ui header sub header">Pongase cómodo...</h3>
      <h4 class="ui horizontal divider header">
        <i class="info icon"></i>
        Pongase cómodo...
      </h4>
      <p>
        Aqui podrá visualizar el horario estimado de atención para su próximo
        turno. Podrá adelantar, cancelar o confirmar el mismo según sea el
        esado.
      </p>
      <h4 class="ui horizontal divider header">
        <i class="calendar outline icon"></i>
        Specifications
      </h4>
      <table class="ui definition table">
        <tbody>
          <tr>
            <td class="two wide column">Doctor</td>
            <td>1" x 2"</td>
          </tr>
          <tr>
            <td>Especialidad</td>
            <td>6 ounces</td>
          </tr>
          <tr>
            <td>Horario</td>
            <td>Yellowish</td>
          </tr>
        </tbody>
      </table>
      <div class="ui mini steps fluid">
        <div class="disabled step">
          <i class="clock icon"></i>
          <div class="content">
            <div class="title">Turno previo</div>
            <div class="description">Finalizado</div>
          </div>
        </div>
        <div class="step">
          <i class="clock icon"></i>
          <div class="content">
            <div class="title">Turno previo</div>
            <div class="description">Iniciado</div>
          </div>
        </div>
        <div class="active step">
          <i class="clock outline icon"></i>
          <div class="content">
            <div class="title">Horario estimado</div>
            <div class="description">16:50</div>
          </div>
        </div>
      </div>
      <div class="ui two column centered grid">
        <div class="four column centered row">
          <div class="column">
            <button class="fluid ui button">One</button>
          </div>
          <div class="column"><button class="fluid ui button">Two</button></div>
        </div>
      </div>
    </div>
  </BasicLayout>
</template>

<script>
import BasicLayout from "../layouts/BasicLayout";
export default {
  name: "WaitingRoom",
  components: {
    BasicLayout,
  },
};
</script>

<style lang="scss" scoped></style>
