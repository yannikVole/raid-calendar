import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentYear: new Date().getFullYear(),
    monthData: [
      {
        name: "January",
        days: 31,
        visible: true,
        index: 0
      },
      {
        name: "February",
        days: 28,
        visible: true,
        index: 1
      },
      {
        name: "March",
        days: 31,
        visible: true,
        index: 2
      },
      {
        name: "April",
        days: 30,
        visible: true,
        index: 3
      },
      {
        name: "May",
        days: 31,
        visible: true,
        index: 4
      },
      {
        name: "June",
        days: 30,
        visible: true,
        index: 5
      },
      {
        name: "July",
        days: 31,
        visible: true,
        index: 6
      },
      {
        name: "August",
        days: 31,
        visible: true,
        index: 7
      },
      {
        name: "September",
        days: 30,
        visible: true,
        index: 8
      },
      {
        name: "October",
        days: 31,
        visible: true,
        index: 9
      },
      {
        name: "November",
        days: 30,
        visible: true,
        index: 10
      },
      {
        name: "December",
        days: 31,
        visible: true,
        index: 11,
        eventData: [
          {
            name: "Test Event 1",
            date: {
              year: 2018,
              month: 11,
              day: 28
            },
            time: {
              start: "20:15",
              durationInMinutes: 150
            }
          },
          {
            name: "Test Event 2",
            date: {
              year: 2018,
              month: 11,
              day: 29
            },
            time: {
              start: "20:15",
              durationInMinutes: 150
            }
          },
          {
            name: "Test Event 3",
            date: {
              year: 2018,
              month: 11,
              day: 29
            },
            time: {
              start: "20:15",
              durationInMinutes: 150
            }
          }
        ]
      }
    ]
  },
  getters: {
    getMonthData: state => {
      return state.monthData;
    }
  },
  mutations: {},
  actions: {}
});
