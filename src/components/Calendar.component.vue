<template>
    <div class="calendar-component">
        <h2>Calendar-Component</h2>
        <div class="month-selection">
            <button v-for="(month) in months" :key="month.name" @click="toggleMonthVisibility($event,month.index)" :class="{monthIsActive:month.visible}">{{month.name}}</button>
        </div>
        <div class="flex-row">
        <table v-for="(month) in monthsByVisibility" :key="month.name">
            <thead>
            <tr>
                <th colspan="7">{{month.name}}</th>
            </tr>
            <tr>
                <th>Sun</th>
                <th>Mon</th>
                <th>Tue</th>
                <th>Wed</th>
                <th>Thu</th>
                <th>Fri</th>
                <th>Sat</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(week,weekIndex) in createMonth(2018, month.index)" :key="weekIndex">
                <td v-for="(day, dayIndex) in week" :key="dayIndex" @click="openModal(day,month)">
                    <ul class="event-anchor" v-if="month.eventData">
                        <li v-for="(event,eventIndex) in filterByDay(month.eventData, day)" :key="eventIndex">
                            {{event.name}}
                        </li>
                    </ul>
                    <span class="day-number">{{day}}</span>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
        <CalendarAddEventModal :selected-date="dateSelected" :display="displayModal" :on-modal-close-handler="onModalClose"> </CalendarAddEventModal>
    </div>
</template>

<script>
import CalendarAddEventModal from "@/components/CalendarAddEventModal.component.vue";
export default {
  name: "CalendarComponent",
  data() {
    return {
      displayAll: true,
      activeMonth: {
        name: null,
        days: null,
        index: null
      },
      months: [],
      eventData: null,
      displayModal: false,
      dateSelected: null,
      keys: { 37: 1, 38: 1, 39: 1, 40: 1 }
    };
  },
  computed: {
    monthsByVisibility() {
      const result = [];
      this.months.forEach(month => {
        if (month.visible) {
          result.push(month);
        }
      });
      return result;
    }
  },
  components: {
    CalendarAddEventModal
  },
  methods: {
    onModalClose() {
      this.displayModal = false;
      if (window.removeEventListener)
        window.removeEventListener(
          "DOMMouseScroll",
          this.preventDefault,
          false
        );
      window.onmousewheel = document.onmousewheel = null;
      window.onwheel = null;
      window.ontouchmove = null;
      document.onkeydown = null;
    },
    openModal(day, month) {
      this.displayModal = true;
      this.dateSelected = { day, month };
      if (window.addEventListener)
        // older FF
        window.addEventListener("DOMMouseScroll", this.preventDefault, false);
      window.onwheel = this.preventDefault; // modern standard
      window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
      window.ontouchmove = this.preventDefault; // mobile
      document.onkeydown = this.preventDefaultForScrollKeys;
    },
    preventDefault(e) {
      e = e || window.event;
      if (e.preventDefault) e.preventDefault();
      e.returnValue = false;
    },
    preventDefaultForScrollKeys(e) {
      if (this.keys[e.keyCode]) {
        this.preventDefault(e);
        return false;
      }
    },
    createMonth(year, month) {
      let day = 1;
      this.months[1].days =
        (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? 29 : 28;
      let startDay = new Date(year, month, day).getDay();
      let haveDays = true;
      let monthCalendar = [];
      let i, j;
      i = 0;
      while (haveDays) {
        monthCalendar[i] = [];
        for (j = 0; j < 7; j++) {
          if (i === 0) {
            if (j === startDay) {
              monthCalendar[i][j] = day++;
              startDay++;
            }
          } else if (day <= this.months[month].days) {
            monthCalendar[i][j] = day++;
          } else {
            monthCalendar[i][j] = "";
            haveDays = false;
          }
          if (day > this.months[month].days) {
            haveDays = false;
          }
        }
        i++;
      }
      return monthCalendar;
    },
    toggleMonthVisibility(e, index) {
      this.months[index].visible = !this.months[index].visible;
    },
    filterByDay(eventData, day) {
      const result = [];
      if (eventData != undefined) {
        eventData.forEach(event => {
          if (event.date.day === day) {
            result.push(event);
          }
        });
      }
      return result;
    }
  },
  watch: {},
  beforeMount() {
    this.months = this.$store.getters.getMonthData;
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.flex-row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  table {
    border-collapse: collapse;
    border: 1px solid #000;
    margin: 5px;
    thead {
      tr {
        th {
          text-align: center;
          background-color: #c3c3c3;
          padding: 5px;
        }
      }
    }
    tbody {
      tr {
        td {
          position: relative;
          width: 150px;
          height: 100px;
          text-align: center;
          padding: 5px;
          &:hover {
            background-color: rgba(110, 202, 106, 0.17);
            cursor: pointer;
          }
          .day-number {
            position: absolute;
            left: 2px;
            top: 2px;
            pointer-events: none;
          }
          .event-anchor {
            list-style: none;
            font-size: 12px;
            pointer-events: none;
            width: 100%;
            padding: 0;
            margin: 0;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            li {
              min-height: 15px;
            }
          }
        }
      }
    }
  }
}
.month-selection {
  button {
    background-color: red;
    color: #fff;
    border: 2px solid #50c8ff;
    margin: 10px 2.5px 10px;
    padding: 5px 10px;
    transition: all 0.3s;
    border-radius: 3px;
    &:hover {
      color: #fff;
      background-color: #50c8ff;
    }
    &.monthIsActive {
      background-color: green;
    }
  }
}
</style>
