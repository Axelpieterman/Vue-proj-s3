<script>
import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'

export default {
  on: false,
  props: {},
  components: { SidebarLink },
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
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-shop" viewBox="0 0 16 16">
  <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
</svg>      Store
  </button>
  <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
    <li><a class="dropdown-item active" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
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