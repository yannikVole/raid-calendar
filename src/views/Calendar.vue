<template>
    <div class="calendar">
        <h1>Calendar</h1>
        <CalendarComponent />
    </div>
</template>

<script>
// @ is an alias to /src
import calendarComponent from "@/components/Calendar.component.vue";
export default {
  name: "Calendar",
  components: {
    calendarComponent
  }
};
</script>
<style scoped lang="scss">
</style>
