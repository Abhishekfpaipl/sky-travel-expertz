<template>
  <!-- <DashboardNav v-if="!hide" /> -->
  <DashboardNav v-if="!hide" />
  <router-view />
  <FooterBar v-if="!hidden" />
</template>
<script>
// import DashboardNav from "@/components/DashboardNav.vue";
import DashboardNav from "@/components/TopNav.vue";
import FooterBar from "@/components/FooterBar.vue";
export default {
  name: "App",
  components: {
    DashboardNav,
    FooterBar
  },
  computed: {
    hide() {
      const hiddenPages = [
        'LoginPage', 'RegistrationPage', 'EmailVerificationPage', 'ForgotPasswordPage', 'ResetPasswordPage',
        'BasicDetails', 'ConnectDetails', 'OverviewDetails', 'WorktimeDetails', 'BusinessTypeDetails', 'BrandingDetails',
        'ProductList', 'CreateProduct', 'CollectionList', 'RewardsDetails', 'DashboardPage',  'ReviewListPage','SupportersDetails','FamesetDetails','CategoryDetails','BankDetails','SocialDetails'
      ]
      return hiddenPages.includes(this.$route.name)
    },
    hidden() {
      const hiddenPages = [
        'LoginPage', 'RegistrationPage', 'EmailVerificationPage', 'ForgotPasswordPage', 'ResetPasswordPage',
        'BasicDetails', 'ConnectDetails', 'OverviewDetails', 'WorktimeDetails', 'BusinessTypeDetails', 'BrandingDetails',
        'ProductList', 'CreateProduct', 'CollectionList', 'RewardsDetails', 'DashboardPage',  'SupportersDetails','FamesetDetails','CategoryDetails','BankDetails','SocialDetails'
      ]
      return hiddenPages.includes(this.$route.name)
    }
  }
}
</script>
<style lang="scss">
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
 
:root {
  --bg-primary: #014c75; 
  --bg-forth: rgba(255, 206, 86, 0.2);
  --brand-color: #ffa907 !important;
  --bg-light:#FFF5DD !important;
}

.text-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text-ellipsis2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text-ellipsis5 {
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

}

.text-ellipsis7 {
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.smaller {
  font-size: 12px;
}

#scroll::-webkit-scrollbar {
  display: none;
}

.cutout {
  overflow: hidden;
  text-align: center;
}

.cutout>span {
  position: relative;
  display: inline-block;
}

.cutout>span:before,
.cutout>span:after {
  content: "";
  position: absolute;
  top: 50%;
  width: 900px;
  /* Adjust width as needed */
  margin: 0 20px;
}

.cutout>span:before {
  right: 100%;
  border-bottom: 2px solid;
  border-image: linear-gradient(to left, black 0, transparent 10%);
  border-image-slice: 1;
}

.cutout>span:after {
  left: 100%;
  border-bottom: 2px solid;
  border-image: linear-gradient(to right, black 0, transparent 10%);
  border-image-slice: 1;
}
</style>
