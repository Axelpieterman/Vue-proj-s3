<script>
import SidebarLink from './SidebarLink'
import SidebarButton from './SidebarButton'
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
  on: false,
  props: {},
  inject: ['auth'],
  components: { SidebarLink, SidebarButton },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  },
  methods: {
    handleEvent(){
      this.on = !this.on;
    }
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
    <SidebarLink to="/weaponstore" icon="fas fa-skull-crossbones">Weapons</SidebarLink>
    <SidebarLink to="/gearstore" icon="fas fa-vest">Gear</SidebarLink>
    <SidebarLink to="/attachmentstore" icon="fas fa-plus-circle">Attachments</SidebarLink>
    <SidebarLink to="/sign-up" icon="fas fa-user-plus">Sign-up</SidebarLink>
    <SidebarButton v-if="!auth.authenticated" v-on:click="auth.loginWithPopup()" icon="fas fa-sign-in-alt">Sign-in</SidebarButton>
    <SidebarButton v-if="auth.authenticated" v-on:click="auth.logout()" icon="fas fa-sign-in-alt">Logout</SidebarButton>

    <SidebarLink v-if="auth.authenticated" to="/addarticle" icon="fas fa-plus">Add article</SidebarLink>

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
  --sidebar-bg-color: #404040;
  --sidebar-item-hover: #667c3e;
  --sidebar-item-active: #667c3e;
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
svg{
  margin: 0px 0px 5px;
}
button{
  display: flex;
  align-items: center;
  background: transparent;
  

  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;

  margin: 0.1em 0;
  padding: 0.4em;
  border-radius: 0.25em;
  height: 1.5em;
  border: none;

  color: #ffffff;
  text-decoration: none;
}
.littlelogo{
    bottom: 20;
    max-width: 40px;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
.dropdown-menu{
  margin: 5px 0px 0px;
}
</style>