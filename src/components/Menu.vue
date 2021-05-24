<template>
  <div class="ui secondary menu">
    <div class="ui container">
      <div class="left menu">
        <router-link class="item" to="/">
          <img
            class="ui small image"
            src="../assets/logo-kennedy-solo.png"
            alt="Universidad Kennedy"
          />
        </router-link>
        <template v-if="token">
          <router-link class="item" to="/newAppointment"
            >Nuevo Turno</router-link
          >
          <router-link class="item" to="/myAppointments"
            >Mis Turnos</router-link
          >
          <router-link class="item" to="/myData">Mis Datos</router-link>
        </template>
      </div>

      <div class="right menu">
        <router-link class="item" to="/login" v-if="!token">
          Iniciar sesión
        </router-link>
        <template v-if="token">
          <router-link class="ui item waiting-room" to="/waiting-room">
            <i class="hospital outline icon"></i>
          </router-link>
          <span class="ui item logout" @click="logout">
            <i class="sign-out icon"></i>
          </span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { getTokenApi, deleteTokenApi } from "../api/token";
export default {
  name: "Menu",
  setup() {
    const token = getTokenApi();
    const logout = () => {
      deleteTokenApi();
      location.replace("/");
    };

    return {
      token,
      logout,
    };
  },
};
</script>

<style lang="scss" scoped>
.ui.menu.secondary {
  background-color: #16202b;

  .item {
    color: #fff;
    &:hover {
      color: #1fa1f1;
    }
  }
}

.menu.left {
  width: 50%;
  .ui.image {
    width: 50px;
  }
}

.menu.right {
  width: 50%;
  justify-content: flex-end;

  .logout,
  .waiting-room {
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
