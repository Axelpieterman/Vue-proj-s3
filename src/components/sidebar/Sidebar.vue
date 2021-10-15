<script>
import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
  
      <span v-if="collapsed">
        <img src="https://images.vexels.com/media/users/3/208359/isolated/lists/3b65a957ee38af37625bec764a2927c4-mp5-machine-gun-silhouette.png" alt="" class="littlelogo" @click="toggleSidebar">
      </span>
      <span v-else class="logo"><img src="https://images.vexels.com/media/users/3/208359/isolated/lists/3b65a957ee38af37625bec764a2927c4-mp5-machine-gun-silhouette.png" alt="logo" @click="toggleSidebar"></span>
    

    <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
    <SidebarLink to="/store" icon="fas fa-store">Store</SidebarLink>
    <SidebarLink to="/sign-up" icon="fas fa-user-plus">Sign-up</SidebarLink>
    <SidebarLink to="/login" icon="fas fa-sign-in-alt">Sign-in</SidebarLink>
    <SidebarLink to="/weapon" icon="fas fa-image">Weapons</SidebarLink>

    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #ddc494;
  --sidebar-item-hover: rgb(252, 241, 173);
  --sidebar-item-active: #b49d6b;
}
</style>

<style scoped>
.sidebar {
  color: black;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.sidebar h1 {
  height: 2.5em;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: black;

  transition: 0.2s linear;
}
img{
    max-width: 120px;
   
    
}
.littlelogo{
    bottom: 20;
    max-width: 40px;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>