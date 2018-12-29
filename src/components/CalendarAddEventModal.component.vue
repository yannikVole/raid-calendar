<template>
    <div class="calendar-add-event-modal">
    <div class="modal-backdrop" v-if="display" @click="closeModal">
        <div class="modal-wrapper">
            <h2>Add a new Event</h2>
            <div class="modal-form">
                <form action="">
                    <div class="form-group">
                        <label>Event Name</label>
                        <input type="text" placeholder="Event name">
                    </div>
                    <div class="form-group">
                        <label>Event Time</label>
                        <input type="time" placeholder="Start time">
                    </div>
                    <div class="form-group">
                        <label>Event Date</label>
                        <input type="date" placeholder="Event date">
                    </div>
                    <input type="submit" value="Submit" class="btn btn-primary">
                </form>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: "CalendarAddEventModal",
  props: ["display", "selectedDate", "onModalCloseHandler"],
  data() {
    return {};
  },
  methods: {
    closeModal() {
      this.onModalCloseHandler();
    }
  },
  computed: {}
};
</script>

<style scoped lang="scss">
.modal-backdrop {
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  .modal-wrapper {
    background-color: #fff;
    width: 60%;
    padding: 20px;
    margin: 100px auto;
    -webkit-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 1px 1px 5px 0px rgba(0, 0, 0, 0.75);
    h2 {
      text-align: center;
    }
  }
  .form-group {
    width: 50%;
    margin: 15px auto 0;
    line-height: 1;
    label {
      margin: 0 10px 15px 0;
    }
    input {
      height: 25px;
      width: 150px;
    }
  }
}
.btn {
  border-radius: 3px;
  border: none;
  font-weight: bold;
  margin: 20px auto 5px;
  display: block;
  height: 25px;
  width: 150px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
}
</style>
