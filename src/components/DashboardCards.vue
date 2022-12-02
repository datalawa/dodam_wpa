<template>
  <div class="dashboard-top-card card background-shadow">
    <div class="dashboard-section-icons">
      <span class="material-icons-round dashboard-icon-right">{{ icon }}</span>
      <span class="material-icons-round dashboard-icon-left">more_vert</span>
    </div>
    <div class="dashboard-section-text-middle">{{ middleText }}</div>
    <div class="dashboard-section-texts">
      <div class="dashboard-section-text-bottom">{{ bottomText }}</div>
      <div v-if="endText !== undefined" class="dashboard-section-text-end">{{ endText }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardCards",
  props: {
    icon: {
      type: String,
      default: "warning"
    },
    middleText: {
      type: String,
      default: "error"
    },
    bottomText: {
      type: String,
      default: "error"
    },
    endText: {
      type: String,
      default: undefined
    },
  }
}
</script>