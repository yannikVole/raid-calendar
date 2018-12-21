<template>
    <div class="calendar-component">
        <h2>Calendar-Component</h2>
        <div class="flex-row">
        <table v-for="n in 12" :key="n">
            <thead>
            <tr>
                <th colspan="7">{{months[n-1].name}}</th>
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
            <tr v-for="(week,index) in createCalendar(2018,n-1)" :key="index">
                <td v-for="(day, dayIndex) in week" :key="dayIndex" @click="createEvent">
                    <ul class="event-anchor">

                    </ul>
                    <span class="day-number">{{day}}</span>
                </td>
            </tr>
            </tbody>
        </table>
        </div>
    </div>
</template>

<script>
export default {
  name: "CalendarComponent",
  data() {
    return {
      months: [
        {
          name: "January",
          days: 31
        },
        {
          name: "February",
          days: 28
        },
        {
          name: "March",
          days: 31
        },
        {
          name: "April",
          days: 30
        },
        {
          name: "May",
          days: 31
        },
        {
          name: "June",
          days: 30
        },
        {
          name: "July",
          days: 31
        },
        {
          name: "August",
          days: 31
        },
        {
          name: "September",
          days: 30
        },
        {
          name: "October",
          days: 31
        },
        {
          name: "November",
          days: 30
        },
        {
          name: "December",
          days: 31
        }
      ]
    };
  },
  computed: {},
  components: {},
  methods: {
    createCalendar(year, month) {
      let day = 1;
      this.months[1].days =
        (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? 29 : 28;
      let startDay = new Date(year, month, day).getDay();
      let haveDays = true;
      let calendar = [];
      let i, j;
      i = 0;
      while (haveDays) {
        calendar[i] = [];
        for (j = 0; j < 7; j++) {
          if (i === 0) {
            if (j === startDay) {
              calendar[i][j] = day++;
              startDay++;
            }
          } else if (day <= this.months[month].days) {
            calendar[i][j] = day++;
          } else {
            calendar[i][j] = "";
            haveDays = false;
          }
          if (day > this.months[month].days) {
            haveDays = false;
          }
        }
        i++;
      }
      return calendar;
    },

    createEvent(e) {
      let anchor = e.target.querySelector(".event-anchor");
      let node = document.createElement("li");
      node.innerHTML = "This is a test event!";
      node.style.backgroundColor = `rgba(${Math.random() *
        255},${Math.random() * 255},${Math.random() * 255})`;
      anchor.append(node);
    }
  }
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
          width: 100px;
          height: 100px;
          text-align: center;
          padding: 5px;
          &:hover {
            background-color: rgba(202, 51, 47, 0.56);
            cursor: pointer;
          }
          .day-number {
            position: absolute;
            left: 2px;
            top: 2px;
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
</style>
